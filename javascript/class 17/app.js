function more(){
    var inp = prompt("enter some text")
    var getPara = document.querySelector("#para")
    getPara.innerHTML += ` ${inp}`
    document.querySelector("#satti").innerHTML = ""
}