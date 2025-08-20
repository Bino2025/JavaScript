// same as reduce but strt from the end of the array

let numbers=[10,20];
let result=numbers.reduceRight((acc,curr)=> acc - curr,10);
console.log(result);