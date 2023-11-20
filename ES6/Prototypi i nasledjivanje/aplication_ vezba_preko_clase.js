class Application {
  constructor(name, stars, licence) {
    this.name = name;
    this.stars = stars;
    this.licence = licence;
  }

  showStars() {
    return this.stars;
  }
  like() {
    this.stars += 1;
  }
  isCCLicence() {
    if (this.licence) {
      return true;
    }
    return false;
  }
}
const appliication = new Application("BIT", 5, true);
// console.log(appliication)

class MobileApplication extends Application {
  constructor(name, stars, licence, platforms) {
    super(name, stars, licence);
    this.platforms = platforms;
  }

  getData() {
    return `${this.name} -> ${this.stars} -> ${this.platforms}`;
  }

  forAndroid() {
    return this.platforms.includes("Android");
  }
}
const mob = new MobileApplication("Clash", 20, true, [
  "reactNative",
  "Android",
  "Flutter",
]);

console.log(mob);
console.log(mob.forAndroid);
console.log(mob.getData);
console.log(mob.showStars);
mob.like();

class WebApplication extends Application {
  constructor(name, stars, licence, url, tehnologies) {
    super(name, stars, licence);
    this.url = url;
    this.tehnologies = tehnologies;
  }
  getData() {
    return `${this.name} -> ${this.url}`;
  }
  ReactBased() {
    return this.tehnologies.includes("React");
  }
}

const webApp = new WebApplication("GIthub", 10, false, "https://github.com/", [
  "React",
  "Python",
  "RoR",
]);

console.log(webApp);
console.log(webApp.getData());
console.log(webApp.ReactBased());
console.log(webApp.isCCLicence());
console.log(webApp.showStars());



// errors //

// va a = 5 ; // Syntax error
//undefined(); // typer Error

// console.log(a) // Reference Error

try {
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(a14)
    a();
    // pronadji cod, ako uspes prolazimo do kraja ako ne na catch hvataj greske //
    console.log(a);
} catch (err) {
    //ako nema greski catch je ignorisan ,ako se greska desi onda TRY metoga je zaustavljena i catch ( err) krece da trazi.
    // throw new Error ("Doslo je do greske "); // throw metoda je nacin ispisivanja i customizovanja greski i poruka //
}

finally {
    console.log("ovo sve svakako izvrsava bez obrzia dal je doslo do greske ili ne ")
}
//ukoliko je greska u sred try block - blok nece zaustaviti scriptu imamo sansu da handlujemo


