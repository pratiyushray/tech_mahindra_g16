// let studentSahil ={
//     firstName:"Sahil",
//     lastName:"Aggarwal",

//     // getName:function (){
//     //     console.log(this.firstName+" "+this.lastName);
//     // }
//     // getResult:function (){
//     //     console.log("Passed")
//     // }
// }

//  let getName= function (classStudent,test){
//     // console.log(this.firstName+" "+this.lastName);
//     console.log(this.firstName+" "+this.lastName+" from class "+ classStudent+test);
// }

// let studentJasjot ={
//     firstName:"Jasjot",
//     lastName:"Singh",

    // getName:function (){
    //     console.log(this.firstName+" "+this.lastName);
    // }

    // getResult:function(){
    //     console.log("Passed");
    // }
// }

//call
// getName.call(studentSahil);
// getName.call(studentJasjot);

// const getStudent1= getName.call(studentSahil,"G16","g23");
// const getStudent2= getName.apply(studentJasjot,["G16,g15,g17"],["g22"]);

// //bind

// const getStudentBind = getName.bind(studentSahil,"G16");
// console.log(getStudentBind())
// console.log(getStudent1);


// var print= studentSahil.firstName+" "+ studentSahil.lastName;
// console.log(print);
// studentSahil.getResult();

// studentSahil.getName();



//====================================================


// What is Event Bubbling and Event Capturing?

// document.getElementById("grandParent").addEventListener("click",(e)=>{
//     console.log("THIS IS GRAND PARENT DIV");
//     e.stopPropagation();
// },false)

// document.getElementById("parent").addEventListener("click",(e)=>{
//     console.log("THIS IS PARENT DIV");
//     e.stopPropagation()
// },false)

// document.getElementById("child").addEventListener("click",(e)=>{
//     console.log("THIS IS Child DIV");
//     e.stopPropagation()
//     console.log(e)
// },false)


// document.getElementById("cs").addEventListener("click",()=>{
//     window.location.href="localhost/cs"
// });

// document.getElementById("ece").addEventListener("click",(e)=>{
//     // window.location.href="localhost/ece"
//     console.log(e);
// });

// document.getElementById("me").addEventListener("click",()=>{
//     window.location.href="localhost/me"
// });

// document.getElementById("subjects").addEventListener("click",(e)=>{
//     // console.log(e)
//     window.location.href=e.target.id;
//     console.log("http://localhost/"+e.target.id);
// })

//=====================================================


// document.getElementById("searchBox").addEventListener("input",debouncingFunction);
// let whichCall=0
// let timeout;
// function fetchData(){
//     console.log("Fetching API Data",whichCall++)
// }

// function debouncingFunction(){
//     clearTimeout(timeout);
//     timeout=setTimeout(fetchData,2000);
// }


// TASK:

//https://api.chucknorris.io/jokes/categories fetch : async await


//filter 

//debouncing