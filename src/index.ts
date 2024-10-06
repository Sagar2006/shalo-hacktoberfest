#!/usr/bin/env node
import figlet from "figlet";
import { Command } from "commander";
import fs from "fs";
import path from "path";
import { spawn, execSync } from 'child_process';
// Remove the import for getAppDependencies as it's causing an error
// import { getAppDependencies } from "./readDependencies";

const program = new Command();

console.log(figlet.textSync("shalo"));

program
    .command('clone <source>')
    .description('Clone a repository')
    .action(cloneRepo);

    program
    .command('checkout')
    .description('Checkout a specific app')
    .option('-a, --apps <app-name>', 'App Name for checkout')
    .option('-e, --exclude <app-name>', 'App Name to exclude from checkout')
    .option('-t, --team <config-file>', 'Name of the Team as in nxgit.yaml')
    .option('-f, --folder-only', 'Only checkout the folder, do not compute dependencies')  // Added flag
    .action(checkout);

program
    .command('add <appName>')
    .description('Add a folder to the monorepo')
    .option('-f, --folder-only', 'Only add the folder, do not compute dependencies')  // Added flag
    .action(addApp);

program
    .command('clean')
    .description('Clean the repository')
    .action(disableSparseCheckout);

program.parse(process.argv);

async function disableSparseCheckout() {
    executeCommand('git sparse-checkout disable');
    const dirPath = path.join(__dirname, '/.git/index/sparse-checkout');
    try {
        fs.rmSync(dirPath, { recursive: true, force: true });
        console.log('Directory deleted successfully');
    } catch (err) {
        console.error('Error deleting directory:', err);
    }
    console.log('Removed NXGIT controlled checkout. Now you can use git!!');
}

async function addApp(appName: string, options: { folderOnly?: boolean }) {
    if (options.folderOnly) {
        console.log(`Adding folder only for ${appName}`);
        executeCommand(`git add ${appName}`);
        console.log(`Added folder: ${appName}`);
    } else {
        console.log(`Adding ${appName} and its dependencies`);
        executeCommand(`git add ${appName}`);
        const appDependencies = findAppDependencies({ apps: appName });
        if (appDependencies.length > 0) {
            appDependencies.forEach((folder: string) => {
                executeCommand(`git add ${folder}`);
            });
            console.log(`Added dependencies for ${appName}:`, appDependencies);
        } else {
            console.log(`No additional dependencies found for ${appName}`);
        }
    }
}

async function cloneRepo(source: string) {
    executeCommand(`git clone --filter=blob:none ${source}`);
    console.log(`Cloned repository: ${source}`);
}

function findAppDependencies(options: any): string[] {
    const appNames = options.apps !== '.' ? `${options.apps}` : '';
    const appNameArray = options.apps !== '' && options.apps?.includes(',') ? appNames.split(',') : [options.apps];
    const dependentAppNames: string[] = [];
    const excludedAppNames = options.exclude !== '' ? `${options.exclude}` : '';
    const excludedApps = options.exclude !== '' && options.exclude?.includes(',') ? excludedAppNames.split(',') : [options.exclude];

    if (options?.apps?.length > 0) {
        for (const appName of appNameArray ?? []) {
            const sharedComponentsArray = findAppDependencies(appName);
            const filteredAppsArray = sharedComponentsArray?.filter((app: string) =>
                !excludedApps.some(substring => app.includes(substring))
            );
            if (filteredAppsArray) {
                for (const app of filteredAppsArray) {
                    dependentAppNames.push(app);
                }
                console.log(`Dependencies for ${appName}:`, filteredAppsArray);
            }
        }
    } else {
        console.error("No apps specified, are you passing the app name with -a or --apps?");
    }
    return dependentAppNames;
}

function initAndSetSparseCheckoutForApp(options: any) {
    const appFolderNames: string[] = findAppDependencies(options);
    console.log('appFolderNames', appFolderNames);
    appFolderNames.forEach(folder => {
        executeCommand(`git add ${folder}`);
    });
}

async function checkout(options: any) {
    console.log('Called with options %o', options);

    if (options.folderOnly) {
        const appName = options.apps;
        if (appName) {
            console.log(`Adding folder ${appName} only (no dependencies)`);
            executeCommand(`git sparse-checkout init --cone`);
            executeCommand(`git sparse-checkout set ${appName}`);
        } else {
            console.error('No app specified for checkout with --folder-only option.');
        }
    } else {
        const isCommandAvailable = checkCommandAvailability('nx');
        if (isCommandAvailable) {
            initAndSetSparseCheckoutForApp(options);
        } else {
            console.error("nx command unavailable. Please install nx");
        }
    }
}

function checkCommandAvailability(command: string) {
    try {
        const stdout = execSync(`which ${command}`, { encoding: 'utf8' });
        console.log(`Command found: ${stdout.trim()}`);
        return true;
    } catch (error) {
        console.error(`Command not found: ${command}`);
        return false;
    }
}

function executeCommand(command: string) {
    try {
        const stdout = execSync(command, { encoding: 'utf8' });
        console.log(`Command execution details: ${stdout.trim()}`);
        return true;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Command execution failed: ${error.message}`);
        } else {
            console.error('Command execution failed with an unknown error');
        }
        return false;
    }
}
