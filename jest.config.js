module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  transform: {
    '.ts': 'ts-jest',
  },
  modulePaths: [
    '<rootDir>',
  ],
  moduleFileExtensions: [ 'js', 'ts' ],
}

