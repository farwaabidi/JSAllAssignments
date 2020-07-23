// FIRST JS ASSIGNMENT. CHAPTER 1 to 20 //


/* // ASSIGNMENT 1

//1. Write a script to greet your website visitor using JS alert box
alert("Hello Visitor");

//2.Write a script to display following message on your web page
alert("Error! Please enter a valid password");

//3. Write a script to display following message on your web page: (Hint : Use line break)
alert("Welcome to JS Land...\nHappy coding!");

//4. Write a script to display following messages in sequence:
alert("Wlcome to JS Land...");

//5. Generate the following message through browser’s developer console:
alert("Hello! I can run JSs through my web browser's console");

//6. Make use of alerts in your new/existing HTML & CSS project.
<body>
    <script>
        alert("Using Alert in html and css project");
    </script>
    
</body>
//7. Practice placement of <script></script> element in following sections of your project in exercise 6:
//<head>
    <script>
        alert("Using Alert in head section");
    </script> 
   // <meta charset="UTF-8">
   // <meta name="viewport" content="width=device-width, initial-scale=1.0">
   // <script src="test.js"></script>
//<title>Document</title>
//</head>
<script>
    alert("Using Alert before body section");
</script> 
<body>
    <script>
        alert("Using Alert in body section");
    </script> 
    
</body>
<script>
    alert("Using Alert after body section");
</script> 
//</html>

//ASSIGNMENT 2

//1. Declare a variable called username.
var username;

//2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Farwa Fatima Abidi";

//3. Write script to
//a) Declare a JS variable, titled message.
//b) Assign “Hello World” to variable message
//c) Display the message in alert box.
var message = "Hello World!";
alert(message);

//4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
alert("Jhone Doe");
alert("15 years old");
alert("Certifie Mobie Application Development");

//5. Write a script to display the following alert using one JS variable:
var name ="PIZZA";
var pizza ="";
for(i = name.length; i>=0;i--){
 pizza += (name.slice(0,i)) + "\n";
   
}
alert(pizza);
//6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). 
var email="rfarwa50@gmail.com";
var message ="My email address is "+ email;
alert(message);

//7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. 
var book = "A smarter way lo learn JavaScript";
var message ="I am trying to learn from the book" + " " + book;
alert(message);


//8. Write a script to display this in browser through JS
document.write("Yah! I can write HTML content through Javascript");


//Store following string in a variable and show in alert and browser through JS
var message ="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(message);
document.write(message);

//ASSIGNMENT 3

//1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 15;
alert("I am" + " " + age + " "+"years old");

//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. 
var visited = 14;
alert("You have visited this site" + " " + visited + " " + "times");

//3. Declare a variable called birthYear & assign to it your birth year.
var birthYear = 2000;
var message ="My birth year is" + " " + birthYear;
document.write(message+'<br/>'+"Data type of my declared variable is number");

//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
var visitor_name =prompt("Enter Visitor's name");
var product_title =prompt("Enter product title");
var quantity =prompt("Enter quantity");
document.write(visitor_name +" "+ "ordered" +" "+quantity +" "+ product_title+"(s)"+ " "+"on XYZ Clothing store");

//ASSIGNMENT 4

//1. Declare 3 variables in one statement.
var variable1, variable2, variable3;

//2. Declare 5 legal & 5 illegal variable names
// legal :
var variable1, varVariable, var_variable, $var, variable;
//illegal:
var 1variable, !variable#, if, 1_variable, %variable_; 

//3. Display this in your browser
document.write("<h1>Rules for naming JS variables</h1>");
document.write('<br/>')
document.write("Variable names can only contain numbers, $ and _. For example $my_1stVariable");
document.write('<br/>')
document.write("Variables must begin with a letter, $ or _. For example  $name, _name or name");
document.write('<br/>')
document.write("Variable names are case sensitive");
document.write('<br/>')
document.write("Variable names should not be JS keywords");

//ASSIGNMENT 5

//1. Write a program that take two numbers & add them in a new variable.
var val1 = +prompt("Enter first number");
var val2 = +prompt("Enter second number");
var ans = val1 + val2;
document.write("Sum of "+ val1+ " " +"and" + " " +val2 + " " + "is" + " "+ ans);

//2. Repeat task1 for subtraction, multiplication, division & modulus.

var val1 = +prompt("Enter first number");
var val2 = +prompt("Enter second number");
var ans = val1 - val2;
document.write("Sum of "+ val1+ " " +"and" + " " +val2 + " " + "is" + " "+ ans);

var val1 = +prompt("Enter first number");
var val2 = +prompt("Enter second number");
var ans = val1 * val2;
document.write("Sum of "+ val1+ " " +"and" + " " +val2 + " " + "is" + " "+ ans);

var val1 = +prompt("Enter first number");
var val2 = +prompt("Enter second number");
var ans = val1 / val2;
document.write("Sum of "+ val1+ " " +"and" + " " +val2 + " " + "is" + " "+ ans);

var val1 = +prompt("Enter first number");
var val2 = +prompt("Enter second number");
var ans = val1 % val2;
document.write("Sum of "+ val1+ " " +"and" + " " +val2 + " " + "is" + " "+ ans);

//3. Do the following using JS Mathematic Expressions
var value;
document.write("Value after variable declaration is " + value +'<br/>');
value = 5;
document.write("Initial value: "+ value +'<br/>');
document.write("Value after increment is: " + ++value +'<br/>');
value  = value + 7;
document.write("Value after addition is: "+ value +'<br/>' );
document.write("Value after decrement is: " + --value +'<br/>' );
value = 12 % 3;
document.write("The remainder is: " + value)

//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price
var price = 600;
var tickets = +prompt("How many tickets do you want to buy?");
var total = tickets * price;
document.write("Total cost of buying "+ tickets+ " tickets to a movie is "+total+ "PKR");

//5. Write a script to display multiplication table of any number
var number = +prompt("Enter a number");
document.write("Table of "+ number +'<br/>');
for (i=1; i <=10; i++){
    ans = number * i;
    document.write(number + " X " + i +" = " + ans+'<br/>');
}

//6. The Temperature Converter:
var celsius = +prompt("Enter temperature in celsius");
var fahrenheit = +prompt("enter temperature in fahrenheit");
var ans1 = ((fahrenheit - 32) *5 ) / 9;
var ans2 = ((celsius * 9)/5 ) + 32;
document.write(celsius+"°C is " + ans2 +"°F"+'<br/>');
document.write(fahrenheit+"°F is " + ans1 +"°C");

//7. Write a program to implement checkout process of a shopping cart system
var price1 = 650;
var price2 = 100;
var quantity1 = +prompt("Enter quantity of item 1");
var quantity2 = +prompt("Enter quantity of item 2");
var shipping = 100;
var total = quantity1 * price1 + quantity2 * price2 + shipping;
document.write("Price of item 1 is "+price1 +'<br/>');
document.write("Quantity of item 1 is "+ quantity1+'<br/>');
document.write("Price of item 2 is "+price2 +'<br/>');
document.write("Quantity of item 2 is "+ quantity2+'<br/>');
document.write("Shipping charges is " +shipping+'<br/>');
document.write('<br/>');
document.write("Total cost of your order is "+ total);

//8. Store total marks & marks obtained by a student in 2 variables. 
var marks_obtained= +prompt("Enter marks obtained");
var total_marks= 980;
var percentage = (marks_obtained / total_marks) * 100;
document.write("<h1>Marks Sheet</h1>" + '<br/>');
document.write('<br/>');
document.write("Total Marks: "+ total_marks +'<br/>');
document.write("Marks Obtained: "+ marks_obtained +'<br/>');
document.write("Percentage: "+ percentage +"%"+'<br/>');


//9. Assume we have 10 US dollars & 25 Saudi Riyals. 
var us_dollar = +prompt("How many US dollar do you have?");
var saudi_riyal = +prompt("How many Saudi Riyals do you have?");
var us_pkr = us_dollar *  104.80;
var riyal_pkr = saudi_riyal * 28;
var total_pkr = us_pkr + riyal_pkr;
document.write("<h1>Currency in PKR</h1>" + '<br/>');
document.write('<br/>');
document.write("Total Currency in PKR: "+ total_pkr +'<br/>');

//10. Write a program to initialize a variable 
var number = 5;
var exp = ((number + 5 ) * 10 ) / 2;
document.write("Answer is: " + exp);

//11. The Age Calculator
var current_year = +prompt("Enter current year");
var birth_year = +prompt("Enter birth year");
var age = current_year - birth_year;
document.write("<h1>Age Calculator</h1>" + '<br/>');
document.write('<br/>');
document.write("Current year: "+ current_year +'<br/>');
document.write("Birth year: "+ birth_year +'<br/>');
document.write("Your age is: "+ age +'<br/>');

//12. The Geometrizer: 
var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * (radius**2);
document.write("<h1>The Geometrizer</h1>" + '<br/>');
document.write('<br/>');
document.write("Radius of Circle: "+ radius +'<br/>');
document.write("Circumference is: "+ circumference +'<br/>');
document.write("Area is: "+ area +'<br/>');

//13. The Lifetime Supply Calculator:
var snack = prompt("Enter your favourite snack");
var age = +prompt("Enter your current age");
var max_age = +prompt("Enter your maximum age");
var amount = +prompt("Enter estimated amount per day");
var ans = (max_age - age) * amount;
document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write('<br/>');
document.write("Favourite snack: " +snack +'<br/>');
document.write("Current age: "+ age +'<br/>');
document.write("Estimated Maximum Age: " +max_age+'<br/>');
document.write("Amounts snack per day: " +amount +'<br/>');
document.write("You will need " +ans + " "+snack +" to last you until the ripe old age of "+max_age+'<br/>');


//ASSIGNMENT 6

//1. Write a program to take a number in a variable, do the required arithmetic
var a = 10;
document.write("Result:"+'<br/>');
document.write("The value of a is: "+a+'<br/>');
document.write('<br/>');
document.write("---------------------------"+'<br/>');
document.write('<br/>');
document.write("The value of ++a is: "+ ++a+'<br/>');
document.write("The value of a is: "+a+'<br/>');
document.write('<br/>');
document.write("The value of a++ is: "+ a++ +'<br/>');
document.write("The value of a is: "+a+'<br/>');
document.write('<br/>');
document.write("The value of --a is: "+ --a+'<br/>');
document.write("The value of a is: "+a+'<br/>');
document.write('<br/>');
document.write("The value of a-- is: "+ a-- +'<br/>');
document.write("The value of a is: "+a+'<br/>');
document.write('<br/>');

//2. What will be the output in variables a, b & result after execution 
var a = 2, b = 1;
document.write("a is: "+ a +'<br/>');
document.write("b is: "+ b +'<br/>');
var result = --a - --b + ++b + b--;
//--a; pre decrement will make the value 1
//--a - --b; --a = 1 and pre decrement in b will make it 0 hence: 1-0 = 1
//--a - --b + ++b;  pre increment in b will make it 1 hence : 1 - 0 + 1 = 2
//--a - --b + ++b + b--; post decrement in b will make it 1 (unchanged value) hence: 1 - 0 + 1 + 1 = 3
document.write("Result is: "+ result +'<br/>');

//3. Write a program that takes input a name from user & greet the user.
var name = prompt("Enter your name");
alert("Hello "+name+"!");

//5. Write a program to take input a number from user & display it’s multiplication table 
var number = +prompt("Enter Number");
if(number){
document.write("Table of "+ number +'<br/>');
for (i=1; i <=10; i++){
    ans = number * i;
    document.write(number + " X " + i +" = " + ans+'<br/>');
}
 } else {
    for (i=1; i <=10; i++){
        ans = 5 * i;
        document.write(5 + " X " + i +" = " + ans+'<br/>');
    }
 }
 
//6. Take a) Take three subjects name from user
var subj1 = prompt("Enter first subject");
var subj2 = prompt("Enter second subject");
var subj3 = prompt("Enter third subject");
var marks1 = +prompt("Enter marks of first subject");
var marks2 = +prompt("Enter marks of second subject");
var marks3 = +prompt("Enter marks of third subject");
var total = 100;
var total_obtained_marks = marks1 + marks2 + marks3;
var per1 = (marks1 / total)*100;
var per2 = (marks2 / total)*100;
var per3 = (marks3 / total)*100;
var total_percentage = per1 + per2 + per3;
document.write("<h3>Subject \xa0\xa0 Total Marks\xa0\xa0\xa0 Obtained Marks\xa0\xa0\xa0 Percentage</h3>" +'<br/>');
document.write(subj1+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+total+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+marks1+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+per1+"%"+'<br/>');
document.write(subj2+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+total+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+marks2+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+per2+"%"+'<br/>');
document.write(subj3+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+total+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+marks3+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+per3+"%"+'<br/>');
document.write("\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+total*3+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+total_obtained_marks+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+total_percentage+"%"+'<br/>');

// ASSIGNMENT 9-11

//1. Write a program to take “city” name as input from user
var name = prompt("Enter city name");
if(name == "karachi" || name == "Karachi"){
    alert("Welcome to city of lights");
}
else{
    alert("Welcome");
}

//2. Write a program to take “gender” as input from user
var gender = prompt("Enter your gender");
if(gender == "male" || gender == "Male"){
    alert(" Good Morning Sir");
} 
else if(gender == "female" || gender == "Female"){
    alert(" Good Morning Ma’am");
}

//3. Write a program to take input color of road traffic signal 
var color = prompt("Enter traffic signal color");
if(color == "red"){
    alert("Must Stop");
} 
else if(color == "yellow"){
    alert("Ready to move");
}
else if(color == "green"){
    alert("Move now");
}

//4. Write a program to take input remaining fuel in car 
var fuel = +prompt("Enter amount of fuel");
if(fuel < 0.25){
    alert("Please refill the fuel in your car");
}
else{
    alert("No need to refill");
}

//5. Run this script, & check whether alert message would be displayed or not.
//a OUTPUT: given condition for variable a is true
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
//b OUTPUT: No output shown
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
//c OUTPUT: condition 2 is true  and condition 4 is true
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
//d OUTPUT: The cost equals
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//e OUTPUT: True
if (true){
    alert("True");
}
    if (false){
    alert("False");
}
//f OUTPUT: car is smaller than cat
if("car" < "cat"){
    alert("car is smaller than cat");
    }
 
//6. Write a program to take input the marks obtained in three subjects & total marks. 
var marks1 = +prompt("Enter marks of first subject");
var marks2 = +prompt("Enter marks of second subject");
var marks3 = +prompt("Enter marks of third subject");
var total = +prompt("Enter total marks");
var total_obtained_marks = marks1 + marks2 + marks3;
var percentage = (total_obtained_marks / total)*100;
document.write("<h1>Marks Sheet</h1>"+'<br/>');
document.write('<br/>');
document.write('<br/>');
document.write("Total Marks: "+total+'<br/>');
document.write("Marks Obtained: "+total_obtained_marks+'<br/>');
document.write("Percentage: "+percentage+"%"+'<br/>');
if(percentage >= 80){
    document.write("Grade: A-One"+'<br/>');
document.write("Remarks: Excellent"+'<br/>');
} else if(percentage >= 70 && percentage < 80){
    document.write("Grade: A"+'<br/>');
document.write("Remarks: Good"+'<br/>');
}  else if(percentage >= 60 && percentage < 70){
    document.write("Grade: B"+'<br/>');
document.write("Remarks:You need to improve"+'<br/>');
}  else if(percentage < 60){
    document.write("Grade: Fail"+'<br/>');
document.write("Remarks: Sorry"+'<br/>');
}

//7. Guess game
var secret_number = 8;
var guess = +prompt("Enter your Guess number from 1 to 10");
if( guess == secret_number){
    alert("Bingo! Correct answer!");
} else if(guess == secret_number-1){
    alert("Close enough to the correct answer");
} else {
    alert("Your guess is wrong");
}

//8. Write a program to check whether the given number is divisible by 3.
var number = +prompt("Enter your number");
var result = number % 3;
if (result == 0){
    alert("Number is divisible by 3");
}
else{
    alert("Number is not divisible by 3");
}

//9. Write a program that checks whether the given input is an even number or an odd number
var number = +prompt("Enter a number");
if(number%2 == 0){
    alert("Number is even");
}
else{
    alert("Number is odd");
}

//10. Write a program that takes temperature as input 
var temp = +prompt("Enter temperature");
if(temp > 40){
    alert("It is too hot outside.");
} 
else if(temp > 30 && temp < 40){
    alert("The Weather today is Normal.");
}
else if(temp > 20 && temp < 30){
    alert("Today’s Weather is cool.");
}
else if(temp > 10 && temp < 20){
    alert("OMG!Today’s weather is so Cool.");
}

//11. Write a program to create a calculator for +,-,*, / & %
var number1 = +prompt("Enter first number");
var number2 = +prompt("Enter second number");
var operation = prompt("Enter operation");
if(operation == "+"){
   result = number1 + number2;
   alert("Result: " +result);
} else if(operation == "-"){
    result = number1 - number2;
    alert("Result: " +result);
 }
 else if(operation == "*"){
    result = number1 * number2;
    alert("Result: " +result);
 }
 else if(operation == "/"){
    result = number1 / number2;
    alert("Result: " +result);
 }
 else if(operation == "%"){
    result = number1 % number2;
    alert("Result: " +result);
 }
 
 //ASSIGNMENT 12-13

 //1. Write a program that takes a character
 var character = prompt("Enter a character");
if(character>= "A" && character <= "Z"){
    alert("Uppercase letter");
}
else if(character>= "a" && character <= "z"){
    alert("Lowercase letter");
}
else if(character>= "0" && character <= "9"){
    alert("Number");
}

//2. Write a JavaScript program that accept two integers and display the larger.
var number1 = +prompt("Enter first number");
var number2 = +prompt("Enter second number");
if(number1 > number2){
    alert(number1+" is the larger number");
}
else if(number2 > number1){
    alert(number2+" is the larger number");
}
else {
    alert("numbers are equal");
}

//3. Write a program that takes input a number from user & state whether the number is positive, negative or zero
var number = +prompt("Enter a number");
if(number > 0){
    alert("Number is positive");
}
else if(number < 0){
    alert("Number is negative");
}
else if(number == 0){
    alert("Number is Zero");
}

//4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel
var ch = prompt("Enter a character");
if(ch == "a" || ch =="i" || ch =="o" || ch=="u" || ch =="e"){
    alert("True");
} else{
    alert("false");
}

//5. Write a program that  a. Store correct password in a JS variable.
var correct_pass = "saylani";
var pass = prompt("Enter your password");
if(pass == ""){
    alert("Please enter your password");
}
else if(pass == correct_pass){
    alert("“Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect Password");
}

//6. This if/else statement does not work. Try to fix it
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting);
}
else {
greeting = "Good evening";
alert(greeting);
}

//7. Write a program that takes time as input from user in 24 hours clock format
var time = +prompt("Enter time in 24 hours format");
if(time >= 0000 && time < 1200){
   alert("Good morning!");
}
else if(time >= 1200 && time < 1700){
    alert("Good afternoon!");

 }
 else if(time >= 1700 && time < 2100){
    alert("Good evening!");
    
 }
 else if(time >= 2100 && time < 2359){
    alert("Good night!");
    
 }

 //ASSIGNMENT 13-15

 //1. Declare an empty array using JS literal notation
var names_array = [];

//2. Declare an empty array using JS object notation
var names_array = new Array();

//3. Declare and initialize a strings array.
var Myarray = ["string","array"];

//4. Declare and initialize a numbers array
var num_array = [1,4,77,9];

//5. Declare and initialize a boolean array.
var boolArray = [true,false];

//6. Declare and initialize a mixed array.
var mixed_Array = [a,b,2,7,true,false];

//7. Declare and Initialize an array and store available education qualifications
var education = [ "SSC", "HSC", "BCS","BS", "BCOM", "MS","M.Phil","PhD"];
var num = [1,2,3,4,5,6,7,8];
document.write("<h1>Qualifications</h1>");
for(i = 0; i<education.length; i++){
    document.write(num[i]+") "+education[i]+'<br/>');
}

//8. Write a program to store 3 student names in an array
var names = ["Micheal","John","Tony"];
var scores = [320,230,480];
var total = 500;
for(i=0; i<names.length; i++){
    document.write("Score of "+names[i]+ " "+ "is "+ scores[i]+"."+"Percentage "+(scores[i]/total)*100+"%"+'<br/>');
}

//9. Initialize an array with color names. Display the array elements in your browser.
var color = ["red","blue","black"];
for(i = 0; i < color.length; i++){
    document.write(color[i]+'<br/>');
}
//. Ask the user what color he/she wants to add to the beginning
var color = ["red","blue","black"];
document.write("List before adding color"+'<br/>');
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+'<br/>');
}
document.write('<br/>');
var add_color = prompt("What color do you want to add in beginning?");
color.unshift(add_color);
document.write("List after adding color"+'<br/>')
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+'<br/>');
}
document.write('<br/>');

//b. Ask the user what color he/she wants to add to the end 
var color = ["red","blue","black"];
document.write("List before adding color"+'<br/>');
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+'<br/>');
}
document.write('<br/>');
var add_color = prompt("What color do you want to add in beginning?");
color.push(add_color);
document.write("List after adding color"+'<br/>')
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+'<br/>');
}
document.write('<br/>');

//c. Add two more color to the beginning of the array
var color = ["red","blue","black"];
document.write("List before adding color:"+'<br/>');
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+" , ");
}
document.write('<br/>');
var add_color = ["brown","yellow"];
color.unshift(add_color);
document.write("List after adding color:"+'<br/>')
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+" , ");
}
document.write('<br/>');

//d. Delete the first color in the array. Display the updated array in your browser
var color = ["red","blue","black"];
document.write("List before adding color:"+'<br/>');
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+",");
}
document.write('<br/>');
document.write('<br/>');
var add_color = ["yellow", "brown"];
color.shift(add_color);
document.write("updated list:"+'<br/>')
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+",");
}
document.write('<br/>');

//e. Delete the last color in the array. 
var color = ["red","blue","black"];
document.write("List before adding color:"+'<br/>');
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+",");
}
document.write('<br/>');
document.write('<br/>');
var add_color = ["yellow", "brown"];
color.pop(add_color);
document.write("updated list:"+'<br/>')
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+",");
}
document.write('<br/>');

//f. Ask the user at which index he/she wants to add a color & color name
var color = ["red","blue","black"];
document.write("List before adding color:"+'<br/>');
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+",");
}
document.write('<br/>');
document.write('<br/>');
var add_color = ["yellow"];
var index = +prompt("Which index to add color?");
color.splice(index,0,add_color);
document.write("updated list:"+'<br/>')
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+",");
}
document.write('<br/>');

//g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete
var color = ["red","blue","black","yellow","pink"];
document.write("List before adding color:"+'<br/>');
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+",");
}
document.write('<br/>');
document.write('<br/>');
//var add_color = ["yellow"];
var index = +prompt("At which index to delete color?");
var remove = +prompt("How many colors to remove?");
color.splice(index,remove);
document.write("updated list:"+'<br/>')
document.write('<br/>');
for(i = 0; i < color.length; i++){
    document.write(color[i]+",");
}
document.write('<br/>');

//10. Write a program to store student scores in an array 
var scores = [320, 230, 480, 120];
document.write("Scores of students: ");
for(i = 0; i < scores.length; i ++){
 document.write(scores[i]+",");
}
document.write('<br/>');
scores.sort();
document.write("Ordered scores of students: ");
for(i = 0; i < scores.length; i ++){
    document.write(scores[i]+",");
   }

//11. Write a program to initialize an array with city names.
var cities = ["karachi", "lahore", "islamabad","quetta","peshawer"];
document.write("City list:"+'<br/>');
for(i = 0; i < cities.length; i ++){
    document.write(cities[i]+",");
   }
document.write('<br/>');   
var selectedcities = cities.slice(0,3);
document.write("Selected cities list:"+'<br/>');
for(i =0 ; i < selectedcities.length; i ++){
    document.write(selectedcities[i]+",");
   }

//12. Write a program to create a single string 
var  arr = ["This", "is",  "my", "cat"];
var joined = arr.join();
document.write("Array:"+'<br/>');
document.write(joined);
document.write('<br/>');
document.write('<br/>');
document.write("String:"+'<br/>');
for(i = 0; i <arr.length; i++){
    document.write(arr[i]+" ");
}

//13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored
var items = ["keyboard", "mouse", "printer", "monitor"];
var display = items.join();
document.write("Display:"+'<br/>'+display+'<br/>'+'<br/>');
for(i = 0; i < items.length; i++){
    document.write("Out:"+'<br/>'+ items[i] +'<br/>');
}

//14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. 
var items = ["keyboard", "mouse", "printer", "monitor"];
var display = items.join();
document.write("Display:"+'<br/>'+display+'<br/>'+'<br/>');
items = items.reverse();
for(i = 0; i < items.length; i++){
    document.write("Out:"+'<br/>'+ items[i] +'<br/>');
}

//15. Write a program to store phone manufacturers
var mobile = ["Apple","Samsung", "Motorola", "Nokia", "Sony" ,"Haier"];
document.write("Dropdown/select:"+'<br/>');
for(i = 0; i <mobile.length; i++){
    document.write(mobile[i]+'<br/>');
}


//ASSIGNMENT 17-20

//1. Declare and initialize an empty multidimensional array
var arr = [
    [],
    [],
    []
    
];

//2. Declare and initialize a multidimensional array 
var arr = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];

for(i = 0; i <arr.length; i++){
      document.write(arr[i]+'<br/>');
   }

//3. Write a program to print numeric counting from 1 to 10 
for(i=1; i<=10; i++){
    document.write(i+'<br/>');
}

//4. Write a program to print multiplication table
var number = +prompt("Enter a number to show it's multiplication table");
var len = +prompt("Enter length of multiplication table");
document.write("Multiplication Table of "+number +" of length "+len+'<br/>'+'<br/>');
for(i=1; i<=len; i++){
    var result = number * i;
    document.write(number+ " x "+i+ " = "+result+'<br/>');
}

//5. Write a program to print items of the following array
var fruits = ["apple", "banana", "mango", "orange","strawberry"];
for(i =0; i < fruits.length;i++){
    document.write(fruits[i]+'<br/>');

}
document.write('<br/>');
for(i=0 ; i< fruits.length;i++){
    document.write("Element at index "+i+" is "+fruits[i]+'<br/>');
}

//6. Generate the following series in your browser
//a. Counting:
document.write("<h1>Counting</h1>"+'<br/>');
for(i =1; i <= 15;i++){
document.write(i+" , ");    
}
//b. Reverse counting:
document.write("<h1>Reverse Counting</h1>"+'<br/>');
for(i =10; i >= 1;i--){
document.write(i+",");    
}
//c. Even:
document.write("<h1>Even</h1>"+'<br/>');
for(i =0; i <=20 ;i++){
    if(i % 2== 0)
    {
      document.write(i+",");
    }
}
//d. Odd:
document.write("<h1>Odd</h1>"+'<br/>');
for(i =0; i <=20 ;i++){
    if(i % 2!= 0)
    {
      document.write(i+",");
    }
}
//e. Series:
document.write("<h1>Series</h1>"+'<br/>');
for(i =1; i <=20 ;i++){
    if(i % 2== 0)
    {
      document.write(i+"k"+",");
    }
}

//7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC bakery. What do you want to order Sir/Ma'am?");
for(i=0; i< items.length; i++){
    if(items[i] == search){
        document.write(items[i] + " is available at index "+i+" in our bakery"+'<br/>');    
    }    
}
if(!items.includes(search) ){
    document.write("We are sorry. "+search + " is not available in our bakery"+'<br/>');
}

//8. Write a program to identify the largest number in the given array
var numbers = [24, 53, 78, 91, 12];
var largest= numbers[0];

for (i=0; i<=numbers.length;i++){
    if (numbers[i]>largest) {
        var largest=numbers[i];
    }
}
document.write(largest+" is the largest number");

//9. Write a program to identify the smallest number in the array
var numbers = [24, 53, 78, 91, 12];
var smallest= numbers[0];
document.write("Array items: "+numbers.join()+'<br/>');

for (i=0; i<=numbers.length;i++){
    if (numbers[i]<smallest) {
        var smallest=numbers[i];
    }
}
document.write("The smallest numbers is "+smallest);

//10. Write a program to print multiples of 5 ranging 1 to 100
for(i=1 ; i <= 100; i++){
    if(i % 5 == 0){
        document.write(i+",");
    }
} */


