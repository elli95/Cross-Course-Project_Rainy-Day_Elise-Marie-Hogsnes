//Reference: Create a Shopping Cart With Vanilla JavaScript | ES6  https://www.youtube.com/watch?v=UcrypywtAm0
import {jacketList} from "./products.js";
//import {shoppingCart} from "./shopping-cart.js";
console.log(jacketList);
//console.log(shoppingCart);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productName = params.get("name");

console.log(productName);

const productContainer = document.querySelector("#product-content");

function loadProduct(){
    try{
        let result = jacketList.filter(jacketName => jacketName.name === productName);

        console.log(result);
        productContainer.innerHTML = "";

        Object.values(result).forEach(function(product) {
            productContainer.innerHTML = `  <div class="grid-c storm-product-info">
                                            <div class="product-name">
                                            <h1>${product.name}</h1></div>
                                            <div class="product-price">
                                            <p>Price:</p>
                                            <p class="bold">${product.price} NOK</p></div>
                                            </div>
                                            <div class="grid-a product-center">
                                            <img src="images/product_img/${product.img}" alt="${product.description}" />
                                            </div>
                                            <div class="grid-b product-description product-center">
                                            <h2>About:</h2>
                                            <p>A Storm Jacket is a stylish, waterproof, and durable jacket for active individuals.</p>
                                            <p>This jacket is made of high-quality materials that are guaranteed to keep you dry in any weather.</p>
                                            <p>It is a sleek and sleek design that will keep you looking professional and stylish.</p>
                                            </div>
                                            <div>
                                            <div class="color-selection">
                                            <div class="color-red">
                                            <div class="check"></div>
                                            <input type="radio" name="product-color" value="red" id="red" aria-label="Red" />
                                            <label for="red" class="red-wave" id="red">Red</label>
                                            <h2>Red</h2>
                                            </div>
                                            <div class="color-blue">
                                            <div class="check"></div>
                                            <input type="radio" name="product-color" value="blue" id="blue" aria-label="Blue" />
                                            <label for="blue" class="blue-wave" id="blue">Blue</label>
                                            <h2>Blue</h2>
                                            </div>
                                            <div class="color-yellow">
                                            <div class="check"></div>
                                            <input type="radio" name="product-color" value="yellow" id="yellow" aria-label="Yellow" />
                                            <label for="yellow" class="yellow-wave" id="yellow">Yellow</label>
                                            <h2>Yellow</h2>
                                            </div>
                                            <div class="color-black">
                                            <div class="check lblack"></div>
                                            <input type="radio" name="product-color" value="black" id="black" aria-label="Black" />
                                            <label for="black" class="black-wave" id="black">Black</label>
                                            <h2>Black</h2>
                                            </div>
                                            <div class="color-orange">
                                            <div class="check"></div>
                                            <input type="radio" name="product-color" value="orange" id="orange" aria-label="Orange" />
                                            <label for="orange" class="orange-wave" id="orange">Orange</label>
                                            <h2>Orange</h2>
                                            </div>
                                            </div>
                                            <div class="error-message-style" id="color-error">Please select a color.</div>
                                            </div>
                                            <div class="grid-e size-menu product-center">
                                            <label for="product-size-menu" class="size-bar-name">Choose a size * <i class="fa-solid fa-angle-down angle-down-icon"></i></label>
                                            <input type="checkbox" id="product-size-menu" />
                                            <div class="size-bar">
                                            <div>
                                            <input type="radio" name="product-size" value="xs" id="xs" />
                                            <label class="size-bar-name-option bar-start" for="xs" id="xs">XS</label>
                                            </div>
                                            <div>
                                            <input type="radio" name="product-size" value="s" id="s" />
                                            <label class="size-bar-name-option bar-middle" for="s">S</label>
                                            </div>
                                            <div>
                                            <input type="radio" name="product-size" value="m" id="m" />
                                            <label class="size-bar-name-option bar-middle" for="m">M</label>
                                            </div>
                                            <div>
                                            <input type="radio" name="product-size" value="l" id="l" />
                                            <label class="size-bar-name-option bar-middle" for="l">L</label>
                                            </div>
                                            <div>
                                            <input type="radio" name="product-size" value="xl" id="xl" />
                                            <label class="size-bar-name-option bar-end" for="xl">XL</label>
                                            </div>
                                            </div>
                                            <div class="error-message-style" id="size-error">Please select a size.</div>
                                            </div>
                                            <div class="grid-f product-button">
                                            <div class="add-to-cart-button">
                                            <button class="button button-confirm" id="cart-button">Add to cart</button>
                                            <a href="shopping-cart.html" class="button button-confirm">View Shopping Cart</a>
                                            </div>
                                            </div>  
                                            </div>
                                          `;
                                          
                });
    }
    catch (error) {
        console.log(error);
        productContainer.innerHTML = error;
    }
}
loadProduct();

