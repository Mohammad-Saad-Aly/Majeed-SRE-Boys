// localStorage.setItem("name", "Rehman")

// sessionStorage.setItem("name", "Saad")

// console.log(localStorage.getItem("name"))

// localStorage.removeItem("name")
// localStorage.clear()

function satti() {
    var getname = document.getElementById('sname')
    var getemail = document.getElementById('semail')
    var getpass = document.getElementById('spass')

    localStorage.setItem('name', getname.value)
    localStorage.setItem('email', getemail.value)
    localStorage.setItem('pass', getpass.value)

    Swal.fire({
        title: "Sign up Success!",
        text: "You clicked the satti!",
        icon: "success"
    });

}

function awais() {
    var getEmail = document.getElementById('lemail')
    var getPass = document.getElementById('lpass')

    if (localStorage.getItem('email') == getEmail.value && localStorage.getItem('pass') == getPass.value) {
        Swal.fire({
            title: "Login Success!",
            text: "You clicked the Awais!",
            icon: "success"
        });
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Oops invalid credentials...",
            text: "Something went wrong!",
            footer: "<a href='/signup.html'>Why do I have this issue?</a>"
        });
    }
}
