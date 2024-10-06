"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
exports.default = {
    transform: {
        '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
    coverageDirectory: '../../coverage/apps/cart',
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
    globals: {},
    displayName: 'cart',
    preset: '../../jest.preset.js',
};
//# sourceMappingURL=jest.config.js.map