// program that calculates a number of digits of a given number //

//function numOfDigits(num) {
  //  var counter = 1;
 //   return (num +"").length; - programersko resenje 
    //while(num >9){
       // var cifra = num % 10;
      //  num = num - 10;
      //  num = num /10;
      //  counter++;
    //}// - matematicko resenjne // 
    //return counter;
//}
//console.log(numOfDigits(1234));

 /*   function reverse(number) {
    var numberToString = number + "";
    var reverse= "";
    var n = numberToString.length;

    for(var i = n-1; i >=0; i--){
    reverse+=numberToString[i]; 
}
    return + reverse;
}
 console.log(reverse(123456)) */

 /*function reverseString(input) {
    var inputToString = input +"";
    var outputReversed ="";
    var n = inputToString.length;

        //for( var i =0; i <n; i++){
          //  outputReversed += input[n-1-i];

          for( var i =n-1; i >=0; i--){
            outputReversed += inputToString[i];

        }
    return outputReversed;
    
    } 
    console.log(reverseString(12345));





*/




    //function obrnutoIme(name) {
       // var 
    //}
 

 /*   function mathReverseNumber(input) {

        var outputReversed= 0;
         
        while( input >= 1 ) {
            var cifraJedinice = input % 10;
            input -= cifraJedinice;
            input/= 10;
            outputReversed = (outputReversed *10) + cifraJedinice;

        }

        return outputReversed;
    }

    console.log(mathReverseNumber(12345))
    */
  /* function appearanceA( input){
    var counter = 0;
    for( var i =0; i < input.length; i++){
        if ( input[i]==="a" || input[i] ==="A") {
            counter++;
        }
        // if(input[i].toLowerCase()==="A"){
        //counter ++;
        //}
        }
    }
    return counter;
   
    
   console.log(appearanceA("adakljsjksjaAlkajdjflkgalja"))
*/
/*function concatenate_x_times(inputString, inputNumber){
    var outputString ="";
    for ( var i =0; i< inputNumber; i++){
        outputString+=inputString;
        console.log()
    }
    return outputString;
}
console.log(concatenate_x_times("ab", 6))*/
// za zadati niz , proci kroz niz, proveriti koliko  elemenata niza u sebi sadrzi cifru 1; \
//na kraju vraititi broj elemenata sa cifrom 1 ;
//var array =[123, 456, 214, 678, 911, 111];

/*function countElementsWithOne(inputArray, numberToFind){
var counter = 0;

var n = countElementsWithOne.length;
for (var i=0; i< n; i++){
     var stringElement = inputArray[i]+"";
     var x = stringElement.length;
    for( var j =0; j<x;j++){
        if(stringElement[j] == numberToFind) {
        counter++;
        break;
        }
    }

    }
return  counter;
}
console.log(countElementsWithOne(array, 1))

*/

var film = {
    title: "Lovac u zitu",
    duration: 120,
    genre: "drama",
    actors:["Drew Berrimore", "Tom Cruise", "Tom Hanks"],
    rating: 892
   
}
var film2 = {
    title: "Lovac u zitu2",
    duration: 122,
    genre: "drama2",
    actors:["Drew Berrimore2", "Tom Cruise2", "Tom Hank2s"],
    rating: 8.9
}

var niz =[];
niz.push(film, film2, film3)
//console.log(niz);
function filterMovieRating(array) {
 for ( var i = 0; i < array.length; i++) {
    var movie = array[i];
    if(movie.rating > 6) {
        
        return movie;
;
    }
 }
}

