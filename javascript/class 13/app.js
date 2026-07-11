// function greet(name){
//     return "welcome " + name
// }

// var getValue = greet("Saad")
// var getValue2 = greet("Asad")

// console.log(getValue, getValue2)



// function btnClick(){
//     console.log("main chala")
// }


// function showMessage(){
//     // purpose: input se value leni hai or print krni h

//     var getInput = document.getElementById("message")
//     console.log(getInput.value)
//     getInput.value = ''

// }

var getPara = document.getElementById("para")


function calculate() {
    // purpose: operation perform karega
    // input zarurat 3

    var getInput1 = document.getElementById('num1')
    var getInput2 = document.getElementById('num2')
    var getInput3 = document.getElementById('op')

    if (getInput1.value == "" || getInput2.value == "" || getInput3.value == "") {
        alert("Please enter some value")
    }
    else {
        if (getInput3.value == "+") {
            getPara.innerHTML = Number(getInput1.value) + Number(getInput2.value)
        }
        else if (getInput3.value == "-") {
            getPara.innerHTML = getInput1.value - getInput2.value
        }
        else if (getInput3.value == "*") {
            getPara.innerHTML = getInput1.value * getInput2.value
        }
        else if (getInput3.value == "/") {
            getPara.innerHTML = getInput1.value / getInput2.value
        }
        else if (getInput3.value == "%") {
            getPara.innerHTML = getInput1.value % getInput2.value
        }
    }



}