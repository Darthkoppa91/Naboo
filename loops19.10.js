
//1.// greska // 

//for( var i =0; i>0; i++) {
//console.log("broj iteracije" +i);
//}
// 2. uslov //

//3.// 


//for ( var i = niz.lenght - 2; i>2; i++) {

  //  console.log("ista iteracija")
//}
// 
//3. nema niza pa samim tim nema ni kondicionala - razlog greska //

//do{
   // var i = 2;
   // i++;
 //   console.log(i);
//}  while (3<8);
//4. resenje - infinity loop

//5// 
//var b;
//for( var i =0; i ===3; i++){ // u slucaju da je i =3 bilo bi undefined
  //console.log(b);
//}
//5 resenje - uslov nije isponjuen//

//6-// - prvi vremenski  virus ///

//for(;;){
  //console.log("U peetlji sam!") ;
//}

//. resenje  - infinity loop//

//7//
//while( true) {
 // var result= 2;
 // var newResult= result++;
//console.log(newResult);

//}
//7// resenje je 2 u infinity loopu

// 8. zadatak//
//var i = 20;
//do {
  //i=i-1;
  //console.log(i);
  //i--;

//} while(i>0);

//8 resenje je od 20 minusujemo za po jedan 19,17,15,13,11,9,7,5,3,1 //

//9//
//var i = 20;
//while(i>0){

 // i=i-1;
  
  //i--;
//console.log(i);

//}

//9// resennje je isto kao i prethodno samo smanjivanje parnih brojeva

//10//
//var suma= 0;
///for ( var i =0; i<5; i+=5) {
  //suma= suma +i;
  //console.log (suma)
//}

//10 - resenje je suma = 0  zavrseno cela petlja 
//11.//
//for ( var i =0; i<7; i+=2){
  //console.log(i);
  //i++;
//}
//11. resenje - 0, 3,6 // u prvoj iteraciji gledamo  samo prvu levu stranu deklaracije a ignorisemo desnu, nakon interacije onda prelazimo na desnu stranu a levu ignorisemo.

///12.
//while( false == false)

//12. resenje je infinity loop
//13// - infinite loop//
//14. 10 x  dino console //

//15// resenje -   12 x consolog log peraMikaZika

//16// - reference error resenje 

//17// - 

//for ( i = 0; i, 1; i++) {
  //  var j = 5;
    //while(j>0) {
      //console.log(i);
        //j--;
        
   // }/
//}

//17 - 0 0 0 0 0 //


//18// resenje  [ 0 1 2  1 2 3 2 3 4]

//19// infinity loop  - nema veze conzolom

//20//  resenje  - 
//for ( var i = 0 , j=0; i<5 && j <10; i++, j++){
  //console.log(i,j);
//}

//21// - resenje - infinity loop

//22//

//for (var i = 0; i<30; i=i+3) {
 // console.log( i+2 );
//}

var strZ =['coa','laza','Milance','Vedran','Jovan','Marko'];
var index = 0;
var randomStr=strZ[0];
for (var i=0;i<strZ.length;i++){
  if(randomStr.length<strZ[i].length){
    randomStr =strZ[i];
    index=i;
  }
}
console.log(index)
console.l


var niz =[44,46,57,17,24,4,11];
for(var i=1;i < niz.length; i++){
  for(var j=0; j< i; j++) {
    if (niz[i] < niz[j]){
      var temp =niz[i];
      niz[i] = niz[j];
      niz[j]=temp;
    }
  }

}
console.log(niz)

//var niz=[2,5];


//niz[0] = niz[1]
//niz[1]=novaVrednost

//console.log(niz)



//var niz =[44,46,57,17,24,4,11];
//console.log(niz.sort(function(a,b))) {
 // return (a,b)
//}
//var n =niz.length;
//var swapped ;
//do{
//swapped=false;
//for ( var i=0; i <n-1; i++){
 // if(niz[i] > niz[i+1]){
   // var tmp=niz[i];
    //niz[i] = niz[i+1];
    //niz[i+1]= tmp;
  //}
//}
//} while (swapped);
//console.log(niz)
//console.log(niz.sort())



//for( i=0; i<5;i++){
  for(j=0; j<5;j++) {
    console.log('A')

    }
    console.log('B')
//}

// zadaci za test //


//console.log(typeof 5+5); ---> type of number5

//console.log(10>5>1) -false 

//var x ;
//console.log(b) - ref  error();

//var x = 50;
//var y= 35;
//console.log(x+y+"y=" +x+y) ---> 85y= 5035                    
//
//console.log(50+20+"0"*1+2);

var i = 0o41;
console.log(i)


var x = 5, y= 22, z=55;
z=x=y=0
console.log(x,y,z) 

