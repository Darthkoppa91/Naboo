function Person ( name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.getFullName= function() {
    return`${this.name} ${this.surname}`;
}
const martin = new Person ("martin", "Poktkonjak");
// console.log(martin.getFullName())

function Employee( name,surname, job, salary) {
    //1. prvi korak
    Person.call(this, name,surname);
    this.job = job;
    this.salary = salary;
}

//2. drugi korak
Employee.prototype = Object.create(Person.prototype);

//3. korak 
Employee.prototype.constructor = Employee;
// Da bi methode radile moramo da ih zakacimo na prototip nakon 3 koraka

Employee.prototype.getData = function() {
    return `${this.name}, ${this.surname}, salary: ${this.salary}`
}

Employee.prototype.getSalary = function() {
    return this.salary;
}

Employee.prototype.increaseSalary = function() {
    this.salary *= 1.1;
}
const employee = new Employee ("Mika", "Hanikken","Janitor", 350)

function Developer(name,surname, job, salary, specialization) {
    Employee.call (this,name,surname, job, salary );
    this.specialization = specialization;
}
// 2.1 - setPrototypeof je skracenica za uvezivanje protitipa 2 objekta JAKO KORISNO
Object.setPrototypeOf(Developer.prototype,Employee.prototype)

//2. korak
Developer.prototype = Object.create(Employee.prototype);
// 3. korak
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function() {
    return this.specialization;
}
const developer = new Developer ("Aleks", "Kopcic", "IT", 500, "QA")
// console.log(developer.getFullName());

// console.log(employee.getData())
// console.log(employee.getSalary())
// console.log(employee.increaseSalary())
// console.log(employee.getFullName())

function Manager (name,surname, job, salary, department) {

    //1. korak
    Employee.call (this,name,surname, job, salary );
    this.department = department;

}
//2.i 3. korak skraceno :)
Object.setPrototypeOf(Manager.prototype, Employee.prototype);
Manager.prototype.getDepartment = function() {
    return this.department;
}
Manager.prototype.changeDepartment = function( promenjenDeparment) {
    this.department = promenjenDeparment;
}

const manager = new Manager ( "Pavle","Josifovsski","Digi Markt", 3000, "Email");

console.log(manager.changeDepartment())
manager.increaseSalary();
console.log(manager.getFullName())



