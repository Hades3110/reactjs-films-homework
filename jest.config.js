module.exports = {
    verbose: true,
    preset: 'ts-jest',
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    testEnvironment: "jsdom",
    moduleNameMapper: {
        '\\.(scss)$': 'identity-obj-proxy',
    }
};
