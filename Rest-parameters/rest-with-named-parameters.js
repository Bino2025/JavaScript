//the rest parameters allows a fn to accept infinite num of argument as an array
function greet(firstname,lastname,...titles){
    console.log(`name:${firstname}${lastname}`);
    console.log(`Titles:${titles.join(',')}`);
    
    
}
greet("lisan", " op", "bca", "software engineer", "author");