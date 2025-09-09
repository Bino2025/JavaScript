//you can store function inside objects-these are called object methods


const car={
    brand:"toyota",
    start:function(){
        console.log("car started");
        
    }
}
car.start();


//'this' keyword- it refers the object itself.(used to Access properties and methods)

const person={
    name:"bigil",
    age:32,
    state:'tamilnadu'
    greet:function () {
        console.log(`hello,my name is ${this.name}`);
        
    }
}
person.greet();