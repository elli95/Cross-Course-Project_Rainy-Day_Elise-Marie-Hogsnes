// import {jacketList} from "./products.js";

const popularContainer = document.querySelector("#popular-content");
const outdoorContainer = document.querySelector("#outdoor-content");
const skiingContainer = document.querySelector("#skiing-content");
const canoeingContainer = document.querySelector("#canoeing-content");

const apiBase = "https://rainydays.elisemariehogsnes.no";
const woocommerceBase = "/wp-json/wc/store";
const ProductBase = "/products";

const allProductBase = apiBase + woocommerceBase + ProductBase;

const featuredBase = allProductBase + "?featured=true";

async function getFeaturedProducts(url){
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log("featured url info", data);

        popularContainer.innerHTML = "";
    
        Object.values(data).forEach(function(jacketList) {
            // const img = jacketList.images;
        popularContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?id=${jacketList.id}">
                                      <div class="product-image grid-a"><img src="${jacketList.images[0].src}" alt="${jacketList.images[0].alt}" /></div>
                                      <p class="product-name grid-b">${jacketList.name}</p>
                                      <p class="price bold brid-c">${jacketList.price_html}</p>
                                      </a>`;
                                    });
        }
        catch (error) {
            console.log(error);
            popularContainer.innerHTML = error;
        }
}

getFeaturedProducts(featuredBase);

async function getProducts(url){
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log("url info", data);

        // popularContainer.innerHTML = "";
        outdoorContainer.innerHTML = "";
        skiingContainer.innerHTML = "";
        canoeingContainer.innerHTML = "";
        
        data.length = 5;
    
        Object.values(data).forEach(function(jacketList) {
        outdoorContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?id=${jacketList.id}">
                                      <div class="product-image grid-a"><img src="${jacketList.images[0].src}" alt="${jacketList.images[0].alt}" /></div>
                                      <p class="product-name grid-b">${jacketList.name}</p>
                                      <p class="price bold brid-c">${jacketList.price_html}</p>
                                      </a>`;
        skiingContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?id=${jacketList.id}">
                                      <div class="product-image grid-a"><img src="${jacketList.images[0].src}" alt="${jacketList.images[0].alt}" /></div>
                                      <p class="product-name grid-b">${jacketList.name}</p>
                                      <p class="price bold brid-c">${jacketList.price_html}</p>
                                      </a>`;
        canoeingContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?id=${jacketList.id}">
                                      <div class="product-image grid-a"><img src="${jacketList.images[0].src}" alt="${jacketList.images[0].alt}" /></div>
                                      <p class="product-name grid-b">${jacketList.name}</p>
                                      <p class="price bold brid-c">${jacketList.price_html}</p>
                                      </a>`;
            });
        }
        catch (error) {
            console.log(error);
            // popularContainer.innerHTML = error;
            outdoorContainer.innerHTML = error;
            skiingContainer.innerHTML = error;
            canoeingContainer.innerHTML = error;
        }
}

getProducts(allProductBase);

// function loadProductsIndex(){
//     try{

//     popularContainer.innerHTML = "";
//     outdoorContainer.innerHTML = "";
//     skiingContainer.innerHTML = "";
//     canoeingContainer.innerHTML = "";
    
    
//     console.log(jacketList);
//     jacketList.length = 5;
//     console.log(jacketList);

//     Object.values(jacketList).forEach(function(jacketList) {
//     popularContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?name=${jacketList.name}">
//                                   <div class="product-image grid-a"><img src="images/product_img/${jacketList.img}" alt="${jacketList.description}" /></div>
//                                   <p class="product-name grid-b">${jacketList.name}</p>
//                                   <p class="price bold brid-c">${jacketList.price}</p>
//                                   </a>`;
//     outdoorContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?name=${jacketList.name}">
//                                   <div class="product-image grid-a"><img src="images/product_img/${jacketList.img}" alt="${jacketList.description}" /></div>
//                                   <p class="product-name grid-b">${jacketList.name}</p>
//                                   <p class="price bold brid-c">${jacketList.price}</p>
//                                   </a>`;
//     skiingContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?name=${jacketList.name}">
//                                   <div class="product-image grid-a"><img src="images/product_img/${jacketList.img}" alt="${jacketList.description}" /></div>
//                                   <p class="product-name grid-b">${jacketList.name}</p>
//                                   <p class="price bold brid-c">${jacketList.price}</p>
//                                   </a>`;
//     canoeingContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?name=${jacketList.name}">
//                                   <div class="product-image grid-a"><img src="images/product_img/${jacketList.img}" alt="${jacketList.description}" /></div>
//                                   <p class="product-name grid-b">${jacketList.name}</p>
//                                   <p class="price bold brid-c">${jacketList.price}</p>
//                                   </a>`;
//         });
//     }
//     catch (error) {
//         console.log(error);
//         popularContainer.innerHTML = error;
//         outdoorContainer.innerHTML = error;
//         skiingContainer.innerHTML = error;
//         canoeingContainer.innerHTML = error;
//     }
// }

// loadProductsIndex();

