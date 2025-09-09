// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//syntax

// const promise = new Promise((resolve,reject) => {
//     //asynchronous operation
// })



// resolve = called when operation is succesfull.
// reject = called when operation is failure.


// .then = executes if the promise is resolve.
// .catch = executes if the promise is reject.
// .finally = executes if the promise is either resolve or reject.




let myPromise = new Promise((resolve, reject) => {//new Promise--creates a new promise object
    let success = false;
    setTimeout(() => {
        if (success) {
            resolve('promise rsolved successfully!')
        } else {
            reject('promise rejected')
        }

    }, 2000)
})


myPromise
    .then(result=>console.log(result))//runs if the promise is resolved 
    .catch(error=>console.log(error))//runs if the promise is rejected
    .finally(()=>console.log("promise execution finished"))//runs if the promise is rejected or resolved 