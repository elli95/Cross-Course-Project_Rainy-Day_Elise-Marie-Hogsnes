//Reference: Create a Shopping Cart With Vanilla JavaScript | ES6  https://www.youtube.com/watch?v=UcrypywtAm0
// import {jacketList} from "./products.js";
// console.log(jacketList);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

console.log("---",productId);

const productNamePriceContainer = document.querySelector("#product-name-price-content");
const productInfoContainer = document.querySelector("#product-info-content");

const apiBase = "https://rainydays.elisemariehogsnes.no";
const woocommerceBase = "/wp-json/wc/store";
const cartBase = "/products/";

const ProductBase = apiBase + woocommerceBase + cartBase + productId;

console.log("-----",ProductBase);

async function getProductInfo(){
    try{
        const response = await fetch(ProductBase);
        const data = await response.json();
        console.log("url info", data);
    
        return data;
    }
    catch (error) {
        console.log(error);
        productNamePriceContainer.innerHTML = error;
    }
}

async function loadProduct(){
    try{
        const productInfo = await getProductInfo();
        productNamePriceContainer.innerHTML = "";
        productInfoContainer.innerHTML = "";

        productNamePriceContainer.innerHTML = `<div class="storm-product-info">
                                                    <div class="product-name">
                                                        <h1>${productInfo.name}</h1>
                                                    </div>
                                                    <div class="product-price">
                                                        <p>Price:</p>
                                                        <p class="bold">${productInfo.price_html} NOK</p>
                                                </div>
                                      `;
                                      
        productInfoContainer.innerHTML = `  <div class="grid-a product-center">
                                                <img src="${productInfo.images[0].src}" alt="${productInfo.images[0].alt}" />
                                            </div>
                                            <div class="grid-b product-description product-center">
                                                <h2>About:</h2>
                                                <p>${productInfo.description}</p>
                                            </div>
                                          `;
                                          
                
    }
    catch (error) {
        console.log(error);
        productNamePriceContainer.innerHTML = error;
    }
}
loadProduct();

const red = document.querySelector(".red-wave");
const blue = document.querySelector(".blue-wave");
const yellow = document.querySelector(".yellow-wave");
const black = document.querySelector(".black-wave");
const orange = document.querySelector(".orange-wave");

// console.log("red", red);

// red.style.background = "green";

red.addEventListener("click", colorSection);
blue.addEventListener("click",  colorSection);
yellow.addEventListener("click", colorSection);
black.addEventListener("click", colorSection);
orange.addEventListener("click", colorSection);

let color = [];

function colorSection(){
    let productColor = this.id;
    color.push({color: productColor});
}

const xs = document.querySelector(".xs");
const s = document.querySelector("#s");
const m = document.querySelector("#m");
const l = document.querySelector("#l");
const xl = document.querySelector("#xl");

xs.addEventListener("click", sizeSection);
s.addEventListener("click",  sizeSection);
m.addEventListener("click", sizeSection);
l.addEventListener("click", sizeSection);
xl.addEventListener("click", sizeSection);

let size = [];

function sizeSection(){
    let productSize = this.id;
    size.push({size: productSize});
    console.log(color);
    console.log(size);
}

// console.log("xs", xs);
// xs.style.background = "green";

const addToCartButton = document.querySelector("#cart-button");

let localShoppingCart = JSON.parse(localStorage.getItem("SHOPPING CART")) || [];
console.log("----------------------",localShoppingCart.length);
console.log("----------------------",localShoppingCart);
shoppingCartUpdate();

addToCartButton.addEventListener("click", addToShoppingCart);
addToCartButton.addEventListener("click", productFormValidator);
addToCartButton.addEventListener("click", shoppingCartAmount);

const colorError = document.querySelector("#color-error");
const sizeError = document.querySelector("#size-error");

const addToCartReaction = document.querySelector("#product-page-success");


function productFormValidator(){
    if(color.length) {
        colorError.style.display = "none"
    }
    else {
        colorError.style.display = "block"
    }

    if(size.length) {
        sizeError.style.display = "none";
    }
    else {
        sizeError.style.display = "block";
    }
}

// const shoppingCart = "http://content-management-systemscaelise-marie-hogsnes.local/wp-json/wc/store/cart/items";

