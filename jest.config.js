// module.exports = {
//   collectCoverageFrom: [
//     '**/*.{js,jsx}',
//     '!**/node_modules/**',
//   ],
//   coverageDirectory: 'coverage',
//   moduleNameMapper: {
//     /* Handle CSS imports (with CSS modules)
//     https://jestjs.io/docs/webpack#mocking-css-modules */
//     '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

//     /* Handle image imports
//     https://jestjs.io/docs/webpack#handling-static-assets */
//     '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
//       '<rootDir>/__mocks__/file-mock.js',
//   },
//   testPathIgnorePatterns: ['<rootDir>/node_modules/'],
//   transformIgnorePatterns: [
//     '/node_modules/',
//     '^.+\\.module\\.(css|sass|scss)$',
//   ],
//   transform: {
//     "^.+\\.js$": "babel-jest"
//   },
//   restoreMocks: true,
//   preset: "babel-jest",
//   testEnvironment: "node"
// }

const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components/(.*)$': '<rootDir>/components/$1',

    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
