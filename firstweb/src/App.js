// export  let a =10;
// export  var arr =[1,2,3,4];

// export  const obj ={name:"Ak"}

// export  function greet(){
//   console.log(
//     "hello");
// };// it is an individual export

  let a =10;
  var arr =[1,2,3,4];

  const obj ={name:"Ak"}

function greet(){
  console.log("hello");
};

export{a,arr as j,obj};
// bottom export

export default greet; // improt like this or 


// export default  function yo(){
//   console.log("holaaa");
// }
// export like this way also