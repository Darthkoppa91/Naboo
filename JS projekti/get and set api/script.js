// let city ="";
// const url ="https://api.api-ninjas.com/v1/airquality?city=Belgrade&state=Montana&country=US"

// function fetchData() {
//         fetch(url, { headers : {
//             "X-Api-Key": "2eZM2stlqk1XnB8PsLO4fA==72TKrrJwkRzrz4Ss"
//         }})
//         .then ((res) =>res.json())
//         .then((res) =>{console.log(res)})
    
// }
// fetchData();

let iban = 'AT372011184561424300'

 const url = "https://api.api-ninjas.com/v1/iban?iban=" +iban

 function fetchData() {
    fetch(url, {
        headers: {
            "X-Api-Key":"2eZM2stlqk1XnB8PsLO4fA==72TKrrJwkRzrz4Ss"
        }
    })
    .then((res) => res.json())
    .then((res) => {console.log(res)})

 }

 fetchData();