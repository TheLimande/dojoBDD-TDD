module.exports = {
    verbose: true,
    rootDir: ".",
    "transform": {
        ".*": "<rootDir>/node_modules/babel-jest"
    },
    testMatch: [
        '<rootDir>/feature/**/*.feature.spec.js'
      ],
    "moduleFileExtensions": ["js", 'feature'],
    "setupTestFrameworkScriptFile": "",
    "collectCoverage": true,
    "collectCoverageFrom": [
        "features/**/*.js",
        "src/js/**/*.js",
        "!node_modules/**",
        "!src/test/**"
    ],
    "coverageThreshold": {
        "global": {
            "branches": 80,
            "functions": 80,
            "lines": 80,
            "statements": 80
        }
    }
};
