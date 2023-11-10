// var objekat = {
//     ime:"neki objekat",
//     prezime: "neki objektic",
//     printName: function() {
//         return this.ime;
//     },
//     changeName: function(name){
//         this.ime = "name";
//     },
// }
// console.log(objekat.printName())
// objekat.changeName("svetozar")
// console.log(objekat.printName())



function ReceptZaPalacinke(sastojci, kolicina, vrsta, vremePripreme, ukus, cena) {
    this.sastojci = sastojci;
    this.kolicina = kolicina;
    this.vremePripreme = vremePripreme;
    this.ukus = ukus;
    this.cena = cena;
    this.getAllSastojci = function() {
        var n = this.sastojci.length;
        for(var i =0;i<n; i++) {
            console.log(this.sastojci[i])

        }
    } ; 

    this.setNewSastojak = function(sastojak) {
        this.sastojci.push(sastojak);
    }
    this.getCena = function(){
        return this.cena;
    }
    this.setPopust = function(popust,dan) {
        if( dan === "sreda"){
        var novaCena = this.cena * popust /100;
        this.cena -= novaCena;
        
        }
    };
} 
var recept = new ReceptZaPalacinke(["jaja","kisela voda","banana","brasno","med","mleko"],1000, "americke", 15, "slatka", 475);
console.log(recept)
recept.getAllSastojci()
recept.setNewSastojak("kreme brule");
// recept.getAllSastojci()
console.log ( recept.getCena())
recept.setPopust(12, "cetvrtak")
recept.setPopust(25, "sreda")
console.log(recept.getCena().toFixed(3))
console.log(Math.floor(recept.getCena())) 
console.log(Math.ceil(recept.getCena()))
console.log(Math.round(recept.getCena()))

