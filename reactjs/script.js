// import user from "./app.js";

// console.log(user)

// function hero(){
//     console.log("helooooo")
//     return 10;
// }
// console.log(hero())


// function add(a,b){
//     return a+b

// }

// console.log(add(10,5))


// import hero from "./app.js";
// import test from "./test.js";

// console.log(test())
// console.log(hero())

// let hel = document.querySelector("h1");

// console.log(hel.innerText)

// console.log(React)

/***********************************/

//React Ui bulid karnaa
//React Dom :-React aur Dom ko connect karnaaaaaaaaaa

// let head = document.createElement("h1")

// head.innerText ="Hello i am sam"

// document.body.appendChild(head)

/*************************************/
// var h1  =  React.createElement('h1',{id:"hero"},'i am nobiiii') 
// var h2 = React.createElement('h2',{id:"villan"},"main june end tak job leke rahungaa ")

// var div = React.createElement('div',{id :"parent"} ,[h1,h2])

// // let container = document.querySelector("#container")

// // let root = ReactDOM.createRoot(container)

// // root.render(h1)

// let root = ReactDOM.createRoot(document.querySelector("#container"))

// root.render(div)


/****************************************************************************************/


// function h1(){
//     let a = React.createElement("h1",null,"hello i am h1")
//     return a
// }



// let root = ReactDOM.createRoot(document.querySelector("#container"))
// root.render(h1())

/*********************************************/
// import box from "./app.js"; 
// import circle from "./test.js";

// let root = ReactDOM.createRoot(document.querySelector("#container"))

// const  parent =()=> React.createElement("div",null,[box(),circle()])

// root.render(parent())


/***********************************************/ 
import parent from "./parent.js"
let root = ReactDOM.createRoot(document.querySelector("#container"))
root.render(parent())