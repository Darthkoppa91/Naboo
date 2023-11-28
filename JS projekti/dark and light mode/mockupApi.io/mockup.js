const MOCK_API_SQUAD_ENDPOINT =
  "https://6560813183aba11d99d0f328.mockapi.io/api/v1/squad";

const main = document.querySelector("main");
const headerBtn = document.querySelector(".darkLightMode");
const gridView = document.querySelector(".grid");


const fetchSquad = async () => {
  const res = await fetch(MOCK_API_SQUAD_ENDPOINT);
  const data = await res.json();

  console.log(data);
  makeCards(data);
};

fetchSquad();

function makeCards(data) {
  data?.forEach((el) => {
    const squadCard = document.createElement("div");

    const img = document.createElement("img");

    const p = document.createElement("p");

    const btn = document.createElement("button");
    const btnPost = document.createElement("button");

    img.setAttribute("src", el.avatar);
    p.textContent = el.name;
    btn.textContent = "DELETE";
    btnPost.textContent = "SUBMIT";

    squadCard.append(img, p, btn, btnPost);

    main.append(squadCard);

    btn.addEventListener("click", async () => {
      const res = await fetch(
        `https://6560813183aba11d99d0f328.mockapi.io/api/v1/squad/${el.id}`,
        { method: "DELETE" }
      );

      window.location.reload();
    });

    btnPost.addEventListener("click", async () => {
      const res = await fetch(
        `https://6560813183aba11d99d0f328.mockapi.io/api/v1/players`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: el.name,
            surname: "Pasha",
            position: "Miljenko",
            kitNumber: "45",
            age: "21",
            marketValue: "1.2 mill",
          }),
        }
      );
       const data = await res.json()
       console.log(data);
    });
  });
}

headerBtn.addEventListener("click", () => {
  if (localStorage.getItem("theme") === "dark") {
    localStorage.removeItem("theme");
    document.body.classList.toggle("dark");
  } else {
    localStorage.setItem("theme", "dark");
    document.body.classList.toggle("dark");
  }
});

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.toggle("dark");
  }

  if (localStorage.getItem("layout") === "list") {
    document.body.classList.toggle("list");
  }
});


gridView.addEventListener("click", () => {
  if(localStorage.getItem("layout") ==="list") {
    localStorage.removeItem("layout");
    main.classList.toggle("list");
  }
  else {
    localStorage.setItem("layout", "list");
    main.classList.toggle("list");
  }
})
