//Arrays assignment//
// 1.
// var name = [];
// 2.
// var student = [];
// 3.
// var random = ["hello"];
// 4.
// var num = [45];
// 5.
// var bolean = [true, false];
// 6.

//Assignment 21-25
//string methods


// 1.
// var firstName = prompt("first name");
// var lastName = prompt("last name")
// var fullname = (firstName + lastName);
// console.log("wishing you happy Eid Mubarak" + " " + fullname);

// 2.
// var phone = prompt("enter your fvrt phone model")
// phone = "samsung s6 edge"
// document.write("My favorite phone is:" + phone);
// document.write("<br>");
// document.write(" length of string is" + phone.length);

// 3.
// var str = "Pakistani";
// document.write("string:" + str);
// document.write("<br>");
// document.write("index of 'n':" + (str.indexOf("n")))

// 4.
// var str = "Hello world";
//  document.write("string:" + str);
//  document.write("<br>");
// //  document.write("Last index of 'l':" + (str.lastIndexOf("l")))
// 5.
// var str = "Pakistani";
//  document.write("string:" + str);
//  document.write("<br>");
//  document.write("character at index '3':" + (str.charAt("3")))

// var now = new Date()
// console.log(now)

// var num = 19.88888889
// // console.log(typeof num)
  // console.log(typeof num.toFixed(2))


// var now = new Date().toString()
// // console.log( typeof now)
// // console.log(now.slice())

// var now = new Date("Apr 10 2024").toLocaleString()
// console.log(now)


// var now = new Date().toDateString()
// var now = new Date().toTimeString()
// var now = new Date().toLocaleDateString()
// var now = new Date().toLocaleTimeString()


//  var dayOfWeek = ["sun", "mon", "tues", "wed", "thur", "fri", "sat"]

// var now = new Date().getDay()//day of week  0 to 6

// console.log(now)
// // var theDay = now.getDay(3)
// console.log(dayOfWeek[now])


//  var now = new Date().getMonth() //month  0 to 11
//  console.log(now)
 
 
 // var now = new Date().getDate() //month  1 to 31
//  var now = new Date().getFullYear() //month  1 to 31
// var now = new Date().getMilliseconds() //month  1 to 31


// var getTime = new Date().getTime()
// console.log(getTime)


// var dob = "6 dec 1996"
// var dob = prompt("enter dob", "6 dec 1996")

// var now = new Date()

// var pastDate = new Date(dob)


// var nowMiliSec = now.getTime()
// var pastDateMiliSec = pastDate.getTime()
// console.log("now", nowMiliSec)
// console.log("pastDate", pastDateMiliSec)


// var diff = nowMiliSec - pastDateMiliSec


// var result = diff / (1000 * 60 * 60 * 24 * 365)
// // var result = diff / (1000 * 60 * 60 * 24)

// console.log("result", Math.floor(result))



// // 6.
// var firstName = prompt("first name");
// var lastName = prompt("last name")
// var fullname = firstName.concat(" ", lastName);
// console.log("wishing you happy Eid Mubarak" + " " + fullname);


// 7.Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var str = "hyderabad"
// var replaceWord = str.replace("hyder", "islam")
// console.log(replaceword);

// document.write("city:"+ str)
// document.write("<br>")
// document.write("replacement:" + replaceWord);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;


  

// var str = "Ali and Sami are best friends. They play cricket and football together"
// var changes = str.replace(/and/g, "&")

// document.write(changes)

// 9.Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

//  var numtype = "472"
//  var newNum = Number(numtype)
//  var newNum = +numtype
//  console.log(newNum)
//  console.log(typeof newNum)

//  document.write("<p> value:" + numtype)
//  document.write("<p> type:" + typeof numtype)
//  document.write("<p> value:" + newNum)
//  document.write("<p> type:" + typeof newNum)

// 10.
// Write a program that takes user input. Convert and
// show the input in capital letters.
 
// var userInput = prompt("enter a language name")
// var result = userInput.toUpperCase()
// console.log(result)

// document.write("userInput:"  + userInput)
// document.write("<br>")
// document.write("Uppercase:"  + result)


// 11.
// Write a program that takes user input. Convert and
// show the input in title case.

// var program = prompt("enter the program")


// var firstLetter = program[0].toUpperCase()
// var otherLetters = program.slice(1).toLowerCase()
// var cap = firstLetter + otherLetters

// var cap = program[0].toUpperCase() + program.slice(1).toLowerCase()

// // console.log(cap)
// document.write("title:" + program)

// document.write("<br>")
// document.write("Titlecase:" + cap)

// var city = prompt("enter city"); //K arachi

// var firstLetter = city[0].toUpperCase()
// var otherLetters = city.slice(1).toLowerCase()
// var cap  = firstLetter + otherLetters


// var cap  = city[0].toUpperCase()  + city.slice(1).toLowerCase()

// console.log("cap", cap)
