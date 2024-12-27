import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

module.exports = {
  // Specify the test environment (jsdom for front-end, node for backend)
  testEnvironment: 'jest-fixed-jsdom',
  // testEnvironment:["node",'jsdom','jest-fixed-jsdom'],
  // testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  // Directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of file extensions that Jest will use to find test files
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],

  // Pattern to find test files
  testMatch: [
    '**/tests/**/*.test.js',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],

  // Transform files with babel before running tests (optional)
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },

  // Coverage settings: collects coverage from specific files
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.js' 
  ],

  // Set up Enzyme, React Testing Library, or other test frameworks before each test
  setupFilesAfterEnv: ['<rootDir>/jestSetup.js'],
  setupFiles: ['<rootDir>/jestSetup.js'],

  // Use mocks or modules for testing if needed
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },

  // Watch for changes in your tests and re-run them
  watchPathIgnorePatterns: ['/node_modules/'],
  
  // Additional options (optional)
  verbose: true, // Display detailed test results
  silent: false, // Set to true to suppress console logs in tests
};
