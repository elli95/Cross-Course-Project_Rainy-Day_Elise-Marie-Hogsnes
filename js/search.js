import {jacketList} from "./products.js";


console.log("hello", jacketList);

const searchInput = document.querySelector("#search-bar-input");
const searchResult = document.querySelector("#search-result-list");

const shoppingCartButton = document.querySelectorAll("#shopping-cart-button");
for (let i = 0; i < shoppingCartButton.length; i++) {
    shoppingCartButton[i].addEventListener("click", isCartEmpty);
}

searchInput.addEventListener("input", inputContent);
document.addEventListener("click", noSearchList);

function inputContent(inputText){
    const value = inputText.target.value.toLowerCase();
    console.log(value);

    let result = jacketList.filter(jacketName => jacketName.name.toLowerCase().includes(value));
    
    console.log(result);
    searchResultsList(result)
}

function searchResultsList(result){
    searchResult.innerHTML = "";
    Object.values(result).forEach(function(searchList) {
        searchResult.innerHTML += ` <a class="search-list-products" href="product-storm-jacket.html?name=${searchList.name}">
                                    <img class="search-img" src="images/product_img/${searchList.img}" alt="${searchList.description}" />
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