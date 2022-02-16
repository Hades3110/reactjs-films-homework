module.exports = {
    verbose: true,
    preset: 'ts-jest',
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    testEnvironment: "jsdom",
    moduleNameMapper: {
        '\\.(scss)$': 'identity-obj-proxy',
        ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js"
    }
};
