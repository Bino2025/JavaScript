// function that are passed as arguments to other fnxn

"use strict"

// uses of call back functions
// 1-asynchronous functions -time delay
// 2-avoid blocking code execution

function greetUser(name){
    console.log(`my real name is ${name}` );

    
}
// this function takes another function (callback
function getUserInput(callback){
    const name="Aegon Targaryen";
    callback(name);
}
getUserInput(greetUser);