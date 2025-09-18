//storing multiple elements in a array
const students = [
    {name:"bino", age:23, grade:"A"},
    {name:"salman", age:21, grade:"A+"},
    {name:"firnas", age:17, grade:"A++"},
    
]
//accessing data
console.log(students[0].name);
console.log(students[1].grade);


//looping through object array
students.forEach(stdnt=>{
    console.log(`${stdnt.name} is ${stdnt.age} YEARS old.`);
    
})

