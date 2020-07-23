//                                            // Chapter 1

// // task 1
// alert("Welcome To My Website!");

// // task 2
// alert("Error! Please enter a valid password.");

// // task 3
// alert("Welcome to JS Land...\nHappy Coding!");

// // task 4
// alert("Welcome to JS Land...");
// alert("Happy Coding!");

// // task 5
// console.log("Hello... I can run JS through my web browser's console");

//                                            // Chapter 2

// // task 1
// var username;

// // task 2
// var myName = "Zubair Afzal";

// // task 3
// var message = "Hello World!";
// alert(message);

// // task 4
// var name = "Zubair Afzal";
// var age = 25 + " Years Old";
// var experties = "Certified Web & Mobile App Develpor";
// alert(name);
// alert(age);
// alert(experties);

// // task 5
// var food = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(food);

// // task 6
// var email = "zubairafzal100@gmail.com";
// alert("My email address is " + email);

// // task 7
// var book = "A smarter\nway to learn JavaScript.";
// alert("I am trying to learn from the Book " + book);

// // task 8
// document.write("Yah! I can write HTML content through JavaScript");

// // task 9
// var pattern = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
// alert(pattern);
// document.write(pattern);

//                                            // Chapter 3

// // task 1                                            
// var age = 25;
// alert("I am " + age + " years old");

// // task 2
// var track = 1;
// for (var i = 1; i <= 10000; i++) {
//     alert("You have visited this site " + track++ + " times");
// }

// // task 3
// var birthYear = 1994;
// document.write("My birth year is " + birthYear + "<br>" + "Data type of my declared variable is number");

// // task 4
// var onlineStore = "XYZ Clothing store"
// var name = prompt("Enter Your Name");
// var productTitle = prompt("Product Name");
// var quantity = prompt("Enter Quantity");
// document.write("<b>"+name+"</b>" + " ordered " + "<b>"+quantity+"</b>" + " " + "<b>"+productTitle+"</b>" + "(s)" + " on " + onlineStore);

//                                            // Chapter 4

// // task 1                                            
// var a = b = c;

// // task 2
// // Legal Variables
// var name;
// var birthDate;
// var birthCity;
// var fatherName;
// var residence;

// // Illegal Variables
// var !name;
// var £city;
// var %state;
// var &country;
// var 12number;

// // task 3
// document.write("<h2>" + "Rules for naming JS variables" + "</h2>");
// document.write("<p>" + "Variable names can only contain numbers, $ and _ . For example : " + "<b>" + "$my_1stVariable" + "</b>" + "</p>");
// document.write("<p>" + "Variable must begin with a letter, $ or _ . For example : " + "<b>" + "$name" + "</b>" + ", " + "<b>" + "_name " + "</b>" + "or" + "<b>" + " name" + "</b>" + "</p>");
// document.write("<p>" + "Variable names are case sensitive" + "</p>");
// document.write("<p>" + "Variable names should not be JS keywords" + "</p>");

//                                            // Chapter 5

// // task 1                                            
// var num1 = 3;
// var num2 = 5;
// var sum = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>" + "<br>");

// // task 2
// var num1 = 10;
// var num2 = 4;
// var sub = num1 - num2;
// document.write("Subtraction of " + num1 + " and " + num2 + " is " + sub + "<br>" + "<br>");

// var num1 = 4;
// var num2 = 7;
// var mul = num1 * num2;
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + mul + "<br>" + "<br>");

// var num1 = 21;
// var num2 = 7;
// var divi = num1 / num2;
// document.write("Division of " + num1 + " and " + num2 + " is " + divi + "<br>" + "<br>");

// var num1 = 20;
// var num2 = 3;
// var mod = num1 % num2;
// document.write("Modulus of " + num1 + " and " + num2 + " is " + mod);

// // task 3
// var mathExpressions;
// document.write("Value after variable declaration is " + mathExpressions + "<br>");
// mathExpressions = 5;
// document.write("Initial value: " + mathExpressions + "<br>");
// mathExpressions = ++mathExpressions;
// document.write("Value after increment is: " + mathExpressions + "<br>");
// mathExpressions = mathExpressions + 7;
// document.write("Value after addition is: " + mathExpressions + "<br>");
// mathExpressions = --mathExpressions;
// document.write("Value after decrement is: " + mathExpressions + "<br>");
// mathExpressions = mathExpressions % 3;
// document.write("The remainder is: " + mathExpressions + "<br>");

// // task 4
// var ticketPrice = 600;
// ticketPrice = ticketPrice * 5;
// document.write("Total cost to buy 5 tickets to a movie is " + ticketPrice + "PKR");

// // task 5
// var table = 8;
// document.write("Table of " + table + "<br>")
// for (var i = 1; i <= 10; i++) {
//     document.write("8 " + "x " + i + " = " + table*i + "<br>");    
// }

// // task 6
// var C = 25;
// var F = 70;
// C = (C * 9 / 5) + 32;
// F = (F - 32) * 5 / 9;
// document.write("25<sup>0</sup>C is " + C + "<sup>o</sup>F" + "<br>");
// document.write("70<sup>0</sup>F is " + F + "<sup>o</sup>C");

// // task 7
// var item1 = 650;
// document.write("Price of item 1 is " + item1 + "<br>");
// item1 = item1 * 3;
// document.write("Quantity of item 1 is 3" + "<br>");
// var item2 = 100;
// document.write("Price of item 2 is " + item2 + "<br>");
// item2 = item2 * 7;
// document.write("Quantity of item 2 is 7" + "<br>");
// var shippingCharges = 100;
// document.write("Shipping Charges " + shippingCharges + "<br>" + "<br>");
// var sum = item1 + item2 + shippingCharges;
// document.write("Total cost of your order is " + sum);

// // task 8
// document.write("<h1>Marks Sheet</h1> <br><br>")
// var totalMarks = prompt("Enter Your Total Marks");
// document.write("Total Marks: " + totalMarks + "<br>");
// var obtainedMarks = prompt("Enter Your Obtained Marks");
// document.write("Obtained Marks: " + obtainedMarks + "<br>")
// var percentage = obtainedMarks / totalMarks * 100;
// document.write("Percentage: " + percentage + "%");

// // task 9
// document.write("<h1>Currency in PKR</h1> <br><br>");
// var Currency = 104.80 * 10 + 28 * 25;
// document.write("Total Curreny in PKR: " + Currency);

// document.write("<h1>Currency in PKR</h1> <br><br>");
// var userInput = +prompt("Enter US Dollars");
// var userInput1 = +prompt("Enter Saudi Riyals");
// var total = 104.80 * userInput + 28 * userInput1;
// document.write("Total Curreny in PKR: " + total);

// // task 10
// var num = 10 + 5 * 10 / 2;
// document.write("Result is: " + num);

// // task 11
// document.write("<h1>Age Calculator</h1> <br><br>");
// var currentYear = prompt("Enter Current Year");
// document.write("Current Year: " + currentYear + "<br>")
// var birthYear = prompt("Enter Your Birth Year");
// document.write("Birth Year: " + birthYear + "<br>")
// var age = currentYear - birthYear;
// document.write("Your Age is: " + age + " Years");

