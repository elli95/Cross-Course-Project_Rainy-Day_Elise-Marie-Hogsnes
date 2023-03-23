//Reference: Create a Shopping Cart With Vanilla JavaScript | ES6  https://www.youtube.com/watch?v=UcrypywtAm0
//import {shoppingCart} from "./product-information.js";

const productsInCart = document.querySelector("#products-in-cart");
console.log(productsInCart);
const productsInCartSumProducts = document.querySelector(".sum-info");
const productsInCartSumPrice = document.querySelector(".product-sum-price");

let jacketItem = JSON.parse(localStorage.getItem("SHOPPING CART")) || [];



function productsInCartPage(){
    productsInCart.innerHTML = "";
    jacketItem.forEach(function(jacket) {
            productsInCart.innerHTML += `<div class="products-in-cart-items bottom-border">
                                        <img class="cart-info-style" src="images/product_img/${jacket.img}" alt="${jacket.description}"/>
                                        <p class="cart-info-style">${jacket.name}</p>
                                        <p class="font-style-size">${jacket.size}</p>
                                        <p class="font-style-text-transform">${jacket.color}</p>
                                        <p class="cart-info-style bold">${jacket.price * jacket.productAmount} NOK</p>
                                        <div class="cart-info-style amount-buttons">
                                        <button id="minusProductAmount" name="${jacket.name}" class="minus amount-buttons-style"> - </button>
                                        <div class="product-amount-style">${jacket.productAmount}</div>
                                        <button id="plussProductAmount" name="${jacket.name}" class="pluss amount-buttons-style">+</button>
                                        </div>
                                        </div>
                                        `;
                                    });

                                    // `<div class="products-in-cart-items">
                                    //     <div class="grid-a cart-info-style bottom-border">
                                    //     <img src="images/product_img/${jacket.img}" alt="${jacket.description}"/>
                                    //     </div>
                                    //     <div class="grid-b cart-info-style bottom-border"><p>${jacket.name}</p>
                                    //     <p class="font-style-size">${jacket.size}</p>
                                    //     <p class="font-style-text-transform">${jacket.color}</p></div>
                                    //     <div class="grid-c cart-info-style bottom-border"><p class="bold">${jacket.price * jacket.productAmount} NOK</p></div>
                                    //     <div class="cart-info-style">
                                    //     <button id="minusProductAmount" name="${jacket.name}" class="minus">-</button>
                                    //     <div>${jacket.productAmount}</div>
                                    //     <button id="plussProductAmount" name="${jacket.name}" class="pluss">+</button>
                                    //     </div>
                                    //     </div>
                                    //     `;
                                    
        const plussCartProductAmount = document.querySelectorAll("#plussProductAmount");
        for (let i = 0; i < plussCartProductAmount.length; i++) {
            plussCartProductAmount[i].addEventListener("click", plussEditProductAmount);
        }

        const minusCartProductAmount = document.querySelectorAll("#minusProductAmount");
        for (let i = 0; i < minusCartProductAmount.length; i++) {
            minusCartProductAmount[i].addEventListener("click", minusEditProductAmount);
        }

        productsInCartPageSumPrice();
}
productsInCartPage();


console.log("helo my frien",jacketItem);

function updateProducts() {
    shoppingCartUpdate();
    productsInCartPage();
}

function minusEditProductAmount(){
    let produktName = this.name;
    const jacket = jacketItem.find((jacketItem) => jacketItem.name === produktName);

    jacketItem.forEach(function(jacket) {
        if(produktName === jacket.name && jacket.productAmount > 0 ){
            console.log("new",jacket);
            jacket.productAmount--;
            
        }

        if(jacket.productAmount === 0){
            const jacketToDelete = jacketItem.indexOf(jacket);
            console.log("jacketToDelete",jacketToDelete);
            if (jacketToDelete > -1) { // only splice array when item is found
                jacketItem.splice(jacketToDelete, 1); // 2nd parameter means remove one item only
            }
        }
    });

    console.log("Suprise",jacketItem);
    updateProducts()
}

function plussEditProductAmount(){
    let produktName = this.name;
    const jacket = jacketItem.find((jacketItem) => jacketItem.name === produktName);

    jacketItem.forEach(function(jacket) {
        if(produktName === jacket.name){
            console.log("new",jacket);
            jacket.productAmount++;
        }
    });

    updateProducts()
}


