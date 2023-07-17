module.exports = {
    "preset": "jest-preset-angular",
    "rootDir": "../",
    "roots": [ "<rootDir>/src/app/" ],
    "setupFilesAfterEnv": [
        "<rootDir>/setup.jest.ts"
    ],
    "testPathIgnorePatterns": [
        "<rootDir>/node_modules/",
        "<rootDir>/dist/"
    ],
    "transform" : {
        "'^.+\\.(ts|js|html)$'": [ 
            "jest-preset-angular",
            {
                "tsconfig": "<rootDir>/tsconfig.spec.json"
            }
        ]
    }
}