// SECOND JS ASSIGNMENT. CHAPTERS 21 to 38 //


// Assignment # 21-25 //

//1. Write a program that takes two user inputs for first and last name 

/* var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullNme = firstName +" "+ lastName;
alert("Hello "+fullNme+"!"); */

//2. Write a program to take a user input about his favorite mobile phone model

/* var mobile = prompt("Enter your favourite mobile phone model");
var len = mobile.length;
document.write("My favourite phone is: "+mobile+"<br>");
document.write("Length of string: "+ len); */

//3. Write a program to find the index of letter “n” 

/* var word = "Pakistani";
var find = word.indexOf("n");
document.write("String: "+word+"<br>");
document.write("Index of 'n': "+find); */

//4. Write a program to find the last index of letter “l”

/* var word = "Hello World";
var find = word.lastIndexOf("l");
document.write("String: "+word+"<br>");
document.write("Last index of 'l': "+find); */

//5. Write a program to find the character at 3rd index in the word “Pakistani” 

/* var word = "Pakistani";
var find = word[3];
document.write("String: "+word+"<br>");
document.write("Character at Index 3 : "+find); */

//6. Repeat Q1 using string concat() method.

/* var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName.concat(' ',lastName);
alert("Hello "+fullName+"!"); */

//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad”

