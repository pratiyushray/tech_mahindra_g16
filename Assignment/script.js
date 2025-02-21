//Call bind Apply

// let myname = {
//     firstName:"Pratiyush",
//     lastName:"Ray",
//     // printFullName:function (){
//     //     console.log(this.firstName+ " "+ this.lastName);
//     // }

// }

// myname.printFullName();

// let printFullName = function(homeTown){
//     console.log(this.firstName+ " "+ this.lastName + " from " +  homeTown);
// }


// let name2= {
//     firstName:"Nitesh",
//     lastName:"Kumar"
// }

// let printFullName2 = function(homeTown){
//     console.log(this.firstName+ " "+ this.lastName + " from " +  homeTown);
// }


// let xx=printFullName.call(myname,"Faridabad");
// let yy=printFullName2.apply(name2,["SFJD, saudh, fsaui, asf"]);

// xx();
// yy();

// //bind

// let printMyName= printFullName.bind(myname,"Faridabad")
// // console.log(printMyName());
// function dosomething(cb){
//     console.log("i have done my work");
//     cb()
// }
// dosomething(printMyName)


//===============================================

//Currying

// let multiply= function(x,y){
//     console.log(x*y);
// }

// let multiplyByTwo3= function(y){
//     let x=2
//     console.log(x*y);
// }


// let multiplyByTwo=multiply.bind(this, 2);
// let multiplyByThree=multiply.bind(this, 3);
// console.log(multiplyByTwo());
// console.log(multiplyByTwo(5));
// console.log(multiplyByThree(5));




// let multiplyClosure = function(x){
//     return function(y){
//         console.log(x*y)
//     }
// }
// let multiTwoClosure= multiplyClosure(2);
// multiTwoClosure(4);

// let multiThreeClosure = multiplyClosure(3);
// multiThreeClosure(5);



//===============================================

//Prototype & Prototypal Inheritance

// let arr=["Pratiyush","Nitesh","Pranav"];
// let obj={
//     firstName:"Pratiyush",
//     secondName:"Ray",
//     city:"Faridabad",
//     getResume: function(){
//         console.log(this.firstName + " from " + this.city);
//     }
// }


// function nothingFunction(){
//     console.log("I am not doing anything");
// }

// arr.__proto__. // you can see all the object of functions that prototype
//Array.prototype  === arr.__proto__
//arr.__proto__.__proto__


//obj.__proto__
//Object.prototype
//obj.__proto__.__proto__ : It is null as chain ends here



// nothingFunction.__proto__
// Function.__proto__
// fun.__proto__.__proto__
// Object.prototype


//=====================================================

//Event Bubbling, Capturing aka Trickling in JavaScript


// document.getElementById("grandParent").addEventListener("click",(e)=>{
//     console.log("This is GrandParent");
//     e.stopPropagation();
// })

// document.getElementById("parent").addEventListener("click",(e)=>{
//     console.log("This is Parent");
//     e.stopPropagation();
// })

// document.getElementById("child").addEventListener("click",(e)=>{
//     console.log("This is Child");
//     e.stopPropagation();
// })

//=========================================

//EVENT DELEGATION IN JAVASCRIPT

// document.getElementById("category").addEventListener("click",(e)=>{
//     console.log("Category Parent Clicked!");
//     console.log(e.target.id);
//     window.location.href="/"+e.target.id;
// })

// //convert the input to  uppercase  using event delegation.

// document.getElementById("form").addEventListener('keyup',(e)=>{
//     console.log(e);
//     if(e.target.dataset.uppercase != undefined){
//         e.target.value=e.target.value.toUpperCase();
//     }
// })

//====================================================

// DEBOUNCING IN JAVASCRIPT 
// let input= document.querySelector("#inp")
// let counter = 0;
// input.addEventListener("input",delay(2000))
// function delay(delay){
// let id;
// return function debounce(){
//     // let timer
//     if(id!='undefined'){
//         clearTimeout(id)
//     }
//         id=setTimeout(getData,delay)
    
     
// }
// }
// const getData = () => {
//     // Calls an API and gets Data
//     console.log("Fetching Data..", counter++);
// };

//=================================================

//Throttling in JavaScript






