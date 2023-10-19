//var a =[5,-4.2,3,7];
//var e= 3;
//var flag=false;
//if(a[i]===e){
//flag = true;
// console.log("yes")
//   }

/*}
if(flag){
    console.log("no")
//}

*/

/*  var niz=[1,2,2,2,2,2,2,2,,3,4,7,8,9,0,6,4,3,2,,787,92,2,243,2]
    var numberToCount = 2;
    var count = 0;
    for(var i =0; i<niz.length; i++){
        if(niz[i] ===numberToCount) {
            count+=1; //count
        }
    }

*/

/*var niz= [];

    for(var i =0; i<20; i++){
    if( i%2 === 0) {
        niz[niz.length]=1;

        }

   console.log(niz)
} 
*/

//. 3 write a program da finnds the minimum of given array and prints value and index
//

/*/var array =[4,2,2,-1,6];

var min = Infinity;
var max = Infinity;
for( var i = 0; i<array.length; i++) {
    if(array[i]<min)
{
    min = array[i]
    console.log(min)
    }
} */
/* -1. zadatak
for( var i=0; i<=10;i++){
    console.log(i)

}*/
// 2. ZADATAK - 2 DO 20 SAMO PARNI BR//
//for(var i=2; i<=20;i++){
if (i % 2 === 0) {
  console.log(i);
}
//   }

//3. ZADATAK 10 DO 1 OD NAJVECEG DO NAJMANJEG//

/* for(var i =10; i>=1; i--){
    console.log(i)

 }*/

//4.  prvih 5 mnozivih sa 3
/*for(var i= 0; i<=5; i++){
    console.log(i *3)

    }
 */
//5. suma brojeva od 1 do 10 //
/*var sum =0;
for (var i=0; i<=10;i++){
    sum+=i;
   
}
console.log(sum) */

//6. factorial datog broja //

/*var fact =1;
for(var i =5; i>=1;i--) {
    fact*=i;
 console.log(fact)
}*/

//7. loop da  loguje svako drugo  slovo-letter u datom stringu//

/*var str = "tsringdasdasdasdasasfsdgrthdgd";

for(var i= 1; i<str.length; i+=2){
    //if(i%2!==0 )//   

    console.log(str[i])
}*/
/*ar fibe=[0,1]

for(var i=2;i<20; i++){
    fibe.push(fibe[i-1]+fibe[i-2])
    
}
console.log(fibe)
console.log(fibe[fibe.length-1])*/

var niz = [2, 4, -2, 7, -2, 4, 2];

var isSymetric = true; /*
for(var i =0; i<niz.length;i++){
    if(niz[i] ===  niz[niz.length-1-i]){
// s leva na desno// s desna na levo //
        isSymetric = true;
    }
    else{isSymetric=false;
    }
    
} 

if(isSymetric){
console.log(isSymetric)
}*/

/*for (var i =0, j=niz.length-1; i <niz.length,j>=0; i++, j--){
    if(niz[i] !== niz[j]) {
        console.log(isSymetric)
    }


}*/

/*var array = [4,6,2,8,2,2];
var e =2;
var nArray=[];

for(var i =0; i<array.length;i++){
    if(array[i] !==e) {
    nArray.push(array[i]);
    }
} console.log(nArray)
*/

//7//
/*var niz1 =[4,5,6,2];
var niz2=[3,8,11,9];
var resultNiz = [];

for ( var i =0; i< niz1.length; i++){
    resultNiz[resultNiz.length] = niz1[i];
    resultNiz.push(niz2[i])
}
console.log(resultNiz)

*/

//8//
/*var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];
var resultArray = [];
for (var i = 0; i < array1.length + array2.length; i++) {
  if (i < array1.length) {
    resultArray.push(array1[i]);
  } else {
    resultArray.push(array2[i - array1.length]);
  }
}
console.log(resultArray)
*/

var a =[2,-2,33,12,5,8];
var e = 78;
var p = 3;
var resultArray=[];

    for (var i =0;i<a.length+1; i++){
        if( i<p){
            resultArray.push(a[i]);

        }
        else if (i===p){
            resultArray.push(e);
        }
        else{
            resultArray.push(a[i-1]);
        }
    }
    console.log(resultArray)


var array=[4,2,2,-1,6];
var min = Infinity;
var secondMin = Infinity;

for( var i = 0; i<array.length; i++){

    if(array[i] <min){
        secondMin = min;
        min = array[i];
    }
    else if( array[i] < secondMin && array[i]!== min){
         secondMin=array[i];
    }
}
console.log( min, secondMin)
