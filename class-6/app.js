//assignment of Array and Loop

// 1.1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var multiArr = ["pop", "mango", 123];
// console.log(multiArr);

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// var multiArr = [

//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// console.log(multiArr[0][0]); //output:0
// console.log(multiArr[1][2]); //output:1
// console.log(multiArr[2][1]); //output:1

// 3. Write a program to print numeric counting from 1 to 10.

// for(i=1; i<=10; i++){
//     document.write(i + "<br/>");
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var tableNumber = +prompt("enter the table number");
// var tableLength = +prompt("enter the table length");

// for(i=1; i<=tableLength; i++){
//     console.log(tableNumber, "tableNumber")

//     document.write( "multiplication table of " + tableNumber + " length is " + tableLength + "<br/>")    
//     for(i=1; i<=tableLength; i++){
//         document.write(tableNumber + "x" + i + "=" + tableNumber*i + "<br/>")
//     }
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for(i=0; i<=4; i++)
// {
//     document.write("<ul>" + fruits[i] + "</ul>")
// }
// for(i=0; i<=4; i++){



//     document.write("Element at index " + i + " is " + fruits[i] + "<br/>")
// }

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// var countingNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// for(i=0; i<=14; i++){

//     document.write("<ul>" + countingNum[i] + "</ul>")
// }

//reverse counting

// var reverseCounting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// for(i=10; i>=1; i--){

//     document.write("<ul>" + i + "</ul>");
// }

//even numbers


// var evenNum = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// // var evenNum = prompt("enter the number")
// // if(evenNum % 2 === 0){
// //     console.log(true)
// // }
// // else{
// //     console.log(false);
// // }
//  for( var i=0; i < evenNum.length; i++){

//      document.write("<ul>" + evenNum[i] + "</ul>")

//  }

 //for odd num
//  var oddNum = [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

//  for( var i=0; i < oddNum.length; i++){

//     document.write("<ul>" + oddNum[i] + "</ul>")

// }


//for series
// var series = [ 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k ]

// var series = [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]

// for(var i=0; i < series.length; i++){

//     var value = series[i]*1;

// document.write("<ul>" + value+ "k</ul>")

// }