function shoppingCartUpdate(){
    localStorage.setItem("SHOPPING CART", JSON.stringify(jacketItem));
}


function productsInCartPageSumPrice(){
    //Reference: Sum of values in an object array https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#sum_of_values_in_an_object_array
    const productSum = jacketItem.reduce(
        (sumPrices, productPrice) => sumPrices + productPrice.price * productPrice.productAmount, 0,);

          console.log("sum",productSum);

    productsInCartSumPrice.innerHTML = "";
    productsInCartSumPrice.innerHTML += `<div class="cart-info-style grid-e">
                                    <p>Sub total</p>
                                    </div>
                                    <div class="cart-info-style grid-f">
                                    <p class="cart-info-style bold">${productSum} NOK</p>
                                    </div>
                                    <div class="grid-g bottom-border"></div>
                                    <div class="cart-info-style grid-h bottom-border">
                                    <p>Shipping</p>
                                    </div>
                                    <div class="cart-info-style grid-i bottom-border">
                                    <p class="cart-info-style bold">Free</p>
                                    </div>
                                    <div class="cart-info-style grid-k">
                                    <p>Total</p>
                                    </div>
                                    <div class="cart-info-style grid-l">
                                    <p class="bold">${productSum} NOK</p>
                                    </div>
                                    `;
}
productsInCartPageSumPrice();

// const checkout = document.querySelector("#checkout");
// const errorMessage = document.querySelector("#error-message");
// const checkoutMessage = document.querySelector("#checkout-Message");

// const firstName = document.querySelector("#first-name");
// const firstNameError = document.querySelector("#first-name-error");

// const lastName = document.querySelector("#last-name");
// const lastNameError = document.querySelector("#last-name-error");

// const phoneNumber = document.querySelector("#phone-number");
// const phoneNumberError = document.querySelector("#phone-number-error");

// const email = document.querySelector("#email");
// const emailError = document.querySelector("#email-error");


// const address = document.querySelector("#address");
// const addressError = document.querySelector("#address-error");

// const city = document.querySelector("#city");
// const cityError = document.querySelector("#city-error");

// const country = document.querySelector("#country");
// const countryError = document.querySelector("#country-error");

// const postalCode = document.querySelector("#postal-code");
// const postalCodeError = document.querySelector("#postal-code-error");


// function contactFormValidator(event){
//     try{
//         event.preventDefault();

//         if(valueLength(firstName.value, 1) === true) {
//             firstNameError.style.display = "none";
//         }
//         else {
//             firstNameError.style.display = "block";
//         }

//         if(valueLength(lastName.value, 1) === true) {
//             lastNameError.style.display = "none";
//         }
//         else {
//             lastNameError.style.display = "block";
//         }

//         if(valueLength(phoneNumber.value, 1) === true) {
//             phoneNumberError.style.display = "none";
//         }
//         else {
//             phoneNumberError.style.display = "block";
//         }

//         if(emailValidate(email.value) === true) {
//             emailError.style.display = "none";
//         }
//         else {
//             emailError.style.display = "block";
//         }

//         if(valueLength(address.value, 1) === true) {
//             addressError.style.display = "block";
//         }
//         else {
//             addressError.style.display = "none";
//         }

//         if(valueLength(city.value, 1) === true) {
//             cityError.style.display = "none";
//         }
//         else {
//             cityError.style.display = "block";
//         }

//         if(valueLength(country.value, 1) === true) {
//             countryError.style.display = "none";
//         }
//         else {
//             countryError.style.display = "block";
//         }

//         if(valueLength(postalCode.value, 1) === true) {
//             postalCodeError.style.display = "none";
//         }
//         else {
//             postalCodeError.style.display = "block";
//         }
//     }
//     catch (error){
//         console.log(error);
//         errorMessage.innerHTML = error;
//     }
// }

