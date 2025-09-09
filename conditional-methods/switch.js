//useful while comparing a single value against a multiple element

"use strict"
const prompt = require ("prompt-sync")();

let day = prompt("Enter the Day: ");
switch (day) {
    case "monday":
        console.log("start of work week");
        
        break;
    case "friday":
        console.log("end of the work week");
        break;
        
    case "sunday":  
        console.log("weekend");
          break;
    default:
        console.log("regular day");
        
        break;
}