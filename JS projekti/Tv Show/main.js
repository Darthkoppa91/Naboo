const ALL_BITSHOWS_API_ENDPOINT = "https://api.tvmaze.com/shows";
const SEARCH_ALL_BITSHOWS_API_ENDPOINT = "https://api.tvmaze.com/search/shows";

const container = document.querySelector("container");
const searchInput= document.querySelector("#search");
const show = document.querySelector('.show');



async function getAllShows() {
  const res = await fetch(ALL_BITSHOWS_API_ENDPOINT);
  const data = await res.json();
  // console.log(data)
  const top50BestShows = data
    .sort((a, b) => b.rating.average - a.rating.average)
    .filter((e, i) => i < 50);
    
  // console.log(top50BestShows);
  makeShowCard(top50BestShows);
}
getAllShows();

function makeShowCard(data) {
    container.innerHTML="";
    data.forEach(e => {
     const divShow= document.createElement('div');
     const img = document.createElement('img') ; 
     const p = document.createElement('p');

     const btnBack = document.createElement('button');
        btnBack.innerHTML='Go Back'
        btnBack.classList.add('show');
        divShow.append(btnBack);
     if(e.image) {
        img.setAttribute("src", e.image.medium);
     } else {
        //patchovanje verzija - skraceno sa upitnicima i pitanjem ako nema event daj show ako nema show onda image 
        img.setAttribute("src","https://depositphotos.com/vectors/no-image-available.html")
     }
// img.setAttribute("src", e.image.medium);
    p.textContent= e.name;

     btnBack.addEventListener('click',function(){
        container.classList.remove('show');
        show.style.display = 'none';

     })

    divShow.addEventListener('click',function(){
       show.append(divShow);
        container.classList.add('show');
        show.style.display = 'block';
        btnBack.classList.remove('show');

        
    })


    divShow.append(img, p) ;
    container.append(divShow);
    
    
 });

}
searchInput.addEventListener("keydown", (event) => {
    if(event.key ==="Enter") {
        searchShow()
    }  
})
async function searchShow() {

    const response=await fetch(SEARCH_ALL_BITSHOWS_API_ENDPOINT+"?q="+ searchInput.value)
    const data = await response.json()
    const prepakovanNiz = data.map(element => {return element.show})
     makeShowCard(prepakovanNiz)

     console.log(data.map((element)=> {return element.show}))
}
// ovo je stefanovo resenje


const ALL_BITSHOWS_API_ENDPOINT = "https://api.tvmaze.com/shows"
const SEARCH_API_ENDPOINT = "https://api.tvmaze.com/search/shows"
const container = document.querySelector("container");
const searchInput = document.querySelector("#search");
const show=document.querySelector('.show');
const inputShow=document.querySelector('.input-show')

async function getAllShows() {
    const res = await fetch(ALL_BITSHOWS_API_ENDPOINT);
    const data = await res.json();


    const top50BestRatedShows = data.sort((a, b) => b.rating.average - a.rating.average).filter((e, i) => i < 50);

    makeShowCard(top50BestRatedShows);
}


getAllShows()

function makeShowCard(data) {
    container.innerHTML = ""
    data.forEach(e => {
        const divShow = document.createElement("div");
        const img = document.createElement("img");
        const p = document.createElement("p");
        const btnBack=document.createElement('button');
        btnBack.innerHTML='Go Back'
        btnBack.style.display='none';
        divShow.append(btnBack);
        
        if(!!e.image){
            img.setAttribute("src", e.image.medium);  
        }else{
            img.setAttribute("src", "https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png");

        }
        p.textContent = e.name;

      

        divShow.addEventListener('click',function(){
            show.append(divShow)
            container.classList.add('show');
            show.classList.remove('show')
            btnBack.style.display='block';
          
            
        })
        btnBack.addEventListener('click',function(e){
            e.stopPropagation();
            container.classList.toggle('show');
            show.classList.add('show')
        })
        divShow.append(img, p);
        container.append(divShow);


    })
}

searchInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        searchShows()
    }
})
async function searchShows(){
    
    const response = await fetch(SEARCH_API_ENDPOINT + "?q=" + searchInput.value)
    const data = await response.json();
    const prepakovaniNiz = data.map((element) => {return element.show})
    makeShowCard(prepakovaniNiz);
}

// async function searchShows(e){
//     inputShow.innerHTML='';
//     const response = await fetch(SEARCH_API_ENDPOINT + "?q=" + searchInput.value)
//     const data = await response.json();
//     const prepakovaniNiz = data.map((element) => {return element.show})
//     // makeShowCard(prepakovaniNiz)
//     data.forEach(e => {
       
//         const p = document.createElement("p");
        
        
       
//         console.log(e)
//         p.innerHTML = e.show.name;

      

        
        
//         // divShow.append(p);
//         inputShow.append(p);


//     })

//     console.log(prepakovaniNiz)

// }


