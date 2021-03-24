// TODO: Import `maths.js`
const maths = require('./maths');
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
let operation = process.argv[2];
let a = parseInt(process.argv[3]);
let b = parseInt(process.argv[4]);
// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
let result;
switch (operation) {
    case 'sum':
        result = maths.sum(a, b);
        break;
    case 'difference':
        result = maths.difference(a, b);
        break;
    case 'product':
        result = maths.product(a, b);
        break;
    case 'quotient':
        result = maths.quotient(a, b);
        break;
}
console.log(result);