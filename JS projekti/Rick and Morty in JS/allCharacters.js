let page =1;

const url =`https://rickandmortyapi.com/api/character/?page= ${page}`;
const wrapper = document.querySelector(".wrapper");
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');


function fetchData () {
fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
.then ((res) =>res.json())
.then((res) =>{createCards(res.results)})
}

fetchData();
function createCards (arr) {

    //4/ pre nego sto napravimo nove elemente wrapper moramo da ispraznimo
    //wrapper.innerhtml postavlja prazan string izmedju wrappera ovih otvorenih i zatovrenih tagova

    arr.forEach((elem,index,arr) => {
        console.log(elem);
        //prvi korak je kreate elements
    const card = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("h2");
    const likeBtn = document.createElement("button");

    //2. korak je add content to elements
    
    title.innerHTML =elem.name;
    image.src = elem.image;
    likeBtn.innerHTML = "Like";
    likeBtn.addEventListener("click", ()=> {
     
        localStorage.setItem("id",elem.id);
        window.location.href = "singleCharacter.html"
    })
    card.append(image, title,likeBtn)
    wrapper.append(card)
    });
}
    nextBtn.addEventListener('click', () => {
    page++;
    fetchData();
});
    prevBtn.addEventListener('click', () => {
    if(page>1) {
    page--;
    fetchData();
    }
    
});