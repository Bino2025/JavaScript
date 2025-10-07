const prompt = require("prompt-sync")();

function isPrime(n) {
  n = Number(n);
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const input = prompt("Enter a number: ");

if (isPrime(input)) {
  console.log(`${input} is a prime number`);
} else {
  console.log(`${input} is not a prime number`);
}