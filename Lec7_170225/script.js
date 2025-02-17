// Callbacks: 

// function a(){
//     console.log("Function a");
// }

// function b(x){
//     console.log("Function b");
//     x();
// }

// b(a());

// var count=0;

// document.getElementById("btn-click").addEventListener("click" ,function(){
//     count++;
//     console.log("CLicked");
// });

// document.getElementById("btn-click2").addEventListener("click" ,function(){
//     count++;
//     console.log("CLicked");
// });


function reachedRestaurant(callback){
    console.log("Reached Restaurant");
    setTimeout(callback,1000);
}

function TableFinding(callback){
    console.log("Table Finding");
    setTimeout(callback,1000);

}

function MenuDiscover(callback){
    console.log("Menu Discover");
    setTimeout(callback,1000);

}

function PriceCheck(callback){
    setTimeout(callback,1000);
    console.log("PriceCheck");
}

function starterOrder(callback){
    console.log("Starter ORder");
    setTimeout(callback,1000);

}

function mainCourse(callback){
    console.log("Main Course Order");
    setTimeout(callback,1000);

}

function dessert(callback){
    console.log("Dessert Order");
    setTimeout(callback,1000);

}

function payBill(){
    console.log("PayBill");

}


//Chaining the Callbacks

reachedRestaurant(()=>{
    TableFinding(()=>{
        MenuDiscover(()=>{
            PriceCheck(()=>{
                starterOrder(()=>{
                    mainCourse(()=>{
                        dessert(()=>{
                            payBill();
                        })
                    })
                })
            })
        })
    })
})