/* var word = "Hyderabad";
var replace = word.replace("Hyder", "Islam");
document.write("City: "+ word+"<br>");
document.write("After Replacement: "+replace); */

//8. Write a program to replace all occurrences 

/* var message = "Ali and Sami are best friends. They play cricket and football together.";
var replace = message.replace(/and/g, "&");
document.write("Message: "+ message+"<br>");
document.write("After Replacement: "+replace); */

//9. Write a program that converts a string “472” to a number 472

/* var str = "472";
var num = parseInt(str);
document.write("Value: "+str+"<br>");
document.write("Type: "+ typeof(str)+"<br>");
document.write("Value: "+num+"<br>");
document.write("Type: "+ typeof(num)); */

//10. Write a program that takes user input. Convert and how the input in capital letters

/* var word = prompt("Enter a word");
var capital = word.toUpperCase();
document.write("User Input: "+ word+"<br>");
document.write("Upper Case: "+ capital); */

//11. Write a program that takes user input. Convert and show the input in title case

/* var word = prompt("Enter a word");
var title = word[0].toUpperCase();
var replace = word.replace("f", title);
document.write("User Input: "+ word+"<br>");
document.write("Title Case: "+ replace); */

//12. Write a program that converts the variable num to string.

/* var num = 35.36;
var str = num.toString();
document.write("Number: "+ num+"<br>");
var rem = str.replace(".","");
document.write("Result: "+ rem+"<br>"); */

