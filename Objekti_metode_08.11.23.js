// var string = "martin";
// // var string = "\n";

// console.log(string.charCodeAt(1));


// var string = new String("");
// if ( string) {
//     console.log("true")
// }
// else {
//     console.log("false")
// }

// string methods //
var string = "Aleksandar";
// console.log(string.charAt)//

console.log(string [11]);
console.log(string.charAt(11))// chart att nekad ne reaguje kako bih zeleo pa se ne savetuje koristiti vec mozes da koristis standard//



console.log(string.indexOf("rt"))

// index off vraca prvi index na kome se nalazi karakter//
console.log(string.indexOf("a",));
// last index of vraca poslednji index na kom se nalazi karakter//
console.log(string.lastIndexOf("a"));


//slice //
console.log(string.slice(2,5))
console.log(string.slice(string.length/2));
console.log(string.slice(0))

//substrign- oduzima indexe iz karaktera i radi isto kao i slice //
console.log(string.substring(1,5));


//split - se koristi za prebacivanje stringa u niz po nekom karakteru ili po nekom separatoru//
//primer za reversovanje stringa//
console.log(string.split("r"))
console.log(string.split("").reverse().join())

//Array - methods // ako napravimo array putem konstruktorske metode onda array postaje objekat i dobija nasledstvo od parenta //
var array = [1,22,2,7,8,9,4,3,5,6];
var konstruktorArray = new Array({ime :"Aleksandar"});
var konstruktorArray2 = new Array(10);
var konstruktorArray3 = new Array(true, 2,"string",10);
console.log(konstruktorArray)
console.log(konstruktorArray2)
console.log(konstruktorArray3)
// metoda SORT // - preoznaje i razvrstava po rednom broju, medjutim ako na 2 , dodamo 22 onda 22 nije najveci u nizu vec se gleda samo prvi clan koji je 2 i odmah ide iza rednog broja 2!//
// sort za brojeve mora callback funkcija da bi radilo kako treba//
console.log(array.sort(function(a,b){
    return a-b;
    // primer kako resiti - da 22 ide na kraj arreja da bude najveci broj// koristi se u sortu callback funckica koja ima 2 clana ( a,b)i a-b//
}))
// sort za karaktere radi u startu kako trebba //
console.log(["b","a","c","d","x","f"].sort())
 

// push metoda // - vraca duzinu niza nakon dodovanja svih elemenata
var niz =[1,2,3,4];
// niz.push(...niz)

var res =niz.push(5,6,7,8,9,0);
// niz.push(1,2,3)
// console.log(niz)
console.log(res)

//POP - vraca poslednji element koji je izbacen iz niza //
var poslednji = niz.pop()
console.log(poslednji)
console.log(niz)

//SHIFT // - uklanja prvi element iz niza i vraca samo taj element!//
var x = niz.shift();

console.log(x)
console.log(niz)  




// UNSHIFT // - je suprotnost pushu! dodaje lelemente na pocetak niza , a vraca duzinu nakon dodavanja//

var y = niz.unshift(-3,-2,-1,0)
console.log(y)



//OBJEECT //
// metoda toSTRING -//

var o = {};
var obj = new Object ();
console.log(obj)


Object.defineProperty(obj,"ime", {
    value: "Aleksandar",
    writable: true, // true ako je ukljucen mozes da edditujes i da prekucavas properties //
    //ukoliko je writtable FALSE - onda ne mozes da edditujes values unutar propertiija!//
    enumerable: false // ista prica samo sa brojevima //
    // ukoliko je false sakrivamo  ceo property//
}) 

console.log(obj.ime) 
obj.ime = "pot22..."
console.log(obj.ime)
console.log(obj)



var objekatZaProlazak = {
    ime: "Martin",
    prezime : "Potkonjak",
    skola: "BIT",
    mesto: "Kneza Milosa"
}
// prolazak u petlji za objekte po kljucu //
 for ( var key in objekatZaProlazak) {
    console.log(objekatZaProlazak[key])
 }
 //object.keys () -> vraca niz svih kljuceva iz objekta //
 console.log(Object.keys(objekatZaProlazak))

 // Object.values() - > vraca niz svih vrednosti kljuceva iz objekta
 console.log(Object.values(objekatZaProlazak))

// Object. entries () -> prebacuje objekat u nizz //
 for (var biloSta of Object.entries(objekatZaProlazak)) {
    console.log(biloSta)
 }

 //postoje for -IN i for - OF //

 //hasOwnProperty - mettoda //
 //preventExtention //
 //isFinite.Extensible //
 // SEAL metoda //

 var obj ={
    ime: "BIT"
 }
 console.log(Object.isExtensible(obj));
 obj.prezime = "Kotromanic"
 console.log(obj)
 Object.preventExtensions(obj);
 //ne izbacuje eeror samo nece izbaciti nista //
 obj.godiste = 8;
 console.log(obj)

 console.log(Object.isSealed(obj))
 Object.seal(obj);
 obj.newProp = "nesto nesto";
