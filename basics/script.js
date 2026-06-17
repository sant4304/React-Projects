// let arr = ["rahul","seema","vaani","rohit","rohan"]

// var arr2 = [...arr]

// console.log(arr2)


// var obj = {
//     name:"sharthak",
//     age :28,
//     city : "bhopal",
//     skills :{
//         firstskills :"java",
//         second: "kotlin",
//         third :"js"
//     },
//     technologies :["python","os","cn"]
// }

// // let obj2 = {...obj}

// // obj2.name ="rahul"

// // console.log(obj)
// // let {...obj2} = obj
// let {name, age,skills,technologies} = obj

// let {firstskills,...re} = skills

// let [first,...rem] = technologies
// console.log(first,rem)


// console.log(re.second)

import user from "./app.js";
import skills from "./test.js";
import {us,name} from "./test.js"

console.log(user)
console.log(skills)
console.log(us  ,name)