// // task 12
// document.write("<h1>The Geometrizer</h1> <br><br>");
// var radius = 20;
// document.write("Radius of a circle: " + radius + "<br>");
// var circumference = 2 * 3.142 * radius;
// document.write("The circumference is: " + circumference + "<br>");
// var area = 3.142 * radius * radius;
// document.write("The area is: " + area);

// // task 13
// document.write("<h1>The Lifetime Supply Calculator</h1> <br><br>");
// var snack = "Snackers";
// document.write("Favourite Snack: " + snack + "<br>");
// var age = 26;
// document.write("Current Age: " + age + "<br>");
// var maxAge = 65;
// document.write("Estimated Maximum Age: " + maxAge + "<br>");
// var perDayAmount = 3;
// document.write("Amount of snacks per day: " + perDayAmount + "<br>");
// var result = (-age) - (-maxAge) * perDayAmount;
// document.write("You will need " + result + " " + snack + " to last you until the ripe old age of " + maxAge);


//                                            // Chapter 6-9

// // task 1                                            
// var a = 10;
// document.write("Result: <br> The value of a is: " + a + "<br>" + "..................................................." + "<br>" + "<br>");
// document.write("The value of ++a is: " + ++a + "<br>" + "Now the value of a is: " + a + "<br>" + "<br>" + "<br>");
// document.write("The value of a++ is: " + a++ + "<br>" + "Now the value of a is: " + a + "<br>" + "<br>" + "<br>");
// document.write("The value of --a is: " + --a + "<br>" + "Now the value of a is: " + a + "<br>" + "<br>" + "<br>");
// document.write("The value of a-- is: " + a-- + "<br>" + "Now the value of a is: " + a + "<br>" + "<br>" + "<br>");

// // task 2
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is " + a + "<br> b is " + b + "<br> result is " + result + "<br>" + "<br>");
// a = 2;
// b = 1;
// document.write("a is " + a + "<br> b is " + b + "<br>");
// a = --a;
// document.write("result of --a is " + a + "<br>");
// b = --b;
// result = a - b;
// document.write("result of --a - --b is " + (result) + "<br>");
// result = (a - b) + ++b;
// document.write("result of --a - --b + ++b is " + (result) + "<br>");
// document.write("result of --a - --b + ++b + b-- is " + (result + b--));

// // task 3
// var greet = prompt("Please Enter Your Name", "Zubair Afzal");
// document.write("Hello! " + greet + ". Welcome to my website");

// // task 4
// var userInput = +prompt("Please enter a valid number");
// if (userInput) {
//     for (var i = 1; i <= 10; i++) {
//         document.write(userInput + " x " + i + " = " + userInput*i + "<br>");
//     }
// }else {
//     for (var i = 1; i <= 10; i++) {
//         document.write("5" + " x " + i + " = " + 5*i + "<br>");
//     }
// }

// // task 5
// var sub1 = prompt("Enter 1st Subject");
// var sub2 = prompt("Enter 2nd Subject");
// var sub3 = prompt("Enter 3rd Subject");
// var totalMarks = 100;
// var sumOfTotalMarks = 100 * 3;
// var marks1 = +prompt("Enter 1st Subject Obtained Marks");
// var marks2 = +prompt("Enter 2nd Subject Obtained Marks");
// var marks3 = +prompt("Enter 3rd Subject Obtained Marks");
// var totalObtainedMarks = marks1 + marks2 + marks3;
// var percentage1 = marks1 / totalMarks * 100;
// var percentage2 = marks2 / totalMarks * 100;
// var percentage3 = marks3 / totalMarks * 100;
// var totalPercentage = totalObtainedMarks / sumOfTotalMarks * 100; 
// document.write("<table border = 1px><tr><th><center>Subjects</center></th> <th><center>Total Marks</center></th> <th><center>Obtained Marks</center></th> <th><center>Percentage</center></th></tr>" + "<br>" + "<tr><td><center>" + sub1 + "</center></td> <td><center>" + totalMarks + "</center></td> <td><center>" + marks1 + "</center></td> <td><center>" + percentage1 + "%</center>" + "</td></tr>" + "<br>" + "<tr><td><center>" + sub2 + "</center></td> <td><center>" + totalMarks + "</center></td> <td><center>" + marks2 + "</center></td> <td><center>" + percentage2 + "%</center>" +  "</td></tr>" + "<br>" + "<tr><td><center>" + sub3 + "</center></td> <td><center>" + totalMarks + "</center></td> <td><center>" + marks3 + "</center></td> <td><center>" + percentage3 + "%</center>" +  "</td></tr>" + "<br>" + "<tr><td>" + "" + "</td> <td><center>" + sumOfTotalMarks + "</center></td> <td><center>" + totalObtainedMarks + "</center></td> <td><center>" + totalPercentage + "%</center>" +  "</td></tr>");

//                                            // Chapter 9-11

// // task 1  
// var city = prompt("Enter City Name");
// if (city === "Karachi" || city === "karachi") {
//     document.write("Welcome to city of lights")
// }else {
//     document.write("Welcom to " + city);
// }

// // task 2
// var gender = prompt("Please Enter Your Gender");
// if (gender === "Male" || gender === "male") {
//     document.write("Good Morning Sir");
// } else if (gender === "Female" || gender === "female") {
//     document.write("Good Morning Ma’am");
// }else {
//     document.write("Please Enter Correct Gender");
// }

// // task 3
// var signalColor = prompt("Please Enter Signal Color","red, yellow, green only");
// if (signalColor === "Red" || signalColor === "red") {
//     document.write("<span style = 'font-weight: bold; padding: 10px; Font-size: 40px; color: rgb(46, 116, 181); background-color: rgb(222, 234, 246);'>Must Stop</span>");
// }else if (signalColor === "Yellow" || signalColor === "yellow") {
//     document.write("<span style = 'font-weight: bold; padding: 10px; Font-size: 40px; color: rgb(46, 116, 181); background-color: rgb(222, 234, 246);'>Ready to move</span>");
// }else if (signalColor === "Green" || signalColor === "green") {
//     document.write("<span style = 'font-weight: bold; padding: 10px; Font-size: 40px; color: rgb(46, 116, 181); background-color: rgb(222, 234, 246);'>Move now</span>");
// }else {
//     document.write("Try Again!... Only Enter These Colors: Red, Yellow, Green" + "<table style = 'color: rgb(46, 116, 181); padding-bottom: 40px; border-top: solid 2px rgb(46, 116, 181); border-bottom: solid 2px rgb(46, 116, 181); font-size: 40px; margin-left: 40px;'><tr><th><center>Signal color</center></th> <th style = 'padding-left: 80px;'><center> Message</center></th></tr> <br> <tr style = 'background-color: rgb(222, 234, 246);'><td style = 'border-top: solid 2px rgb(46, 116, 181);'><center>Red</center></td> <td style = 'padding-left: 80px; border-top: solid 2px rgb(46, 116, 181);'><center>Must Stop</center></td></tr> <br> <tr><td><center>Yellow</center></td> <td style = 'padding-left: 80px;'><center>Ready to move</center></td></tr> <br> <tr style = 'background-color: rgb(222, 234, 246);'><td><center>Green</center></td> <td style = 'padding-left: 80px;'><center>Move now</center></td></tr> <br> <tr><td></td><td></td></tr> <br> </table>")
// }

