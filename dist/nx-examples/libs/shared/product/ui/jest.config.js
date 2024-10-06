"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
exports.default = {
    transform: {
        '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
    coverageDirectory: '../../../../coverage/libs/shared/product/ui',
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
    globals: {},
    displayName: 'shared-product-ui',
    preset: '../../../../jest.preset.js',
};
//# sourceMappingURL=jest.config.js.map