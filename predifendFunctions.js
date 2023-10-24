console.log(isFinite(undefined));
console.log(parseInt("234ajakljgj"));
console.log(parseFloat("0.19999adasldaskd"));
//console.log(isNaN(123x));


var array  = ["1","21",undefined,"42", "1e+3",Infinity]
function conversion(arr) {
    var outputArr =[];
    for(var i =0; i< arr.length;i++ ) {
        if(isFinite(arr[i])){
            outputArr.push(parseFloat(arr[i]))
        }
    }
    return outputArr;
}

console.log(conversion(array))



// function numOfDigits(num){
//     return (num+"").length;
// }

// function numOfDigits(num) {
//   var counter = 1;
//   while (num >= 1) {
//     var cifra = num % 10;
//     num = num - cifra;
//     num = num / 10;
//     counter++;
//   }
//   return reversed;
// }

// console.log(numOfDigits(123445));

// function reverseNumber(number) {
//   var numberToString = number + "";
//   var reversedNumber = "";
//   var n = numberToString.length;

//   for (var i = n - 1; i >= 0; i--) {
//     reversedNumber += numberToString[i];
//   }
//   return +reversedNumber;
// }

// console.log(reverseNumber(123456) );

// function reverseString(input) {
// var inputToString = (input + "");
//   var outputReversed = "";
//   var n = inputToString.length;
//   //   for (var i = 0; i < n; i++) {
//   //     outputReversed += input[n - 1 - i];
//   //   }
//   for (var i = n - 1; i >= 0; i--) {
//     outputReversed += inputToString[i];
//   }
//   return outputReversed;
// }
// //                        argument -> parametar (input)
// console.log(reverseString(12345456));
// console.log(reverseString(123));

// function mathReverseNumber(input){
//     var outputReversed = 0;
//     while(input >= 1) {
//         var cifraJedinice = input % 10;
//         input -= cifraJedinice;
//         input /= 10;
//         outputReversed = (outputReversed * 10) + cifraJedinice;
//     }

//     return outputReversed;
// }
// console.log(mathReverseNumber(9123485))

// 10. zadatak
// Write a program that calculates the number of appearances of a letter a in a
// given string. Modify the program so it calculates the number of both letters a and
// A.

// function appearancesA(input) {
//   var counter_a = 0;
//   var counter_A = 0;
//   for (var i = 0; i < input.length; i++) {
//     if (input[i] === "a") {
//       counter_a++;
//     }

//     if (input[i] === "A") {
//       counter_A++;
//     }
//     // if(input[i].toLowerCase() === "a"){
//     //     counter++;
//     // }
//   }
//   return "Velikih slova A ima: " + counter_A + ", a malih :" + counter_a;
// }
// console.log(appearancesA("AkjsdbkahjsaaaabdA"));



// 11. zadatak
// Write a program that concatenates a given string given number of times. For
// example, if "abc" and 4 are given values, the program prints out abcabcabcabc.

// function concatenate_x_times(inputString, inputNumber){
//     var outputString = "";
//     for(var i = 0; i < inputNumber; i++){
//         outputString += inputString;
//     }
//     return outputString;
// }
// console.log(concatenate_x_times("ab", 3))


var array = [123, 456, 214, 678, 911];
// za zadati niz, proci kroz niz, proveriti koliko elemenata niza u sebi sadrzi cifru 1;
// Na kraju vratiti  broj elemenata sa cifrom 1;

var array = [123, 456, 214, 678, 911, 1111111];
// za zadati niz, proci kroz niz, proveriti koliko elemenata niza u sebi sadrzi cifru 1;
// Na kraju vratiti broj elemenata sa cifrom 1;
function calcNumber1(inputArray, numberToFind) {
  var counter = 0;
  var arrayOfFoundElements = [];
  var n = inputArray.length;
  for (var i = 0; i < n; i++) {
    var stringElement = inputArray[i] + "";
    var x = stringElement.length;
    for (var j = 0; j < x; j++) {
      if (stringElement[j] == numberToFind) {
        counter++;
        arrayOfFoundElements.push(inputArray[i]);
        break;
      }
    }
  }
  return "Brojevi su: " + arrayOfFoundElements + ", a ima ih: " + counter;
}
console.log(calcNumber1(array, 1));

