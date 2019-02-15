export interface Operator {
  (a: number, b: number): number;
}

let add: Operator;
add = function(a, b) {
  return a + b;
};

let subtract: Operator;
subtract = function(a, b) {
  return a - b;
};

let multiply: Operator;
multiply = function(a, b) {
  return a * b;
};

let divide: Operator;
divide = function(a, b) {
  return a / b;
};

export { add, subtract, multiply, divide };
