"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const minimist = __importStar(require("minimist"));
const NetlifyClient = __importStar(require("netlify"));
const path_1 = require("path");
const token = process.env.NETLIFY_AUTH_TOKEN;
const argv = minimist(process.argv.slice(2));
const netlifyClient = new NetlifyClient(token);
const root = (0, path_1.join)(__dirname, '../..');
const outDir = (0, path_1.join)(root, argv.outputPath);
if (!(0, fs_1.existsSync)(outDir)) {
    throw new Error(`${outDir} does not exist`);
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sites = yield netlifyClient.listSites();
        const site = sites.find((s) => argv.siteName === s.name);
        if (!site) {
            throw Error(`Could not find site ${argv.siteName}`);
        }
        console.log(`Deploying ${argv.siteName} to Netlify...`);
        const deployResult = yield netlifyClient.deploy(site.id, outDir);
        console.log(`\n🚀 New version of ${argv.siteName} is running at ${deployResult.deploy.ssl_url}!\n`);
    }
    catch (e) {
        console.error('Authentication Failure: Invalid Token');
    }
}))();
//# sourceMappingURL=deploy.js.map