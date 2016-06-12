import lint from 'mocha-eslint';

const eslintPaths = [
  '../src/js',
];

// Specify style of output
const options = {};

// Only display warnings if a test is failing
options.alwaysWarn = false; // Defaults to true, always show warnings

// Increase the timeout of the test if linting takes to long
options.timeout = 5000; // Defaults to the global mocha timeout option

// Run the tests
// lint(eslintPaths, options);
