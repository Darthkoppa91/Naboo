// function outer() {
//     var brojac = 0;
//     return function() {
//         return brojac++;
//     }
// }
// var a  = outer();
// console.log(a())



function cubeVolume(a) {
    return a= a*a*a;
}
function cubeCalculation(a, calc) {

    return calc(a);
}
var output = cubeCalculation(2, cubeVolume);

console.log(output)


/ function outer(){
    //     var brojac = 0;
    //     return function (){
    //         return brojac++;
    //     }
    // }
    
    // var a = outer ();
    // console.log(a())
    // console.log(a())
    // console.log(a())
    // console.log("-----------------")
    // var b = outer();
    // console.log(b())
    // console.log(b())
    // console.log(b())
    
    // console.log(outer()())
    // console.log(outer()())
    // console.log(outer()())
    
    // var print = (function (){
    //     return console.log;
    // })()("Work or not?")
    
    // console.log(print)
    
    // function multiply(a,b){
    //     var mResult = a*b;
    
    //     return function (a,b){
    //         return mResult + a + b;
    //     }
    // }
    
    // var output = multiply(3,4);
    
    // var finalResult = output(2,3);
    
    // console.log(multiply(3,4)(2,2))
    
    // var input = [1, 21, undefined, "3", true, NaN, 19]
    
    // var transformArray = function (array, f1){
    //     var result = [];
    //     for(var i = 0; i < array.length; i++){
    //         var element = array[i];
    //         result[i] = f1(element)
    //     }
    //     return result;
    // }
    
    // var output = transformArray(input, function (param){
    //     return param + "";
    // })
    
    // var niz = [1, 2, 3, 4, 5];
    
    // niz.forEach(function (e, i) {
    //     if(i > 3){
    //         console.log(e)
    //     }
    
    // });
    
    
    // function cubeVolume(a){
    //     return a**3;
    // }
    // function cubeCalculation(a, calc){
    //     return calc(a);
    // }
    
    // var output = cubeCalculation(3, cubeVolume);
    
    // console.log(output)
    
    // function saySomething(smt1){
    
    //     function inner (a,b){
    //         return a+b;
    //     }
    
    //     return function(smt2){
    //         var out = smt1 + " " + smt2;
    //         return function(){
    //             out += "!";
    //             return inner
    //         }
    //     }
    // }
    // var firstFOut = saySomething("Hi");
    // console.log(firstFOut)
    // var secondFOut = firstFOut("there")
    // console.log(secondFOut)
    
    // var finalF = secondFOut()
    // console.log(finalF)
    
    // var result = saySomething("j1")("there")()
    // console.log(result(3,4))
    
    var myArr= []
    
    var hi = function(){
        return "Hi!"
    }
    
    myArr[0] = hi;
    
    console.log(myArr[0]())