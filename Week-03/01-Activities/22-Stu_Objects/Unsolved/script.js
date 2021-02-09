//WRITE YOUR CODE BELOW
var customOrder = {
    drinkName: "Mocha Latte",
    numberOfSugars: 2,
    orderReady: false
}

console.log(customOrder.drinkName + ", " + customOrder.numberOfSugars + " sugar(s)");

if (customOrder.orderReady == true) {
    console.log("Ready for pick-up");
} else {
    console.log("Still in order queue");
}