// // task 4
// var fuel = +prompt("Enter Remaining Fuel in liters");
// if (fuel < 0.25) {
//     document.write("<h1 style = 'font-size: 40px;'>Please refill the fuel in your car</h1>")
// }else {
//     document.write("<h1 style = 'font-size: 40px;'>No Need to refill now</h1>");
// }

// // task 5
// var a = 4; 
// if (++a === 5){ 
//     alert("given condition for variable a is true");
//     //condition true
// }

// var b = 82; 
// if (b++ === 83){ 
//     alert("given condition for variable b is true");
//     //condition not true
// }

// var c = 12; 
// if (c++ === 13){ 
//     alert("condition 1 is true"); 
// } if (c === 13){ 
//     alert("condition 2 is true"); 
// } if (++c < 14){ 
//     alert("condition 3 is true"); 
// } if(c === 14){ 
//     alert("condition 4 is true"); 
//     //condition 2 and 4 is true
// }

// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals"); 
//     //condition true
// }

// if (true){ 
//     alert("True"); 
// } 
// if (false){ 
//     alert("False"); 
//     //condition true
// }

// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
//     //condition true
// }

// // task 6
// document.write("<h1>Marks Sheet</h1>" + "<br>" + "<br>" + "<br>");
// var subMarks1 = +prompt("Enter 1st Subject Obtainded Marks");
// var subMarks2 = +prompt("Enter 2nd Subject Obtainded Marks");
// var subMarks3 = +prompt("Enter 3rd Subject Obtainded Marks");
// var totalMarksIs = +prompt("Please Enter Total Marks");
// var sum = subMarks1 + subMarks2 + subMarks3;
// var percentage = sum / totalMarksIs * 100;
// document.write("Total marks : " + totalMarksIs + "<br>");
// document.write("Marks obtained : " + sum + "<br>");
// document.write("Percentage : " + percentage + "%" + "<br>");
// if (percentage >= 80) {
//     document.write("Grade : A-one" + "<br>");
//     document.write("Remarks : Excellent" + "<br>");
// }else if (percentage >= 70) {
//     document.write("Grade : A" + "<br>");
//     document.write("Remarks : Good" + "<br>");
// }else if (percentage >= 70) {
//     document.write("Grade : A" + "<br>");
//     document.write("Remarks : Good" + "<br>");
// }else if (percentage >= 60) {
//     document.write("Grade : B" + "<br>");
//     document.write("Remarks : You need to improve" + "<br>");
// }else if (percentage < 60) {
//     document.write("Grade : Fail" + "<br>");
//     document.write("Remarks : Sorry" + "<br>");
// }else {
//     document.write("You entered wrong figures.")
// }

// // task 7
// var guess = +prompt("Enter a Number Range: 1 to 10");
// var secretNum = 8;
// if (guess === secretNum) {
//     document.write("Bingo! Correct answer");
// }else if (guess === secretNum + 1) {
//     document.write("Close enough to the correct answer");
// }else if (guess === secretNum - 1) {
//     document.write("Close enough to the correct answer");
// }else {
//     document.write("Better Luck Next Time");
// }

// // task 8
// var num = +prompt("Enter Number");
// if (num % 3 === 0) {
//     document.write("Number is divisible by 3");
// }else {
//     document.write("Number is not divisible by 3");
// }

// // task 9
// var num = +prompt("Enter Number");
// if (num % 2 === 0) {
//     document.write("Your given number is Even");
// }else {
//     document.write("Your given number is Odd");
// }

// // task 10
// var temp = +prompt("Enter Today's Temprature");
// if (temp >= 40) {
//     document.write("It is too hot outside.");
// }else if (temp >= 30) {
//     document.write("The Weather today is Normal.");
// }else if (temp >= 20) {
//     document.write("Today’s Weather is cool.");
// }else if (temp >= 10) {
//     document.write("OMG! Today’s weather is so Cool.");
// }else {
//     document.write("Snow Fall Starts Now");
// }

// // task 11
// var num1 = +prompt("Enter 1st Number");
// var operator = prompt("Enter Operator: + - * / %")
// var num2 = +prompt("Enter 2nd Number");
// if (operator === "+") {
//     document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 + num2));
// }else if (operator === "-") {
//     document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 - num2));
// }else if (operator === "*") {
//     document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 * num2));
// }else if (operator === "/") {
//     document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 / num2));
// }else if (operator === "%") {
//     document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 % num2));
// }else {
//     document.write("Operator Error");
// }

//                                            // Chapter 12-13

// // task 1
// var userInput = prompt("Enter a Character: Numaric or A to Z");
// if (userInput >= "A" && userInput <= "Z") {
//     document.write(userInput + " is a Upper Case Letter");
// }else if (userInput >= "a" && userInput <= "z") {
//     document.write(userInput + " is a Lower Case Letter");
// }else if (userInput >= 0) {
//     document.write(userInput + " is a Number");
// }else {
//     document.write(userInput + " is a not defined");
// }

// // task 2
// var num1 = +prompt("Please enter 1st integer");
// var num2 = +prompt("Please enter 2nd integer");
// if (num1 > num2) {
//     document.write("Number 1 is: " + num1 + " and Number 2 is: " + num2 + " So " + num1 + " is larger");
// }else if (num2 > num1) {
//     document.write("Number 1 is: " + num1 + " and Number 2 is: " + num2 + " So " + num2 + " is larger");
// }else if (num1 === num2) {
//     document.write("Number 1 is: " + num1 + " and Number 2 is: " + num2 + " So " +  num1 + " and " + num2 + " both are equals");
// }else {
//     document.write("Number not found");
// }

// // task 3
// var userInput = +prompt("Enter a Number");
// if (userInput >= +1) {
//     document.write("Number is positive");
// }else if (userInput <= -1) {
//     document.write("Number is negative");
// }else if (userInput === 0) {
//     document.write("Number is Zero");
// }

// // task 4
// var char = prompt("Enter vowel letter");
// char = char.toLocaleLowerCase()
// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//     document.write("True")
// }else {
//     document.write("False")

// }

// // task 5
// var password = 123456;
// var userInput = +prompt("Enter your Password");
// if (userInput == "") {
//     document.write("Please Enter your Password");
// }else if (userInput === password) {
//     document.write("Correct! The password you entered matches the original password");
// }else if (userInput !== password) {
//     document.write("Incorrect password");
// }

// // task 6
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
//     greeting = document.write("Good day"); 
// }
// else {
//     greeting = document.write("Good evening"); 
// }