//13. Write a program to take user input and store username in a variable

/* var username = prompt("enter a username");
if(username.includes("@")||username.includes(",")||username.includes(".")||username.includes("!")){
    alert("Please enter a valid username");
}
else{
    alert("username is valid");
} */

//14. Write a program to enable “search by user input” in an array.

/* var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC bakery. What do you want to order Sir/Ma'am?");
var str1 = search.toLowerCase();
for(i=0; i< items.length; i++){
    if(items[i] == str1){
        document.write(items[i] + " is available at index "+i+" in our bakery"+'<br/>');    
    }    
}
if(!items.includes(str1) || !str1.includes(str1) ){
    document.write("We are sorry. "+search + " is not available in our bakery"+'<br/>');
} */


//15. Write a program to take password as an input from user. 

/* var pass = prompt("Enter your Password");
document.write("Entered Password: "+pass+"<br>");
if(pass.length<6)
{
    document.write("Password length can not be less than 6"+"<br>");
}
else if(pass[0]>= "0" && pass[0]<= "9" ){
    document.write("Password can not start with a number"+"<br>");
}
else{
    document.write("Password is valid"+"<br>");
} */

//16. Write a program to convert the following string to an array using string split method.

/* var university = "University of Karachi";
for(i = 0 ; i < university.length; i++){
document.write(university[i]+"<br>");
}  */

