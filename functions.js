 function add(a,b) {
    if(typeof a==="number" && typeof b==="number"){
    return a+b;
    }
    return"morate uneti oba broja "

 }
 console.log(add(3,2));

 function addWithNoReturn(a,b){
    var c = ++a;
    var d = ++b;
    var f = c+d;

    console.log(f);
 }

 var podatak= addWithNoReturn(3,4);
 console.log(add(3,2))

var a = 7; //
var b = 8;// ako su parametri van funkcije onda je GLOBAL SCOPE !!!
 function primer(){

    var xyz= 67;
    return xyz+ a + b;

 }
console.log(primer())
// napisati f-ju koja ocekuje kao paramentar nizz a vraca max element iz niza //


 var niz =[1, 2, 17, 9, 24, 0] ;

function findMaxNumber(array){
    var max = -Infinity;
    for( var i =0; i<array.length; i++){
        if(array[i] > max){
            max =array[i];

        }
    }

    return max;
}

console.log(findMaxNumber(niz));
console.log(findMaxNumber([1, 2, 17, 9, 24, 0, 123,2,4532,]))


//2.  pisi fun-ju find koja ocekuje kao parametar niz i element koji zelimo da pronadjemo u nizu, f-ja treba da prati element i index na kom se nalazi.//


//function findIndex(array, element =4) {
   // var foundIndex = -1;
    //var foundElement;
    //for( var i = 0; i <array.length; i++){
        if (array[i] === element) {
            foundIndex = i;
            foundElement= array[i];

            }
      //  } // moze i bez return i stavis console.log
        //return "found element is:" +  foundElement +  " Index is :" + foundIndex
//    }
  //  console.log(findIndex([1,2,3,4,5,6,7], 7));

    //3. provera dal je pbroj paran ili neparan - funkcja //


  //  function checkOdd(number){

    if (number%2 ===0 ) {
        return true;
    }
        return false;
  //  }
 
//console.log(checkOdd(6));

//4.zadatak - napisati funkciju koja kao parametar ocekuje niz , treba da vrati niz svih parnih elemenata //

/*function findEvenNumbers(niz){
    var evenNumbers = [];

    for( var i = 0; i<niz.length; i++){

        if(checkOdd(niz[i])) {
            evenNumbers.push(niz[i]);
        }
    }
    return evenNumbers;
}
console.log(findEvenNumbers([1,0,3,2,5,4,19,20]));

*/
function type (par){
    return typeof(par)
}
