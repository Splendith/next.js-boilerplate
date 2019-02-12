module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/test/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/test/__mocks__/fileMock.js',
    '\\.(css|scss|less)$': '<rootDir>/src/test/__mocks__/styleMock.js',
  },
};