// // task 7
// var time = +prompt("Enter Time like: 0000 to 2359");
// if (time >= 0000 && time < 1200) {
//     document.write("Good morning")
// }else if (time >= 1200 && time < 1700) {
//     document.write("Good afternoon")
// }else if (time >= 1700 && time < 2100) {
//     document.write("Good evening")
// }else if (time >= 2100 && time <= 2359) {
//     document.write("Good night")
// }

//                                            // Chapter 14-16

// // task 1
// var arr = [];

// // task 2
// var arr1 = new Array();

// // task 3
// var arr = ["Zubair", "Afzal"];

// // task 4
// var arr = [1, 2];

// // task 5
// var arr = [true];

// // task 6
// var arr = ["Name", 2, true];

// // task 7
// var arr = ["Qualifications:  <br> <br>", "1) SSC <br>", "2) HSC <br>", "3) BSC <br>", "4) BS <br>", "5) BCOM <br>", "6) MS <br>", "7) M.Phil <br>", "8) PhD <br>"];
// document.write(arr.join(""));

// // task 8
// var arr = [];
// arr[0] = prompt("Enter 1st Student");
// arr[1] = prompt("Enter 2nd Student");
// arr[2] = prompt("Enter 3rd Student");
// var arr1 = [];
// arr1[0] = prompt("Enter 1st Student Score. Total Marks: 500");
// arr1[1] = prompt("Enter 2nd Student Score. Total Marks: 500");
// arr1[2] = prompt("Enter 3rd Student Score. Total Marks: 500");
// var totalMarks = 500;
// var percentage = arr1[0] / 500 * 100;
// var percentage1 = arr1[1] / 500 * 100;
// var percentage2 = arr1[2] / 500 * 100;
// document.write("Score of " + arr[0] + " is " + arr1[0] + "." + " Percentage: " + percentage + "%" + "<br>");
// document.write("Score of " + arr[1] + " is " + arr1[1] + "." + " Percentage: " + percentage1 + "%" + "<br>");
// document.write("Score of " + arr[2] + " is " + arr1[2] + "." + " Percentage: " + percentage2 + "%" + "<br>");

// // task 9
// var arr =["Red ", " Green", " Blue"];
// document.write(arr.join("") + "<br>" + "<br>");

// var userInput = prompt("what color you wants to add to the beginning");
// arr.unshift(userInput + " ");
// document.write(arr.join(""));

// var userInput = prompt("what color you wants to add to the end");
// arr.push(" " + userInput);
// document.write(arr.join(""));

// arr.unshift("White ", " Yellow ");
// document.write(arr.join(""));

// arr.shift();
// document.write(arr.join(""));

// arr.pop();
// document.write(arr.join(""));

// var userInd = +prompt("which index you wants to add a color");
// var userInd1 = +prompt("How many colors you wants to add");
// var userInput = " " + prompt("Enter color / colors you wants to add") + " ";
// if (userInd === 0 && userInd1 >= 1) {
//     arr.splice(userInd, arr[0] + userInd1, userInput);
//     document.write(arr.join(""));
// }else if (userInd === 1 && userInd1 >= 1) {
//     arr.splice(userInd, arr[1] + userInd1, userInput);
//     document.write(arr.join(""));
// }else if (userInd === 2 && userInd1 >= 1) {
//     arr.splice(userInd, arr[2] + userInd1, userInput);
//     document.write(arr.join(""));
// }else if (userInd === 3 && userInd1 >= 1) {
//     arr.splice(userInd, arr[3] + userInd1, userInput);
//     document.write(arr.join(""));
// }else {
//     document.write("Please Enter Index Range: 0 to 3");
// }

// var userInd = +prompt("which index you wants to add a color");
// var userInd1 = +prompt("How many colors you wants to add");
// if (userInd === 0 && userInd1 >= 1) {
//     arr.splice(userInd, userInd1);
//     document.write(arr.join(""));
// }else if (userInd === 1 && userInd1 >= 1) {
//     arr.splice(userInd, userInd1);
//     document.write(arr.join(""));
// }else if (userInd === 2 && userInd1 >= 1) {
//     arr.splice(userInd, userInd1);
//     document.write(arr.join(""));
// }else {
//     document.write("Please Enter Index Range: 0 to 3");
// }

// // task 10
// var arr = [320, 230, 480,120];
// document.write("Scores of Students : " + arr + "<br>" + "<br>");
// arr.sort();
// document.write("Ordered Scores of Students : " + arr + "<br>" + "<br>");

// // task 11
// var arr = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("Cities list: <br>" + arr + "<br>" + "<br>");
// document.write("Selected cities list: <br>" + arr.slice(2, 4) + "<br>" + "<br>");

// // task 12
// var arr = ["This ", " is ", " my ", " cat"];
// document.write("Array: <br>" + arr + "<br> <br>");
// document.write("String: <br>" + arr.join(""));

// // task 13
// var arr = ["keyboard ", "mouse ", "printer ", "monitor"];
// document.write("Devices: <br>" + arr + "<br> <br>");
// document.write("Out: <br>" + arr.slice(0, 1) + "<br>");
// document.write("Out: <br>" + arr.slice(1, 2) + "<br>");
// document.write("Out: <br>" + arr.slice(2, 3) + "<br>");
// document.write("Out: <br>" + arr.slice(3, 4));

// // task 14
// var arr = ["keyboard ", "mouse ", "printer ", "monitor"];
// document.write("Devices: <br>" + arr + "<br> <br>");
// document.write("Out: <br>" + arr.slice(3, 4) + "<br>");
// document.write("Out: <br>" + arr.slice(2, 3) + "<br>");
// document.write("Out: <br>" + arr.slice(1, 2) + "<br>");
// document.write("Out: <br>" + arr.slice(0, 1));

// // task 15
// var arr = ["Apple", " Samsung", " Motorola", " Nokia", " Sony", " Haier"];
// document.write("<select><option>" + "Select" + "</option> <option>" + arr[0] + "</option> <option>" + arr[1] + "</option> <option>" + arr[2] + "</option> <option>" + arr[3] + "</option> <option>" + arr[4] + "</option> <option>" + arr[5] + "</option></select>");

//                                            // Chapter 17-20

// // task 1
// var multiArr = [[ ], [ ]];

// // task 2
// var multiArr = [[0 + " ", 1 + " ", 2 + " ", 3].join("") + "<br>", [1 + " ", 0 + " ", 1 + " ", 2].join("") + "<br>", [2 + " ", 1 + " ", 0 + " ", 1].join("")];
// document.write(multiArr.join(""));

// // task 3
// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }

// // task 4
// var table = +prompt("Enter a number to show its multiplication table");
// var leng = +prompt("Enter length multiplication table");
// document.write("Multiplication table of " + table + "<br>");
// document.write("Length " + leng + "<br> <br>");
// for (var i = 1; i <= leng; i++) {
//     document.write(table + " x " + i + " = " + table*i + "<br>");
// }

// // task 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry <br>"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }
// for (var j = 0; j < fruits.length; j++) {
//     document.write("Element at index " + j + " is " + fruits[j] + "<br>");
// }

