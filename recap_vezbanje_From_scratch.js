// //1. Create several variables using different letter cases and beginning characters. Check if they still exist if you refer to them in different case - does case matter here? Try to declare a variable
// starting with number as the first character.//

// var Djole = 1;
// var 3Djole = 213;
// var DjOle = "";
// var Djole123 = 1/2;;





// 2. Save a string (text) describing your current mood in a variable and print it out in console.

var mood = "anxiaty";
console.log(mood);



// 3. Feel free to play around in the console and get familiar with it.
// Arithmetic operators

var x = 12;
var y = 23
var suma = x+(y-x)*x*2-(x-x*x) ;
console.log(suma);

// 4. Play around in the console: add, subtract, multiply and divide some numbers. Use numbers
// stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3.
// Why do we get these results?
function result(a,b,c){
    //return a-b-c;
    //return a*b-c/a;
    return a/b-c;
}

console.log(3-2-31)
console.log(3*5-7/3)
console.log(4/2-1)
console.log(14*3)
console.log(result(3,2,31));



// 5. How many grams weight 1.2kg of bananas?




// 6. How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What
// about Tom who is being late half an hour? It is hard to be on time these days…



// 7. How many MB of additional memory we have if we buy a 4GB USB stick? How many news
// articles each in size 98KB can fit in it?




// 9. Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?




// 10. Create the following variables:
// - a variable containing your name,
// - a variable containing your age,
// - a variable describing if you have a cat or not.
// * Each variable has to start with a different type of character.
// Print them all out in the console and check their types.





// 11. Check which type are these values:
// - “number”
// - true
// - null
// - “false”
// - 56

// Logical operators





// 12. Check how good you are at guessing the Boolean equivalent of different values using the
// console. Do you remember how to check for a Boolean equivalent of a value?






// 13. Use the console to check the results you think should go in the following table:

// p q p &amp;&amp; q p || q
// true true
// true false
// false true
// false false




// 14. If the variable age stores the information about user’s age, how we can check whether it
// contains a correct value? Write expressions for checking:
// ● Is age negative value
// ● Is age greater than 120

var age = -1;
if (age <0 ) {
    console.log( "its negative value ")
}
else if(age > 120) {
    console.log( "age is positive")
}
else {
    console.log("neither")
}

// 15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If
// we store the current speed value in the variable speed. Write an expression which will check if
// we are driving drive safely or not? (true if we are driving safe and false if not)
var speed = 47
if (speed >=60 && speed <=120) {
    console.log("true - ur in safe zone")
}
else if ( 120 < speed) {
    console.log("false - slow down")    
}
else {
    console.log("speed up")
}


// w..Task 1. Write a conditional statement to find the sign of product of three numbers. Display the
// result in the console with the specified sign.
// Sample numbers: 3, -7, 2
// Output: The sign is -





// Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the
// console.
// Sample numbers: -5, -2, -6, 0, -1
// Output: 0

// Task 3. Write a conditional statement to print three numbers as sorted number list.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

// Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is
// divisible by 2. If it is, print the result, if not, show “X”.
// Sample input: 10 Sample input: 7
// Output: 10 / 2 = 5 Output: X

// Task 5. Write a program that compares two numbers and displays the larger. Display the result in
// the console.

// Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Sample Input: 60°C
// Output : 60°C is 140 °F

// Task 7. Write a JavaScript program to get the difference between a given number and 13, if
// the number is greater than 13 return double difference between that number and 13.
// Sample Input: 11 Sample Input: 32
// Output : 2 . Output : 38
// ( Math.abs( number ) )
// Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
// values are same, then returns triple their sum.
// Sample Input: 12,5 Sample Input: 8,8
// Output : 17 Output : 48
// Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
// the number is 50 or if their sum is 50.
// Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10

// Output : - Output : true Output : true

// Task 10. Write a JavaScript program to check a given integer is within 20 to100 or 100 to
// 400, and print range in which number belongs.
// Sample Input: 13 Sample Input: 34 Sample Input: 256
// Output : - Output : 20 ⇔ 100 Output

 // ARRAYS //


// 1. Write an array of months in a year. Using console.log display June, October and January from the array.

var monthInYear = ["Jan","Feb","Mar", "April" , "May", "June", "Jully", "August", "Sept", "Oct", "Nov", "Dec" ];
console.log(monthInYear[6],monthInYear[9], monthInYear[1]);

// 2. Write an arrays of days in a week. Using console.log display Sunday from the array.

var daysInWeek =["mon", "tue", "wesn","thurs", "fri","sat","sun"];


console.log(daysInWeek[daysInWeek.length-1]);

// 3. Print all negative elements from the 
// var array1 = [2, -4, 5, -2, -11];

