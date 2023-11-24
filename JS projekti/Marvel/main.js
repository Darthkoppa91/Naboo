const MARVEL_API_ENDPOINT = "http://gateway.marvel.com/v1/public";

const main = document.querySelector("main");
main.innerHTML = "";
const ts = new Date().getTime();
const privateKey = "c6f9aa04005438782fbc00a1a6566d05a5e07b51";
const publicKey = "a785d17762079076de5b2cc220eba25d";
const hash = md5(ts + privateKey + publicKey);
console.log(hash);

async function fetchChars() {
  const res = await fetch(
    `${MARVEL_API_ENDPOINT}/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  );
  const data = await res.json();

  console.log(data.data);
  cardCharacters(data.data.results);

  
}
fetchChars();
function cardCharacters(characters) {
  characters.forEach((el) => {
    const cardSuperhero = document.createElement("div");
    const pic = document.createElement("img");
    const name = document.createElement("p");
    

    cardSuperhero.innerHTML = "";
    pic.setAttribute("src", `${el.thumbnail.path}.${el.thumbnail.extension}`);
    name.textContent = "el.name";
    
    cardSuperhero.append(pic, name)
    main.append(cardSuperhero)
  });
  
}
