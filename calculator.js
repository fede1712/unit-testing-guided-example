function sum(a, b) {
  let num1 = a
  let num2 = b
  if (num1 === undefined && num2 === undefined) {
    return 0;
  } else if (num1 === undefined) {
    return b;
  } else if (num2 === undefined) {
    return a;
  }
  return a + b;
}

function subtract(a, b) {
  let num1 = a;
  let num2 = b;
  if (num1 === undefined && num2 === undefined) {
    return 0;
  } else if (num1 === undefined) {
    return num2
  } else if (num2 === undefined) {
    return num1
  }
  return a - b;
}

function divide(a, b) {
  let num1 = a;
  let num2 = b;
  if (num1 === 0 || num2 === 0) {
    throw new Error
  }
  return a / b;

}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
