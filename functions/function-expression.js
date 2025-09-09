// is a way to define fnxn inside an expression and assign it to a variable

// key characteristics
// 1-anonymous or named 
// 2-not hoisted 
// 3-can be used as argument
// 4.can be assigned to variable/object

const sayHello = function(){
    console.log("hello");
    
}
sayHello();

// example for object
const math={
    add:function(a,b){//parameter
        return a+b;
    }
}
console.log(math.add(5,3));//argument