//17. Write a program to display the last character of a user input.

/* var word = prompt("Enter a word");
var len = word.length;
var last = word.charAt(len-1);
document.write("User Input: "+word+"<br>");
document.write("Last character of input: "+ last); */

//18. You have a string “The quick brown fox jumps over the lazy dog”

/* var str = "The quick brown fox jumps over the lazy dog";
var str2 = str.toLowerCase();
var count = str2.match(/the/g);
var result = count.length;
document.write("Text: "+str+"<br>");
document.write("There are "+ result + " occurence(s) of the word 'the'"); */


// Assignment # 26-30 //


//1. Write a program that takes a positive integer

/* var num = +prompt("Enter number");
document.write("Number: "+num+"<br>");
document.write("Round off value: "+Math.round(num)+"<br>");
document.write("floor value: "+Math.floor(num)+"<br>");
document.write("Ceil value: "+Math.ceil(num)+"<br>"); */

//2. Write a program that takes a negative floating point

/* var num = +prompt("Enter floating negative point");
document.write("Number: "+num+"<br>");
document.write("Round off value: "+Math.round(num)+"<br>");
document.write("floor value: "+Math.floor(num)+"<br>");
document.write("Ceil value: "+Math.ceil(num)+"<br>"); */

//3. Write a program that displays the absolute value of a number

