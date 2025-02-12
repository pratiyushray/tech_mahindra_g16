//setTimeout : INTERVIEW QUESTION

// console.log(1);
// console.log(sumOfTwo(10,5));

// function sumOfTwo(a,b){
//     return a+b;
// }

// setTimeout(()=>console.log(4),2000)
// var start = 1;
// var end = 1500000000;

// while(start<end){
//     start++;
// }

// console.log("End");
// setInterval(()=>console.log(9),4000);
// console.log("start");


// // Create all types of functions

// // Statemnent
// function Sum(){
//     return 10+15;
// }
// console.log(Sum());

// //Arrow
// Sub = ()=>{
//     return 45-10;
// }
// console.log(Sub());

// Case1
xyz();
abc();
function xyz(){
    console.log(1);
}

var abc = function cdf(){
    console.log(2);
}//here it is returning thart abc is not a function

//Case2
function xyz(){
    console.log(1);
}

var abc = function cdf(){
    console.log(2);
}
xyz();
abc();

// Case3
function xyz(){
    console.log(1);
}

var abc = function cdf(){
    console.log(2);
}
xyz();
cdf(); //it will return not defined bcz we cannot access child from parent