// // task 6
// document.write("<h1>Counting:</h1>")
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }
// document.write("<h1>Reverse counting:</h1>")
// for (var j = 10; j >= 1; j--) {
//     document.write(j + ", ");
// }
// document.write("<h1>Even:</h1>")
// for (var k = 0; k <= 20; k++ + k++) {
//     document.write(k + ", ");
// }
// document.write("<h1>Odd:</h1>")
// for (var l = 1; l < 20; l++ + l++) {
//     document.write(l + ", ");
// }
// document.write("<h1>Series:</h1>")
// for (var m = 2; m <= 20; m++ + m++) {
//     document.write(m + "k, ");
// }

// // task 7
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir / ma'am?");
// userInput = userInput.toLowerCase();
// for (var i = 0; i < arr.length; i++) {
//     if (userInput === arr[i]) {
//         document.write(userInput + " is <strong>available</strong> at index " + i + " in our bakery");
//         break
//     }
// }
// if (userInput !== arr[i]) {
//     document.write("We are sorry. " + userInput + " is <strong>not available</strong> in our bakery");
// }

// // task 8
// var arr = [24, 53, 78, 91, 12];
// document.write("Array items: " + arr + "<br>");
// var large = Math.max.apply(Math, arr);
// document.write("The largest number is " + large);

// // task 9
// var arr = [24, 53, 78, 91, 12];
// document.write("Array items: " + arr + "<br>");
// var small = Math.min.apply(Math, arr);
// document.write("The smallest number is " + small);

// // task 10
// var num = 5;
// for (var i = 1; i <= 20; i++) {
//     if (num === 5) {
//         document.write(num * i + ", ");
//     }
// }

//                                             // Chapters 21 to 25

// // task 1                                            
// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName + " " + lastName;
// alert("Hello " + fullName + "!");

// // task 2
// var userInput = prompt("Enter Your Favorite mobile Phone Model");
// document.write("My favorite phone is: " + userInput + "<br>");
// var length = userInput.length;
// document.write("Length of string is: " + length);

// // task 3
// var nationality = "Pakistani";
// document.write("String: " + nationality + "<br>")
// nationality = nationality.indexOf("n");
// document.write("Index of 'n' is: " + nationality);

// // task 4
// var greet = "Hello World";
// document.write("String: " + greet + "<br>");
// greet = greet.lastIndexOf("l");
// document.write("Last index of 'l' is: " + greet);

// // tsak 5
// var nationality = "Pakistani";
// document.write("String: " + nationality + "<br>");
// nationality = nationality.charAt(3);
// document.write("Character at index 3 is: " + nationality);

// // task 6
// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName.concat(" " + lastName);
// document.write("Welcome " + fullName + "!");

// // task 7
// var city = "Hyderabad";
// document.write("City: " + city + "<br>");
// city = city.replace("Hyder", "Islam");
// document.write("After replacement " + city);

// // task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Message: " + message + "<br>");
// message = message.replace(/and/g, "&");
// document.write("Message after replacement: " + message);

// // task 9
// var num = "472";
// document.write("Value: " + num + "<br>" + "Type: " + typeof num + "<br><br>");
// num = Number(num);
// document.write("Value: " + num + "<br>" + "Type: " + typeof num + "<br><br>");

// // task 10
// var userInput = prompt("Enter your word");
// document.write("User Input is: " + userInput + "<br>");
// userInput = userInput.toUpperCase();
// document.write("Upper Case: " + userInput);

// // task 11
// var userInput = prompt("Enter your word");
// document.write("User Input is: " + userInput + "<br>")
// var firstLetter = userInput.slice(0, 1);
// firstLetter = firstLetter.toUpperCase();
// var otherLetters = userInput.slice(1);
// otherLetters = otherLetters.toLocaleLowerCase();
// document.write("Title Case: " + firstLetter + otherLetters);

// // task 12
// var num = 35.36;
// document.write("Number: " + num + "<br>");
// var newNum = num.toString();
// document.write("Result: " + newNum.replace(".", ""));

// // task 13
// var userName = prompt("Please Enter Your Username");
// userName = userName.split("");
// for (i = 0; i < userName.length; i++) {
//     if (userName[i] === String.fromCharCode(33) || userName[i] === String.fromCharCode(44) || userName[i] === String.fromCharCode(46) || userName[i] === String.fromCharCode(64)) {
//         alert("Please Enter Valid Username");
//     }else {
//         document.write("Correct");
//     }
// }

// // task 14
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir / ma'am?");
// userInput = userInput.toLowerCase();
// for (var i = 0; i < arr.length; i++) {
//     if (userInput === arr[i]) {
//         document.write(userInput + " is <strong>available</strong> at index " + i + " in our bakery");
//         break
//     }
// }
// if (userInput !== arr[i]) {
//     document.write("We are sorry. " + userInput + " is <strong>not available</strong> in our bakery");
// }

// // task 15
// var password = prompt("Enter Your Password");
// if (password >= String.fromCharCode(65) || password <= String.fromCharCode(90) && password >= 0 || password <= 9) {
//     document.write(password);
// }

// // task16
// var university = "University of Karachi";
// document.write(university.split("").join("<br>"));

// // task 17
// var userInput = prompt("Enter Your Word");
// document.write("User input: " + userInput + "<br>");
// userInput = userInput.split("").reverse();
// document.write("Last character of input: " + userInput.slice(0,1));

// // task 18
// var text = "The quick brown fox jumps over the lazy dog";
// document.write("Text: " + text + "<br>");
// var text1 = text.toLowerCase();
// document.write("There are " + text1.match(/the/g).length + " occurence(s) of word 'the'");

//                                             // Chapters 26 to 30

// // task 1
// var num = +prompt("Enter positive integer");
// document.write("Number: " + num + "<br>");
// var num1 = Math.round(num);
// document.write("Round off value: " + num1 + "<br>");
// var num2 = Math.floor(num);
// document.write("Floor value: " + num2 + "<br>");
// var num3 = Math.ceil(num);
// document.write("Ceil value: " + num3 + "<br>");

// // task 2
// var num = +prompt("Enter negative number");
// document.write("Number: " + num + "<br>");
// var num1 = Math.round(num);
// document.write("Round off value: " + num1 + "<br>");
// var num2 = Math.floor(num);
// document.write("Floor value: " + num2 + "<br>");
// var num3 = Math.ceil(num);
// document.write("Ceil value: " + num3 + "<br>");

// // task 3
// var num = +prompt("Enter a number");
// document.write("The absolute value of " + num + " is " + Math.abs(num));

// // task 4
// var dice = Math.random() * 6;
// document.write("Random dice value: " + Math.ceil(dice) + "<br>");
// var dice1 = Math.random(dice) * 6;
// document.write("Random dice value: " + Math.ceil(dice1) + "<br>");
// var dice2 = Math.random(dice1) * 6;
// document.write("Random dice value: " + Math.ceil(dice2));

