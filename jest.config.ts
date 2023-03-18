/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: [
        'ts',
        'mjs',
        'cjs',
        'jsx',
        'js',
        'tsx',
        'json',
        'node',
    ],
    verbose: true,
    moduleDirectories: ['findPairGame'],
    displayName: {
        name: 'findPairGame',
        color: 'greenBright',
    },
}
// import type { Config } from '@jest/types'
// export default async (): Promise<Config.InitialOptions> => {
//     return {
//         preset: 'ts-jest',
//         displayName: {
//             name: 'findPairGame',
//             color: 'greenBright',
//         },
//         verbose: true,
//         setupFiles: ['dotenv/config', 'jridgewell/trace-mapping'],
//         testMatch: ['**/**/*.test.ts'],
//         testEnvironment: 'node',
//         detectOpenHandles: true,
//         collectCoverage: true,
//         transform: { '^.+\\.tsx?$': 'ts-jest' },
//         globalTeardown: '<rootDir>/src/tests/jest-globals-teardown.ts',
//         forceExit: true,
//         moduleDirectories: ['src'],
//         // moduleNameMapper: {
//         //     '@jridgewell/trace-mapping':
//         //         '@cspotcode/source-map-support/node_modules/@jridgewell/trace-mapping',
//         // },
//         moduleFileExtensions: [
//             'ts',
//             'mjs',
//             'cjs',
//             'jsx',
//             'js',
//             'tsx',
//             'json',
//             'node',
//         ],
//     }
// }
