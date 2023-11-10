
function generateObject(genre, duration, rating, published, title){
    var object = {};
    object.genre = genre;
    object.duration = duration;
    object.rating = rating;
    object.published = published;
    object.title = title;
    object.getTitle = function (){
        return object.title;
    }
    object.changeRating = function (newRating){
        object.rating = newRating;
    }
    return object;
}

var sacuvaniObjekat1 = generateObject("Action", 120, 8.3, 2008, "Jaws 4");
// console.log(sacuvaniObjekat1)
var sacuvaniObjekat2 = generateObject("Comedy", 150, 7.9, 2006, "Jaws 3");
// console.log(sacuvaniObjekat2)
var sacuvaniObjekat3 = generateObject("Thriller", 110, 6.9, 2004, "Jaws 2");
// console.log(sacuvaniObjekat3)

var movieArray = [];
movieArray.push(sacuvaniObjekat1, sacuvaniObjekat2, sacuvaniObjekat3)
// console.log(movieArray)

for(var i = 0; i < movieArray.length; i++){
    var film = movieArray[i];
    if(film.genre === "Comedy"){
        film.changeRating(10.0);
    }
}

console.log(movieArray)
var header =document.querySelector("header");
console.log(header);
// NODELIST -> static - koristi ovu opciju vise //
var kartice = document.querySelectorAll(".card");
console.log(kartice);
//HTML COLLECTION -> Live //
var kartice2 = document.getElementsByClassName("card")
console.log(kartice2);


var h3 = document.querySelectorAll("h3");
console.log(h3)
var p = document.querySelectorAll("p");
console.log(p)
//h3[0].textContent = "promenjen h3";
for (var i =0; i<h3.length; i++) {
    h3[i].textContent =movieArray[i].title;
    console.log(i+1);
    p[i].textContent =movieArray[i].genre;
}