// function formSubmission(){
//     if (valueLength(firstName.value, 1) && valueLength(lastName.value, 1) && valueLength(phoneNumber.value, 1) && emailValidate(email.value) && valueLength(address.value, 1) && valueLength(city.value, 1) && valueLength(country.value, 1) && valueLength(postalCode.value, 1)){
//         checkoutMessage.innerHTML = '<div class="submission-success">Your form has been submitted.</div>';
//         console.log("We did not do it");
//     }
//     else {
//         console.log("We did it");
//     }
// }
// console.log("We are nr 1");
// checkout.addEventListener("submit", contactFormValidator);
// checkout.addEventListener("submit", formSubmission);

// function valueLength(value, inputLength){
//     if (value.trim().length >= inputLength){
//         return true;
//     } 
//     else {
//         return false;
//     }
// }

// //Reference: Email address validation pattern from https://regexr.com/3e48o
// //Reference: function structure from https://content.noroff.dev/javascript-1/form-validation.html#regular-expressions
// function emailValidate(email) {
//     const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//     const emailPatternCheck = emailPattern.test(email);
//     return emailPatternCheck;
// }


    // jacketItem.forEach(function(jacket) {
    //     // console.log("this",jacket);

    //     if(produktName === jacket.name && jacket.productAmount > 1){
    //         console.log("name-jacket",jacket);
                
    //         let productAmount = jacket.productAmount;
    //         productAmount--;

    //         console.log("productAmount",productAmount);

    //         const productValue = { ...jacket, productAmount: productAmount }
    //         console.log("new_obj",productValue);
            
    //         console.log("shoppingCart",jacketItem);
    //         // delete jacketItem[0];
    //         // console.log("removed",jacketItem);
    //         // let removed = jacketItem.splice(0, 1, productValue); 
    //         // console.log("removed",removed);
    //         // delete jacketItem[];
    //         // jacketItem.pop(jacket);

    //         // jacketItem.push(productValue);
            
    //         // console.log("new_shoppingCart",jacketItem);
    //         // var res = arr1.map(obj => arr2.find(o => o.id === obj.id) || obj);
    //         // let newProductValue = [];
    //         // newProductValue.push(productValue);
    //         // console.log("æ",newProductValue);
    //         // let res = jacketItem.map(jacketItem => newProductValue.fill(jacketItem.name === productValue.name));
    //         // console.log("shoppingCart222",res);
    //     }
        
    // if(produktName === jacketItem.name){
    //     console.log("name",produktName);

    //     let thisProductAmount = jacket.productAmount;
    //     thisProductAmount--;

    //     console.log("productAmount",thisProductAmount);
    //     console.log("jacket",jacket);
    //     console.log("jacketItem",jacketItem);
    //     const productValue = { ...jacket, productAmount: thisProductAmount }
    //     console.log("new_obj",productValue);

    //     // jacketItem.push({...jacket, productAmount: thisProductAmount});
    //     // console.log("shoppingCart",jacketItem);

    // }
    // return {
    //     produktName, productValue,
    // };
    // let produktName = this.name;
    // console.log(produktName);
    // console.log(jacketItem);
    // const jacket = jacketItem.find((jacketItem) => jacketItem.name === produktName);
    // console.log("new",jacket);
    // if(produktName === jacket.name){
    //     console.log("name",produktName);

    //     let productAmount = jacket.productAmount;
    //     productAmount++;

    //     console.log("productAmount",productAmount);
    //     console.log("jacket",jacket);
    // }
    // jacketItem = jacketItem.map((produktName) => {

    //     console.log("hellooo2",produktName);
        
    //     // let productAmount = produktName.productAmount;
        
    //     // productAmount++;
        
    //     // console.log("hellooo2",productAmount);
    //     // return {
    //     //     produktName, productAmount};
        
        
    //     // shoppingCart.push({...jacket, color: lastcolor.color, size: lastsize.size, productAmount: 1});
    //     // console.log(shoppingCart);
    //     // if(jacket.name === name){
    //     //     oldproductAmount++;
    //     // }
    //     // console.log("hello",jacketItem);
    // });
// function productsInCartPageSumProducts(){

//     Object.values(jacketItem).forEach(function(jacket) {
//         productsInCartSumProducts.innerHTML += `<div class="products-list">
//                                         <div class="grid-a bottom-border">
//                                         <img src="images/product_img/${jacket.img}" alt="${jacket.description}" />
//                                         </div>
//                                         <div class="cart-info-style grid-b bottom-border">
//                                         <p>${jacket.name}</p>
//                                         <p class="font-style-size">${jacket.size}</p>
//                                         <p class="font-style-color">${jacket.color}</p>
//                                         </div>
//                                         <div class="cart-info-style grid-c bottom-border">
//                                         <p class="bold">${jacket.price} NOK</p>
//                                         </div>
//                                         </div>
//                                         `;
//     });
// }
// productsInCartPageSumProducts();

