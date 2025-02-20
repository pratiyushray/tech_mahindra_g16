// PROMISE APIs 

// const myPromiseFromNetflix = new Promise(function (resolve,reject){
//     setTimeout(()=>{
//         // resolve("Fetched Data from Netflix");
//         reject("Error Netlfix");

//     },1000)
// });

// const myPromiseFromTwitter = new Promise(function (resolve,reject){
//     setTimeout(()=>{
//         resolve("Fetched Data from Twitter");
//         // reject("Error Twitter");
//     },7000)
// });

// const myPromiseFromGithub = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("Fetched Data from Github");
//     },3000)
// });

// const myPromiseFromHotstar = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("Fetched Data from Hotstar");
//     },4000)
// });


// Promise.all()

// const dataFromAll= Promise.all([myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromNetflix,myPromiseFromTwitter]);

// console.log(dataFromAll);

// const fromAllSettled = Promise.allSettled([myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromNetflix,myPromiseFromTwitter]);


// console.log(fromAllSettled);

// const fromRace = Promise.race([myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromNetflix,myPromiseFromTwitter]);

// console.log(fromRace);

// const fromAny = Promise.any([myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromNetflix,myPromiseFromTwitter]);

// console.log(fromAny);


// Async - Await





// async function techDirectFunction(){
//         console.log("THIS IS helloTECH MAHINDRA");
//     }

// const techData= techDirectFunction();
// console.log(techData);
// techData.then((res)=>{
//     return res;
// })

// const helloTechMahindra= async function(){
//     console.log("THIS IS helloTECH MAHINDRA");
// }

// console.log(helloTechMahindra)
// helloTechMahindra();

// const samarPromised= new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("I will be on time");
//     },4000)
// })

// console.log("Hello Class");

// function techMahindra(){
//     const promiseOfSamar=samarPromised;
//     console.log(promiseOfSamar);
// }
// techMahindra();

// console.log("Class End");



// ====================================


// const projectSubmissionByKuber = new Promise(function(res,rej){
//     setTimeout(()=>{
//         res("SUBMITTED PROJECT SUCCESSFULLY");
//     },5000);
// });


// async function projectEvaluation(){
//     const projectFile=await projectSubmissionByKuber;
//     console.log(projectFile);
// }

// projectEvaluation();


// =================================================

// Let's Play with ASync Await 

// console.log("Class Start");

// const projectSubmissionByKuber = new Promise(function(res,rej){
//     setTimeout(()=>{
//         res("SUBMITTED PROJECT SUCCESSFULLY");
//     },5000);
// });

// console.log("Class Lunch");



// async function projectEvaluation(){
//     try{
//         console.log("Attendance Viva");
//     const projectFile=await projectSubmissionByKuber;
//     console.log(projectFile);
//     console.log("Project File Check");
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// projectEvaluation();

// console.log("Class End");



////////////////////////////////////////////////

// LET's Fetch some Data 


// https://api.chucknorris.io/jokes/random


async function fetchApiData() {
    try {
        const data = await fetch("https://api.chucknorris.io/jokes/categories");
        const mydata = await data.json();
        return mydata;
    }
    catch (err) {
        console.log(err);
    }
}


const finalData = fetchApiData();

finalData.then((res) => {
    console.log(res)
})