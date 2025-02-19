//Reduce:

// sum of array

// const arr=[5,7,3,1,8];

// var sumOfArr=0;

// for (let i=0;i<arr.length;i++){
//     sumOfArr+=arr[i];
// }

// console.log(sumOfArr);

// const ans=arr.reduce(function (acc, curr){
//     acc =acc+curr;
//     return acc

// },0);
// console.log(ans);


// const users=[
//     { firstName:"Pratiyush", lastName:"Ray", age:25},
//     { firstName:"Piyush", lastName:"Saini", age:22},
//     { firstName:"Sahil", lastName:"Aggarwal", age:22},
//     { firstName:"Ayush", lastName:"Jawa", age:22},
//     { firstName:"Daksh", lastName:"Singh", age:40},
//     { firstName:"Agamjot", lastName:"Singh", age:26},
// ]


// const ans= users.reduce(function (acc, curr){
//     if (!acc[curr.age]){
//         acc[curr.age]=1;
//     }else{
//         acc[curr.age]++;
//     }
//     return acc;
// },{})

// console.log(ans)


// dataMap= [2,5,7,8,3,7,9,10]

// var maxNumber=0

// for (let i=0;i<dataMap.length;i++){
//     if(maxNumber<dataMap[i]){
//         maxNumber=dataMap[i];
//     }

// }

// console.log(maxNumber);

// const ansMax=dataMap.reduce(function (acc, curr){
//     if(curr>acc){
//         acc=curr;
//     }
//     return acc;
// },0);
// console.log(ansMax);


// //CALLBACK
// function reachedRestaurant(callback){
//     console.log("Reached Restaurant");
//     setTimeout(callback,1000);
// }

// function TableFinding(callback){
//     console.log("Table Finding");
//     setTimeout(callback,1000);

// }

// function MenuDiscover(callback){
//     console.log("Menu Discover");
//     setTimeout(callback,1000);

// }

// function PriceCheck(callback){
//     setTimeout(callback,1000);
//     console.log("PriceCheck");
// }

// function starterOrder(callback){
//     console.log("Starter ORder");
//     // setTimeout(callback,1000);

// }

// function mainCourse(callback){
//     console.log("Main Course Order");
//     setTimeout(callback,1000);

// }

// function dessert(callback){
//     console.log("Dessert Order");
//     setTimeout(callback,1000);

// }

// function payBill(){
//     console.log("PayBill");

// }


// //Chaining the Callbacks

// reachedRestaurant(()=>{
//     TableFinding(()=>{
//         MenuDiscover(()=>{
//             PriceCheck(()=>{
//                 starterOrder(()=>{
//                     mainCourse(()=>{
//                         dessert(()=>{
//                             payBill();
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

//PROMISE


// reachedRestaurant(function () {
//     console.log("I Reached Eagle Motel")
// })
// .then(TableFinding)
// .then(MenuDiscover)
// .then(PriceCheck)
// .then(starterOrder)
// .then(mainCourse)


// const myRestaurantPromise = new Promise(resolve,reject){
//     if (1:30>time > 2:30){
//         resolve("YES SUCCESSFULLY REACHED")
//     }
//     else{
//         reject("CANT REACH AT TIME");
//     }
// }


// const githubData= fetch("https://apfi.github.com/users/pratiyushray");
// setTimeout(()=>{
// console.log(githubData);

// },1000)

// console.log(githubData)



// const cart = ["shoes", "watches", "bags", "glasses", "shirts"];



// createOrder(cart, callback){
//     console.log("ORDER CREATION")
//     orderPayment(orderId, callback){
//         console.log("ORDER PAYMENT")
//         orderSummary(orderId, callback){
//             console.log("Order Summary")
//             updateWallet(){
//                 console.log("WALLET UPDATED")
//             }
//         }
//     }
// }


// const cart = [];

// function createOrder(cart){
//     const myPromise = new Promise(function(resolve,reject){
//         if (cart.length>0){
//             console.log("ORder Created Succesfully")

//             resolve("12345");
//         }
//         else{
//             const err= new Error("ORDER FAILED")
//             reject(err.message);
//         }
//     });
//     return myPromise;
// }

// function orderPayment(orderId){
//     console.log("Order Payment Successfull", orderId);
// }

// function orderSummary(orderId){
//     console.log("Order Summary Created")
// }

// function updateWallet(){
//     console.log("Wallet Updated")
// }

// console.log(createOrder(cart));


// createOrder(cart)
// .catch( function (err){
//     console.log("Error Occured")
//     console.log(err.message);
// })
// .then(function (orderId){
//     return orderPayment(orderId)
// })

// .then( function (orderId){
//     return orderSummary(orderId)
// })
// .then( function (){
//     return updateWallet()
// })
// .catch( function (err){
//     console.log("Error Occured")
//     console.log(err.message);
// })


// createOrder(cart)
// .then(function (orderId){
//     return orderPayment(orderId)
// })
// .then( function (orderId){
//     return orderSummary(orderId)
// })
// .then( function (){
//     return updateWallet()
// })
// .catch( function (err){
//     console.log("Error Occured")
//     console.log(err.message);
// })


// createOrder(cart)
// .then(function orderPayment(orderId){
//     console.log("Order Payment Successful",orderId)
// })
// .then(function orderSummary(orderId){
//     console.log("Order Summary",orderId)
// })

// createOrder(cart)
// .then(orderPayment(orderId))
// .then(orderSummary(orderId))
// .then(updateWallet)
