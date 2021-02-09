// Change the values and operators below to test your algorithm meets all conditions
var x = 20;
var expression1 = (x < 25);
var expression2 = (x > 50);

// Write Your JavaScript Code Here
if (expression1 === true && expression2 === true) {
    console.log("True ✅ True ✅");
}

if (expression1 === true && expression2 === false) {
    console.log("True ✅ False ❌");
}

if (expression1 === false && expression2 === true) {
    console.log("False ❌ True ✅");
}

if (expression1 === false && expression2 === false) {
    console.log("False ❌ False ❌");
}