// if (array[0] <0) {
// console.log(array[0] + " negativni")
// }
// if (array[1] <0) {
//     console.log(array[1] + " negativni")
//     }
// if (array[2] <0) {
//     console.log(array[2] + " negativni")
//     }
// if (array[3] <0) {
//     console.log(array[3] + " negativni")
//     }
// if (array[4] <0) {
//     console.log(array[4] + " negativni")
//     }


// 4. Print all elements with indices divisible by 3 from the 
var array= [5, 15, -5, 20, 12, 18,72, 14, 9];
    if(array[0]%3 ===0){
        console.log(array[0] + " number is divisable by 3")
    }
    if(array[1] %3 ===0){
        console.log(array[1] + " number is divisable by 3")
    }
    if(array[2] %3 ===0){
        console.log(array[2] + " number is divisable by 3")
    }
    if(array[3] %3 ===0){
        console.log(array[3] + " number is divisable by 3")
    }
    if(array[4] %3 ===0){
        console.log(array[4] + " number is divisable by 3")
    }
    if(array[5] %3 ===0){
        console.log(array[5] + " number is divisable by 3")
    }
    if(array[6] %3 ===0){
        console.log(array[6] + " number is divisable by 3")
    }
    if(array[7] %3 ===0){
        console.log(array[7] + " number is divisable by 3")
    }
    if(array[8] %3 ===0){
        console.log(array[8] + " number is divisable by 3")
    }
   



// 5. What is the index of number 24 in the following array?

var niz =[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
 10, 26, 7]];
// Using console.log:
// ● Display the 3rd element of the array,
// ● Display the 2nd element of the 3rd element.

console.log(niz[2]);
console.log(niz[2][1]);
console.log(niz[0][3])



// Write a program that will iterate from 0 to 10 and display squares of numbers.


 var y = 1200;
    for (var i =1; i<10; i++) {
        var x = i* y;
   console.log(x);
    }

// 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.


 for (var i = 0; i<15; i++) {
        if(i %2===0){
            console.log(i + "  even");
        }  
        else {
            console.log(i + "  odd")
        }  
    
 }
// 2. Write a program to sum the multiples of 3 and 5 under 1000.
//
var sum=0 ;
for (var i =1; i<1000; i++){
    if (i%3===0 && i%5===0) {
        sum+=i;   
    }   
}
console.log(sum)
// 3. Write a program to compute the sum and product of an array of integers.
var array = [23,7,14,26,44,15,71];
var sum = 0;
var product = 1;
    for ( var i =1 ; i<array.length; i++){
            sum+=array[i];
            product*= array[i];
    }
console.log(sum)
console.log(product)

// 4. Write a program which prints the elements of the following array as a single string.

var x = ["1","A", "B","c", "r", true, NaN, undefined ];
var empthy = "";

for( var i =0; i<x.length; i++){
    empthy+=x[i];

}
console.log(empthy)


// 5. Write a program that prints the elements of the following array.
 var a = [[1, 2, 1, 24],[8, 11, 9, 4],[7, 0, 7, 27]
];
   
    for( var i =0; i<a.length;i++) {
        console.log(a[i])
    }

// 6. Write a program that outputs the sum of squares of the first 20 numbers.
 var sum =0;
    for(var i =1; i<=20;i++){
        sum +=i*i;


    }
console.log(sum)


// 7. Write a program that computes average marks of the following students. Then use this
// average to determine the corresponding grade.

// David 80
// Marko 77
// Dany 88
// John 95
// Thomas 68
// The grades are computed as follows :

// &lt; 60% F
// &lt; 70% D
// &lt; 80% C

// &lt; 90% B
// &lt; 100% A

// 8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
// exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
// divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
// program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
// &quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).
// Note: This is actually an interview question that has been claimed to weed out a significant
// percentage of programmer candidates. So if you’ve solved it, you’re now allowed to feel
// good about yourself.


// var res = '\n';
// for (var i = 0; i < 5; i++) {
//     for (var j = 0; j < 5; j++) {
//         res += '*\t';
//     }
//     res += '\n';
// }
// console.log(res)


// FUNKCIJE //


// 1. Write a program that calculates the maximum of two given numbers.


function maximum(a,b) {
console.log(a+b);
return a+b;

}
maximum(9,-7,4,5);

//2. Write a program that checks if a given number is odd.

function isNumOdd (x) {
        if(x%2!==0){


        return "odd"
        }

    return "even"
}
console.log(isNumOdd(71))


//3. Write a program that checks if a given number is a three digit long number.

  var n="";
function isNum (n) {
  if(typeof n ==="umber" && n >=100 && n<= 999){
        return true;
  }
  return false;

 }
 console.log(isNum(123));
