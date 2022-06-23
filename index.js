// accepts the input
let firstNumber = parseFloat(prompt('Input the first number: '));
let secondNumber = parseFloat(prompt('Input the second number: '));

//defining the arithematic operator
let operator = prompt('choose an arithematic operator ( *,/,+ or -): ');

let result = (`${firstNumber} ${operator} ${secondNumber}`);

// defining the operations
if (operator == '*') {
    result = firstNumber * secondNumber;
}
else if (operator == '/') {
    result = firstNumber / secondNumber;
}
else if (operator == '+') {
    result = firstNumber + secondNumber;
}
else {
    result = firstNumber - secondNumber;
}

// display the result
prompt('The result is: ', result);
