import {jacketList} from "./products.js";

const popularContainer = document.querySelector("#popular-content");
const outdoorContainer = document.querySelector("#outdoor-content");
const skiingContainer = document.querySelector("#skiing-content");
const canoeingContainer = document.querySelector("#canoeing-content");

function loadProductsIndex(){
    try{

    popularContainer.innerHTML = "";
    outdoorContainer.innerHTML = "";
    skiingContainer.innerHTML = "";
    canoeingContainer.innerHTML = "";
    
    
    console.log(jacketList);
    jacketList.length = 5;
    console.log(jacketList);

    Object.values(jacketList).forEach(function(jacketList) {
    popularContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?name=${jacketList.name}">
                                  <div class="product-image grid-a"><img src="images/product_img/${jacketList.img}" alt="${jacketList.description}" /></div>
                                  <p class="product-name grid-b">${jacketList.name}</p>
                                  <p class="price bold brid-c">${jacketList.price}</p>
                                  </a>`;
    outdoorContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?name=${jacketList.name}">
                                  <div class="product-image grid-a"><img src="images/product_img/${jacketList.img}" alt="${jacketList.description}" /></div>
                                  <p class="product-name grid-b">${jacketList.name}</p>
                                  <p class="price bold brid-c">${jacketList.price}</p>
                                  </a>`;
    skiingContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?name=${jacketList.name}">
                                  <div class="product-image grid-a"><img src="images/product_img/${jacketList.img}" alt="${jacketList.description}" /></div>
                                  <p class="product-name grid-b">${jacketList.name}</p>
                                  <p class="price bold brid-c">${jacketList.price}</p>
                                  </a>`;
    canoeingContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?name=${jacketList.name}">
                                  <div class="product-image grid-a"><img src="images/product_img/${jacketList.img}" alt="${jacketList.description}" /></div>
                                  <p class="product-name grid-b">${jacketList.name}</p>
                                  <p class="price bold brid-c">${jacketList.price}</p>
                                  </a>`;
        });
    }
    catch (error) {
        console.log(error);
        popularContainer.innerHTML = error;
        outdoorContainer.innerHTML = error;
        skiingContainer.innerHTML = error;
        canoeingContainer.innerHTML = error;
    }
}

loadProductsIndex();

