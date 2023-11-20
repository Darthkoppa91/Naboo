const paragraf = document.querySelector("p");
// ako je klasa ide tacka ispred img ako je id onda taraba //
// console.log(img);

const btn = document.querySelector("button");
// console.log(btn)

  function fetchFraze() {
    try {
        fetch("https://api.chucknorris.io/jokes/random").then((response) => {
        //   if (response.status === 200) {
        //     throw new Error("greska");
        //   }
          return response.json();
    
        }).then((data) => changeChuckQuote(data));
    
      } catch (err) {
        console.log(err);
      }
  }
  function changeChuckQuote({id,value}) {
     console.log(id);
     
    paragraf.innerHTML = value;
 }
 btn.addEventListener("click", fetchFraze);