/* var num = prompt("Enter a number");
if(num[0]== "-"){
    var abs = num.slice(1);
    document.write("The absolute value of "+num +" is "+abs);
} else{
    document.write("The absolute value of "+num +" is "+num);
} */

//4. Write a program that simulates a dice using random()

/* var num = Math.random()*6;
var random = Math.ceil(num);
document.write("Random dice value: "+random); */

//5. Write a program that simulates a coin toss using random()

/* var num = Math.random()*2;
var toss = Math.ceil(num);
document.write(toss+"<br>");
 if(toss === 1)
{
  document.write("Random coin value: Tails");
} else{
  document.write("Random coin value: Heads");
}  */

//6. Write a program that shows a random number between 1 and 100 in your browser.

/* var num = Math.random()*100;
var random = Math.ceil(num);
document.write("Random number between 1 to 100: "+random); */

//7. Write a program that asks the user about his weight.

/* var weight = prompt("Enter your weight in kilograms");
var num = parseFloat(weight);
document.write("The weight of user is "+num+" kilograms"); */

//8. Write a program that stores a random secret number

/* var random = Math.random() * 10;
var secret = Math.ceil(random);
var guess = +prompt("Enter  number between 1 and 10");
if(guess === secret){
    document.write("Congratutions!");
} else{
    document.write("Try again");
} */


// Assignment # 31-34 //

//1. Write a program that displays current date and time in your browser.

/* var d = new Date();
document.write(d); */

//2. Write a program that alerts the current month in words.

/* var months =['January','February','March','April','May','June','July','August','September','October','November','December'];
var d = new Date();
var month = months[d.getMonth()];
document.write("Current month: "+month);  */

//3. Write a program that alerts the first 3 letters of the current day

/* var days =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
var d = new Date();
var n = days[d.getDay()-1];
var day = n.slice(0,3);
document.write("Today is "+day); */

//4. Write a program that displays a message “It’s Fun day”

/* var days =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
var d = new Date();
var n = days[d.getDay()-1];
if(n == "Sataurday" || n == "Sunday" ){
    document.write("It's Fun day");
} */

//5. Write a program that shows the message “First fifteen days of the month

/* var d = new Date();
var n = d.getDate();
if(n>16){
    document.write("Last days of the month");
}
else if(n<=16){
    document.write("First fifteen days of the month");
} */

//6.Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns

/* var old = new Date("Jan 1, 1970");
var oldmili = old.getTime();
var oldmin = old.getMinutes();
var today = new Date();
var todaymili = today.getTime();
var todaymin = old.getMinutes();
var mili = todaymili - oldmili;
var min = todaymin - oldmili;
document.write("Current Date: "+today+"<br>");
document.write("Elapsed milliseconds since Jan 1, 1970: "+mili);
document.write("Elapsed minutes since Jan 1, 1970: "+min); */

//7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

/* var d = new Date();
var hours = d.getHours();
if(hours < 12){
    alert("It's AM");
} else if(hours >= 12){
    alert("It's PM");
} */

//8. Write a program that creates a Date object for the last day of the last month of 2020

/* var date = new Date();
date.setMonth(11);
date.setDate(31);
date.setFullYear(2020);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
document.write("Later date: "+date); */

//9. Create a date object of the starting date of this Ramadan

/* var ramadan1 = new Date("Jun 18, 2015");  //Ramadan of 2015
var ramadan2 = new Date("Apr 24, 2020");    //Ramadan of 2020
var time = ramadan2.getTime() - ramadan1.getTime(); 
var days = time / (1000 * 3600 * 24);
document.write(days +" days have passed since 1st Ramadan,2015 till 2020"); */


//10. Write a program that displays in your browser the seconds that elapsed

/* var ref_date = new Date("Dec 05, 2015 22:50:16");
var begin_date = new Date("Jan 01, 2015");
var milli = ref_date.getTime() - begin_date.getTime();
var sec = milli/1000;
document.write("On reference date "+ref_date+", "+sec+" seconds had passed since beginning of 2015"); */

//11. Create a Date object for the current date and time.

/* var current = new Date();
document.write("Current date: "+ current+"<br>");
var hours = current.setHours(current.getHours()-1);
document.write("1 hour ago it was "+ current); */

//12. Write a program that creates a date object

/* var today = new Date();
var current_year = today.getFullYear();
var past_years = current_year - 100;
var past = new Date();
past.setFullYear(past_years);
document.write("Current Date: "+today+"<br>");
document.write("100 years back, it was "+past); */

//13. Write a program to ask the user about his age.

/* var age = +prompt("Enter your age");
var current = new Date();
var current_year = current.getFullYear();
var birth_year = current_year - age;
document.write("your age is "+age+"<br>");
document.write("Your birth year is "+birth_year); */

//14. Write a program to generate your K-Electric bill

/* var customer = "ABC Customer";
var months =['January','February','March','April','May','June','July','August','September','October','November','December'];
var d = new Date();
var month = months[d.getMonth()];
var no_of_units = 410;
var charges_per_unit= 16;
var late_payment = 350;
var net_amaount = no_of_units * charges_per_unit;
var gross_amount = net_amaount + late_payment;
document.write("<h1>K-Electric Bill</h1>");
document.write("<br>"+"<br>");
document.write("Customer Name: "+ customer+"<br>");
document.write("Month: "+month+"<br>");
document.write("Number of units: "+no_of_units+"<br>");
document.write("Charges per unit: "+charges_per_unit+"<br>");
document.write("<br>");
document.write("Net amount payable (Within due date): "+net_amaount+"<br>");
document.write("Late payment surcharge: "+late_payment+"<br>");
document.write("Gross amount payable (After due date): "+gross_amount); */


// Assignment # 35-38 //

//1. Write a function that displays current date & time in your browser.

