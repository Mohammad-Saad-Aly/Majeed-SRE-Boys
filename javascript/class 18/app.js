// var printDate = new Date().toString()
// document.write(printDate.slice(0, 4))

// var printDate = new Date().getTime()
// document.write(printDate)



var sattiDate = new Date('14 aug, 1947').getTime()
var aajKiDate = new Date().getTime()

var minus = aajKiDate - sattiDate
var age = Math.floor(minus / (1000 * 60 * 60 * 24 * 365))

document.write(age)


