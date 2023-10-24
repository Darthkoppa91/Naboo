// var x = "my random";

// function isString(x) {
// if (typeof x === "string") {
//   return true;
// }
// return false;
// }

// var y = 12;
// function isBlank(x) {
//   if (x === " " ) {
//     return true;
//   }
//   return false;
  
// }
// console.log(isBlank(y));

// var str="Ha";
// function conkatenacija(str,n = 1) {
//     var e = "";
//     for(var i =1; i<=n; i++){
//        e+=str; 
//       }  
//       return e

// }
// console.log(conkatenacija(str,3))


 
// var inputString="My random string";
// function numCounter(inputString, findLetterN,) {
//     var counter = 0;
//     var n = inputString.length;
//     for(var i =0; i<=n; i++) {
//         if(inputString[i] ===findLetterN ){
//             counter++;
//         }
        
//     }
//     return counter;
// }


// console.log(numCounter("my random string", "n"));


// function firstOccurance(inputString, inputLetter) {

//     var index = -1;
//     var n = inputString.length;
//     for(var i =0; i<n; i++ ){
//         if(inputString[i] === inputLetter) {
//             index =i;
//             break;
//         }
//     }
//     return index;
// } 
// console.log(firstOccurance("my random string", "n"));


// function firstOccurance(inputString, inputLetter) {

//     var index = -1;
//     var n = inputString.length;
//     for(var i =0; i<n; i++ ){
//         if(inputString[i] === inputLetter) {
//             index =i;
//             continue;
//         }
//     }
//     return index;
// } 
// console.log(firstOccurance("my random string", "n"));


// function lastOccurance(inputString, inputLetter) {
//     var index = -1;
//     var n = inputString.length;
//     for( var i= n-1; i>=0;i--) {
//         if(inputString[i] === inputLetter){
//             index = 1;
//             break;

//         }
//     } return index;

// }
// console.log(lastOccurance("my random string","n"));

// funkcija koja ocekuje 2 parametra, prvi paramentar je ime , drugi je preizme. zeelim da mi se vrati string koji je  pocetno slovo imena +pocetno slovo prezimena//


// function firstLetterOfName(inputName, InputLastname) {
//     return inputName[0]+ InputLastname[0]
// }
//         console.log(firstLetterOfName("aca","koppa"));

        
    var inputString = "daily doze of remarsks";
function firstNcaracter(inputString, smile) {
            smile = "...";
        return inputString[0];
}
console.log(firstNcaracter("daily doze of remarks", "..."))
