//savet - posto mobile i webapp moraju da nasledjuju nesto moraju da budu iznad neceg 

function Application ( name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars

}

Application.prototype.isCCLicence = function() {
    if(this.licence) {
        return "Application is CC Licence"
    }
    return "Application is not CC Licence"
}

Application.prototype.showStars = function(){
    return this.stars;

}
Application.prototype.like = function() {
    this.stars +=1;
}

function WebApplication (name, licence, stars, url, technologies) {

   
        Application.call(this,name, licence, stars );
        // Application.apply(this, [name, licence, stars])
        this.url= url;
        this.technologies = technologies;
}

Object.setPrototypeOf(WebApplication.prototype, Application.prototype);
WebApplication.getData = function() {

    let.technologiesString = "";
    this.technologies.forEach(technologija => technologiesString += `${technologija},`)
        
    return `${this.name}, licence: ${this.licence}, stars : ${this.stars}, web-url: ${this.url},`
}

WebApplication.prototype.reactBased = function() {
    if(this.technologies.length < 1) {
        return false;
    }
}
});