// // task 5
// var toss = Math.random() * 2;
// toss = Math.ceil(toss);
// if (toss === 1) {
//     document.write(toss + "<br>" + "random coin value: Tails")
// }else {
//     document.write(toss + "<br>" + "random coin value: Heads")
// }

// // task 6
// var num = Math.random() * 100;
// num = Math.ceil(num);
// document.write("random num between 1 and 100: " + num);

// // task 7
// var weight = prompt("Enter your weight in kilograms");
// document.write("The weight of user is " + weight);

// // task 8
// var num = 5;
// var userInput = +prompt("Enter secret number between 1 to 10");
// if (userInput === num) {
//     document.write("Congratulation you guess the number!");
// }else {
//     document.write("Try again!");
// }

// var num = Math.random() * 10;
// num = Math.ceil(num);
// var userInput = +prompt("Enter secret number between 1 to 10");
// if (userInput === num) {
//     document.write("Congratulation you guess the number!");
// }else {
//     document.write("Try again!");
// }

//                                             // Chapters 31 to 34

// // task 1
// var date = new Date();
// document.write(date);

// // task 2
// var date = new Date();
// date = date.toString();
// var month = date.slice(4, 8);
// alert("Current Month: " + month);

// // task 3
// var date = new Date();
// date = date.toString();
// var day = date.slice(0, 4);
// alert("Today is " + day);

// // task 4
// var day = prompt("Enter Day");
// day = day.toLowerCase();
// if (day === "saturday" || day === "sunday") {
//     alert("It's Fun day");
// }else {
//     alert("It's not a Fun day");
// }

// // task 5
// var day = new Date();
// day = day.getDate();
// if (day < 16) {
//     document.write("First fifteen days of the month");
// }else {
//     document.write("Last days of the month");
// }

// // task 6
// var date = new Date();
// document.write("Current Date: " + date + "<br>");
// var milliSeconds = date.getTime();
// document.write("Elapsed milliseconds since January 1, 1970: " + milliSeconds + "<br>");
// var minutes = milliSeconds / (1000 * 60 * 60);
// document.write("Elapsed minutes since January 1, 1970: " + minutes);

// // task 7
// var time = new Date();
// time = time.getHours();
// if (time < 12) {
//     alert("It's AM");
// }else {
//     alert("It's PM")
// }

// // task 8
// var laterDate = new Date("December 31, 2020");
// document.write("Later Date: " + laterDate);

// // task 9
// var ramadan = new Date("June 18, 2015");
// var ramadanMili = ramadan.getTime();
// var date = new Date();
// var dateMili = date.getTime();
// var dif = dateMili - ramadanMili;
// dif = dif / (1000*60*60*24);
// document.write(Math.floor(dif) + " days have passed since 1st Ramadan, 2015");

// // task 10
// var begDate = new Date("Jan 01, 2015");
// var begDateMili = begDate.getTime();
// var refDate = new Date("Sat Dec 05, 2015 22:50:16");
// document.write("On reference date " + refDate + ", <br>")
// var refDateMili = refDate.getTime();
// var dif = refDateMili - begDateMili;
// dif = dif / (1000*60);
// document.write(Math.ceil(dif) + " seconds has passed since beginning of 2015");

// // task 11
// var date = new Date("Jun 18, 2020 12:30:00");
// document.write("current date: " + date + "<br>");
// var hour = new Date("Jun 18, 2020 11:30:00");
// document.write("1 hour ago, it was " + hour);

// // task 12
// var date = new Date("Jun 18, 2020 12:30:00");
// document.write("current date: " + date + "<br>");
// var year = new Date("Jun 18, 1920 11:30:00");
// document.write("100 years back , it was " + year);

// // task 13
// var userInput = new Date(prompt("Enter Your Birth Year"));
// var userInputMili = userInput.getTime();
// userInput = userInput.getFullYear();
// var todayDate = new Date();
// var todayDateMili = todayDate.getTime();
// var dif = todayDateMili - userInputMili;
// dif = dif / (1000*60*60*24*30*12);
// document.write("Your age is " + Math.floor(dif) + "<br>");
// document.write("Your birth year is " + userInput);

// // task 14
// document.write("<h1>K-Electric Bill</h1> <br>");
// var name = prompt("Enter your name");
// document.write("Costumer Name: " + "<strong>" + name + "</strong>" + "<br>")
// var month = "June";
// document.write("Month: " + "<strong>" + month + "</strong>" + "<br>");
// var numOfUnits = +prompt("Enter consumed units");
// document.write("Number of units: " + "<strong>" + numOfUnits + "</strong>" + "<br>");
// var charges = 16;
// document.write("Charges per unit: " + "<strong>" + charges + "</strong>" + "<br><br>");
// var netAmount = numOfUnits * charges;
// document.write("Net Amount Payable (within Due Date): " + "<strong>" + netAmount + "</strong>" + "<br>");
// var latePay = 350;
// document.write("Late Payment Surcharge: " + "<strong>" + latePay + "</strong>" + "<br>");
// var grossAmount = netAmount + latePay;
// document.write("Gross Amount Payable (after Due Date): " + "<strong>" + grossAmount + "</strong>");

//                                             // Chapters 35 to 38

// // task 1
// function date() {
//     document.write(new Date());
// }

// date();

// // task 2
// function greet(firstName, lastName) {
//     firstName = firstName.toUpperCase()
//     lastName = lastName.toUpperCase()
//     document.write("Hello " + firstName + " " + lastName + "!");
// }
// greet(prompt("Enter your first name"), prompt("Enter your last name"));

// // task 3
// var sum;
// function greet(firstNum, secondNum) {
//     document.write("First Number is : " + firstNum + "<br>")
//     document.write("Second Number is : " + secondNum + "<br>")
//     sum = firstNum + secondNum
//     document.write("Sum: " + sum);
// }
// greet(+prompt("Enter first number"), +prompt("Enter second number"));

// // task 4
// function calculator(num1, operator, num2) {
//     switch (operator) {
//         case "+":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 + num2);

//         case "-":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 - num2);

//         case "*":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 * num2);

//         case "/":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 / num2);

//         case "5":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 % num2);

//         default:
//             return document.write("Grr an error accurred")
//         }
// }

// calculator(+prompt("Enter 1st Number"), prompt("Enter Operator: + - * / %"), +prompt("Enter 2nd Number"));

// // task 5
// function square(argu) {
//     document.write("Input is: " + argu + "<br>")
//     document.write("Square is: " + argu * argu);
// }
// square(+prompt("Enter number for square"));

// // task 6
// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     }else {
//         return num * factorial(num-1);
//     }
// }
// var num = +prompt("Enter Number for factorial");
// var answer = factorial(num);
// document.write("The factorial of " + num + " is " + answer);

// // task 7
// function counting(num1, num2) {
// document.write("Starting number is: " + num1 + "<br>")
// document.write("Ending number is: " + num2 + "<br>")
//     for (var i = num1; i <= num2; i++) {
//         document.write(i + "<br>");
//     }
// }
// counting(+prompt("Enter starting number"), +prompt("Enter ending number"));

