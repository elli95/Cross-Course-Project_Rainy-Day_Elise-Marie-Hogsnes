const purchasedProducts = document.querySelector("#purchased-products");

function Checkout(){
    let jacketItem = JSON.parse(localStorage.getItem("SHOPPING CART"));
    console.log(jacketItem);

    const productSum = jacketItem.reduce(
        (sumPrices, productPrice) => sumPrices + productPrice.price * productPrice.productAmount, 0,);

    Object.values(jacketItem).forEach(function(jacket) {
        purchasedProducts.innerHTML += `<div class="success-product-grid bottom-border font-style-text-transform">
                                        <img class="success-grid-style" src="images/product_img/${jacket.img}" alt="${jacket.description}" />
                                        <p class="success-grid-style product-success success-jacket-name">${jacket.name}</p>
                                        <p class="success-grid-style product-success success-jacket-size">${jacket.size}</p>
                                        <p class="success-grid-style product-success success-jacket-color">${jacket.color}</p>
                                        <p class="success-grid-style product-price product-success success-jacket-amount">${jacket.productAmount}x</p>
                                        <p class="bold success-grid-style product-price">${jacket.price * jacket.productAmount} NOK</p>
                                        `;
    }); 
    purchasedProducts.innerHTML += `<div class="bottom-border success-total">
                                    <p>Total: </p><p class="bold success-grid-style">${productSum} NOK</p>
                                    </div>
    `;
}
Checkout();