// editProductAmount.addEventListener("click", plusProductAmount);

// console.log(jacketItem);
// function plusProductAmount(){
//         // for(var i = 1; i < jacketItem.length; i++){
//         //     let newJacket = jacketItem[i] += 1;
//         // }
//         //console.log(newJacket);
//         let result = jacketItem.filter(jacketName => editProductAmount);
//         console.log("hello",result);
// }

// function minusProductAmount(jacketItem){
//     let newValue = minus, jacketItem;
// }

//onclick="ediProductAmount('plus', \`${jacket.name}\`)"



//  Object.values(jacketItem).forEach(function(jacket) {
//     productsInCart.innerHTML += `<div class="products-in-cart-items">
//                                 <div class="grid-a cart-info-style bottom-border">
//                                 <img src="images/product_img/${jacket.img}" alt="${jacket.description}"/>
//                                 </div>
//                                 <div class="grid-b cart-info-style bottom-border"><p>${jacket.name}</p></div>
//                                 <div class="grid-c cart-info-style bottom-border"><p class="bold">${jacket.price} NOK</p></div>
//                                 <div class="cart-info-style">
//                                 <select id="product-quantity" name="product-quantity" class="nr-list" aria-label="Amount of specific product">
//                                 <option value="1">1</option>
//                                 <option value="2">2</option>
//                                 <option value="3">3</option>
//                                 <option value="4">4</option>
//                                 <option value="5">5</option>
//                                 </select>
//                                 </div>
//                                 </div>
//                                 `;
//                             });





























// let shoppingCart = JSON.parse(localStorage.getItem("SHOPPING CART")) || [];

// function shoppingCartUpdate(){
//     localStorage.setItem("SHOPPING CART", JSON.stringify(shoppingCart));
// }
/*
export function addToShoppingCart(name){
    console.log(name);
}
addToShoppingCart();
*/

//addToCartButton.addEventListener("click", console.log("hello"));
// const addToCartButton = document.querySelector("#cart-button");

// addToCartButton.addEventListener("click", addToShoppingCart);

// function addToShoppingCart(){
//     console.log(productName);
//     const jacket = jacketList.find((jacketList) => jacketList.name === productName);
    
//     console.log(jacket);
//     shoppingCart.push(jacket);
//     console.log(shoppingCart);
// }

/*
const addToCart = document.querySelector(".product-button");

function addToCartButton(productName){
        addToCart.innerHTML = `<div class="add-to-cart-button" onclick="addToShoppingCart(\`${product.name}\`)">
                               <button class=" button button-confirm">Add to cart</button>
                               </div>
                              `;
}

addToCartButton()
*/
/*
function productListInCart(name){
    try{
        //let result = jacketList.filter(jacketName => jacketName.name === productName);
        
        const product = jacketList.find(() => jacketList.name === name)

        console.log(jacketList);
        
        /*Object.values(jacketList).forEach(function(jacketList) {
            productsInCart.innerHTML += `<div class="products-in-cart-items">
                                         <div class="grid-a cart-info-style bottom-border">
                                         <img src="images/product_img/${jacketList.img}" alt="${jacketList.description}" />
                                         </div>
                                         <div class="grid-b cart-info-style bottom-border"><p>${jacketList.name}</p></div>
                                         <div class="grid-c cart-info-style bottom-border"><p class="bold">${jacketList.price} NOK</p></div>
                                         <div class="cart-info-style">
                                         <select id="product-quantity" name="product-quantity" class="nr-list" aria-label="Amount of specific product">
                                         <option value="1">1</option>
                                         <option value="2">2</option>
                                         <option value="3">3</option>
                                         <option value="4">4</option>
                                         <option value="5">5</option>
                                         </select>
                                         </div>
                                         </div>`;
            });
    }
    catch (error) {
        console.log(error);
        productsInCart.innerHTML = error;
    }
}

productListInCart();
*/