// // task 8
// function hypotenuse(base, perpendicular) {
//     function square(v1, v2) {
//         document.write("First value is: " + v1 + "<br>");
//         var v1Square = v1*v1;
//         document.write("Sqaure root of " + v1 + " is: " + v1Square + "<br><br>");
//         document.write("Second value is: " + v2 + "<br>");
//         var v2Square = v2*v2;
//         document.write("Sqaure root of " + v2 + " is: " + v2Square + "<br><br>");
//         var sqrt = v1*v1 + v2*v2;
//         document.write("Sum of " + v1Square + " and " + v2Square + " is " + sqrt + "<br><hr>");
//     }
//     square(base, perpendicular)
//     document.write("Hypotenuse: " + Math.hypot(base, perpendicular))
// }
// hypotenuse(+prompt("Enter Base"), +prompt("Enter Perpendicular"));

// // task 9
// var height = 5;
// function area(width, height) {
//     document.write("Area of a rectangle is: " + width * height);
// }
// area(10, height);

// // task 10
// function palindrome(word) {
//     var reverse = word.split("").reverse().join("");
//     switch (word) {
//         case reverse:
//             return document.write(word + " and " + reverse + " is same so this is a Palindrome word");

//         default:
//             return document.write(word + " and " + reverse + " is not same so this is not a Palindrome word");

//     }
// }
// palindrome(prompt("Enter word"));

// // task 11
// function titleCase(string) {
//     string = string.split(" ");
//     for (var i = 0; i < string.length; i++) {
//         var firstLetter = string[i].slice(0, 1);
//         firstLetter = firstLetter.toUpperCase();
//         var otherLetters = string[i].slice(1);
//         otherLetters = otherLetters.toLowerCase();
//         var result = firstLetter + otherLetters;
//         document.write(result + " ");
//     }
//     // var capitalized = string.replace("the", "The").replace("quick", "Quick").replace("brown", "Brown").replace("fox", "Fox").replace("jumps", "Jumps").replace("over", "Over").replace("the", "The").replace("lazy", "Lazy").replace("dog", "Dog");
//     // document.write(capitalized);
// }
// titleCase("the quick brown fox jumps over the lazy dog" + "<br>");
// // titleCase(prompt("Enter some text"));

// // task 12
// function longestWord(word) {
//   word = word.split(" ");
//   var result = word[0];
//   for(var i = 1 ; i < word.length ; i++) {
//     if(result.length < word[i].length) {
//     result = word[i];
//     } 
//   }
//   return document.write(result);
// }
// longestWord('Web Development Tutorial');

// // task 13
// function check(string, letter) {
//     var lett = letter;
//     string = string.toLowerCase();
//     letter = string.match(/s/g).length;
//     document.write("There are " + letter + " occurence(s) of word " + '"' + lett + '"');
// }
// check("JSResourceS.com", "s")

// // task 14
// document.write("<h1>The Geometrizer</h1> <br>")
// function calcCircumference(radius) {
//     document.write("Radius is: " + radius + "<br>");
//     var circumference = 2 * 3.142 * radius
//     document.write("The circumference is " + circumference.toFixed(3) + "<br>");
//     function calcArea(radius) {
//         radius = radius * radius
//         var area = 3.142 * radius;
//         document.write("The area is " + area);
//     }
//     calcArea(20);
// }
// calcCircumference(20);

//                                             // Chapters 38 to 42

// // task 1
// function power(a, b) {
//     document.write("Value of a is: " + a + "<br><br>");
//     document.write("Value of b is: " + b + "<br><br>");
//     document.write("The value of a raised to b is: " + Math.pow(a, b));
// }
// power(+prompt("Enter first number"), +prompt("Enter second number"));

// // task 2
// function checkLeapYear() {
//     document.write("<h1>Finding Leap Year</h1>")
//     var year = +prompt("Please enter year");
//     document.write("Entered year is: " + year + "<br>")
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         document.write(year + " is a leap year");
//     }else {
//         document.write(year + " is not a leap year");
//     }
// }
// checkLeapYear();

// // task 3
// document.write("<h1>Finding the area of triangle</h1> <br>");
// var a = +prompt("Enter the value of a");
// var b = +prompt("Enter the value of b");
// var c = +prompt("Enter the value of c");
// var S;
// var area;
// function calculatingS() {
//     S = (a + b + c) / 2;
//     return document.write("The value of S is: " + S + "<br>");
// }
// calculatingS();
// function claculatinArea() {
//     S = (a + b + c) / 2;
//     area = S*(S-a)*(S-b)*(S-c);
//     return document.write("Area of triangle is: " + area);
// }
// claculatinArea();

// // task 4
// document.write("<h1>Marks Sheet</h1> <br>");
// var sub1 = +prompt("Enter first subject marks");
// var sub2 = +prompt("Enter second subject marks");
// var sub3 = +prompt("Enter third subject marks");
// var totalMarks = 300;
// var obtainedMarks = sub1 + sub2 + sub3;
// var average;
// var percentage;
// function mainFunction() {
//     function average() {
//         average = obtainedMarks / 3;
//         return document.write("Average is: " + average + "<br>");
//     }
//     average();
//     function percentage() {
//         percentage = obtainedMarks / totalMarks * 100;
//         return document.write("Percentage is: " + percentage + "%");
//     }
//     percentage();
// }
// mainFunction();

