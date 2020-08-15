// EXERCISE BEFORE:

// alert("Let's do some math!");

// var num1 = prompt("Please type a number");
// num1 = parseFloat(num1);
// var num2 = prompt("Please type another number");
// num2 = parseFloat(num2);

// var message = "<h1>Math with the numbers " + num1 + " and " + num2 + "</h1>";
// message += num1 + " + " + num2 + " = " + (num1 + num2);
// message += "<br>";
// message += num1 + " * " + num2 + " = " + (num1 * num2);
// message += "<br>";
// message += num1 + " / " + num2 + " = " + (num1 / num2);
// message += "<br>";
// message += num1 + " - " + num2 + " = " + (num1 - num2);

// document.write(message);

// Edit the math.js file to accomplish these 4 goals:
// 1. Move all of your variable declarations to the top of the script.
// 2. Add an if statement to test that the 2nd input is not zero. You can't divide by 0,
//    so notify the user with an alert, that they need to reload and try again.
//    Here's one possible alert message:
//    ""The second number is 0. You can't divide by zero. Reload and try again."
// 3. Check to see if the first OR second input are numbers.
//    Use JavaScript's isNaN() method to check. See the
//    Teacher's Notes for information on this method. If one is NOT a number
//    then send an alert message. For example:
//    "At least one of the values you typed is not a number. Reload and try again."
// 4. Don't build the message variable, or write the message to the doc, if
//    either case 2 or 3 above fails.









// EXERCISE AFTER (Version #1):

// var num1;
// var num2;
// var message;

// alert("Let's do some math!");

// var num1 = prompt("Please type a number");
// num1 = parseFloat(num1);
// var num2 = prompt("Please type another number");
// num2 = parseFloat(num2);

// if (isNaN(num1)) {
//     alert("The first number you entered was not a number. Please reload the page try again.");
// } else if (isNaN(num2)) {
//     alert("The second number you entered was not a number. Please reload the page try again.");
// } else if (num1 || num2 == '0') {
//     alert("You entered a zero.  You can't divide by zero.");
// } else {
//     var message = "<h1>Math with the numbers " + num1 + " and " + num2 + "</h1>";
//     message += num1 + " + " + num2 + " = " + (num1 + num2);
//     message += "<br>";
//     message += num1 + " * " + num2 + " = " + (num1 * num2);
//     message += "<br>";
//     message += num1 + " / " + num2 + " = " + (num1 / num2);
//     message += "<br>";
//     message += num1 + " - " + num2 + " = " + (num1 - num2);

//         // write message to web page
//         document.write(message);
// };




// EXERCISE AFTER (Version #2):

var num1;
var num2;
var message;

alert("Let's do some math!");

num1 = prompt("Please type a number");
num1 = parseFloat(num1);
num2 = prompt("Please type another number");
num2 = parseFloat(num2);

if (num2 === 0) {
    alert("You entered a zero.  You can't divide by zero.");
} else if (isNaN(num1) || isNaN(num2)) {
    alert("One of the numbers you entered was not a number. Please reload the page try again.");
} else {
    var message = "<h1>Math with the numbers " + num1 + " and " + num2 + "</h1>";
    message += num1 + " + " + num2 + " = " + (num1 + num2);
    message += "<br>";
    message += num1 + " * " + num2 + " = " + (num1 * num2);
    message += "<br>";
    message += num1 + " / " + num2 + " = " + (num1 / num2);
    message += "<br>";
    message += num1 + " - " + num2 + " = " + (num1 - num2);

        // write message to web page
        document.write(message);
};