/* function date(){
    var d = new Date();
    document.write(d);
}
date(); */

//2. Write a function that takes first & last name and then it greets the user using his full name.

/* function greet(first_name,last_name){
    var name = first_name + " "+ last_name;
    document.write("Hello "+name);
}
greet("Farwa","Abidi"); */

//3. Write a function that adds two numbers (input by user)

/* function addition(){
    var num1 = +prompt("Enter first number");
    var num2 = +prompt("Enter second number");
    var sum = num1 + num2;
    return sum;
}
alert("Sum is "+ addition()); */

//4. Calculator:

/* function Calculator(num1,num2,operator){
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var operator = prompt("Enter operation");
    if(operator == "+"){
        result = num1 + num2;
        alert("Result: " +result);
        return result;
     } else if(operator == "-"){
         result = num1 - num2;
         alert("Result: " +result);
         return result;
      }
      else if(operator == "*"){
         result = num1 * num2;
         alert("Result: " +result);
         return result;
      }
      else if(operator == "/"){
         result = num1 / num2;
         alert("Result: " +result);
         return result;
      }
      else if(operator == "%"){
         result = num1 % num2;
         alert("Result: " +result);
         return result;
      }
}
Calculator(); */

//5. Write a function that squares its argument.

/* function square(num){
    var sq = num**2;
    return sq;
}
var x = +prompt("Enter a number")
alert("Square of "+x+" is "+square(x)); */

//6. Write a function that computes factorial of a number.

/* function factorial(num) 
{ 
  if (num === 0){
  return 1;
 }
 else{
  return num * factorial(num-1);
 }        
}
var x = +prompt("Enter a number");
alert("Factorial of "+x+" is "+factorial(x));
 */

 //7. Write a function that take start and end number as inputs

 /* function counting(start,end){
     for(i=start; i<=end; i++){
         document.write(i+"<br>");
     }
 }
 var num1 = +prompt("Enter starting number");
 var num2 = +prompt("Enter ending number");
document.write("<h1>Counting</h1>"+"<br>");
document.write(counting(num1,num2)); */

//8. Write a nested function that computes hypotenuse

/* function hypotenuse(base,perp) {
    function square(x) {
         return x*x;
         }
        return Math.sqrt(square(base) + square(perp));
 }
var b = +prompt("Enter base");
var p = +prompt("Enter perpendicular");
alert("Hypotenuse is "+ hypotenuse(b,p)) */

//9. Write a function that calculates the area of a rectangle.

/* function area(width=2,height=5){
    var a = width*height;
    return a;
}
function area2(width,height){
    var a = width*height;
    return a;
}
document.write("Area with Arguments as value"+"<br>");
document.write("Area of rectangle "+ area()+"<br>");
document.write("Area with Arguments as variables"+"<br>");
document.write("Area of rectangle "+ area2(5,9)); */

//10. Write a JavaScript function that checks whether a passed string is palindrome or not?

/* function palindrome(word){
    var reverse = word.split('').reverse().join('');
    if(word == reverse){
        alert("It's a palindrome");
        return reverse
    } else{
        alert("It's not a palindrome");
    }
}
var w = prompt("Enter a word");
palindrome(w); */

//11. Write a JavaScript function that accepts a string

 /* function capital(str) 
{
    str = str.split(" ");
    for (i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}
var str1 ="the quick brown fox";
document.write("EXAMPLE STRING : "+"'"+str1+"'"+"<br>");
document.write("EXPECTED OUTPUT "+"'"+capital(str1)+"'"+"<br>"); */ 

//12. Write a JavaScript function that accepts a string as a parameter and find the longest word

/* function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for ( i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
var str2 = "Web Development Tutorial";
document.write("EXAMPLE STRING : "+"'"+str2+"'"+"<br>");
document.write("EXPECTED OUTPUT "+"'"+longestWord(str2)+"'"+"<br>"); */

//13. Write a JavaScript function that accepts two arguments

/* function countLetter(str,letter){
    var re = new RegExp(letter, 'g')
    var count = str.match(re);
    var result = count.length;
    return result
}
var str2 = "JSResourceS.com";
var let = "o";
document.write(countLetter(str2,let)); */

//14. The Geometrizer

/* function calcCircumference(radius){
    var pi = 3.14
    circumference = 2 * pi * radius;
    return circumference;
}

function calcArea(radius){
    var pi = 3.14
    area = pi * radius**2;
    return area; 
}
var r = +prompt("Enter radius of circle");
document.write("The circumference is "+calcCircumference(r)+"<br>");
document.write("The area is "+calcArea(r)); */


// THIRD JS ASSIGNMENT. CHAPTERS 38 to 67


//Assignment # 38-44

//Write a custom function power ( a, b ), to calculate the value of a raised to b

/* function power(a,b){
    a = +prompt("Enter 1st number:");
    b = +prompt("Enter 2nd number:");
    var res = a**b;
    alert(a+" raised to "+b+" is "+ res);
    return res;
}
power(); */

//2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

/* function leap(year){
    if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
		{
			alert(year+" is a leap year");  
		}
		else
		{
			alert(year+" is not a leap year");  
        }    
    }
var a = +prompt("Enter Year to check if it's a leap year or not:")
leap(a); */

//3. If the lengths of the sides of a triangle are denoted by a, b, and c
  
/* x = +prompt("Enter length of 1st side");
y = +prompt("Enter length of 2st side");
z = +prompt("Enter length of 3st side");

function semiPerimeter(a,b,c){
    var s = ( a + b + c ) / 2;
    return s;
    
}
var S = semiPerimeter(x,y,z);

function area(a,b,c){
    
    var  tri= Math.sqrt((S)*(S-a)*(S-b)*(S-c));
    alert("Area of triangle is: "+ tri);
    return tri;

}

area(x,y,z);
 */

//4. Write a function that receives marks received by a student in 3 subjects  

/* function mainFunction(a,b,c)
{
    a = +prompt("Enter marks of 1st subject:");
    b = +prompt("Enter marks of 1st subject:");
    c = +prompt("Enter marks of 1st subject:");
    function average(){
        var avg = (a+b+c) / 3;
        return avg;
    }
    function percent(){
        var sum = a + b + c;
        var total = 300;
        var per = (sum / total)*100;
        return per
    }
    document.write("Average marks: "+average()+"</br>"+"Percentage: "+ percent()+"%");
}
mainFunction(); */

//5. You have learned the function indexOf. 

/* function index(string, char)
{
    for (i = 0; i < string.length; i++){
        if(string[i] === char){
            return i;
            
        }
        i++;
    }
    return -1;
}
alert("Index is "+ index("hello world", "o")); */

//6. Write a function to delete all vowels from a sentence.

