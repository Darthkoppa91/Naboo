// function sabiranje (a =4,b=6, print=6){
//     print (a,b);
//     return a+b;

// }
// var result = sabiranje(3,4,console.log)

// console.log(result);

// 1. write program that calculates maxiumum of two given numbers//

// function max (a,b) {
//     return a+b;
// }
// console.log( 15,43)

// function isOdd (number) {

//     if(number%2 ===0) {
//         return true;
//     }
//     else if (number%2 ===1) {
//         return false
//     }

// }
// console.log(isOdd(14));

//3. write a program that check if a given number is a tree digit long number//

// function checkDigit (number){
//     var stringNum = number +"";
//     if (stringNum.length ===3){
//         return true;
//     }
//     return false;
// }
// console.log(checkDigit(232));

//4.write a program that calculates an aritmethic mean of 4 number//

// function average (a,b,c,d) {

//     var suma =a+b+c+d;

//     return suma/4;
// }
// console.log(average(3,55,12,66))

//7. write a program that calculates a number of digits of a given number.//

// function numberDigit(num) {

//     var stringToNum = num + "";

//     return stringToNum.length;
// }
// console.log(numberDigit(1381213.92))

//8. write a program that calculates a number of apperances of a given number in a given array.
// Inputs a = [2,4,7,8,7,7,1], e =7//

// function checkAppearances (niz, e) {

//     var counter = 0;
//     for(var i = 0; i<niz.length; i++){
//         if(niz[i] ===e ) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(checkAppearances([2,4,7,8,7,7,1],7))


//9. write a program that calculates sum of odd elements of a given array.//

// function calculatesumOfOdd (array) {
//         var sum = 0;
//         for(var i = 0 ; i<array.length; i++){
//             if(array[i]%2 !==0){
//                 sum = sum +array[i];
//             }
//         }
// return sum

// }
// console.log(calculatesumOfOdd([1,2,3,4,5,6,7,8,9]));

//10. write a program that calculates the number of appearances of letter a in a given string. Modifyy the program so it calculates  the number of both letters a and A.

// function numberofApppearances (letter) {
//     var counter =0;
//     for ( var i =0 ; i<letter.length;i++) {
//         if(letter[i] === "A" || letter[i]==="a") {
//             counter++;

//         }
//     }
//     return counter;
// }
// console.log(numberofApppearances("Ana voli milovanA"));

//10. write a program that concatenates a given string given number of times. for ex. if "abc" and 4 are given values the program shall prints out abcabcabcabc//

function concatenates(string, number) {

    var empthyString ="";
    for ( var i = 1; i<=number; i++){
            empthyString+= string;

    }
    return empthyString;
}
console.log(concatenates("brb", 5));
