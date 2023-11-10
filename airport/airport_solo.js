(function () {
  function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getData = function () {
      return this.name + " " + this.surname;
    };
  }
  var osoba1 = new Person("ana", "marelja");
  //   console.log(osoba1.getData());

  function Seat(number, category) {
    // this.number = number ? number : Math.floor(math.random() * (100-10 +10)
    this.number = number || Math.floor(Math.random() * (100 - 10) + 10);

    // if (number) {
    //   this.number = number;
    // } else {
    //   this.number = Math.floor(Math.random() * (100 - 10) + 10);
    // }

    // if (category !== "e" && category !== "b") {
    //   this.category = "e";
    // } else if (!category) {
    //   this.category = "e";
    // } else this.category = category;
    this.category = category !== "e" && category !== "b" ? "e" : category;
    this.getData = function () {
      return this.number + this.category;
    };

   
  }
  var sediste1 = new Seat(12, "b");
  //   console.log(sediste1.getData());

  function Passenger(person, seat) {
    if (person instanceof Person && seat instanceof Seat) {
      this.person = person;
      this.seat = seat;
      this.getData = function () {
        return person.getData() + "," + seat.getData();
      };
      //onda je sve okej //
    } else {
      console.log("wrong INPUT!");
      return null;
    }
  }

  var putnik1 = new Passenger(osoba1, sediste1);
  var putnik2 = new Passenger(new Person("Stefan", "Dailoski"), new Seat());
  //   console.log(putnik1.getData())
  //   console.log(putnik2.getData())

  function Flight(relation, date) {
    this.relation = relation;
    this.date = new Date(date);
    this.listOfPassengers = [];
    this.addPassengers = function (putnik) {
      if (putnik instanceof Passenger) {
        this.listOfPassengers.push(putnik);
      } else {
        console.log("WRONG INPUT!");
        return null;
      }
    };
    this.getData = function () {
      var res = "";
      var formatedDate =
        this.date.getDate() +
        "." +
        (this.date.getMonth() + 1) +
        "." +
        this.date.getFullYear();
      res += formatedDate + "," + this.relation + "\n";

      for (var i = 0; i < this.listOfPassengers.length; i++) {
        //this.listOfPassenger[i] is istance of passanger //
        res += " " + this.listOfPassengers[i].getData() + "\n";
      }
      return res;
      // return this.date + "," + this.relation;
    };
  }

  var let1 = new Flight("BEG-JFK", "02/02/2018");

  let1.addPassengers(putnik1);
  let1.addPassengers(putnik2);
  //   console.log(let1.getData())

  function Airport() {
    //hard code nikola tesla// nepromenjljiva //
    this.name = "Nikola Tesla";
    this.listOfPassengers = [];
    this.addFlight = function (let) {
      if (let instanceof Flight) {
        this.listOfPassengers.push(let);
      } else {
        console.log("WRONG INPUT!");
        return null;
      }
    };
  }

  //   console.log(let1.getData());

  function Airport() {}
  function createFlight(relation, date) {
    return new Flight(relation, date);
  }

  function createPassenger(name, lastName, number, category) {
    return new Passenger(
      new Person(name, lastName),
      new Seat(number, category)
    );
  }
  var letCPN = createFlight("BEG-CPN", "05/05/2020");
  var putnikMika = createPassenger("MIKA", "MIKIC", 17, "B");

  console.log(letCPN.getData());
  console.log(putnikMika.getData());
})();
