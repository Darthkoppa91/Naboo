//"use strict";

// myVar = "myVar"
// function addOne(num) {
//     var varijabla =4
//     return num +varijabla

//     return num+1;
// }
// var result = addOne(4) ;
// console.log(result)
// console.log(varijabla)

// var global= 123;

// var sumOfTwoo = function(a,b) {
//     if ( arguments.length >2){
//         return a+b+arguments[2]+arguments[3]
//     }
//     return a+b

// }
// console.log(sumOfTwoo(9,8))
// console.log(global)

// var result = square (10)
// console.log(result);

// var num = 9;

// function square(){
//     num *= num;
//     return num;
// }   

//example 12 - use strict ako je van zagradica onda nece raditi, u suprotnom pod komentarom  ne uvazava se //

//"use strict";

var global = parseInt("1e2");
    increamentGlobal = function(a,b) {
        global ++;

    }
    increamentGlobal(10,1);
    console.log(global);
    console.log (typeof global);


    //example 13//
     //resenje je -1;

     // 14- hoisting menja samo deklaraciju a ne vrednost , var x = 20  postaje var x u funkciji al postaje undefined!!! /


     // example 15 //

     function test () {
        var a;
        function foo () {
            return 2;
            }
            console.log(a); // undefined
            console.log(foo());// 2
            var a = 1 ;
     }
     test();

     