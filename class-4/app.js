// // 

// var stdGender = "male"
// if (stdGender === "male"){

//     console.log("allow")
// }
// else{
//     console.log("not allow")
// }
// var userAge = +prompt("enter your age")

// if(userAge >=18 && userAge <=25){
// console.log("allow")
// }
// else{
//     console.log("not allow")
// // }
// var stdGender = prompt("enter gender")
// var stdAge = +prompt("enter age")
// if(stdGender == "male" && stdGender == "female" && stdAge >= 18 || stdAge <=30
//                 //true              //true              true
// ){
//     console.log("accept")

// }
// else{
//     console.log("not allow")
// }
// var userAge = prompt("enter your age")
// if(userAge >=18 || userAge <=40){

//     console.log("userAge Allow", userAge)

// }
// else{
//     console.log("userAge not allow", userAge )
// }

// if(userAge >=18 && userAge <=50){
//     console.log("userAge allow", userAge)
// }
// else{
//     console.log("userAge not ALLOW", userAge)
// }


// var num1 = +prompt("enter num1")
// var num2 = +prompt("enter num2")
// var opt = prompt("Enter opt")

// if(opt =="+"){
//     console.log("add", num1 + num2);

// } else if(opt =="-") {
//     console.log("sub", num1 - num2);

// }   else if(opt =="*"){
//     console.log("mul", num1 * num2);

// } else if(opt =="/"){
//     console.log("DIV", num1 / num2)
// } else{
//     console.log("error invalid opt")
// }


//nested if

// var email = "mnomankhan@gmail.com"
// var pass = 123

// var userEmail = prompt("Enter your email")
// var userPass = prompt("Enter your pass")

// if(userEmail === email && userPass === pass){
//     console.log("login")

// } else{
//     console.log("invalid email and pass");
// // }
// if(userEmail === email){
//     if(userPass === pass){
//         console.log("login")

//     } else{
//         console.log("invalid password");
//     }
// } else {
//     console.log("email not found");
// // } 
//     var weight = 310;
//     var time = 3;
//     var age = 10;
//     var gender = "male"
//      if (weight > 300 && time < 6 && age > 17 && gender === "male") {
//      alert("Come to our tryout!");
//      }
//      else {
//      alert("Come to our cookout!");
//      }


    //array => datatype
    // (collection of data)

    var fruit1 = "mango"
    var fruit2 = "orange"
    var fruit3 = "Apple"

    var fruitArr = ["mango", "orange", "banana", "karachi", "Apple"]
    console.log(fruitArr);
    console.log(fruitArr[0]);
    console.log(fruitArr[1]);
    console.log(fruitArr[2]);
    console.log(fruitArr[3]);
    console.log(fruitArr[4]);
    var numArr = [10,20, 30];
    numArr[0] = "100"
    console.log(numArr);

    var fruitArr = ["mango", "orange", "banana", "karachi", "Apple"]
    console.log(fruitArr.length);

    fruitArr[3] = "lahore"
    console.log(fruitArr);



    //pop and push => remove last index and add


    fruitArr.pop();
    // fruitArr.push("islamabad");
    console.log(fruitArr)


    //shift and unshift => remove and add index from start


    fruitArr.shift();
    fruitArr.unshift("keela");
    console.log(fruitArr)

    var fruitArr = ["mango", "orange", "banana", "karachi", "Apple"]


    //slice => copy values 
    var arrCopy = fruitArr.slice(0, -3);
    console.log("arrCopy", arrCopy);

  //splice => 

  var fruitArr = ["apple", "mango", "karachi", "orange", "banana"];
    fruitArr.splice(0, 3, "pakistan", "lahore");
        console.log("fruitArr", fruitArr);



        // var city0 = "Atlanta";
        // var city1 = "Baltimore";
        // var city2 = "Chicago";
        // var city3 = "Denver";
        // var city4 = "Los Angeles";
        // var city5 = "Seattle";

        // alert("welcome to " + city2, city3, city5);

        var pets = [];

        pets[0] = "snake"
        pets[1] = "cat"
        pets[2] = "dog"
        pets[3] =  12
        console.log(pets);
