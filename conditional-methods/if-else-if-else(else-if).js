"use strict"

const prompt = require ("prompt-sync")();

let score = prompt("Enter the score: ");


if (score>=90) {
    console.log('grade: A');
    
}else if(score>=80)
{
    console.log('grade: B');
    
}else if(score>=60){
    console.log("grade: C");
}else{
    console.log("grade: F");
    
}
