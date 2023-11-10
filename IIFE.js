

//callback primer// prvi nacin


// function prolazakKrozNiz(niz, callback) {
//   var output = [];
//   for (var i = 0; i < niz.length; i++) {
//     if(callback(niz[i])){
//         output.push(niz[i]);
//     }
//   }
//   return output;
// }

// var result = prolazakKrozNiz([1, 2, 3, 4, 5, 6, 7], function (broj) {
//   if (broj % 2 === 0) {
//     return true;
//   }
//   return false;
// });
// console.log(result)


// //IIFE - immediate invoke function expresesion//

// var iife = (function(broj){
//     return 1;
// })(7)
// console.log(iife);
// // prvi nacin iife//
// var iife = (function(broj){
//     return 1;
// }(7))
// console.log(iife);

// //drugi nacin iife//

// // napravi funkciju koja prolazi kroz niz //
// //koja racuna sumu i vraca dal je broj sume paran ili neparan

// function throughArray(niz,callback,callback2){

//   // for ( var = 0 ;i<niz.length; i++){
//   //   console.log(niz[i]);
//   // }

//   var sum = callback(niz);
//   var even = callback2(sum);
//   return even;
//   return callback2(sum)
// }

// function suma(niz){
 
//   var suma =0;
//   for( var i = 0; i<niz.length;i++){
//     suma += niz[i] 

//     return suma
//   }

// }

// function even(num){
//   if ( num %2=== 0){
//     return "even"
//   }
//   return "odd"
// }
// console.log(throughArray([1,2,3,4],suma,even));




// funkcija koja prolazi kroz niz //
// funkcija koja proverava dal je tip podatka broj //
//funkcija koja suma te funcije koji su brojevi //


// function prolazak(niz, cb) {
//     var suma =0;
//   for ( var i =0; i<niz.length; i++){
    

//     if (cb(niz[i])){
//       suma+=niz[i]

//     }

//   }
//   return suma;
// }
// function checkType(element) {
//   if(typeof element==="number" && !isNaN(element)){
//     return true
//   }
//   return false
// }
  
// console.log(prolazak([1,"2",undefined,"joka",3,null, 4,5, NaN],checkType))


//IIFE that loogs  Hello world to the console //
// (function (){
//   console.log("hello world")
// })()

// IIFE tbat tames a name parameter and logs " hello, name!" to the console//

// (function (param, callback){
//   console.log ("hello")
// })()




// 6. Write a function that checks if a given string is valid password. The password is valid if it
// is at least 6 characters long and contains at least one digit. The function should receive
// two callbacks named successCallback and errorCallback that should be called in case
// password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!
// Input: JSGuru123
// Output: Your password is cool!

function checkPassword( string, suscesscallBack) {

  if (string.length < 6) {
    return errorCallback();
    }
    for( var i = 0; i<string.length; i++) {
      if (typeof parseFloat(string[i]) ==="number" && 
      !isNaN(parseFloat(string[i]))
      ) {
        return suscesscallBack();
      }

    }
    return errorCallback();
  }

   function errorCallback(){
    return "Your Password is invalid!"
  }
  function suscesscallBack(){
    return "Your passowrd is valiid!"
  }
console.log(checkPassword("acakoppa1", suscesscallBack, errorCallback));