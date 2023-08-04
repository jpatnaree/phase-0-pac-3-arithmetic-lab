

function add(a, b) {
    return a + b;
  }

  console.log(add(1, 2));

function subtract(a, b) {
    return a - b;
}

console.log(subtract(1, 2));

function multiply(a, b) {
    return a * b;
}

console.log(multiply(1,2));

function divide(a, b) {
    return a / b;
}

console.log(divide(1,2));



function increment(number) {
    return number++, 
            number;
}

function decrement(number) {
    return number--, 
            number;
}

let n = 11.111
function makeInt(n) {
    return parseInt(n, 10) ;
  }

function makeInt(n) {
    return parseFloat(n ,10) ;
}

function preserveDecimal(string) {
    return parseFloat(string, 10);
}