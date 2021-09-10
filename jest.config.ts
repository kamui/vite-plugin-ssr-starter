import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  preset: "vite-jest",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/tests/e2e/"],
  testMatch: [
    "<rootDir>/**/__tests__/**/*.{ts,tsx}",
    "<rootDir>/**/*.{spec,test}.{ts,tsx}",
  ],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|sass|scss)$": "identity-obj-proxy",
  },
}

export default config
