// Function using rest parameter

const prompt = require("prompt-sync")();
let input = prompt("Enter a number : ");
let numArray =map(Number);

function numbers(...oddoreve) {
  oddoreve.forEach(num => {
    if (num % 2 === 0) {
      console.log(`${num} is Even`);
    } else {
      console.log(`${num} is Odd`);
    }
  });
}

numbers(...numArray);