// async function getShoppingCart(){
//     try{
//         const response = await fetch(shoppingCart);
//         const data = await response.json();
//         console.log("getShoppingCart", data);
        
//         return data;
//     }
//     catch (error) {
//         console.log(error);
//         purchasedProducts.innerHTML = error;
//     }
// }

async function addToShoppingCart(){ 
    
    const productInfo = await getProductInfo();
    console.log("ppppp", productInfo)

    let lastcolor = color[color.length - 1];
    let lastsize = size[size.length - 1];

    // let jacketName = shoppingCart.filter(jacketName => jacketName.name === productName);
    // let jacketType = jacketName.filter(jacketName => jacketName.size === lastsize.size && jacketName.color === lastcolor.color);

    // if(jacketType.length > 0){
    //     alert("A jacket with the same color and size is already in the shopping cart. Choose something else or change the product in the shopping cart.");
        
    // }
    // else {
    //     const jacketItems = jacketList.find((jacketList) => jacketList.name === productName);
                
    // localShoppingCart.push({productInfo, color: lastcolor.color, size: lastsize.size, productAmount: 1});
        localShoppingCart.push({...productInfo, color: lastcolor.color, size: lastsize.size, productAmount: 1});
        // addToCartReaction.style.display = "block";
    // }
    shoppingCartUpdate();
}

/* <div class="grid-f product-button">
<p class="submission-success product-page-success" id="product-page-success">${productInfo.name} has been added to the shopping cart!</p>
<div class="add-to-cart-button"></div> */

function shoppingCartUpdate(){
    localStorage.setItem("SHOPPING CART", JSON.stringify(localShoppingCart));
}

function shoppingCartAmount(){
    const shoppingCartBtn = document.querySelector("#view-shopping-cart-btn")
    console.log(localShoppingCart.length);

    if(localShoppingCart.length === 0){
        shoppingCartBtn.style.display = "none"
    } else {
        shoppingCartBtn.style.display = "flex"
    }
}
shoppingCartAmount();

// async function shoppingCartAmount(){
//     const shoppingCart = await getShoppingCart();
//     const shoppingCartBtn = document.querySelector("#view-shopping-cart-btn");
//     console.log(shoppingCart.length);
    
//     if(shoppingCart.length === 0){
//         shoppingCartBtn.style.display = "none"
//     } else {
//         shoppingCartBtn.style.display = "flex"
//     }
// }
// shoppingCartAmount();













// //Reference: Create a Shopping Cart With Vanilla JavaScript | ES6  https://www.youtube.com/watch?v=UcrypywtAm0
// // import {jacketList} from "./products.js";
// // console.log(jacketList);

// // const queryString = document.location.search;
// // const params = new URLSearchParams(queryString);
// // const productName = params.get("name");


// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const productId = params.get("id");

// console.log("id", productId);

// const apiBase = "http://content-management-systemscaelise-marie-hogsnes.local";
// const woocommerceBase = "/wp-json/wc/store";
// const ProductBase = "/products/";

// const allProductBase = apiBase + woocommerceBase + ProductBase + productId;

// const productContainer = document.querySelector("#product-content");

// async function fetchProductApi(){
//     try{
//         const response = await fetch(allProductBase);
//         const data = await response.json();
//         console.log("url info", data);
    
//         return data;
//     }
//     catch (error) {
//         console.log(error);
//         purchasedProducts.innerHTML = error;
//     }
// }

