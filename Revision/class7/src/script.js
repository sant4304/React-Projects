// console.log("helloo")

// localStorage.setItem("user","samjhaa")
// let user =localStorage.getItem("user")

// console.log(user)

// localStorage.setItem("user1","vaanii")
// console.log(localStorage.getItem("user1"))

// localStorage.removeItem("user1")
// localStorage.clear()

var obj = {
    user:"Sharthak",
    age:23,
    city:"Bhopal"
}

var newObj = JSON.stringify(obj)

localStorage.setItem("obj",newObj)

let a =JSON.parse(localStorage.getItem("obj"))
console.log(a)