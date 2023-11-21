const id = localStorage.getItem("id");
const url = `https://rickandmortyapi.com/api/character/${id}`
const card = document.querySelector('.card');


fetch(url).then ((res) =>res.json())
.then((res) => createCard(res));

function createCard(data) {
    //1. kreiranje elemenata

    const title = document.createElement('h1');
    const image = document.createElement('img');
    const status = document.createElement('h4');
    const episodes = document.createElement('div');
    const location = document.createElement('div');
    
//2
episodes.className = 'episodes';
title.innerHTML = data.name;
image.src = data.image;
status.innerHTML = data.status;
location.innerHTML = `Location: ${data.location.name}`
data.episode.forEach (elem => {
    const episode = document.createElement('p');
    episode.innerHTML = elem;
    episodes.append(episode);
    
});

//3 korak

card.append( title, image, status, location, episodes);

}