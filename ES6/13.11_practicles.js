// 1. write a function that capitalise first letter of each string argument it recieves.


//Function arguments : [hello, there, ES, 6]

function capitalise(array) {
    const newArray =[];
    for(var i = 0; i < array.length; i ++) {
        if(typeof array[i] === "string") {
            newArray.push(array[i][0].toUpperCase() + array[i].slice(1))
        }
     }
     return newArray;
}
console.log(capitalise(["hello", "there", "ES", 6]));