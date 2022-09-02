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
    }

    getLastError() {
        if (this._shouldFail) {
            return new Error("A Test has failed");
        }
    }
}

module.exports = MyCustomReporter;
