//var kAmIlA ;
//var 3some ;

var mood="stressfull";

console.log(mood)
console.log(mood.length)
console.log(mood[5]);


var a = 3
var b= 7
var c= 31

console.log(a+b+c);
console.log(b-a-c);

console.log(c*(a-b));

console.log(b/(a+c));
console.log(b-(a/c));

var banana= 1.2
var gramage="gr"
console.log(banana*1000)
console.log(banana*1000 +gramage)

var min= 60;
var Anna = min*5;
console.log(Anna);
var Tom= min * 30;
console.log(Tom);

var memmory=4;
var MB=1000;
var GB="MB";
console.log(memmory*MB+GB);

var article= 5;
var size_article=98;
var size= "kb";
console.log(size_article/article+size);

var a = a*2;
/*2*= a;
b= b+3
b+=3
c= c/5
c/=5;
d= d-7;
d-=7;
*/
var ime ="Aleks";
var age= 32;
var haveCat= false;

console.log(typeof ime, typeof age, typeof haveCat);


console.log(typeof "number",typeof true,typeof null,typeof "false",typeof 56);
var p = true;
var q = false;

console.log(p && q );

var age = 55;
//var is_age_neg = > 0;
//var greater = > 120;
console.log(age<0);
console.log(age>120);

var limit_min= 60;
var limit_max= 120;
var speed= 88;


console.log(speed>=limit_min)
console.log(speed>=limit_max)

if (2<3){
    console.log("true");
    
}
else if(2>4) {
    console.log();

}   
else {

    console.log("false");
}

var x= 18;
// ukoliko zelimo i onda dodamo logicki operator //
if(x%3 ===0 && x % 5 ===0){
    console.log("deljiv sa 3 i sa 5")

}
else if (x%5 ===0){
    console.log("deljiv sa 5")
}
else if (x%3 ===0){
    console.log("deljiv sa 3")
}

else{
    console.log("nedeljiv sa 3")

}

19.
var a=12;
if(a%3===0 && a%5===0){
    console.log(a)
} 
else{
    console.log("nije deljiv")
}

20.

var a= 3;
var b= -7;
var c= 2;
if(a*b*c >=0){
    console.log("+")
}
else {
    console.log("-")
    }   

    21.

var num = "true";
var result = num /2;
if(typeof num ==="number"){
    console.log ("broj")

    if(num%2===0) {

        console.log(result)
    }
    else{

        console.log("x")
    }
}
else{
    console.log("nije broj")
}

var a = -5;
var b = -2;
var c=-6;
var d = 0;
var e= -1;

if(a>b && a>c && a>d && a>e) {

    console.log("a")

}
else if(b>a && b>c && b>d && b>e) {
    console.log("b")
}
else if(c>a && c>b && c>d && c>e) {
    console.log("c")
}
else if(d>a && d>b && d>c && d>e) {
    console.log("najveci broj")
}
else if(e>a && e>b && e>d && e>c) {
    console.log("e")
}

23.
var a = 0;
var b = -1;
var c = 4;

if(a>b && a>c) {
    console.log(a,b,c)
}
    if(b>c) console.log(a,c,b) 

else {
    console.log(c,a,b)
}
// task6. convert from celcius to fahrenheit//
/*var t = 60;
var c = t; 
var f = t ;
var F =(9*c/5) +32;
var R =(5*F-160)/9; 
console.log(F)
console.log(R)

*/
//task 7 - izracunaj razliku //

var s= 11; 
s=32;
var x= 13;
var r= s-x;
 if(r >13) {
  console.log((r)*2) 
}
else{
    console.log(Math.abs(s-13))
}


//task 8//

var g = 12
g=8;
var g1=5;
g1= 8;
var result = g+g1;
if(g===g1) {
console.log((result)*3)
} 
else{
    console.log(result)
}

var num = 5;
num= 6;
num = 40;
var num1= 54;
num1= 50;
num1 = 10;
if(num ===50 || num1===50 || num + num1 === 50) {

    console.log("true")
}

else {
    console.log("false")

}

//task 10- range //

var int= 400;
var range = "20<>100";
var range2= "od 100 do 400";
if (int>=20 && int<=100) {
    console.log(range)
}
else if ( int >=100 &&  int<=400) {
    console.log(range2)
}
