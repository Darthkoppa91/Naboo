// var globar =1;
// function myFunc() {
//     var local = 2;
//     global++;
//     return global;
// }
// console.log(myFunc())
// //ex 1//


// var niz =[12,13,14];
// delete niz[1]
// niz.length-=1
// console.log(niz)
// side effekat - delete opcija brise vrednost ali je element u nizu i dalje tu //

// if ((a==0=) || (b==0)) ; // opps this line does nothing...//
// a=null; // and this line is always executed//



// -use strikt limitira free style ponasanje u pisanju i tera te da pises CLEAN CODE//
// "use strict";

// x =5;
// console.log(x)
// java script pokuplja sve deklaracije i podigne na vrh skope i onda racuna zadate vrednosti  - to se zove hoisting//


// let c =5;//
// {
//         let b = 7;
//         {
//             let c =8
//             console.log(c);
//         }
// }
// console.log(c)
// // let ima block function scope// var ima function scope//


// function outer(){

//     var x = 5;
//     var y =7;
//      return function  (){

//         var d=8;
//         var f=10;
//         console.log(d)
//     }
    
// }
// var x = outer()
// x()


// if (2<3){
//   let x = 7;
//   console.log(x)
// }


// parametri su lokalni scope funkcije
//
// var x = 9;
// function primer(x){ // ukoliko nema lokalnog skope x izlazi iz lokala i ide u gloval i nalazi x i menja ga u funkciji//
//     var y = 8;
//     return x + 2 + y;
// }
// console.log(primer(2))

// var a= 8;

// console.log(suma(3,4))
// function suma(a,b){
//     return a+b;
// }

// var sim = function(a,b){ /// anonumus function name kada se kroz varijablju da naziv da je jednak funkciji umesto da funkcija ime svoje ime//
//     return a+b;
// }
// console.log(sum(3,4))

// function checkGlobal(){
//     x =6;
// }
// checkGlobal();
// console.log(x)

//hoisting var//

// console.log(global)
// var global =123;
// console.log(global)



// function hoist() {
//     console.log (global);
//     var global = 2;
//     console.log (global);
// }
// hoist()

/// 9. funkcija separatora //
//     function replace(string, separator){
//         "use strict";
//         var output = " ";
//         for (var i =0; i<string.separator; i++) {
//             if (string[i] === " ") {
//                 output += separator;
//             }
//             else {
//                 output+=string[i];
//             }
//         }
//         return output;
//     }   
// console.log(replace("my random string", "#"))

//10. zadatak ...//

// function hide (ime, prezime){
//     var skracenoIme = "";
//     var skracenoPrezime ="";
//     for(var i =0; i<3; i++){

//         skracenoIme+=ime[i].toLowerCase();
//         skracenoPrezime+=prezime[i].toLowerCase();
//     } 
//     return skracenoIme+ "....."+ skracenoPrezime + "@gmail.com";

// }
// console.log(hide("Petar", "Zinjak"));


//e26.10.2023 - Exercises  funkcije i predifined f-je//

// niz = [1,2,3,4,5,6,7,8];
// var sacuvan = niz.pop()
// niz.push(11)
// console.log(niz);
// console.log(sacuvan);
// push dodaje na kraj niza, koliko god elemenata // push vraca duzinu niza nakon dodavanja //
//pop skida sa kraja niza poslednji elemenent // push vraca poslednji element koji smo skinuli //


//shift sklanja PRVI element iz niza //
// shift vraca taj PRVI element //

// var prvi = niz.shift()
// console.log(niz)
// console.log(prvi)


// UNSHIFT  -  dodaje Elemente na pocetak niza 
// unshift vraca duzinu niza nakon dodavanja //


// var drugi = niz.unshift( 23,24,25)
// console.log(niz)
// console.log (drugi)


// function zbirCifara() {

//     suma = 0;
//     for(var i =0; i<arguments.length; i++) {
//        // console.log(arguments[i])
//        suma+=arguments[i];  
//     }
// }

// console.log(zbirCifara("sadasd","wdafa",1,11,13,2,22,24,3,33,4,44))
// console.log(suma);

// ARGUMENTS - metoda koja poziva sve zadate argumentte koje zadamo a nemas u funkciji dovoljno parametara da predstavis sve paramentre. //
// izbegavati u real life situacijma , osim za testiranje //


// var f = function() {
//     return 1;
// };

// f(4);



// anonimne funkcije - funkcije bez imena - najcesci oblik koriscenja - mozes pass anonymus function as a parameter to another function.//


// function filterOdd(niz, funkcija) {
//     var oddArray =[]
//     for ( var i =0 ; i < niz.length; i++) {
//          if(funkcija(niz[i])) {
//             oddArray.push(niz[i])
//          }
//     }
//     return oddArray;
// }
// console.log(filterOdd([1,2,3,4,5,6,6,7,8], function(x) {
//     if(x%2 !== 0) {
//         return true;
//     }
//     return false;

// }
// console.log(filterOdd([1,2,3,4,5,6,7,8], odd))
// );


//. 11. zadatak //
// niz = ["1","21",undefined,  "42","1e+3", Infinity ]
// var outputArray =[];
// function aString(niz, x, pars, gurni) {
//     for( var i =0 ; i < niz.length; i++){
//         if(x(niz[i]) && niz[i] !== null) {
//             outputArray.push(pars(niz[i]));
//         }
//     }
//     return outputArray;

// }
// console.log(aString(["1","21",undefined,  "42","1e+3", Infinity, 0 , null], isFinite, parseFloat))

//12. penzija //

// function calculateRetirement(yearOfBirth, sex) {
//     var age = 2023- yearOfBirth;
//     var yearsTillRetirment = sex ==="m" ? (65-age) + "<-Male" : (60-age) + "<-womale";
    
//     if( parseInt(yearsTillRetirment) >0){
//         return yearsTillRetirment;      
//     }
//     else {
//         return "already Rettired!"
//     }
    
// }
// console.log(calculateRetirement(1965, "f"));



//exercise 3. prvi zadatak //


// function addInString(string,word, position = 0) {
//     var outputString = "";
//     for(var i =0; i < string.length; i++){

//         if(i === position) {

//             outputString+=word;

//         }
//         else {
//             outputString += string[i];
//             }
//         }
//         return outputString;
        
//     }
// console.log(addInString("my random string", "JS", 10))



//3.write a program to join all elements of the array into a string skipping elements that are undefined, null, Nan, or Infinity//

// niz =[Nan, 0, 15, false, -22, "", undefined, 47, null];

// function joinElements(niz) {
//     var noviNiz;
//     for(var i =0; niz.length; i++) {
//         if(i ===niz.length[i] && ){
//             return noviNiz;
//         }
//         else {
//             return niz[i];
//         }
//     }
// return joinElements;
// }
// console.log(joinElements([NaN,0,15,false, -22, "", undefined, 47, null]))


// Array =[7, 9, 0, -2]

// function getLastNum() {
//     var noviArray ;
//     for(var i =0 ; i<niz.length; i++) {
  
//     }
// }


//8. write a function to find a word within a string //

const findString = function(string, finder) {
    let count = 0;
    let newstring = string.split("");
    for (let i=0; i<newstring.length; i++) {
        if (newstring[i] === finder) {
            count++;
        }
     }
     return finder + " was found " + count + " time ";
}
    console.log(findString("the quick brown fox fox ", "fox "));

    