// 4. Write a program that calculates an arithmetic mean of four numbers.
var sum =0;
niz =[];
function Arithmetic(a,b,c,d) {
    for (var i =0; i <=4; i++){
        sum+=i;
        if(sum%4 ===0){
    


// 5. Write a program that draws a square of a given size. For example, if the size of
// square is 5 the program should draw:
// *****
// * *
// * *
// * *
// *****
// 6. Write a program that draws a horizontal chart representing three given values.
// For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *
// 7. Write a program that calculates a number of digits of a given number.
// 8. Write a program that calculates a number of appearances of a given number in a
// given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3
// 9. Write a program that calculates the sum of odd elements of a given array.
// 10. Write a program that calculates the number of appearances of a letter a in a
// given string. Modify the program so it calculates the number of both letters a and
// A.
// 11. Write a program that concatenates a given string given number of times. For
// example, if “abc” and 4 are given values, the program prints out abcabcabcabc

// PRVI ZADATAK
// while (i > 0) {
//   console.log(i);
// }
// OUTPUT: ?

// DRUGI ZDATAK
// for (var i = 0; i > 0; i++) {
//   console.log("broj iteracije: " + i);
// }
// OUTPUT: ?

// TRECI ZADATAK
// for (var i = niz.length - 2; i > 2; i++) {
//   console.log("ista iteracija");
// }
// OUTPUT: ?

// CETVRTI ZADATAK
// do {
//   var i = 2;
//   i++;
//   console.log(i);
// } while (3 < 8);
// OUTPUT: ?

// PETI ZADATAK
// var b;
// for (var i = 0; i === 3; i++) {
//   console.log(b);
// }
// OUTPUT: ?

// SESTI ZADATAK
// for (;;) {
//     console.log("U peetlji sam!");
// }
// OUTPUT: ?

// SEDMI ZADATAK
// while (true) {
//   var result = 2;
//   var newResult = result++;
//   console.log(newResult);
// }
// OUTPUT: ?

// OSMI ZADATAK
// var i = 20;
// do {
//   i = i - 1;
//   console.log(i);
//   i--;
// } while (i > 0);
// OUTPUT: ?

// DEVETI ZADATAK
// var i = 20;
// while (i > 0) {
//   i = i - 1;
//   i--;
//   console.log(i);
// }
// OUTPUT: ?

// DESETI ZADATAK
// var suma = 0;
// for(var i = 0; i < 5; i+=5){
//     suma = suma + i;
// }
// console.log(suma);
// OUTPUT: ?

// JEDANAESTI ZADATAK
// for (var i = 0; i < 7; i += 2) {
//   console.log(i);
//   i++;
// }
// OUTPUT: ?

// DVANAESTI ZADATAK
// while (false == false) {
//   console.log("false");
// }
// OUTPUT: ?

// TRINAESTI ZADATAK
// var i = 0;
// do {
//   i++;
//   console.log(i);
// } while (i > 0);
// OUTPUT: ?

// CETRNAESTI ZADATAK
// for (var dinosaurus = 9; dinosaurus >= 0; dinosaurus--) {
//   console.log("Dino Petljin");
// }
// OUTPUT: ?

// PETNAESTI ZADATAK
// for (var peraMikaZika = 3; peraMikaZika < 9; peraMikaZika++) {
//   peraMikaZika -= 0.5;
//   console.log("Pera Mika Zika");
// }
// OUTPUT: ?

// SESNAESTI ZADATAK
// while ("false") {
//   for (var i = 0; i < ctrl.length; i++) {
//     console.log("FOR U WHILE-U");
//   }
// }
// OUTPUT: ?

// SEDAMNAESTI ZADATAK
// for (i = 0; i < 1; i++) {
//   var j = 5;
//   while (j > 0) {
//     console.log(i);
//     j--;
//   }
// }
// OUTPUT: ?

// OSAMNAESTI ZADAATAK
// var niz = [];
// for (var i = 0; i < 3; i++) {
//   for (var j = 0; j < 3; j++) {
//     niz[niz.length] = i + j;
//   }
// }
// console.log(niz);
// OUTPUT: ?

// DEVETNAESTI ZADATAK
// while (2 == "2") {
//   var ipsilon = 2 ** 2;
//   var gama = ipsilon * Math.sqrt(4);
//   var result = gama * ipsilon;
//   console.log("Kakav bi rezultat bio da sam stavio === ?");
// }
// OUTPUT: ?

// DVADESETI ZADATAK
// for (var i = 0, j = 0; i < 5 && j < 10; i++, j++) {
//   console.log(i, j);
// }
// OUTPUT: ?

// DVADESETPRVI ZADATAAK
// do {
//   console.log("Da li ovo radi?");
// } while (true == 1);
// OUTPUT: ?

// DVADESETDRUGI ZADAATAK
// for (var i = 0; i < 30; i = i + 3) {
//   console.log(i + 2);
// }
// OUTPUT: ?
