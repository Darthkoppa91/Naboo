function Person ( ime, prezime, godiste , JMBG) {
    this.ime = ime;
    this.prezime = prezime;
    this.godiste = godiste;
    this.JMBG = JMBG;
    this.sayMyName = function() {
        return this.ime;
    }
}
const person1 = new Person("Aleksandar","Kopcic", 1992, 123020149);
const person2 = new Person("Aleksandar","Kopcic", 1992, 123020149);

console.log(person1)
console.log(person2)


class personClass {
    constructor(ime, prezime, godiste , JMBG) {
        super();
    this.ime = ime;
    this.prezime = prezime;
    this.godiste = godiste;
    this.JMBG = JMBG;

    }

    sayMyName() {
        return this.ime;
    }
}
const person2Class = new personClass("Aleksandar","Kopcic", 1992, 123020149);

