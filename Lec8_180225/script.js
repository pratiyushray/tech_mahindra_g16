// Higher Order Function 

data = [2,4,6,8,10];


// output=[]

// function doubleData(data){
//     for( let i=0; i<=data.length;i++){
//         output.push(data[i]*2)
//     }
// }

// const calculateDoubleData = function (data){
//     const output=[];
//     for (let i=0;i<data.length;i++){
//         output.push(data[i]*2);
//     }
//     return output;
// }

// const calculateHalfData = function (data){
//     const output=[];
//     for (let i=0; i<data.length;i++){
//         output.push(data[i]/2);
//     }
//     return output;
// }

// const calculateAddTen= function (data){
//     const output=[];
//     for (let i =0; i<=data.length;i++){
//         output.push(data[i]+10);
//     }
//     return output;
// }

// console.log(calculateDoubleData(data));
// console.log(calculateHalfData(data));
// console.log(calculateAddTen(data));

// var insideData=10;

// function doubleData(insideData){
//     var ans =insideData*2;
//     return ans;
// }

// function halfData(insideData){
//     var ans =insideData/2;
//     return ans;
// }

// function addTen(insideData){
//     var ans =insideData+10;
//     return ans;
// }


// const calculateData= function (data, callback){
//     var output=[];
//     for (let i =0; i<data.length;i++){
//         output.push(callback(data[i]));
//     }
//     return output;
// }

//Polyfill of Map Feature of JS;
// By Using Prototype 

// Array.prototype.mapp = function (logic){
//     var output=[];
//     for (let i =0; i<this.length;i++){
//         output.push(logic(this[i]));
//     }
//     return output;
// }

// console.log(data.mapp(doubleData));


// console.log(calculateData(data,doubleData));
// console.log(data.map(doubleData));

// console.log(calculateData(data,doubleData));
// console.log(calculateData(data,halfData));
// console.log(calculateData(data,addTen));



const users=[
    { firstName:"Pratiyush", lastName:"Ray", age:25},
    { firstName:"Piyush", lastName:"Saini", age:22},
    { firstName:"Sahil", lastName:"Aggarwal", age:20},
    { firstName:"Ayush", lastName:"Jawa", age:28},
    { firstName:"Daksh", lastName:"Singh", age:40},
]

//Lets comibine First Name and Last Name

const FullName= users.map((user)=>{ user.firstName+ " "+ user.lastName});


// const FullNameWOArrow= users.map(function (user){
//      return user.firstName+ " "+ user.lastName
// })


// Lets Filter out age above 24, there full name:






// const abc= function (){
//     return 1;
// }

// ()=>{
//     return 1;
// }

// const abcarrow=(arg1,arg2)=>{
//     return 1;
// }