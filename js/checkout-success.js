const purchasedProducts = document.querySelector("#purchased-products");

// const apiBase = "http://content-management-systemscaelise-marie-hogsnes.local";
// const woocommerceBase = "/wp-json/wc/store";
// const cartBase = "/cart/items";

// const shoppingCartBase = apiBase + woocommerceBase + cartBase;

// async function getShoppingCart(){
//     try{
//         const response = await fetch(shoppingCartBase);
//         const data = await response.json();
//         console.log("url info", data);
    
//         return data;
//     }
//     catch (error) {
//         console.log(error);
//         purchasedProducts.innerHTML = error;
//     }
// }

function Checkout(){
    let jacketItem = JSON.parse(localStorage.getItem("SHOPPING CART"));
    console.log(jacketItem);

    const productSum = jacketItem.reduce(
        (sumPrices, productPrice) => sumPrices + productPrice.prices.price/100 * productPrice.productAmount, 0,);

    Object.values(jacketItem).forEach(function(jacket) {
        purchasedProducts.innerHTML += `<div class="success-product-grid bottom-border font-style-text-transform">
                                        <img class="success-grid-style" src="${jacket.images[0].src}" alt="${jacket.images[0].alt}" />
                                        <p class="success-grid-style product-success success-jacket-name">${jacket.name}</p>
                                        <p class="success-grid-style product-success success-jacket-size">${jacket.size}</p>
                                        <p class="success-grid-style product-success success-jacket-color">${jacket.color}</p>
                                        <p class="success-grid-style product-price product-success success-jacket-amount">${jacket.productAmount}x</p>
                                        <p class="bold success-grid-style product-price">${jacket.prices.price/100 * jacket.productAmount} NOK</p>
                                        `;
    }); 
    purchasedProducts.innerHTML += `<div class="bottom-border success-total">
                                    <p>Total: </p><p class="bold success-grid-style">${productSum} NOK</p>
                                    </div>
    `;
}
Checkout();