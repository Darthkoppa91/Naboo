//destructuring of objects 

const person = {

    name:"Martin",
    lastname: "Potkonjaka",
    age: 29,
    child: {
        name: "Martina",
        child: {
            name: "Dete Martina"
        }
    }
}

console.log(person.child.child.name);
let {name,age} = person;

name = "martina";
// console.log(name, age) ;
// console.log(person.name)

 
function showAge(objekat) {
    return objekat.age;
}
console.log(showAge(person));

function showAgeDestructure({age}){
    return age;
}
console.log(showAgeDestructure(person))



// ARRAY DESTRUCTURING//


const array = ["apple", "microsoft", "samsung"];

// const [first, second, trecaVarijalbla ] = array;

const [, second, ] = array;

// console.log(first)
// console.log(second)
// console.log(trecaVarijalbla)


//ARROW FUNCTION //
const add = function (x,y) {
    if( x>= 0 && y >=0 ) {
        return x-y;
    }
    return x+y
}
console.log(add(3,4))

const addArrowF = (x,y) => {if(x>=0 && y>=0) {
    return x-y;
}
return x+y;
};

console.log(addArrowF(3,4))


const arr = [1,2,3,4,5,6,7,8,9,10]

const filterArr = arr.filter(function(element, index , niz){
    return element <6 ;

})


// ARROW FUNCTION NAD ARRAYJEM //
// const filteredArrowF = arr.filter((element,index,niz) => element <6);
// console.log(filterArr);

//ukoliko imamo samo 1 parametar funkcije onda ne moramo nabrajati ostale parametre vec moze samostalno //

const filteredArrowF = arr.filter(element => element >=6);
console.log(filteredArrowF);

// setInterval(() =>console.log(1),1000)
//clearInterval()


//AVERAGE  DESTRUCTION //
const average = (numbers) => {

    let sum = 0;
    let len = numbers.length;
    numbers.forEach(e => sum += e)
        
        return sum /len;
    }
    console.log(average([1,2,3,4]))