const red = document.querySelector(".red-wave");
const blue = document.querySelector(".blue-wave");
const yellow = document.querySelector(".yellow-wave");
const black = document.querySelector(".black-wave");
const orange = document.querySelector(".orange-wave");

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

const xs = document.querySelector("#xs");
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

// const sizeBar = document.querySelector(".size-bar");
const addToCartButton = document.querySelector("#cart-button");

let shoppingCart = JSON.parse(localStorage.getItem("SHOPPING CART")) || [];
shoppingCartUpdate();

addToCartButton.addEventListener("click", addToShoppingCart);
addToCartButton.addEventListener("click", productFormValidator);

const colorError = document.querySelector("#color-error");
const sizeError = document.querySelector("#size-error");

function productFormValidator(){
    if(color.length) {
        colorError.style.display = "none"
        console.log("hello");
    }
    else {
        colorError.style.display = "block"
        console.log("its me");
    }

    if(size.length) {
        sizeError.style.display = "none";
        console.log("hello again");
    }
    else {
        sizeError.style.display = "block";
        console.log("its me again");
    }
}

function addToShoppingCart(){
    if(shoppingCart.some((jacket) => jacket.name === productName)){
        alert("Jacket is alredy in the cart. To change the product amount, please go to the shopping cart.")
    } else{
    const jacket = jacketList.find((jacketList) => jacketList.name === productName);
    
    let lastcolor = color[color.length - 1];
    let lastsize = size[size.length - 1];

    shoppingCart.push({...jacket, color: lastcolor.color, size: lastsize.size, productAmount: 1});
    console.log(shoppingCart);
    } 
    // else{
    //     alert("Please select a color and size before adding the product to the basket.")
    // }
    shoppingCartUpdate();
}

function shoppingCartUpdate(){
    localStorage.setItem("SHOPPING CART", JSON.stringify(shoppingCart));
}


// const editProductAmount = document.querySelector("#productAmount");

// editProductAmount.addEventListener("click", plusProductAmount);

// function plusProductAmount(){

// }

// function minusProductAmount(){
//     let newValue = minus 
// }

//export {shoppingCart};
/*
const addToCart = document.querySelector(".product-button");

function addToCartButton(productName){
        addToCart.innerHTML = `<div class="add-to-cart-button" onclick="addToShoppingCart(${productName})">
                               <button class=" button button-confirm">Add to cart</button>
                               </div>
                              `;
}

addToCartButton()
*/
/*
let shoppingCart = JSON.parse(localStorage.getItem("SHOPPING CART")) || [];

function addToShoppingCart(name){
    console.log(name);
}
*/

/*
function createHTML(){
    
    productContainer.innerHTML = `<div class="grid-c storm-product-info">
                                   <div class="product-name">
                                   <h1>${result.name}</h1></div>
                                   <div class="product-price">
                                   <p>Price:</p>
                                   <p class="bold">${result.price} NOK</p></div>
                                   </div>
                                   <div class="grid-a product-center">
                                   <img src="images/product_img/${result.img}" alt="${result.description}" />
                                   </div>`;
    
}
console.log(jacketList.name);
    console.log(productName);
    if(`${jacketList.name}` !== productName){
} else
    {
        productContainer.innerHTML = `<p>This product does not exist</p>`;
    }


  Object.values(productName).forEach(function(productName) {
     productContainer.innerHTML = `<div class="grid-c storm-product-info">
                                   <div class="product-name">
                                   <h1>${productName.name}</h1></div>
                                   <div class="product-price">
                                   <p>Price:</p>
                                   <p class="bold">${productName.price} NOK</p></div>
                                   </div>
                                   <div class="grid-a product-center">
                                   <img src="images/product_img/${productName.img}" alt="${productName.description}" />
                                   </div>`;
         });
*/