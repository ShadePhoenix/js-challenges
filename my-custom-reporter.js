const { default: axios } = require("axios");

class MyCustomReporter {
    constructor(globalConfig, options) {
        this._globalConfig = globalConfig;
        this._options = options;
    }

    onRunComplete(contexts, results) {
        console.log("Custom reporter output:");
        //console.log("GlobalConfig: ", this._globalConfig);
        console.log("Options: ", this._options);
        //console.log(results);
        console.log("Failed Test Suites: ", results.numFailedTestSuites);
        console.log("Passed Test Suites: ", results.numPassedTestSuites);
        console.log("Failed Tests: ", results.numFailedTests);
        console.log("Passed Tests ", results.numPassedTests);

        if (process.env.USER.length < 1)
            return new Error(
                "There is no user set in environment. No submission will be made to Formspree."
            );

        //const test = [...results.testResults];
        //console.log(test[0]);
        // console.log(
        //     results.testResults.map((obj) => {
        //         const {
        //             numPassingTests,
        //             numFailingTests,
        //             numPendingTests,
        //             testResults
        //         } = obj;
        //         const tests = testResults.map((tr) => {
        //             const { title, status } = tr;
        //             return `${title}: ${status}`;
        //         });
        //         return {
        //             numPassingTests,
        //             numFailingTests,
        //             numPendingTests,
        //             tests
        //         };
        //     })
        // );
        //console.log(results);
        //console.log(contexts);
        axios({
            url: "https://formspree.io/f/xnqrnkll",
            method: "post",
            headers: {
                Accept: "application/json"
            },
            data: { name: process.env.USER, results }
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

module.exports = MyCustomReporter;
