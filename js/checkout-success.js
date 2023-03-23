const purchasedProducts = document.querySelector("#purchased-products");

function Checkout(){
    let jacketItem = JSON.parse(localStorage.getItem("SHOPPING CART"));
    console.log(jacketItem);

    Object.values(jacketItem).forEach(function(jacket) {
        purchasedProducts.innerHTML += `<div class="success-product-grid">
                                        <div class="grid-a bottom-border success-grid-style">
                                        <img src="images/product_img/${jacket.img}" alt="${jacket.description}" />
                                        </div>
                                        <div class="grid-b bottom-border success-grid-style">
                                        <p>${jacket.name}</p>
                                        </div>
                                        <div class="grid-c bottom-border success-grid-style">
                                        <p class="bold">${jacket.price} NOK</p>
                                        </div>
                                        </div>
                                        `;
    });
}
Checkout();