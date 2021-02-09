// Write Your Code Below
function evaluate(x,y) {
    if (x === y) {
        console.log("They are equal in type and value");
    } else if (x == y) {
        console.log("They are equal in value");
    } else {
        console.log("The values are not equal");
    }
}

evaluate(2,2);
evaluate(2,'2');
evaluate(2,503);