const prompt = require ("prompt-sync")();

let age = prompt("Enter your age: ");

let result = (age >= 18) ? "adult" : "minor";
console.log(result );

    
