const prompt = require("prompt-sync")();

let answer = prompt("Enter good or bad: ");
let success = (answer.toLowerCase() === "good");

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (success) {
            resolve("true");
        } else {
            reject("false");
        }
    }, 2000);
});
myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log(" Promise execution finished!"));