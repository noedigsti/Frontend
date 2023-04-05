module.exports = {
  testEnvironment: 'jsdom',
  rootDir: '../',
  testMatch: [
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    '<rootDir>/test/**/*.{spec,test}.{js,jsx,ts,tsx}',
    '<rootDir>/__tests__/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['./test/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // Mock css modules
    '@redux/(.*)': '<rootDir>/src/redux/$1', // Point to specific module folder
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/(?!@foo)'],
};
