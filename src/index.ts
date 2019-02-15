import { add, subtract, multiply, divide, Operator } from '../src/computations';

// state
let firstVal: string = '';
let secondVal: string = '';
let operator: Operator | undefined;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const operators = [
  { fn: add, sym: '+' },
  { fn: subtract, sym: '-' },
  { fn: multiply, sym: 'x' },
  { fn: divide, sym: '/' },
];

// elements
const display = document.getElementById('display');
const numberButtons = document.getElementById('number-buttons');
const operatorButtons = document.getElementById('operator-buttons');
const equalsOperator = document.getElementById('equals-operator');
const clearButton = document.getElementById('clear');

(display as HTMLElement).textContent = '0';

// create buttons for each number value
numbers.forEach(num => {
  const ele = document.createElement('button');
  ele.textContent = num.toString();
  ele.className = 'button button--number';
  ele.addEventListener('click', () => {
    if (operator === undefined) {
      firstVal = firstVal.concat(ele.textContent as string);
      (display as HTMLElement).textContent = firstVal;
    } else {
      secondVal = secondVal.concat(ele.textContent as string);
      (display as HTMLElement).textContent = secondVal;
    }
  });
  (numberButtons as HTMLElement).insertBefore(ele, clearButton);
});

// create buttons for each operator
operators.forEach(op => {
  const ele = document.createElement('button');
  ele.textContent = op.sym;
  ele.className = 'button button--operator';
  ele.addEventListener('click', () => {
    operator = op.fn;
  });
  (operatorButtons as HTMLElement).appendChild(ele);
});

// create button for equals
(equalsOperator as HTMLButtonElement).addEventListener('click', () => {
  const result = (operator as Operator)(
    parseInt(firstVal, 10),
    parseInt(secondVal, 10),
  ).toString();
  (display as HTMLElement).textContent = result;
  firstVal = result;
});

// create button to clear all
(clearButton as HTMLButtonElement).addEventListener('click', () => {
  firstVal = '';
  secondVal = '';
  operator = undefined;
  (display as HTMLElement).textContent = '0';
});
