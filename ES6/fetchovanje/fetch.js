const img = document.querySelector("img");
// ako je klasa ide tacka ispred img ako je id onda taraba //
// console.log(img);

const btn = document.querySelector("button");
// console.log(btn)

  function fetchDog() {
    try {
        fetch("https://dog.ceo/api/breeds/image/random").then((response) => {
        //   if (response.status === 200) {
        //     throw new Error("greska");
        //   }
          return response.json();
    
        }).then((data) => changeDogImage(data));
    
      } catch (err) {
        console.log(err);
      }
  }
  function changeDogImage({status, message}) {
    // console.log(message);
    img.setAttribute("src", message);
 }
 btn.addEventListener("click", fetchDog);
 
