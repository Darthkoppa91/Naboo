
console.log(0 && 1 && undefined);
// falsy i truthy = 0 ostaje negativan do kraja

console.log(0 || 1);
// 1 //
console.log(1 && 0); console.log( 1 && 0 ||1 )
//0 // // 1 //

console.log(null || 0); 
console.log(6 && 9); // uvek ide desna strana odnosno veci broj ili vrednost//

//resenje  1 //  // ako su oba false uzima poslednju!


console.log( 72 && 4 || true || false);
// 4 || truth || false
// resenje je 4//

console.log(! ( null || 7) && ! ( true + 1));
// false and false - prvi negativan uvek negativan

console.log(("martin" || !8) || 25);
// prva tacna ko ||  znaci martin
console.log(0 && ( undefined && false)|| null);
// 0 || null // uvek drugo resenje mora biti ako je prvo netacno znaci null!//
console.log((!"something" + 2) || 2>2);
//false + 2 = 2  || false // = 2 //

console.log(!(true+ false)&& !(2+3));
// false - prvo false i ne zanima nas nista drugo! false 


// operatori poredjenja //
console.log( 2 !== "1")
// domaci je bio proveravamo 12.10.2023//

console.log ((1<2) && ( 3+5 * true) > 7)

//12. negativni brojevi u minnusu su i dalje true sve sem 0)//
// 13.   

console.log(0o377)
// primer octalnog broja //

console.log(0x1F)
// primer hecadecalnog broja//

console.log(1e+2)
// primeri stepenovanja  1e+10 na 2 = 100//
//moze i > 2e -3 ;

var inf = -Infinity;
console.log(Infinity-Infinity)
console.log(Infinity+Infinity)
// primer aritmetike infinitija//

console.log(6/0)

// deljenje sa 0 u java scriptu daje infinity //

console.log(10 * "f")

//primer not a number Nan // sta god radili  bilo koju aritmeticku operaciju uvek je resenje Nan

console.log("ahdasjdasdhkadlajdadla".length)
// primer lengtha stringa- brojimo broj karaktera //

var s1="web";
var s2 ="site"
var s3 ="b"
var s =s1+s2
var s4 = s1 -s3
console.log(s)
// concatenation - primer sabiranja !//

var s4 = s1 -s3
console.log(s4)
// konkatenacija moze samo u sabiranju ( probali smo oduzimanje i dalo je Nan)

//var s= 'I'dont care'
console.log(s)
// primer sa jednim navodnicima kako string postaje ERRROR - PRAKTIKUJ DA IMAS OBE NAVODNIKE

var s= 'I\'dont care';
console.log(s)

// USE  escape string to fix issue//

console.log('1\n2\n3\n4\n');

console.log("\u043E")


