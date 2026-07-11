var getInput = document.querySelector('#inp')

function btnClick(item){
    getInput.value += item
}

function satti(){
    getInput.value = eval(getInput.value)
}

function clr(){
    getInput.value = getInput.value.slice(0, -1)
}

// var str = "satti saad"

// console.log(str.split(" "))