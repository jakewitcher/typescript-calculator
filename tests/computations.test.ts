import { add, subtract, multiply, divide } from '../src/computations';

interface Tests {
  (description: string, testFunction: boolean): void;
}

interface TestCompFuncs {
  (a: number, b: number, expectedResult: number, func: Function): boolean;
}

let it: Tests;
it = function(description, testFunctionResults) {
  console.log(`${description}:`, testFunctionResults);
};

let testComp: TestCompFuncs;
testComp = function(a, b, expectedResult, func) {
  const result = func(a, b);
  return result === expectedResult;
};

it('should correctly add two numbers', testComp(2, 3, 5, add));
it('should correctly subtract two numbers', testComp(5, 2, 3, subtract));
it('should correctly multiply two numbers', testComp(2, 3, 6, multiply));
it('should correctly divide two numbers', testComp(6, 2, 3, divide));
