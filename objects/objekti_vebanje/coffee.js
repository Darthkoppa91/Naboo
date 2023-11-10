

// var coffee = {
//     coffeeName: "Kafa late",
//     strength: "medium",
//     flavour : "gorak",
//     milk: false,
//     size: "venti",
//     Sugar : 1,
//     addSugar:function(){
//         coffee.Sugar++;
//     }
// ,
// getSugar:function() {
//     return coffee.Sugar; 
    
// },
// changeStrength: function(strength) {
//     coffee.strength = strength;
// }

// }
// console.log(coffee);
// console.log(coffee.getSugar())
//  coffee.addSugar()
// console.log(coffee.getSugar())
// coffee.changeStrength("strong");
// console.log(coffee.strength)



// 3. write a function that creates and object that represents a project. Each project is described by: descritptio, programing language, git repository.....//

function generateObject(description, language, git, status) {
    var project ={}
    project. description = description;
    project.language = language
    project.git = git;
    project.status = status;
    project.printGit = function() {
        return project.git;
    }

    project.checkLanguage = function() {
        if(project.language === "JavaScript") {
            return true;
        }
        return false;
    }
    project.checkStatus = function(){

        if (project.status === "development") {
            return true;
        }
        return false;
    }

    return project;

}
var projekat = generateObject("lorem ipsun....", "JavaScript", "https://www.github.com/dailoski/", "production");

console.log(projekat.checkLanguage())
console.log(projekat.checkStatus())
console.log(projekat.printGit())

