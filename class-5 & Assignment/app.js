
// 1.Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).


//  // Prompt the user for a character
//  var userInput = prompt("Enter a character (number or string):");

//  // Get the ASCII code of the first character in the input
//  var charCode = userInput.charCodeAt(0);

//  // Check if the input is a number
//  if (!isNaN(userInput)) {
//      console.log("The input '" + userInput + "' is a number.");
//  }
//  // Check if the input is an uppercase letter
//  else if (charCode >= 65 && charCode <= 90) {
//      console.log("The input '" + userInput + "' is an uppercase letter.");
//  }
//  // Check if the input is a lowercase letter
//  else if (charCode >= 97 && charCode <= 122) {
//      console.log("The input '" + userInput + "' is a lowercase letter.");
//  }
//  // If none of the above conditions are met
//  else {
//      console.log("The input '" + userInput + "' is not a number or a letter.");
//  }


//  2.Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

//  var firstInt = prompt("Enter the first integar")
//  var secondInt = prompt("Enter the second integar")

//  if(firstInt> secondInt){
//     console.log("The larger Int is:" + firstInt);
//  }
//  else if( secondInt> firstInt){
//     console.log("The larger Int is:" + secondInt);
//  }
//  else{
//     console.log("both are equals");
//  }

// 3.Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.


// var userInput = +prompt("Enter a number");

// if(userInput > 0){
//     console.log("This is positive number");
// }
// else if(userInput < 0){
//     console.log("This is a negative number");
// }
// else if(userInput ==0){
//     console.log("This is zero")
// }
// else{
//     console.log("Nan");

// 4.Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise



    // Prompt the user for a character
    // var userInput = prompt("Enter a single character:");

    // // Check if the input is a vowel
    // function isVowel(char) {
    //     return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
    // }

    // // Check and display the result
    // if (userInput.length === 1 && isVowel(userInput)) {
    //     console.log("True");
    // } else {
    //     console.log("false");
    // }



    // 5.5. Write a program that
    // a. Store correct password in a JS variable.
    // b. Asks user to enter his/her password
    // c. Validate the two passwords:
    // i. Check if user has entered password. If not, then
    // give message “ Please enter your password”
    // ii. Check if both passwords are same. If they are
    // same, show message “Correct! The password you
    // entered matches the original password”. Show
    // “Incorrect password” otherwise.



     // Store the correct password in a variable
    //  var correctPassword = "myPass";

    //  // Ask the user to enter their password
    //  var userPassword = prompt("Enter your password:");
 
    //  // Validate the password
    //  if (!userPassword) {
    //      console.log("Please enter your password.");
    //  } else if (userPassword === correctPassword) {
    //      console.log("Correct! The password you entered matches the original password.");
    //  } else {
    //      console.log("Incorrect password.");
    //  }

    

    //  6. This if/else statement does not work. Try to fix it:
     
    //  var greeting;
    //  var hour = 13;
    //  //ask to user enter the hours

    //  var hour = prompt("Enter the hour")
    //  if (hour < 18) {
    //       console.log("Good day");
    //  }else {
    //     console.log("Good evening");
    // }
    

    // 7.7. Write a program that takes time as input from user in 24
    // hours clock format like: 1900 = 7pm. Implement the
    // following case using if, else & else if statements


    // var time = 1900

    // var time = prompt("Enter the time");

    // if(time >=0000 && time < 1200){
    //     console.log("Good morning")
    // }
    // else if(time >= 1200 && time < 1700){
    //     console.log("Good Afternoon!");
    // }
    // else if(time >=1700 && time <2100){
    //     console.log("Good evening!");
    // }
    // else if(time >= 2100 && time <= 2359){
    //     console.log("Good Night!");
    // }
    // else{
    //     console.log("Incorrect timing")
    // }
 
    //ARRAYS


//    1. Declare an empty array using JS literal notation to store
// student names in future.

// var studentNames = [];
// //in future student names add on to it

// studentNames.push("john");
// studentNames.push("Bob");

// 2.Declare an empty array using JS literal notation to store
// student names in future.

// var studentNames = new Array();

// 3. Declare and initialize a strings array.

    // var newArray = ["Apple", "banana", orange];

    // 4. Declare and initialize a numbers array.

    // var newArray = [101, 24, 44];

    // 5. Declare and initialize a boolean array.

    // var newArray = [true, false];

    // 6. Declare and initialize a mixed array.

    // // var mixedArray = ["apple", 50, true];

    // 7.7. Declare and Initialize an array and store available
    // education qualifications in Pakistan (e.g. SSC, HSC, BCS,
    // BS, BCOM, MS, M. Phil., PhD). Show the listed
    // qualifications in your browser like:

    // var studentsQualifications = ["SSC", "HSC", "BSC", "BCOM", "BSCS", "MS", "MPHIL", 'PHD']


    // // Display the listed qualifications in the browser
    // document.write("<h2>Educational Qualifications:</h2>");
    // document.write("<ol>");
    // for (var i = 0; i < studentsQualifications.length; i++) {
    //     document.write("<li>" + studentsQualifications[i] + "</li>");
    // }
    // document.write("</ol>");


    // 8.Write a program to store 3 student names in an array.Take
    // another array to store score of these three students.
    // Assume that total marks are 500 for each student, display
    // the scores & percentages of students like:

    // var studentNames = ["faheem", "omar", "zarar"];
    // var studentScore = [300, 350, 400]; 


    //  // Calculate and display scores and percentages
    //  document.write("<h2>Student Scores:</h2>");
    //  document.write("<ul>");
    //  for (var i = 0; i < studentNames.length; i++) {
    //      var percentage = (studentScore[i] / 500) * 100;
    //      document.write("<li>");
    //      document.write("Name: " + studentNames[i] + "<br>");
    //      document.write("Score: " + studentScore[i] + " out of 500<br>");
    //      document.write("Percentage: " + percentage.toFixed(2) + "%");
    //      document.write("</li>");
    //  }
    //  document.write("</ul>");

    // 9. Initialize an array with color names. Display the array
    // elements in your browser.
    // a. Ask the user what color he/she wants to add to the
    // beginning & add that color to the beginning of the array.
    // Display the updated array in your browser.

    var colors = ["blue", "black", "white", "purple"]

    document.write("<h2> colors:</h2>");
    document.write("<ol>");
    for  ( var i = 0; i < colors.length; i++ ) {
        document.write("<li>" + colors[i] + "</li>");
    }
    document.write("</ol>");

    // a. Ask the user what color he/she wants to add to the
    //  beginning & add that color to the beginning of the array.
    //  Display the updated array in your browser.

    var color = prompt("what color to show");

    

