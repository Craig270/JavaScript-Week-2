"use strict";

// Whie loop that prints all even numbers from 0-100
var count = 0;

while (count <= 101) {
  if (count % 2 == 0) {
    console.log(count);
  }
  count++;
}

// while loop that prints every 3rd number going backwards from 100 until we reach 0
var count = 100;

while (count >= 0) {
  console.log(count);
  count = count - 3;
}

//A for loop that prints every other number from 1 to 100
for (var i = 1; i <= 100; i += 2) {
  console.log(i);
}

// Hello World AkA FizzBuzz
for (var i = 0; i < 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("HelloWorld");
  } else if (i % 3 == 0) {
    console.log("Hello");
  } else if (i % 5 == 0) {
    console.log("World");
  } else console.log(i);
}

//functions and an Arrow function
function addNums(a, b) {
  return a + b;
}
addNums(10, 10);

const addNumbers = (a, b) => {
  return a + b;
};

addNumbers(20 + 20);
