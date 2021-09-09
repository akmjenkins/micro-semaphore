module.exports = {
  transform: { '^.+\\.ts?$': 'ts-jest' },
  collectCoverageFrom: ['index.js'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 90,
    },
  },
};
