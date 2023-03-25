//Reference: Create a Shopping Cart With Vanilla JavaScript | ES6  https://www.youtube.com/watch?v=UcrypywtAm0

const productsInCart = document.querySelector("#products-in-cart");
const productsInCartSumProducts = document.querySelector(".sum-info");
const productsInCartSumPrice = document.querySelector(".product-sum-price");

let jacketItem = JSON.parse(localStorage.getItem("SHOPPING CART")) || [];
console.log("start---",jacketItem);



function productsInCartPage(){
    
    jacketItem.forEach((jacket, idNumber) => jacket.id = idNumber);

    productsInCart.innerHTML = "";
    jacketItem.forEach(function(jacket) {
            productsInCart.innerHTML += `<div class="products-in-cart-items bottom-border">
                                        <img class="cart-info-style" src="images/product_img/${jacket.img}" alt="${jacket.description}"/>
                                        <p class="cart-info-style">${jacket.name}</p>
                                        <p class="font-style-size">${jacket.size}</p>
                                        <p class="font-style-text-transform" id="jacket-color">${jacket.color}</p>
                                        <p class="cart-info-style bold">${jacket.price * jacket.productAmount} NOK</p>
                                        <div class="cart-info-style amount-buttons">
                                        <button id="minusProductAmount" name="${jacket.id}" class="minus amount-buttons-style bold">-</button>
                                        <div class="product-amount-style">${jacket.productAmount}</div>
                                        <button id="plussProductAmount" name="${jacket.id}" class="pluss amount-buttons-style bold">+</button>
                                        </div>
                                        </div>
                                        `;
                                    });
                                    
        const plussCartProductAmount = document.querySelectorAll("#plussProductAmount");
        for (let i = 0; i < plussCartProductAmount.length; i++) {
            plussCartProductAmount[i].addEventListener("click", plussEditProductAmount);
        }

        const minusCartProductAmount = document.querySelectorAll("#minusProductAmount");
        for (let i = 0; i < minusCartProductAmount.length; i++) {
            minusCartProductAmount[i].addEventListener("click", minusEditProductAmount);
        }
}
productsInCartPage();


console.log("helo my frien",jacketItem);

function updateProducts() {
    shoppingCartUpdate();
    productsInCartPage();
}

function minusEditProductAmount(){
    let produktName = this.name;

    jacketItem.forEach(function(jacket) {
        if(parseInt(produktName) === jacket.id && jacket.productAmount > 0){
            jacket.productAmount--;
        }
        if(jacket.productAmount === 0){
            const jacketToDelete = jacketItem.indexOf(jacket);
            if (jacketToDelete > -1) { 
                jacketItem.splice(jacketToDelete, 1);
            }
        }
    });

    console.log("Suprise",jacketItem);
    updateProducts()
}

function plussEditProductAmount(){
    let produktId = this.name;
    const jacket = jacketItem.find((jacketItem) => jacketItem.id === parseInt(produktId));
    
    jacketItem.forEach(function(jacket) {
        if(parseInt(produktId) === jacket.id){
            jacket.productAmount++;
        }
    });

    updateProducts()
}


function shoppingCartUpdate(){
    localStorage.setItem("SHOPPING CART", JSON.stringify(jacketItem));
    if(jacketItem.length === 0){
        location.href = "https://friendly-zuccutto-172753.netlify.app/index.html";
    }
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