// async function createHTML(){
//     const productInfo = await fetchProductApi();
//     productContainer.innerHTML = "";
//     productContainer.innerHTML = `  <div class="grid-c storm-product-info">
//                                                 <div class="product-name">
//                                                 <h1>${productInfo.name}</h1></div>
//                                                 <div class="product-price">
//                                                 <p>Price:</p>
//                                                 <p class="bold">${productInfo.price_html} NOK</p></div>
//                                                 </div>
//                                                 <div class="grid-a product-center">
//                                                 <img src="${productInfo.images[0].src}" alt="${productInfo.images[0].alt}" />
//                                                 </div>
//                                                 <div class="grid-b product-description product-center">
//                                                 <h2>About:</h2>
//                                                 <p>${productInfo.description}</p>
//                                                 </div>
//                                                 <div>
//                                                 <div class="color-selection">
//                                                 <div class="color-red">
//                                                 <div class="check"></div>
//                                                 <input type="radio" name="product-color" value="red" id="red" aria-label="Red" />
//                                                 <label for="red" class="red-wave" id="red">Red</label>
//                                                 <h2>Red</h2>
//                                                 </div>
//                                                 <div class="color-blue">
//                                                 <div class="check"></div>
//                                                 <input type="radio" name="product-color" value="blue" id="blue" aria-label="Blue" />
//                                                 <label for="blue" class="blue-wave" id="blue">Blue</label>
//                                                 <h2>Blue</h2>
//                                                 </div>
//                                                 <div class="color-yellow">
//                                                 <div class="check"></div>
//                                                 <input type="radio" name="product-color" value="yellow" id="yellow" aria-label="Yellow" />
//                                                 <label for="yellow" class="yellow-wave" id="yellow">Yellow</label>
//                                                 <h2>Yellow</h2>
//                                                 </div>
//                                                 <div class="color-black">
//                                                 <div class="check lblack"></div>
//                                                 <input type="radio" name="product-color" value="black" id="black" aria-label="Black" />
//                                                 <label for="black" class="black-wave" id="black">Black</label>
//                                                 <h2>Black</h2>
//                                                 </div>
//                                                 <div class="color-orange">
//                                                 <div class="check"></div>
//                                                 <input type="radio" name="product-color" value="orange" id="orange" aria-label="Orange" />
//                                                 <label for="orange" class="orange-wave" id="orange">Orange</label>
//                                                 <h2>Orange</h2>
//                                                 </div>
//                                                 </div>
//                                                 <div class="error-message-style" id="color-error">Please select a color.</div>
//                                                 </div>
//                                                 <div class="grid-e size-menu product-center">
//                                                 <label for="product-size-menu" class="size-bar-name">Choose a size * <i class="fa-solid fa-angle-down angle-down-icon"></i></label>
//                                                 <input type="checkbox" id="product-size-menu" />
//                                                 <div class="size-bar">
//                                                 <div>
//                                                 <input type="radio" name="product-size" value="xs" id="xs" />
//                                                 <label class="size-bar-name-option bar-start" for="xs" id="xs">XS</label>
//                                                 </div>
//                                                 <div>
//                                                 <input type="radio" name="product-size" value="s" id="s" />
//                                                 <label class="size-bar-name-option bar-middle" for="s">S</label>
//                                                 </div>
//                                                 <div>
//                                                 <input type="radio" name="product-size" value="m" id="m" />
//                                                 <label class="size-bar-name-option bar-middle" for="m">M</label>
//                                                 </div>
//                                                 <div>
//                                                 <input type="radio" name="product-size" value="l" id="l" />
//                                                 <label class="size-bar-name-option bar-middle" for="l">L</label>
//                                                 </div>
//                                                 <div>
//                                                 <input type="radio" name="product-size" value="xl" id="xl" />
//                                                 <label class="size-bar-name-option bar-end" for="xl">XL</label>
//                                                 </div>
//                                                 </div>
//                                                 <div class="error-message-style" id="size-error">Please select a size.</div>
//                                                 </div>
//                                                 <div class="grid-f product-button">
//                                                 <p class="submission-success product-page-success" id="product-page-success">${productInfo.name} has been added to the shopping cart!</p>
//                                                 <div class="add-to-cart-button">
//                                                 <button class="button button-confirm" id="cart-button">Add to cart</button>
//                                                 <a href="shopping-cart.html" class="button button-confirm" id="view-shopping-cart-btn">View Shopping Cart</a>
//                                                 </div>
//                                                 </div>  
//                                                 </div>
//                                               `;
  
// }
// createHTML();


// const red = document.querySelector("#red");
// const blue = document.querySelector(".blue-wave");
// const yellow = document.querySelector(".yellow-wave");
// const black = document.querySelector(".black-wave");
// const orange = document.querySelector(".orange-wave");

// console.log("red", red);

// // red.addEventListener("click", colorSection);
// // blue.addEventListener("click",  colorSection);
// yellow.addEventListener("click", colorSection);
// black.addEventListener("click", colorSection);
// orange.addEventListener("click", colorSection);

