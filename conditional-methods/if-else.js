"use strict"
const prompt = require ("prompt-sync")();

let temp = prompt("Enter the temp: ");

if (temp>20) {
    console.log('its warm outside');
    
} else {
    console.log('its cool outside');
    
}