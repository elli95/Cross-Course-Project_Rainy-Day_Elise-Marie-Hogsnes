import {jacketList} from "./products.js";

const productContainer = document.querySelector("#content");

function loadProducts(){
    try{

    productContainer.innerHTML = "";
    
    Object.values(jacketList).forEach(function(jacketList) {
    productContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?name=${jacketList.name}">
                                  <div class="product-image grid-a"><img src="images/product_img/${jacketList.img}" alt="${jacketList.description}" /></div>
                                  <p class="product-name grid-b">${jacketList.name}</p>
                                  <p class="price bold brid-c">${jacketList.price}</p>
                                  </a>`;
        });
    }
    catch (error) {
        console.log(error);
        productContainer.innerHTML = error;
    }
}

loadProducts();