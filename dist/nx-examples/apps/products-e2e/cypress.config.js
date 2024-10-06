"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cypress_1 = require("cypress");
const cypress_preset_1 = require("@nx/cypress/plugins/cypress-preset");
exports.default = (0, cypress_1.defineConfig)({
    e2e: Object.assign(Object.assign({}, (0, cypress_preset_1.nxE2EPreset)(__filename, {
        webServerCommands: {
            default: 'nx serve products',
        },
        ciWebServerCommand: 'nx run products:serve',
        webServerConfig: {
            timeout: 45000,
        },
    })), { baseUrl: 'http://localhost:4200', fileServerFolder: '.', fixturesFolder: './src/fixtures', video: true, videosFolder: '../../dist/cypress/apps/products-e2e/videos', screenshotsFolder: '../../dist/cypress/apps/products-e2e/screenshots', chromeWebSecurity: false, specPattern: 'src/e2e/**/*.cy.{js,jsx,ts,tsx}', supportFile: false, testIsolation: false }),
});
//# sourceMappingURL=cypress.config.js.map