var getUl = document.getElementById('list')
var getInp = document.getElementById('inp')

function addTodo(){
    getUl.innerHTML += `<li> ${getInp.value} <button onclick='editItem(this)'> Edit </button> <button onclick='delItem(this)'> Delete </button> </li>`
    getInp.value = ''
}

function delItem(e){
    e.parentNode.remove()
}

function editItem(e){
    // var updatedValue = prompt("Enter updated value", e.parentNode.firstChild.textContent)
    // e.parentNode.firstChild.textContent = updatedValue
    getInp.value = e.parentNode.firstChild.textContent
}