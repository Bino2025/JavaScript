//async makes a function that will return a promise 
//await pauses the function execution until the promise is resolved or rejected

function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("data loaded")
        },3000);//wait for 3s until the promise is resolved
})
}

async function getData() {
    console.log("start");
    const result = await fetchData();
    console.log(result);
    console.log("end");
    
       
}
getData();

// look and behave like synchronus but asynchronus