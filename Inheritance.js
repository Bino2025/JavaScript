// one classs(blueprint for creating objects)can inherit properties and method from another class

//base class

"use script"
class animal {
    constructor(name) {
        this.name=name;
    }
    speak(){
        console.log(`${this.name} make a sound`);
        
    }
}
//derived  class inherits from animal
class dog extends animal{
    constructor(name,breed){
        super(name)//call the parent class constructor
        this.breed=breed;
    }


    // override speak method(polymorphism)
    speak(){
        console.log(`${this.name} the ${this.breed} barks`);
        
    }
}
const Dog=new dog("rex","german shepeard");
Dog.speak();