"use strict";
exports.__esModule = true;
var computations_1 = require("../src/computations");
var it;
it = function (description, testFunctionResults) {
    console.log(description + ":", testFunctionResults);
};
var testComp;
testComp = function (a, b, expectedResult, func) {
    var result = func(a, b);
    return result === expectedResult;
};
it('should correctly add two numbers', testComp(2, 3, 5, computations_1.add));
it('should correctly subtract two numbers', testComp(5, 2, 3, computations_1.subtract));
it('should correctly multiply two numbers', testComp(2, 3, 6, computations_1.multiply));
it('should correctly divide two numbers', testComp(6, 2, 3, computations_1.divide));
