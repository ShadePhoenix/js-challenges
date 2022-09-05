const { default: axios } = require("axios");

class JestFormspreeReporter {
    constructor(globalConfig, options) {
        this._globalConfig = globalConfig;
        this._options = options;
    }

    onRunComplete(contexts, results) {
        console.log("\nFailed Test Suites: ", results.numFailedTestSuites);
        console.log("Passed Test Suites: ", results.numPassedTestSuites);
        console.log("Failed Tests: ", results.numFailedTests);
        console.log("Passed Tests ", results.numPassedTests);
        const failedTests = results.testResults
            .map((suites) =>
                suites.testResults
                    .filter((tests) => tests.status === "failed")
                    .map((iTests) => iTests.fullName)
            )
            .filter((s) => s.length > 0);
        console.log("Failed Test Messages", failedTests);

        if (!process.env.USER) {
            return new Error(
                "There is no user set in environment. No submission will be made to Formspree."
            );
        }

        axios({
            url: "https://formspree.io/f/xnqrnkll",
            method: "post",
            headers: {
                Accept: "application/json"
            },
            data: {
                name: process.env.USER,
                results: {
                    failedTests: results.numFailedTests,
                    passedTests: results.numPassedTests,
                    totalTests: results.numTotalTests,
                    failedTestMessages: failedTests
                }
            }
        }).then((response) => {
            console.log(response);
        });
    }

    getLastError() {
        if (this._shouldFail) {
            console.log("There were failed tests");
        }
    }
}

module.exports = JestFormspreeReporter;