// var niz = ["1", "21", undefined, "41", "1e+3", Infinity, "2000", NaN];

// function checkNumber(arr){
//     var otuputArr = [];
//     for(var i = 0; i < arr.length; i++){
//         if(typeof arr[i] === "string"){
//             if(typeof +arr[i] === "number"){
//                 otuputArr.push(+arr[i])
//             }
//         }
//     }
//     return otuputArr;
// }
// console.log(checkNumber(niz));

// 4. zadatak
// Write a function to count the number of letter occurrences in a string.

// function countLetterOccurence(inputString, inputLetter){
//     var counter = 0;
//     var n = inputString.length;
//     for(var i = 0; i < n; i++){
//         if(inputString[i].toLowerCase() === inputLetter){
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(countLetterOccurence("Myn randNom string", "n"));

// 5. zadatak
// Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1.

// function firstOccurence(inputString, inputLetter){
//     var index = -1;
//     var n = inputString.length;
//     for(var i = 0; i < n; i++){
//         if(inputString[i] === inputLetter){
//             index = i;
//             break;
//         }
//     }
//     return index;
// }
// console.log(firstOccurence("my random string", "n"))

// 6. zadatak
// Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.

// 1. nacin
// function lastOccurence(inputStrnig, inputLetter){
//     var outpitArray = [];
//     var n = inputStrnig.length;

//     for(var i = 0; i < n; i++){
//         if(inputStrnig[i] === inputLetter){
//             outpitArray.push(i)
//         }
//     }
//     if(outpitArray.length === 0){
//         return -1;
//     }
//     return outpitArray[outpitArray.length - 1]
// }
// console.log(lastOccurence("my random string", "n"))

// 2. nacin
// function lastOccurence(inputString, inputLetter){
//     var index = -1;
//     var n = inputString.length;
//     for(var i = n - 1; i >= 0; i--){
//         if(inputString[i] === inputLetter){
//             index = i;
//             break;
//         }
//     }
//     return index;
// }
// console.log(lastOccurence("my random string", "n"));

// 3. nacin
// function firstOccurence(inputString, inputLetter) {
//   var index = -1;
//   var n = inputString.length;
//   for (var i = 0; i < n; i++) {
//     if (inputString[i] === inputLetter) {
//       index = i;
//       continue;
//     }
//   }
//   return index;
// }
// console.log(firstOccurence("my random string", "n"));

// 7. zadatak
// Write a function to convert string into an array. Space in a string should be represented as
// "null" in new array.

// function spaceToNull(inputString) {
//   var otuputArr = [];
//   var n = inputString.length;
//   for (var i = 0; i < n; i++) {
//     if (inputString[i] === " ") {
//       otuputArr.push(null);
//     } else {
//       otuputArr.push(inputString[i]);
//     }
//   }
//   return otuputArr;
// }
// console.log(spaceToNull("my random string"));


// 8. zadatak
// Write a function that accepts a number as a parameter and checks if the number is prime or
// not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

// function isPrime(n){
//     //                 n - 1
//     for(var i = 2; i < n / 2; i++){
//         if(n % i === 0){
//             return "Nije prost";
//         }
//     }
//     return "Prost je";
// }
// console.log(isPrime(123))
// za domaci -> poboljsaati uslov for petlje


// 9. zadatak
// Write a function that replaces spaces in a string with provided separator. If separator is not
// provided, use "-" (dash) as the default separator.

// function replaceSpace(inputString, charToReplace){
//     var outputString = "";
//     var n = inputString.length;
//     for(var i = 0; i < n; i++){
//         if(inputString[i] === " "){
//             outputString += charToReplace;
//         }
//         else {
//             outputString += inputString[i];
//         }
//     }
//     return outputString;
// }
// console.log(replaceSpace("my random string", "   "))


// napisati funkciju koja ocekuje 2 parametra ( ime, prezime).
// F-ja treba da vrati string koji je pocetno slovo imena + pocetno slovo prezimena


// console.log(parseFloat("123.299").toFixed(2))








