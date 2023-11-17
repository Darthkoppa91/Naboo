function Person(name, surname, age) {
    this.name= name;
    this.surname = surname;
    this.age = age;

    // this.sayName = function () {
    //     return this.name;
    // }

    //kada ulancavamo kroz prototip onda ne moramo da  ovim putem kreiramo metode//
    // this.tellAge = function () {
    //     return this.age;
    // }
}

const person = new Person ("Martin", "Potkonjak", 27);
const person2 = new Person ("Martin2", "Potkonjak2", 27);

Person.prototype.sayName = function() {
    return this.name;
}

Person.prototype.tellAge = function() {
    return this.age;
}
// console.log(person.sayName())
// console.log(person2.tellAge())


// Array.prototype.push2 = function(num) {
//     this[this.length] = num;
// }
// const arr = [1,2,3];
// arr.push2(5)
// arr.push2(57)
// console.log(arr)


function Programer ( name, surname, age, job, vacationDays, salary ) {
    // 1.prvi korak nasledjivanja- samo property se nasledjuje 
    Person.call(this, name, surname, age);
    this.job = job;
    this.vacationDays = vacationDays;
    this.salary = salary;
}

// 2. korak nasledjivanjaa- smo prevezali pokazivac na person.prototype
Programer.prototype = Object.create(Person.prototype);
//.3 korak - uvratili smo konstruktoru referencu na konstru. funkciju +

Programer.prototype.constructor = Programer;

Programer.prototype.getSalary = function(){
    return this.salary;
}

Programer.prototype.increaseSalary = function() {
    this.salary *=1.2;
}

const programer = new Programer ("Petar","Dailoski",27,"DevOps", 25, 2000);
const milan = new Programer ("Milan","Mica", 29,"FRE", 29, 750);

programer.increaseSalary();
milan.increaseSalary();
milan.increaseSalary()

console.log(programer.getSalary())

// console.log(programer.increaseSalary());
console.log(milan.getSalary());


