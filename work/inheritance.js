
"use script"
class bike {
    constructor(model) {
        this.model=model;
    }
    bikes(){
        console.log(`${this.model} is a karizma`);
        
    }
}
class karizma extends bike{
    constructor(model,name){
        super(model)
        this.name=name;
    }
    bikes(){
        console.log(`${this.model} is better than ${this.name}`);
        
    }
}
const Karizma=new karizma("Karizma 2003","Karizma 2025");
Karizma.bikes();