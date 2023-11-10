
(function () {
    function Person(name, surname) {
      this.name = name;
      this.surname = surname;
      this.getData = function () {
        return this.name + " " + this.surname;
      };
    }
    // ovde pravimo nove instance konstruktorske f-je Person//
    
    var person1 = new Person("John", "Snow");
    var person2 = new Person("Cercile", "Lannister");
  
    function Seat(seatNumber, seatCategory) {
      if (seatCategory !== "e" && seatCategory !== "b") {
        this.seatCategory = "e";
      } else {
        this.seatCategory = seatCategory;
      }
  
      if (seatNumber !== undefined) {
        this.seatNumber = seatNumber;
      } else {
        this.seatNumber = Math.round((100 - 10) * Math.random() + 10);
      }
  
      this.getData = function () {
        return this.seatNumber + ", " + this.seatCategory.toUpperCase();
      };
    }
  
    var seat1 = new Seat(12, "b");
    var seat2 = new Seat(4, "c");
  
    // ovo nije instanca nastala iz new Seat(13, "b")
    //   var seat4 = {
    //     seatNumber: 10,
    //     seatCategory: "e",
    //     getData: function(){
    //         return this.seatNumber + ", " + this.seatCategory
    //     }
    //   }
    //   console.log(seat4)
    //   console.log(seat1)
  
    function Passenger(person, seat) {
      if (person instanceof Person) {
        this.person = person;
      }
      if (seat instanceof Seat) {
        this.seat = seat;
      }
      // add getData method to passenger
      this.getData = function () {
        return this.seat.getData() + ", " + this.person.getData();
      };
    }
  
    var passenger1 = new Passenger(person1, seat1);
    var passenger2 = new Passenger(person2, seat2);
  
    // createPassenger funkcija za kreiranje novih instanci Passenger-a
    function createPassenger(firstName, lastName, seatNumber, seatCategory) {
      return new Passenger(
        new Person(firstName, lastName),
        new Seat(seatNumber, seatCategory)
      );
    }
  
    var passenger3 = createPassenger("Martin", "Potkonjak", 44, "b");
    //   var passenger4 = new Passenger(new Person("Martin", "Potkonjak"),new Seat(41, "e"));
  
    function Flight(relation, date) {
      this.listOfPax = [];
      this.relation = relation;
      this.date = new Date(date);
  
      this.addPassenger = function (passenger) {
        if (passenger instanceof Passenger) {
          this.listOfPax.push(passenger);
        }
      };
  
      this.getListOfPaxLength = function () {
        return this.listOfPax.length;
      };
  
      this.getData = function () {
        var result = "";
        result +=
          this.relation +
          ", " +
          this.date.getDate() +
          "." +
          parseInt(this.date.getMonth() + 1) +
          "." +
          this.date.getFullYear() +
          "\n";
        for (var i = 0; i < this.listOfPax.length; i++) {
          result += "\t\t" + this.listOfPax[i].getData() + "\n";
        }
        return result;
      };
    }
    var flight1 = new Flight("Belgrade - Paris", "10 25 2017");
    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    flight1.addPassenger(passenger3);
  
    // pravimo metodu za pravljenje novih letova
    function createFlight(relation, date) {
      return new Flight(relation, new Date(date));
    }
  
    var flight2 = createFlight("Barcelona - Belgrade", "11 25 2018");
    flight2.addPassenger(passenger2);
    flight2.addPassenger(passenger3);
  
    function Airport() {
      this.listOfFlights = [];
      this.name = "Nikola Tesla";
  
      this.addFlight = function (flight) {
        if (flight instanceof Flight) {
          this.listOfFlights.push(flight);
        }
      };
  
      this.getListOfFlightLength = function () {
        var counter = 0;
        for (var i = 0; i < this.listOfFlights.length; i++) {
          counter += this.listOfFlights[i].getListOfPaxLength();
        }
        return counter;
      };
  
      this.getData = function () {
        var result = "";
        result +=
          "Airport: " + this.name + ", " + this.getListOfFlightLength() + "\n";
        for (var i = 0; i < this.listOfFlights.length; i++) {
          result += "\t" + this.listOfFlights[i].getData() + "\n";
        }
        return result;
      };
    }
    var airport = new Airport();
    airport.addFlight(flight1);
    airport.addFlight(flight2);
  
    console.log(airport.getData());
  })();
   


