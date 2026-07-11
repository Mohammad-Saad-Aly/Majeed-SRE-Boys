// var obj = {
//     id: "01",
//     name: "rafay",
//     age: 20
// }

// localStorage.setItem('user', JSON.stringify(obj))

// var getData = JSON.parse(localStorage.getItem('user'))

// for(var key in  getData){
//     document.write(getData[key])
// }


var allUsers = []

var obj = {
    id: "01",
    name: "rafay",
    age: 20
}

var obj2 = {
    id: "02",
    name: "Taha",
    age: 22
}

allUsers.push(obj, obj2)

localStorage.setItem('users', JSON.stringify(allUsers))



