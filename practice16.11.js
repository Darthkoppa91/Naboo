// x = 10 
// console.log(console.log(x,y))

// var y = 10 


// res( 10,undefined )
// (undefined)


//2.
// function transform(a,b,f) {
//     var result;

//     result = f(a) +f(b);

// }
// console.log(result)
// transform(10,20, function(x) {return x+1})

//3.

// var a = 12;
// var x = 44;
// var res;

// function sabrati (a,b) {
//      return a + b
// }
//     res = sabrati();
//     console.log(res)




function transform (a,b,f) {
    var result;
    result = f(a) + f(b);
    console.log(result);
}
function double(x){
    return 2*x;
}
transform(2,4,double);