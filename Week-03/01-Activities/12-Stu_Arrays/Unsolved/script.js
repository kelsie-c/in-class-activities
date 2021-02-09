// WRITE YOUR CODE HERE
var STUDENT_NAME = ['Shou', 'Kelsie', 'Corinne', 'Abdoul', 'Reagan', 'Jordyn', 'Heather', 'Mohammed'];


for (let i = 0; i < STUDENT_NAME.length; i++) {
    console.log("Welcome to the class " + STUDENT_NAME[i]);
}

// console.log("Welcome to the class " + STUDENT_NAME[0]);
// console.log("Welcome to the class " + STUDENT_NAME[1]);
// console.log("Welcome to the class " + STUDENT_NAME[2]);
// console.log("Welcome to the class " + STUDENT_NAME[3]);
// console.log("Welcome to the class " + STUDENT_NAME[4]);
// console.log("Welcome to the class " + STUDENT_NAME[5]);
// console.log("Welcome to the class " + STUDENT_NAME[6]);
// console.log("Welcome to the class " + STUDENT_NAME[7]);

STUDENT_NAME[0] = "Bob";

if (STUDENT_NAME[0] === "Bob") {
    console.log(STUDENT_NAME[0] + " is in class");
}