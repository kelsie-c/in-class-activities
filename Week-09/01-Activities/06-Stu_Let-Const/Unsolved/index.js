// TODO: Fix the declarations so that the function works properly.
const addGreetingMessage = (name) => {
  const message = 'How are you?';

  if (name.length > 0) {
    const message = 'Hello ' + name;
    console.log(message);
  }

  console.log(message);
};

addGreetingMessage('Tammy');

// TODO: Fix the declarations so that the function works properly.
const calloutCounter = () => {
  const callout = 'Outside of the loop';
  let counter = 5;

  while (counter > 0) {
    const callout = 'Inside the loop';
    console.log(counter, callout);
    counter--;
  }

  console.log(callout);
};

calloutCounter();

// TODO: Fix the declarations so that the function works properly.
const countMatrix = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    const line = matrix[i];
    for (let i = 0; i < line.length; i++) {
      const element = line[i];
      console.log(element);
    }
  }
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

countMatrix(matrix);
