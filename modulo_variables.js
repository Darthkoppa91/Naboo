


// modulo % - primer kako se koristi u nizu // 

var x = 456;
if(x % 2 === 0){

console.log("paran")

}
else {
    console.log("neparan")
}

// increment ++ primer //
var x = 5;
// x = 6
var y = x++;
// y = 6
var c = ++y;
// c= 6
console.log(y)
console.log(x)
console.log(x,y,c)
// 2 nacin za decrement//
var a = 3;
var b = a--;
console.log(a,b);
var u = ++a - b--;
console.log( a, b, u);
var g = 5;
var f = ++g - 1;
var k = ++g + f--;
// g-7 f-4 k-12
console.log(g,f,k)

var t = 7;
var m = t++;
var n = m++ + ++m;
// t-8 m-9 n-16
console.log(t,m,n)

// COMPOUND OPERATOR//



// napravi 5 varijabli da prestavlja jedan tip podataka//
//boolean//
var istrue= false;
//number//
var digit = 32;
//string//
var letter = "a"
// undefined moze i var anything;//
var anything= undefined;
//null//
var nothing = null;

console.log(typeof istrue, typeof digit, typeof letter, typeof anything, typeof nothing);
// false    32
 //    0       32 //
console.log(typeof (istrue + digit))
// Nan - convertuje true u 1 u pozitivnu vrednost, a undefined se dodaje na vrednost i automatski postaje Nan //
console.log(undefined + true)