// let color = [];

// function colorSection(){
//     let productColor = this.id;
//     color.push({color: productColor});
// }

// const xs = document.querySelector("#xs");
// const s = document.querySelector("#s");
// const m = document.querySelector("#m");
// const l = document.querySelector("#l");
// const xl = document.querySelector("#xl");

// // xs.addEventListener("click", sizeSection);
// s.addEventListener("click",  sizeSection);
// m.addEventListener("click", sizeSection);
// l.addEventListener("click", sizeSection);
// xl.addEventListener("click", sizeSection);


// red.style.display = "none";

// let size = [];

// function sizeSection(){
//     let productSize = this.id;
//     size.push({size: productSize});
//     console.log(color);
//     console.log(size);
// }

// async function gotSize(){
//     const jacketList = await fetchProductApi();
//     const attributesPath = jacketList.attributes.flatMap(size=>size.terms.flatMap(sizeType=>sizeType.name));
//     console.log("Sise available", attributesPath);
    
//     Object.values(attributesPath).forEach(function(attributesPath){
//         if(attributesPath === "XS"){
//             console.log("YES", attributesPath);
//             xs.addEventListener("click", sizeSection);
//             xs.style.color = "blue";
//         }else{
//             console.log("NO", attributesPath);
//             xs.innerHTML = "hello";
//         }
//     });
// }

// gotSize();




// const shoppingCart = "http://content-management-systemscaelise-marie-hogsnes.local/wp-json/wc/store/cart/items";
// console.log(shoppingCart);

// async function getShoppingCart(){
//     try{
//         const response = await fetch(shoppingCart);
//         const data = await response.json();
//         console.log("getShoppingCart", data);
    
//         return data;
//     }
//     catch (error) {
//         console.log(error);
//         purchasedProducts.innerHTML = error;
//     }
// }
// shoppingCartUpdate();

// const addToCartButton = document.querySelector("#cart-button");
// addToCartButton.addEventListener("click", addToShoppingCart);
// addToCartButton.addEventListener("click", productFormValidator);
// addToCartButton.addEventListener("click", shoppingCartAmount);


// const colorError = document.querySelector("#color-error");
// const sizeError = document.querySelector("#size-error");

// const addToCartReaction = document.querySelector("#product-page-success");

// function productFormValidator(){
//     if(color.length) {
//         colorError.style.display = "none"
//     }
//     else {
//         colorError.style.display = "block"
//     }

//     if(size.length) {
//         sizeError.style.display = "none";
//     }
//     else {
//         sizeError.style.display = "block";
//     }
// }



// function addToShoppingCart(){ 
//     console.log("hello");   
//     // shoppingCart.push({...shoppingCart, productAmount: 1});
//     // let lastcolor = color[color.length - 1];
//     // let lastsize = size[size.length - 1];

//     // let jacketName = shoppingCart.filter(jacketName => jacketName.name === productName);
//     // let jacketType = jacketName.filter(jacketName => jacketName.size === lastsize.size && jacketName.color === lastcolor.color);

//     // if(jacketType.length > 0){
//     //     alert("A jacket with the same color and size is already in the shopping cart. Choose something else or change the product in the shopping cart.");
        
//     // }
//     // else {
//     //     const jacketItems = jacketList.find((jacketList) => jacketList.name === productName);
                
//     //     shoppingCart.push({...jacketItems, color: lastcolor.color, size: lastsize.size, productAmount: 1});
//     //     addToCartReaction.style.display = "block";
//     // }
//     // shoppingCartUpdate();
// }

// function shoppingCartUpdate(){
//     // localStorage.setItem("SHOPPING CART", JSON.stringify(shoppingCart));
// }

// const shoppingCartBtn = document.querySelector("#view-shopping-cart-btn");
// shoppingCartBtn.addEventListener("click", shoppingCartAmount);


// async function shoppingCartAmount(){
//     const shoppingCart = await getShoppingCart();
//     const shoppingCartBtn = document.querySelector("#view-shopping-cart-btn");
//     console.log(shoppingCart.length);

//     if(shoppingCart.length === 0){
//         shoppingCartBtn.style.display = "none"
//     } else {
//         shoppingCartBtn.style.display = "flex"
//     }
// }
// shoppingCartAmount();



