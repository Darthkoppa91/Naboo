const MULTYPLY_USERS_ENDPOINT = "https://randomuser.me/api/?results=500";

const container = document.querySelector("container");
const aside = document.querySelector("aside");
const bTnPlus = document.querySelector("button");
const newList = document.querySelector(".friendsList");
// const MULTYPLY_USERS_ENDPOINT = ""

// window.addEventListener("load", fetcUsers)

async function getMultyUsers() {
  const res = await fetch(MULTYPLY_USERS_ENDPOINT);
  const data = await res.json();
  const AllUsers = [];

  // console.log(data.results);

  const getMales = data?.results.filter((el, i) => el.gender === "male");
  getMales?.forEach((el, i) => {
    if (i < 10) {
      AllUsers.push(el);
    }
  });
  // console.log(AllUsers);

  const getFemales = data?.results.filter((el, i) => el.gender === "female");
  getFemales?.forEach((el, i) => {
    if (i < 10) {
      // console.table(getFemales)
      AllUsers.push(el);
    }
  });

  // const females = data?.results.filter((el) => el.gender === "female").slice(0,10);
  // const males = data?.results.filter((el) => el.gender === "male").slice(0,10);
  // const arrs = [...females, ...males]
  // console.log(arrs)
  console.log(AllUsers);

  makeCards(AllUsers);
}

function makeCards(allPpl) {
  allPpl.forEach((el) => {
    const userCard = document.createElement("div");

    const img = document.createElement("img");
    const name = document.createElement("p");
    const lastName = document.createElement("p");
    const email = document.createElement("email");
    const dob = document.createElement("p");
    const addBtn = document.createElement("button");

    img.setAttribute("src", el.picture.medium);
    name.textContent = `${el.name.first}`;
    lastName.textContent = `${el.name.last}`;
    email.textContent = el.email;
    dob.textContent = el.dob.age;
    addBtn.textContent = "favorite";

    userCard.append(img, name, lastName, email, dob, addBtn);
    container.append(userCard);
    userCard.addEventListener("click", function () {
      localStorage.setItem("osoba", JSON.stringify(el));
      // json.stringifaj je pakovanje u jasonu da bi ga poslali dalje na local storage
      window.location.href = "./showDetail.html";
    });
    addBtn.addEventListener("click", function (event) {
      
      event.stopPropagation();
      const myFriend = document.createElement('p')
      myFriend.textContent = `${el.name.first} ${el.name.last}`;
      newList.append(myFriend);
    });
  });
}
getMultyUsers();

bTnPlus.addEventListener("click", function () {
  aside.classList.toggle("opened");
});
