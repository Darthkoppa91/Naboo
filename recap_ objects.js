// // function checkArg () {
// //     return arguments;
// // }
// // console.log(checkArg(1,2,3,4,5,5,6,7,8,8,9,9));

// //  console.log(typeof Number("21"))
// //  console.log(typeof String(21))

// // var person1 = {
// //     ime: "martin"

// // }
// // var person2 = {
// //     ime : "martin"
// // }
// // console.log(person1 === person2)
// // console.log(person2.toString(0) === person1.toString())

// // var object = {
// //     ime: "Martin",
// //     sayName: function () {
// //         return this.ime;
// //     }
// // }

// // var Object2 = {
// //     ime: "Marko",
// //     sayName: function() {
// //         return this.ime;
// //     }
// // }

// // // console.log(Object.sayName())
// // console.log(Object2.ime)
// // console.log(Object2.sayName())
// // console.log(this)

// //this je konstruktivna promeljiva i pokazuje na objekat//

// // construktorska funkcija//

// // var hero = {
// //     occupation: "ninja",
// //     getOccupation: function() {
// //         return  this.occupation;
// //     }
// // }

// // function generateObject(occupation) {
// //     var hero = {};

// //     return hero;
// // }
// // function Hero() {

// // }



// // function checkArg(){
// //     return arguments;
// // }

// // console.log(checkArg(1,2,3,4,5,6,7,8))

// // var person = {
// //     ime: "Stefan"
// // }

// // console.log(person.prezime)

// // person.prezime = "ldjasnfjasn"
// // console.log(person.prezime)
// // person.prezime = "abc"
// // console.log(person.prezime)

// // console.log( Number.MAX_SAFE_INTEGER)

// // console.log(Object)

// // var person = {
// //   ime: "Stefan",
// // };

// // var person2 = person;

// // var person3 = person2;

// // console.log(person3);

// // person3.ime = "asldkjaksjd"
// // person3.prezime = "asdasd"

// // console.log(person);

// // person3 = {
// //     blabla: "blabla"
// // }

// // var person1 = {
// //     ime: "Stefan",
// // }

// // var person2 = {
// //     ime: "Stefan"
// // }

// // // var person3 = person1;

// // console.log(Object.values(person1), Object.keys(person1))
// // console.log(Object.entries(person1))

// // console.log(JSON.stringify(person1) === JSON.stringify(person2))

// // var object = {
// //     ime: "Stefan",
// //     sayName: function(){
// //         return this.ime;
// //     }

// // }

// // var object2 = {
// //     ime: "Marko",
// //     sayName: function(){
// //         return this.ime;
// //     }
// // }

// // console.log(object.sayName())
// // console.log(object2.sayName())

// // console.log(this)

// // var hero = {
// //     occupation: "Ninja",
// //     getOccupation: function () {
// //       return this.occupation;
// //     },
// //   };
  
  
// //   function generateObject(occupationParam) {
// //     var hero = {
// //       occupation: occupationParam,
// //       getOccupation: function(){
// //           return this.occupation;
// //       }
// //     };
// //   //   hero.occupation = occupationParam;
// //   //   hero.getOccupation = function () {
// //   //     return this.occupation;
// //   //   };
// //     return hero;
// //   }
  
// //   var generisanObjekat = generateObject("Ninja");
// //   var generisanObjekat2 = generateObject("Ninja2");
// //   var generisanObjekat3 = generateObject("Ninja3");
  
// //   console.log(generisanObjekat3.getOccupation());
  
// //   function Hero(occupation) {
// //       this.occupation = occupation;
// //       this.getOccupation = function(){
// //           return this.occupation;
// //       }
// //   }
  
// //   var noviObjekat = new Hero("Kuvar")
// //   console.log(noviObjekat instanceof Hero)
// //   var string = new String(21)
// //   // console.log(noviObjekat.hasOwnProperty())
  
  
// //   function Person(firstname, lastname){
// //       this.name = firstname,
// //       this.surname = lastname,
// //       this.isAlive = true,
// //       this.dateOfBirth = new Date(),
// //       this.generateFullName = function(){
// //           return this.name + " " + this.surname;
// //       }
// //   }
  
// //   var osoba1 = new Person("Martin", "Potkonjak")
// //   osoba1.name = "Martina"
// //   console.log(osoba1.generateFullName())


// function ModernCalculator(num1, num2, num3) {
//     this.number1 = num1
//     this.number2 = num2
//     this.number3 = num3
//     this.sum = function() {
        
//         return this.number1 + this.number2 + this.number3
//     }
//     this.mul = function() {

//         return this.number1* this.number2  * this.number3
//     }
//     this.div = function() {

//         return this.number1/ this.number2 /this.number3
//     }
//     this.sub = function() {

//         return this.number1 - this.number2 - this.number3
// }

//     this.changeNumber1 = function(newnum) {
//         this.number1 = newnum
//     }
//     this.changeNumber2 = function(newnum2) {
//         this.number2 = newnum2
// }
//     this.changeNumber3 = function(newnum3) {
//         this.number3 = newnum3
//     }
    
//     this.sqrt = function () {
//     return Math.sqrt(this.number1)
// }
//     this.pow = function () {
//     return Math.pow(this.number1 * this.number2)
// }
//     // this.quadraticFormula = function() {    

