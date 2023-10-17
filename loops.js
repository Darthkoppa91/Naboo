

// LOOOPS //
// while // loop 

var i = 0;
i= i+2;

while (i<10) {

  /*  console.log(i);*/
    i++;// or i+=2//
}

// DO-WHILE //

var i =10;

do {
    i++;
} while (i<10);
//console.log(i);

// FOR LOOP - most common looop //

var punishment ='0';
for ( var i = 0; i < 100; i++) {
    punishment += 'I will never do this again\n';
}
// console.log(punishment);


for (var i = 2; i<= 10 ; i+=2){

    console.log(i);
}
// parni brojevi //


// .1.   looops//
for ( var i =0; i <15;i++){

if (i%2===0 ) {
    console.log('broj'  + i + 'je paran');
}
else {
   // console.log('broj' + i + ' je neparan');
}
}

var sum =0;
for(var i = 0; i<1000; i++) {
    
    if(i%3===0 && i%5===0) {
        sum+=i;
      //  console.log(i);

    }
}

var niz = [1,2,3,4,5,]
var sum= 0;
var product = 1;

for (i=0; i<5; i++) {
    sum+=1;
    product *= 1;
        //console.log(i);
        


}
//console.log(sum,product);
//console.log()

var x =['a', 'A ','B',"c","r", true, NaN, undefined];

///console.log(x.length);
var i =0; 
//for(i=0;i++);//






var array= ["AB","ABC", "ABCD", "12345"]

for(var i = 0; i< array.length; i++) {

    console.log(array[i]);
    array[i] = array[i]+array[i]
 //   console.log(array[i]);


}


var array = [1,3,2,4,5,7,6,2];

for (var i= 0;i < array.length; i++) {

    if(array[i] ===2){
        continue;
    }
   // console.log(array[i]);
}

// break prekida niz i loop
// continue - preskace zadatu vrednost i nastavlja loop //



//1/ - 

for(var i = 0; i<=15; i++){
    if(i%2 ===0 ){

    console.log("even"+ i);
    }
    else {

    console.log("odd"+ i);
}

}

//2.program sume svih br koji su deljivi i sa 3 i sa 5 a da se nalaze ispod 1000 //

var sum =0;

for(var i =0; i<1000; i++) {
    if( i %3 ===0 && i % 5 ===0){

    sum = sum +i ; // sum+= i;//
    }
//console.log(sum);
}


// 3/. sum i proizvod 

var array =[0, 10, 2, 7,24,42, 8, 44,73,19,36, 45,]
var sum =0;
var product = 1;

for(var i =0; i<array.length; i++) {
    if(array[i]===0){
        continue;
    }
    sum = sum + array[i]; //sum=array[i]
    product = product * array[i];

    }
   // console.log(sum);//   console.log(sum, product);
    //console.log(product);
  
//4.  proogram which prints elements of following array as a single string //



var x =['1','A','B',"c","r", true, NaN, undefined];

var concatenation = "";

for ( var i = 0; i < x.length; i ++) {

concatenation =concatenation + x[i]; 
// concatenation+=x[i}//


}


console.log(concatenation);


//5 - print elelemnets of following array - //

var a = [

    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]

];

 for(var i =0; i<a.length; i++) {
    console.log("interacija:" +i);
    if( i===1) {
        continue
    }
    for (var j = 0; j<a[i].length; j++) {
       // console.log(a[i][j]);
    }
 }


 //6 Write a program that outputs the sum of squares of the first 20 numbers.

var sum = 0;
for ( var i = 0; i<=20; i++) {
        sum= sum + i*i ;
        
}   
        // console.log(sum)


        //7. Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade.//


var  ocene = [80,77,88,95,68];
var sum = 0;
var avg = undefined;



for ( var i =0; i<ocene.length; i++){
        sum += ocene[i];
        avg = sum / ocene.length;
        switch(true) {
    case avg< 60:
        console.log("F");
        break
    case avg< 70 && avg >=60:
        console.log("D");
        break
    case avg< 80 && avg >= 70:
        console.log("C");
        break
    case avg< 90 && avg >= 80:
        console.log("B");
        break
    case avg<100 && avg >= 90:
        console.log("A");
        break
    default :
         //   console.log("error");

        }
     //   console.log(avg);
}
/*
    if(avg < 60) {
        console.log("F");

    }
    else if( avg < 70 && avg >= 60) {
        console.log("D")
    }

    else if (avg <80 && avg >=70 ) {
        console.log("C")
    }
    else if (avg <90 && avg >=80 ) {
        console.log("B")
    }
    else{
        console.log("A");
    }
    console.log (avg);
}
*/

//// 8. Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print & quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).//


for ( var i = 1; i < 100; i++) {

    if(i % 3===0 && i% 5 === 0){ 
       // console.log("fizzbuzz");
    }

    else if( i %3===0) {
      //  console.log("Fizz");
    }
    else if( i  % 5 ===0) {
       // console.log("BUZZ")
    }
}
///1.//
sum =1;
    for(i = 1; i <=10; i++){
        sum+=i;
   // console.log(sum);

}
//2//
 
cube = undefined;
for (var i= 2; i <=10; i++) {
    cube = i*i*i;// cube = i**3 ;
   // console.log(cube + " up to cube equals " + cube)
}
// mozemo iskoristiti Math.pow (i,3)




//3/// 5 od 120


var fact=1;
for(var i = 5; i>=1; i--){
    fact*= i;
   
  //console.log(fact);
}





//4///
var sum = 0;
var niz =[1,2,3,4,5,6,7,8,9,10];

for (var i = 0; i<=10; i++) {
    if(niz[i] %2===0) {
        console.log(niz[i]);
        sum = sum+ i ;
        console.log('the number '+ niz[i] +' is even ');
    }
}

//5. /// suma svih cifata 232 broja 

var broj = 232;
broj += "";
var sum = 0;
for( var i = 0 ; i <broj.length; i++){

    sum += +  broj[i];
   //+ 'of digit in number'  )

}

console.log(sum )


//6.// 
var count= 0;
var str = "Eclip542se";
for(var i =0; i<str.length; i++) {
    if ( str[i] != +str[i]){
    count +=1;    
}
}
console.log(count);