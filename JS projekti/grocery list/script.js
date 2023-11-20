const data = [
    {
        productName:"Olives", price : 5,
    },
    {
        productName:"Tomatos", price : 3,
    },
    {
        productName:"Onions", price : 7,
    },
    {
        productName:"Dozzen eggs",price : 10,
    },
    {
        productName:"Beans", price : 3,
    },
]
const products = document.querySelector('.products')
const totalPriceSpan = document.querySelector('.total span')
let totalPrice = 0;

//korak prvi - kroz javu script pravimo dinamicke objekte i dohvatamo podatke i manipulisemo podacima//
data.forEach((elem, index, arr) => {

    const productWrapper = document.createElement ('div')

    
    
    const product = document.createElement('p')
    const price = document.createElement('p');
    const btnAdd = document.createElement('button');
    
    //drugi korak - sta mi hocemo da se nalazi izmedju otvarajuceg i zatvarajuceg taga//

    productWrapper.className = 'productWrapper';
    product.innerHTML = `${elem.productName}  :`;
    price.innerHTML= `${elem.price}  $`;
    btnAdd.innerHTML = 'Add to Cart';
    btnAdd.addEventListener('click', () => {
        totalPrice += elem.price;
        console.log(totalPrice)
        totalPriceSpan.innerHTML = `${totalPrice}$`
        
    })

    productWrapper.append(product, price, btnAdd)
    products.append(productWrapper)

}) 
