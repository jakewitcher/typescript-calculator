import { add, subtract, multiply, divide, Operator } from '../src/computations';

// state
let firstVal: string = '';
let secondVal: string = '';
let operator: Operator | undefined;
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const operators = [
  { fn: add, sym: '+' },
  { fn: subtract, sym: '-' },
  { fn: multiply, sym: '&times' },
  { fn: divide, sym: '&divide' },
];

// elements
const display = document.getElementById('display');
const numberButtons = document.getElementById('number-buttons');
const operatorButtons = document.getElementById('operator-buttons');
const equalsOperator = document.getElementById('equals-operator');
const clearButton = document.getElementById('clear');

// initialize display
(display as HTMLElement).textContent = '0';

// create buttons for each number value
function handleValueChange(val: string, ele: HTMLElement): string {
  if (val.length < 6) {
    const newVal = val.concat(ele.textContent as string);
    (display as HTMLElement).textContent = newVal;
    return newVal;
  }
  return val;
}

numbers.forEach(num => {
  const ele = document.createElement('button');
  ele.textContent = num.toString();
  ele.className = 'button button--number';
  ele.addEventListener('click', () => {
    if (operator === undefined) {
      firstVal = handleValueChange(firstVal, ele);
    } else {
      secondVal = handleValueChange(secondVal, ele);
    }
  });
  (numberButtons as HTMLElement).insertBefore(ele, clearButton);
});

// create buttons for each operator
operators.forEach(op => {
  const ele = document.createElement('button');
  ele.innerHTML = op.sym;
  ele.className = 'button button--operator';
  ele.addEventListener('click', () => {
    operator = op.fn;
  });
  (operatorButtons as HTMLElement).appendChild(ele);
});

// create button for equals
function handleResult(result: string) {
  (display as HTMLElement).textContent = result;
  firstVal = result;
  secondVal = '';
}

function handleReset(displayMsg: string) {
  (display as HTMLElement).textContent = displayMsg;
  firstVal = '';
  secondVal = '';
  operator = undefined;
}

(equalsOperator as HTMLButtonElement).addEventListener('click', () => {
  if (firstVal && secondVal && operator) {
    if (secondVal === '0' && operator === divide) {
      handleReset('err');
    } else {
      let result = (operator as Operator)(
        parseFloat(firstVal),
        parseFloat(secondVal),
      ).toString();
      if (result.length <= 6) {
        handleResult(result);
      } else if (result.includes('.')) {
        result = result.slice(0, 7);
        handleResult(result);
      } else {
        handleReset('err');
      }
    }
  }
});

// create button to clear all
(clearButton as HTMLButtonElement).addEventListener('click', () => {
  handleReset('0');
});