// // task 5
// function chaeckIndexOf(word, character) {
//     word = prompt("Please enter word");
//     document.write("Entered word is: " + word + "<br><br>");
//     character = prompt("Please enter character to find indexOF");
//     document.write("Character to find the indexOf: " + character + "<br><br>")
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === character) {
//             return document.write("IndexOf " + character + " is: " + i);
//         }
//     }
//     return -1;
// }
// chaeckIndexOf();

// // // task 6
// function removingVowels() {
//     var string = prompt("Please enter your sentence", "The quick brown fox jumps over the lazy dog");
//     string = string.replace(/^(.{25}[^\s]*).*/, "$1") + "\n";
//     document.write("Entered sentence is: " + string + "<br>");
//     return document.write("After removing vowels: " + string.replace(/[aeiou]/gi, ''));
// }
// removingVowels();

// // task 7
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     document.write("Sentence is: " + str + "<br><br>")
//     var count = 0;
//     let haveSeenVowel = false;

//     for (const letter of str.toLowerCase()) {
//         switch (letter) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 {
//                     if (haveSeenVowel) {
//                         count++;
//                         haveSeenVowel = false;
//                     } else {
//                         haveSeenVowel = true;
//                     }
//                     break;
//                 }
//             default:
//                 haveSeenVowel = false
//         }
//     }

//     return document.write("The number of occurrences is: " + count);
// }
// findOccurrences();

// // task 8
// var distance = +prompt("Please enter distance in km");
// document.write("Entered distance in km is: " + distance + "<br><br>")
// var distance, meters, feet, inches, centimeters;
// function findingCentimeters() {

//     function findingInches() {

//         function findingFeet() {

//             function findingMeters() {
//                 meters = distance * 1000;
//                 return document.write("Distance in meters is: " + meters + " m <br><br>");
//             }
//             findingMeters();

//             feet = meters * 3.28;
//             return document.write("Distance in feet is: " + feet + " feet <br><br>");
//         }
//         findingFeet();

//         inches = feet * 12;
//         return document.write("Distance in inches is: " + inches + " inches <br><br>");
//     }
//     findingInches();

//     centimeters = inches * 30;
//     return document.write("Distance in centimeters is: " + centimeters + " cm <br><br>");
// }
// findingCentimeters();

// // task 9
// var workingHours;
// function overtimePay() {
//     workingHours = +prompt("Please enter the working hours of an emplyee");
//     document.write("Entered the working hours of an employee is " + workingHours + " hr <br><br>");
//     document.write("Per hour overtime rate is Rs." + 12.00 + "<br><br>");
//     if (workingHours > 40) {
//         var overTime = workingHours - 40;
//         var overTimePay = overTime * 12.00;
//         document.write("Employee overtime pay is Rs." + overTimePay + "<br>");
//     } else {
//         document.write("You have to work for more than 40 hours to get over time pay <br>");
//     }
// }
// overtimePay();

// // task 10
// var hundreds, fifties, tens;
// var amount = +prompt("Please enter amount for withdraw");
// document.write("Entered withdraw amount is: " + amount + "<br><br>");
// function currencyDenominations() {
//     hundreds = Math.floor(amount / 100);
//     document.write("Required notes of Rs. 100 is: " + hundreds + "<br><br>");
//     fifties = Math.floor((amount % 100) / 50);
//     document.write("Required notes of Rs. 50 is: " + fifties + "<br><br>");
//     tens = Math.floor(((amount % 100) % 50) / 10);
//     document.write("Required notes of Rs. 10 is: " + tens + "<br><br>");
//     document.write("Amount still remaining Rs: " + (((amount % 100) % 50) % 10) + "<br><br>");
//     document.write("You will have " + hundreds + " hundred notes " + fifties + " fifty notes " + tens + " ten notes")
// }
// currencyDenominations();

//                                             // Chapters 43 to 48

// // task 1
// function greet() {
//     alert("Hello World!");
// }

// // task 2
// function thanks() {
//     alert("Thanks for purchasing a mobile phone from us");
// }

// // task 3
// function delEntry(e) {
//     e.parentNode.parentNode.remove();
// }

// // task 4
// function secondImage() {
//     var img = document.getElementById("img");
//     img.src = "https://pluspng.com/img-png/tom-and-jerry-png-tom-and-jerry-png-2310.png";
// }
// function firstImage() {
//     var img = document.getElementById("img");
//     img.src = "https://pngimg.com/uploads/tom_and_jerry/tom_and_jerry_PNG48.png";
// }

// // task 5
// var increase =  0
// function countUp() {
//     increase += 1;
//     document.getElementById("count").innerHTML = increase;
// }
// function countDown() {
//    var decrease = increase--;
//     document.getElementById("count").innerHTML = decrease;
// }

//                                             // Chapters 49 to 52

// // task 1
// function submitForm() {
//     var name = document.getElementById("name").value;
//     var pasteName = document.getElementById("pasteName");
//     pasteName.innerHTML = name;
//     var email = document.getElementById("email").value;
//     var pasteEmail = document.getElementById("pasteEmail");
//     pasteEmail.innerHTML = email;
//     var password = document.getElementById("password").value;
//     var pastePassword = document.getElementById("pastePassword");
//     pastePassword.innerHTML = password;
//     var confirmPassword = document.getElementById("confirmPassword").value;
//     var pasteConfirmPassword = document.getElementById("pasteConfirmPassword");
//     pasteConfirmPassword.innerHTML = confirmPassword;
// }

// // task 2
// function moreParagraph() {
//     var paragraph = 'Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals. Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals. Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals. Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals. Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.'
//     document.getElementById('paragraph').innerHTML = paragraph;
// }

// // // task 3
// function delEntry() {
//     document.getElementsByTagName("tr")[1].remove();
// }
// function editEntry() {
//     document.getElementsByTagName("tr");
// }

//                                             // Chapters 53 to 58

// // task 1
// var modal = document.getElementById('modal');
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("modal-img");
// function showImage(image) {
//     modal.classList.add('modal-open');
//     modal.classList.remove('modal-close');
//     modal.style.display = "block";
//     modalImg.src = image;
// }
// function onClosedImagModal() {
//     modal.classList.add('modal-close');
//     modal.classList.remove('modal-open');
//     setTimeout(()=>{ modal.style.display = "none"; }, 550) 
// }

// // task 2
// var max = 100;
// function zoomIn() {
//     var paragraph = document.getElementById("paragraph"),
//         currentFontSize = parseFloat(window.getComputedStyle(paragraph, null).fontSize);
//     if (currentFontSize >= max) {
//         alert("Maximum zoom in limit reached");
//     } else if (currentFontSize < max) {
//         paragraph.style.fontSize = 10 + currentFontSize + 'px';
//     }
// }
// var min = 20;
// function zoomOut() {
//     var paragraph = document.getElementById("paragraph"),
//         currentFontSize = parseFloat(window.getComputedStyle(paragraph, null).fontSize);
//     if (currentFontSize <= min) {
//         alert("Maximum zoom out limit reached");
//     } else if (currentFontSize > min) {
//         paragraph.style.fontSize = currentFontSize - 10 + 'px';
//     }
// }

//                                             // Chapters 58 to 67

// // task 1
// // part i
// var mainContent = document.getElementById("main-content");
// // part ii
// console.log(mainContent.childNodes);
// // part iii
// var elements = document.getElementsByClassName("render");
// for (var i = 0; i < elements.length; i++) {
//     var showElements = document.getElementById("show-elements");
//     var p = document.createElement("p");
//     var text = document.createTextNode(elements[i].innerHTML);
//     p.appendChild(text);
//     showElements.appendChild(p);
// }
// // part iv
// var firstName = document.getElementById("first-name");
// firstName.value = "Zubair";
// // part v
// var lastName = document.getElementById("last-name");
// lastName.value = "Afzal";
// var email = document.getElementById("email");
// email.value = "zubairafzal100@gmail.com";

// // task 2
// // part i
// var checkType = document.getElementById("form-content");
// console.log(checkType.nodeType);
// // part ii
// var checkType2 = document.getElementById("lastName");
// console.log(checkType2.nodeType);
// console.log(checkType2.childNodes[0].nodeType);
// // part iii
// var checkType3 = document.getElementById("lastName");
// checkType3.innerHTML = "Last Name: Afzal"
// // part iv
// var check = document.getElementById("main-content");
// console.log(check.firstChild);
// console.log(check.lastChild);
// // part v
// var check2 = document.getElementById("lastName");
// console.log(check2.nextSibling);
// console.log(check2.previousSibling);
// // part v
// var check3 = document.getElementById("email");
// console.log(check3.parentNode);
// console.log(check3.nodeType);