//     //     var quad = Math.abs(this.b ** 2-4 * this.a *this.c);
//     //     var result = ((-this.b +Math.sqrt(quad/2))) * this.a;
//     //     return result;
//     // }

//     this.makeArray = function() {
//     var newArray =[this.number1,this.number2, this.number3];
//     var noviNiz =new Array(this.number1,this.number2, this.number3)

//     //  return newArray;
//     return noviNiz;
// }
//     this.allAreEven = function() {
//     if(this.number1%2===0 && this.number2%2===0 && this.number3%2===0) {
//         return true
//     }
//     return false
// }
//     this.allArePrime = function() { 
//     if(isPrimeGlobal(this.number1) && isPrimeGlobal(this.number2) && isPrimeGlobal(this.number3)){
//         return true
//     }   
//     return false
// }
// }

// function isPrimeGlobal(num) {
// var sqrtnum=Math.floor(Math.sqrt(num));
//   var prime = num != 1;
//   for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
//       if(num % i == 0) {
//           prime = false;
//           break;
//       }
//       return prime;
//   }
  
// }

// var calc =new ModernCalculator(2,4,3);

// console.log(calc.sum());
// console.log(calc.mul());
// console.log(calc.div());
// console.log(calc.sub());
// // calc.changeNumber1(10);
// // calc.changeNumber2(10);
// // calc.changeNumber3(5);
// console.log(calc.makeArray());
// console.log(calc.allAreEven());
// console.log(calc.allArePrime());

// console.log(calc.quadraticFormula())

function ModernCalculator(num1, num2, num3) {
    this.a = num1;
    this.b = num2;
    this.c = num3;
  
    this.sum = function () {
      if(this["d"] !== undefined){
          return this.a + this.b + this.c + this["d"];
      }
    };
  
    this.mul = function () {
      return this.a * this.b * this.c;
    };
  
    this.div = function () {
      return this.a / this.b / this.c;
    };
  
    this.sub = function () {
      return this.a - this.b - this.c;
    };
  
    this.changea = function (newnum) {
      this.a = newnum;
    };
  
    this.changeb = function (newnum) {
      this.b = newnum;
    };
  
    this.changec = function (newnum) {
      this.c = newnum;
    };
  
    this.sqrt = function () {
      return Math.sqrt(this.a);
    };
  
    this.pow = function () {
      return Math.pow(this.a, this.b);
    };
  
    this.quadraticFormula = function () {
      var quad = Math.abs(this.b ** 2 - 4 * this.a * this.c);
      var result = ((-this.b + Math.sqrt(quad)) / 2) * this.a;
  
      return result;
    };
  
    this.makeArray = function () {
      var newArray = [this.a, this.b, this.c];
      var noviNiz = new Array(this.a, this.b, this.c);
  
      //  return newArray;
      return noviNiz;
    };
    
    this.allAreEven = function () {
      if (this.a % 2 === 0 && this.b % 2 === 0 && this.c % 2 === 0) {
        return true;
      }
      return false;
    };
  
    this.allArePrime = function () {
      if (
        isPrimeGlobal(this.a) &&
        isPrimeGlobal(this.b) &&
        isPrimeGlobal(this.c)
      ) {
        return true;
      }
      return false;
    };
  
    this.convertToString = function () {
      var noviArray = this.makeArray();
      var concat = "";
      for (var i = 0; i < noviArray.length; i++) {
        if (i !== noviArray.length - 1) {
          concat += noviArray[i] + "+";
        } else {
          concat += noviArray[i];
        }
      }
  
      return concat;
    };
  
    this.sumAndMul = function () {
      var suma = this.sum() * 123;
      return suma;
    };
  
    this.reverseNumber = function () {
      var reverse = this.sumAndMul();
      reverse += "";
      var noviReverse = "";
      for (var i = reverse.length - 1; i >= 0; i--) {
        noviReverse += reverse[i];
      }
      // for (var i=0; i<reverse.length; i++) {
      //     noviReverse += reverse[reverse.length-1-i]
      // }
  
      return noviReverse;
    };
    this.newProperty = function (key, value) {
      this[key] = value;
    };
  }
  
  function isPrimeGlobal(num) {
    var sqrtnum = Math.floor(Math.sqrt(num));
    var prime = num != 1;
    for (var i = 2; i < sqrtnum + 1; i++) {
      // sqrtnum+1
      if (num % i == 0) {
        prime = false;
        break;
      }
    }
    return prime;
  }
  
  var calc = new ModernCalculator(2, 4, 3);
  var calc2 = new ModernCalculator(1, 2, 3);
  
  
  
  // console.log(calc.sub());
  // console.log(calc.makeArray());
  // console.log(calc.allAreEven());
  console.log(calc.allArePrime());
  console.log(calc.pow());
  console.log(calc.quadraticFormula());
  console.log(calc.mul());
  console.log(calc.convertToString());
  console.log(calc.sumAndMul());
  console.log(calc.reverseNumber());
  calc.newProperty("d", 14);
  console.log(calc["d"]);
  console.log(calc.sum())
  
  function abc() {
    return arguments;
  }
  
  console.log(abc(1, 2, 3, 4, 5, 6, 7, 78, 56, 5, 4));
  
  
  
  var osoba = {
      ime: "Marint",
      sayName: function(){
          return this.ime;
      }
  }