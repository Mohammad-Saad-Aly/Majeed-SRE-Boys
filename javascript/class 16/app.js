
// setInterval()
// setTimeout()
// clearInterval()
// clearTimeout()

// setInterval(function(){
//     document.write("awais danish <br>")
// }, 1000)


// setTimeout(function(){
//     document.write("satti")
// }, 3000)

// var i = 0

// setInterval(function(){
//     i++
//     document.write(i+ "<br>")
// }, 1000)

var htmlMin = document.getElementById("min")
var htmlSec = document.getElementById("sec")
var htmlMsec = document.getElementById("msec")

var jsMin = 0
var jsSec = 0
var jsMsec = 0

var interval;


function start() {
    interval = setInterval(function () {
        jsMsec++
        htmlMsec.innerHTML = jsMsec
        if (jsMsec >= 100) {
            jsSec++
            htmlSec.innerHTML = jsSec
            jsMsec = 0
        }
        else if (jsSec >= 59) {
            jsMin++
            htmlMin.innerHTML = jsMin
            jsSec = 0
        }
    }, 10)

    document.getElementById('btn').disabled = true


}


function stop() {
    clearInterval(interval)
    document.getElementById('btn').disabled = false

}

function reset() {
    document.getElementById('btn').disabled = false
    clearInterval(interval)
    jsMin = 0
    jsMsec = 0
    jsSec = 0
    htmlMin.innerHTML = jsMin
    htmlMsec.innerHTML = jsMsec
    htmlSec.innerHTML = jsSec
}