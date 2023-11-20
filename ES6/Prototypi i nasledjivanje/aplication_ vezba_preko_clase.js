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