/* function removeVowles(string){
   
    return document.write(string.replace(/[aeiou]/g, ''));
}
removeVowles("This is my beautiful world"); */

//7. Write a function with switch statement to count the number of occurrences
/* function isVowel(char) {
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return true;
      default:
        return false;
    }
  }
  
function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var chars = str.toLowerCase().split("");
    var count = 0;
  
    for( i = 0; i < chars.length - 1; i++) {
      var char = chars[i];
      var next = chars[i + 1];
      if(isVowel(char) && isVowel(next)) {
        count++
      }
    }
    
    return count;
  }
  document.write("Pairs of vowels occurred "+findOccurrences()+ " times");
   */

//8. The distance between two cities (in km.) is input through the keyboard   
 /* function meter(distance){
     var m = distance * 1000;
     document.write("Distance in meter: "+ m+ " m"+"</br>");
     return m ;
 } 
 function feet(distance){
    var f = distance * 3280.84;
    document.write("Distance in feet: "+ f+ " feet"+"</br>");
    return f ;
} 
function inch(distance){
    var i = distance * 39370.1;
    document.write("Distance in inches: "+ i+ " inches"+"</br>");
    return i ;
} 
function centimeter(distance){
    var c = distance * 100000;
    document.write("Distance in centimeter: "+ c+ " cm"+"</br>");
    return c ;
} 
var dist = +prompt("Enter distance in km:");
meter(dist);
feet(dist);
inch(dist);
centimeter(dist); */

//9. Write a program to calculate overtime pay of employees. 
/* var time_worked = 0
var over_time = 0
var overtime_pay = 0;
var number = +prompt("Enter number of employees:")
	for (i = 1; i <= number; i++)
	{
		time_worked = +prompt("Enter the time employee worked in hr")
		if (time_worked>40)
		{
			over_time = time_worked - 40;
			overtime_pay = overtime_pay + (12 * over_time);
		}
	}
    document.write("Total overtime pay of "+number+ " employees is "+ overtime_pay); */
    
//10. A cashier has currency notes of denominations 10, 50 and 100 

/* var amount = +prompt("Enter your amount in hundreds");
var hundred = Math.floor( amount/100);
amount = amount - hundred*100 
document.write("You will have "+hundred+ " hundreds notes ");
var fifty = Math.floor(amount/50); 
amount = amount - fifty*50
document.write(fifty+ " fifty notes ");
amount = Math.floor(amount/10);  
document.write(amount + " ten notes"); */

//Assignment # 43-48

//1. Show an alert box on click on a link.
/* function showalert(){
    alert("Alert box!!!");
} */

//2. Display some Mobile images in browser.
/* function showalert(){
    alert("Thanks for purchasing a phone from us");
} */

//3. Display 10 student records in table and each row should contain a delete button

/* function deleteRow(id) {
      document.getElementById(id).remove();
  } */

//4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.
 
/* function newimage(){
     document.getElementById("img1").src = "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
 }  
 function oldimage(){
     document.getElementById("img1").src = "https://images.pexels.com/photos/36753/flower-purple-lical-blosso.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"

 } */

//5. Show a counter in browser.
 
/*  var num = 0
 var number = document.getElementById("num")
 function increase(){
    num++;
    number.innerHTML = num;
    
 }
 function decrease(){
    num--;
    number.innerHTML = num;
} */

//Assignment # 49-52

//1. Create a signup form and display form data in your web page on submission.

/* function getFormvalue()
{
  var x=document.getElementById("form1");
  for (var i=0;i<x.length;i++)
  {
   if (x.elements[i].value!='Submit')
    {  
      document.write(x.elements[i].value+"<br>");
     }  
   }
} */

//2. Suppose in your webpage there is content area

/* function show(){
    document.getElementById("text").innerHTML = document.getElementById("more").innerHTML;
} */

//3. In previous assignment you have created a tabular data using javascript. 

/* function add(){
    var tbl = document.getElementById("mytable");
    var row = tbl.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    cell1.innerHTML = document.getElementById("roll").value;
    cell2.innerHTML = document.getElementById("name").value;
    cell3.innerHTML = document.getElementById("class").value;
    cell4.innerHTML='<button type="button">Delete</button>';
    cell4.addEventListener ("click", function() {
        row.remove();
      });
    cell5.innerHTML='<button type="button">Edit</button>';
    cell5.addEventListener ("click", function() {
      document.getElementById("roll").value =  cell1.innerHTML;
      document.getElementById("name").value =  cell2.innerHTML;
      document.getElementById("class").value =  cell2.innerHTML;
      row.remove();
      });
} */

//Assignment # 53-58

//Modal Images

/* function showImg(e){
    var image = document.getElementById("modalimg");
    image.src = e.src;
}
function zoombtn(e){
    var btn = document.getElementById("zoomin").onclick = function (){
        var image = document.getElementById("modalimg");
    image.src = e.src;
    var width = image.clientWidth;
    image.style.width = (width+10)+"px";
    var height = image.clientHeight;
    image.style.height = (height+10)+"px" ;

    }
    var btn = document.getElementById("zoomout").onclick = function (){
    var image = document.getElementById("modalimg");
    image.src = e.src;
    var width = image.clientWidth;
    image.style.width = (width-10)+"px";
    var height = image.clientHeight;
    image.style.height = (height-10)+"px" ;

    }

  
} */


//Assignment # 58-67

//1. Consider you have following code snippet

//i

/* var v = document.getElementById("main-content"); */
//ii

/* var c = document.getElementById('main-content');
var children = c.children;
console.log(children); */
//iii

/* var f = document.getElementsByClassName('render');
for (var i = 0; i < f.length; ++i) {
    document.write(f[i].innerHTML);
} */
//iv

/* var t = document.getElementById("first-name");
t.value = "Farwa"; */
//v

/* var t = document.getElementById("last-name");
var x = document.getElementById("email");
t.value = "Abidi";
x.value = "rfarwa50@gmail.com";
 */

//2. use HTML code of question 1 and show the result on browser

//i

/* var v = document.getElementById("form-content");
var x = v.nodeType;
document.write(x); */

//ii

/* var v = document.getElementById("lastName");
var s = document.getElementById("lastName");
var y = s.nodeType;
var x = v.nodeType;
document.write(x);
document.write(y); */

//iii

/* var v = document.getElementById("lastName");
var s = v.childNodes[0];
s.textContent = "Last Name: Allen" */

//iv

/* var c = document.getElementById('main-content');
document.write(c.firstChild);
document.write(c.lastChild);
 */

//v

/* var v = document.getElementById("lastName");
document.write(v.previousElementSibling);
document.write(v.nextElementSibling); */

//vi

/* var v = document.getElementById("email");
document.write(v.parentNode);
document.write(v.nodeTypve); */





