// for(var i=1; i <=10; i++){
//     if(i == 5){
//         continue
//     }
//     document.writeln(i+ "<br>")
// }


var cars = ["bmw", "mehran", "fx", "alto", "cultus", "cuore", "khyber"]
var user = prompt("Enter your car name")
var match = false


for(var i=0; i < cars.length; i++){
   if(user == cars[i]){
        match = true
        document.writeln(user + " car available")
        break
    }  
}

if(match == false){
    document.writeln(user + " car not available")
}




