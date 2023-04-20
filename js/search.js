// import {jacketList} from "./products.js";

const apiBase = "https://rainydays.elisemariehogsnes.no";
const woocommerceBase = "/wp-json/wc/store";
const ProductBase = "/products";

const allProductBase = apiBase + woocommerceBase + ProductBase;
console.log("hello", allProductBase);
// console.log("hello", jacketList);

const searchInput = document.querySelector("#search-bar-input");
const searchResult = document.querySelector("#search-result-list");

const shoppingCartButton = document.querySelectorAll("#shopping-cart-button");
for (let i = 0; i < shoppingCartButton.length; i++) {
    shoppingCartButton[i].addEventListener("click", isCartEmpty);
}

searchInput.addEventListener("input", inputContent);
document.addEventListener("click", noSearchList);

async function inputContent(inputText){
        try{
            const response = await fetch(allProductBase);
            const data = await response.json();
            console.log("url info", data);
    
            const value = inputText.target.value.toLowerCase();
            console.log(value);
    
            let result = data.filter(jacketName => jacketName.name.toLowerCase().includes(value));
            console.log(result);
            searchResultsList(result)
        }
        catch (error) {
            console.log(error);
            searchResult.innerHTML = error;
        }
}

// async function productApi(url){
//     try{
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log("url info", data);

//         inputContent(value);
//         console.log("aaaaaaaa",value);

//         let result = allProductBase.filter(jacketName => jacketName.name.toLowerCase().includes(value));
//         console.log(result);
//         searchResultsList(result)
//     }
//     catch (error) {
//         console.log(error);
//         searchResult.innerHTML = error;
//     }
// }


// function inputContent(inputText){
//     const value = inputText.target.value.toLowerCase();
//     console.log(value);

//     // let result = jacketList.filter(jacketName => jacketName.name.toLowerCase().includes(value));
//     let result = allProductBase.filter(jacketName => jacketName.name.toLowerCase().includes(value));
    
//     console.log(result);
//     searchResultsList(result)
// }

function searchResultsList(result){
    searchResult.innerHTML = "";
    Object.values(result).forEach(function(searchList) {
        searchResult.innerHTML += ` <a class="search-list-products" href="product-storm-jacket.html?id=${searchList.id}">
                                    <img class="search-img" src="${searchList.images[0].src}" alt="${searchList.images[0].alt}" />
                                    <p>${searchList.name}</p>
                                    </a>
                                  `;
    });
}

function noSearchList(){
    searchResult.innerHTML = ""
}

function isCartEmpty(){
    let shoppingCart = JSON.parse(localStorage.getItem("SHOPPING CART")) || [];
    if(shoppingCart.length !== 0){
        location.href = "https://friendly-zuccutto-172753.netlify.app/shopping-cart.html";
    }
    else {
        alert("Your shopping cart is empty.");
    }
}