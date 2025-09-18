const person = {name:"firnas",age:17,country:"india"}

// basic destructuring

const{name,age,country}=person;
console.log(name);
console.log(age);
console.log(country);


//rename variables
const {country:nation}=person;
console.log("nation:",nation);

//default value
const {gender='male'}=person;
console.log("gender:",gender);
console.log("person..",person);






