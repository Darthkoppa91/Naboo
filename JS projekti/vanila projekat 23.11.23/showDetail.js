const osoba = JSON.parse(localStorage.getItem("osoba"));
console.log(osoba);
//parse json je otpakivanje dok je json.stringify je pakovanje
const BEER_API_ENDPOINT_SKILL = "https://api.punkapi.com/v2/beers/random";
const userId = document.querySelector("main");
const skill = document.createElement("div");
skill.className = "jokes";

function makeCard() {
  const userCard = document.createElement("div");

  const img = document.createElement("img");
  const name = document.createElement("p");
  const lastName = document.createElement("p");
  const email = document.createElement("email");
  const dob = document.createElement("p");
  //nastavak sa ANom!!!
  const address = document.createElement("p");
  const pNumber = document.createElement("p");
  const city = document.createElement("p");
  const country = document.createElement("p");
  const nationality = document.createElement("p");
  const bTnClose = document.createElement("button");
  const bTnCOpen = document.createElement("button");
//   const 

  img.setAttribute("src", osoba.picture.large);
  name.textContent = `${osoba.name.first}`;
  lastName.textContent = `${osoba.name.last}`;
  email.textContent = osoba.email;
  dob.textContent = osoba.dob.age;
  address.textContent = `${osoba.location.street.name}`;
  pNumber.innerHTML = `${osoba.phone}`;
  city.innerHTML = `${osoba.location.city}`;
  country.innerHTML = `${osoba.location.country}`;
  nationality.innerHTML = `${osoba.nationality}`;

  bTnClose.innerHTML = "Close";
  bTnCOpen.innerHTML = "Show Beers";

  bTnClose.addEventListener("click", function () {
    window.location.href = "./index.html";
  });

  bTnCOpen.addEventListener("click", function () {
    skill.innerHTML= '';
    fetchSkills();
    fetchSkills();
    fetchSkills();
  });

  userCard.append(
    img,
    name,
    lastName,
    email,
    dob,
    address,
    pNumber,
    city,
    country,
    nationality,
    bTnClose,
    bTnCOpen
  );
  userId.append(userCard);

  async function fetchSkills() {
    const res = await fetch(BEER_API_ENDPOINT_SKILL);
    const data = await res.json();
    const p = document.createElement("p");
    p.textContent = data[0].name;
    p.addEventListener('click', () =>{
       
        const beerPhoto = document.createElement('img');
        const firstBrewed = document.createElement('h4');
        const desc = document.createElement('h5')
        img.setAttribute ("src",data[0].image_url);
    firstBrewed.innerHTML = `${data[0].first_brewed}`;
    desc.innerHTML = `${data[0].description}`;
    skill.append(beerPhoto, name, firstBrewed,desc)
        console.log(data[0].name)
    })

    skill.append(p);
    userId.append(skill);
    console.log(data[0].name);
  }
}

makeCard();
