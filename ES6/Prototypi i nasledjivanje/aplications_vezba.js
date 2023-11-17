function Application(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
  }
  
  Application.prototype.isCCLicence = function () {
    if (this.licence) {
      return "Application is CC Licence";
    }
    return "Application is NOT CC Licence";
  };
  
  Application.prototype.showStars = function () {
    return this.stars;
  };
  
  Application.prototype.like = function () {
    this.stars += 1;
  };
  
  const array = ["name", "licence", "stars"];
  
  function WebApplication(name, licence, stars, url, technologies) {
    // Application.apply(this, [name, licence, stars])
    Application.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
  }
  
  Object.setPrototypeOf(WebApplication.prototype, Application.prototype);
  
  WebApplication.prototype.getData = function () {
    let technologiesString = "";
    this.technologies.forEach(
      (tehnologija) => (technologiesString += `, ${tehnologija}`)
    );
  
    return `${this.name}, licence: ${this.licence}, stars: ${this.stars}, web-url: ${this.url}${technologiesString}`;
  };
  
  WebApplication.prototype.reactBased = function () {
    if (this.technologies.length < 1) {
      return false;
    }
    return this.technologies.includes("React");
  };
  
  const aplikacija = new Application("BitApp", true, 5);
  
  console.log(aplikacija);
  console.log(aplikacija.isCCLicence());
  console.log(aplikacija.showStars());
  aplikacija.like();
  console.log(aplikacija.showStars());
  
  const webAplikacija = new WebApplication(
    "CodinGame",
    false,
    15,
    "https://www.codingame.com",
    ["Python", "React", "Angular", "Bootstrap", "Objective C"]
  );
  
  console.log(webAplikacija.getData());
  console.log(webAplikacija.reactBased());


  console.log(webAplikacija.isCCLicence())

  console.log(webAplikacija.showStars())

  webAplikacija.like()
  console.log(webAplikacija.showStars())



  function MobApplication (name, licence, stars, platforms) {
    Application.call(this, name, licence, stars);
    this.platforms = platforms;
    MobApplication.prototype = Object.create(Application.prototype);
    MobApplication.prototype.constructor = MobApplication;

    MobApplication.prototype.getData = function() {
        let platformsString = "";
    this.platforms.forEach ((platforma) => (platformsString += `, ${platforma}` ));
    return `${this.name}, licence: ${this.licence}, stars: ${this.stars}, ${platformsString}`;

    }


MobApplication.prototype.forAndroid = function() {
    return this.platforms.includes("Android");

}

const mobAplikacija = new MobApplication("GitHub", true, 2500, ["Desktop","Android", "iOS"]);
  }