// if(5 != "5"){
//     console.log("ok")
// }
// else{
//     console.log('not ok')
// }


var user = prompt("Enter your name")

var maths = +prompt("Enter maths marks")
var english = +prompt("Enter english marks")
var urdu = +prompt("Enter urdu marks")
var computer = +prompt("Enter computer marks")
var islamiat = +prompt("Enter islamiat marks")

var obtainedMarks = maths + english + urdu + computer + islamiat

var percentage = (obtainedMarks / 500) * 100

var grade;

if(percentage > 100){
    grade = "Invalid Percentage"
}

else if(percentage >= 80 ){
    grade = "A+"
}
else if(percentage >= 70){
    grade = "A"
}

else if(percentage >= 60){
    grade = "B"
}

else if(percentage >= 50){
    grade = "C"
}

else if(percentage >= 40){
    grade = "D"
}

else {
    grade = "F"
}



document.writeln(
    `
        <table border='' align='center' width='70%'> 
            <tr align='center'>
                <th> NAME </th>
                <th> MATHS </th>
                <th> ENGLISH </th>
                <th> URDU </th>
                <th> COMPUTER </th>
                <th> ISLAMIAT </th>
                <th> TOTAL </th>
                <th> PERCENTAGE </th>
                <th> GRADE </th>
            </tr>

            <tr align='center'>
                <td> ${user} </td>
                <td> ${maths} </td>
                <td> ${english} </td>
                <td> ${urdu} </td>
                <td> ${computer} </td>
                <td> ${islamiat} </td>
                <td> ${obtainedMarks} </td>
                <td> ${percentage.toFixed(2)} </td>
                <td> ${grade} </td>
            </tr>

        </table>

    `
)










