
const parent = document.querySelector('.container');
const niz = ['HOME',"ABOUT US", "CONTACT"];
const listUnordered = document.createElement('ul')




for(let i=0;i<niz.length;i++){
    const li=document.createElement('li');
    listUnordered.append(li);
    li.innerHTML=niz[i]
}

parent.append(listUnordered)
console.log(listUnordered)



const everyListItem = document.querySelectorAll('li')
console.log(everyListItem) 

everyListItem.forEach((elem, index, array) =>{
    if(index===2){
        // alert(`${elem.innerHTML} We are on vacation, contact us in 2 weeks`)
    }
 
    (function (text){
        //const last = list.children[list.length-1];
        const list = document.querySelector('ul');
        const last = list.lastElementChild; //isto kao 10
        
        last.textContent = text;
        
        
        })("some text")

        (function (array, dom) {
            const dropdown = document.createElement('select');
            const option1 = document.createElement('option');
            const option2 = document.createElement('option');
            const option3 = document.createElement('option');
        
            dropdown.name = "drop-down"
            option1.textContent = "blablabla"
            option2.textContent = "djoledjole"
            option3.textContent = "kavasaki"
            option1.value = "1"
            option1.value = "2"
            option1.value = "3"
        
            dropdown.appendChild(option1, option2, option3)
            document.container.appendChild("dropdown")
        
        })
})
 dropdown1()

function arrayToDropDown(array, node) {
    const dropdown = document.createElement ('select');
    for(var i = 0; i<niz.length;i++)
}