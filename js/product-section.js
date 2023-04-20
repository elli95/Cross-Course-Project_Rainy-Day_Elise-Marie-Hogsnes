// import {jacketList} from "./products.js";

const apiBase = "https://rainydays.elisemariehogsnes.no";
const woocommerceBase = "/wp-json/wc/store";
const ProductBase = "/products";

const allProductBase = apiBase + woocommerceBase + ProductBase;

const productContainer = document.querySelector("#content");
const featuredBase = allProductBase + "?featured=true";


async function loadProducts(){
    try{
        const response = await fetch(allProductBase);
        const data = await response.json();
        console.log("url info", data);

        productContainer.innerHTML = "";
    
        Object.values(data).forEach(function(jacketList) {
        productContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?id=${jacketList.id}">
                                  <div class="product-image grid-a"><img src="${jacketList.images[0].src}" alt="${jacketList.images[0].alt}" /></div>
                                  <p class="product-name grid-b">${jacketList.name}</p>
                                  <p class="price bold brid-c">${jacketList.price_html}</p>
                                  </a>`;
        });
    }
    catch (error) {
        console.log(error);
        productContainer.innerHTML = error;
    }
}

loadProducts();

const featuredJacket = document.querySelector("#featured");
featuredJacket.addEventListener("change", featuredBrand);
const scottJacket = document.querySelector("#scott-jacket");
scottJacket.addEventListener("change", scottJacketBrand);
const windproofJacket = document.querySelector("#windproof-jacket");
windproofJacket.addEventListener("change", windproofJacketBrand);
const fleece = document.querySelector("#fleece");
fleece.addEventListener("change", fleeceBrand);
const coat = document.querySelector("#coat");
coat.addEventListener("change", coatBrand);

function featuredBrand(){
    if(this.checked){
        console.log("it's clicked");
        featuredFilter(featuredBase);
    }
    else {
    console.log("it was unclicked");
    loadProducts(allProductBase);
    }
}

async function featuredFilter(featuredBase){
    try{
        const response = await fetch(featuredBase);
        const data = await response.json();
        console.log("featured url info", data);

        productContainer.innerHTML = "";

        Object.values(data).forEach(function(jacketList) {
            productContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?id=${jacketList.id}">
                                      <div class="product-image grid-a"><img src="${jacketList.images[0].src}" alt="${jacketList.images[0].alt}" /></div>
                                      <p class="product-name grid-b">${jacketList.name}</p>
                                      <p class="price bold brid-c">${jacketList.price_html}</p>
                                      </a>`;
        });
    }
    catch (error) {
        console.log(error);
        productContainer.innerHTML = error;
    }
}



async function getProducts(){
    try{
        const response = await fetch(allProductBase);
        const data = await response.json();
        console.log("url info", data);
    
        return data;
    }
    catch (error) {
        console.log(error);
        productContainer.innerHTML = error;
    }
}

async function scottJacketBrand(){
    if(this.checked){
        const productInfo = await getProducts();
        console.log("it's clicked");
        scottJacketFilter(productInfo);
    }
    else {
    console.log("it was unclicked");
    loadProducts(allProductBase);
    }
}

function scottJacketFilter(productInfo){
    try{
        productContainer.innerHTML = "";

        Object.values(productInfo).forEach(function(jacketList){
            const brandPath = jacketList.tags.flatMap(brand=>brand.name);
            if(brandPath.includes("Scott's jackets")){
                productContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?id=${jacketList.id}">
                                          <div class="product-image grid-a"><img src="${jacketList.images[0].src}" alt="${jacketList.images[0].alt}" /></div>
                                          <p class="product-name grid-b">${jacketList.name}</p>
                                          <p class="price bold brid-c">${jacketList.price_html}</p>
                                          </a>`;
            }
            else{
                console.log("Size not available");
            }
        });
    }
    catch (error) {
        console.log(error);
        productContainer.innerHTML = error;
    }
}

async function windproofJacketBrand(){
    if(this.checked){
        const productInfo = await getProducts();
        console.log("it's clicked");
        windproofJacketFilter(productInfo);
    }
    else {
    console.log("it was unclicked");
    loadProducts(allProductBase);
    }
}

function windproofJacketFilter(productInfo){
    try{
        productContainer.innerHTML = "";

        Object.values(productInfo).forEach(function(jacketList){
            const brandPath = jacketList.tags.flatMap(brand=>brand.name);
            if(brandPath.includes("Windproof jacket")){
                productContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?id=${jacketList.id}">
                                          <div class="product-image grid-a"><img src="${jacketList.images[0].src}" alt="${jacketList.images[0].alt}" /></div>
                                          <p class="product-name grid-b">${jacketList.name}</p>
                                          <p class="price bold brid-c">${jacketList.price_html}</p>
                                          </a>`;
            }
            else{
                console.log("Size not available");
            }
        });
    }
    catch (error) {
        console.log(error);
        productContainer.innerHTML = error;
    }
}

async function fleeceBrand(){
    if(this.checked){
        const productInfo = await getProducts();
        console.log("it's clicked");
        fleeceFilter(productInfo);
    }
    else {
    console.log("it was unclicked");
    loadProducts(allProductBase);
    }
}

function fleeceFilter(productInfo){
    try{
        productContainer.innerHTML = "";

        Object.values(productInfo).forEach(function(jacketList){
            const brandPath = jacketList.tags.flatMap(brand=>brand.name);
            if(brandPath.includes("Fleece")){
                productContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?id=${jacketList.id}">
                                          <div class="product-image grid-a"><img src="${jacketList.images[0].src}" alt="${jacketList.images[0].alt}" /></div>
                                          <p class="product-name grid-b">${jacketList.name}</p>
                                          <p class="price bold brid-c">${jacketList.price_html}</p>
                                          </a>`;
            }
            else{
                console.log("Size not available");
            }
        });
    }
    catch (error) {
        console.log(error);
        productContainer.innerHTML = error;
    }
}

async function coatBrand(){
    if(this.checked){
        const productInfo = await getProducts();
        console.log("it's clicked");
        coatFilter(productInfo);
    }
    else {
    console.log("it was unclicked");
    loadProducts(allProductBase);
    }
}

function coatFilter(productInfo){
    try{
        productContainer.innerHTML = "";

        Object.values(productInfo).forEach(function(jacketList){
            const brandPath = jacketList.tags.flatMap(brand=>brand.name);
            if(brandPath.includes("Coat")){
                productContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?id=${jacketList.id}">
                                          <div class="product-image grid-a"><img src="${jacketList.images[0].src}" alt="${jacketList.images[0].alt}" /></div>
                                          <p class="product-name grid-b">${jacketList.name}</p>
                                          <p class="price bold brid-c">${jacketList.price_html}</p>
                                          </a>`;
            }
            else{
                console.log("Size not available");
            }
        });
    }
    catch (error) {
        console.log(error);
        productContainer.innerHTML = error;
    }
}


// Sizes:

const xsFilter = document.querySelector("#xs");
xsFilter.addEventListener("change", sizeFilterXS);
const sFilter = document.querySelector("#s");
sFilter.addEventListener("change", sizeFilterS);
const mFilter = document.querySelector("#m");
mFilter.addEventListener("change", sizeFilterM);
const lFilter = document.querySelector("#l");
lFilter.addEventListener("change", sizeFilterL);
const xlFilter = document.querySelector("#xl");
xlFilter.addEventListener("change", sizeFilterXL);

async function sizeFilterXS(){
    if(this.checked){
        const productsize = await getProducts();
        productContainer.innerHTML = "";
        sizeXS(productsize);
    }
    else {
    loadProducts(allProductBase);
    }
}

function sizeXS(productsize){
    Object.values(productsize).forEach(function(jacketList){
        const sizePath = jacketList.attributes.flatMap(size=>size.terms.flatMap(sizeType=>sizeType.name));
        if(sizePath.includes("XS")){
            productContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?id=${jacketList.id}">
                                      <div class="product-image grid-a"><img src="${jacketList.images[0].src}" alt="${jacketList.images[0].alt}" /></div>
                                      <p class="product-name grid-b">${jacketList.name}</p>
                                      <p class="price bold brid-c">${jacketList.price_html}</p>
                                      </a>`;
        }
        else{
            console.log("Size not available");
        }

    });
}

async function sizeFilterS(){
    if(this.checked){
        const productsize = await getProducts();
        productContainer.innerHTML = "";
        sizeS(productsize);
    }
    else {
    loadProducts(allProductBase);
    }
}

function sizeS(productsize){
    Object.values(productsize).forEach(function(jacketList){
        const sizePath = jacketList.attributes.flatMap(size=>size.terms.flatMap(sizeType=>sizeType.name));
        if(sizePath.includes("S")){
            productContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?id=${jacketList.id}">
                                      <div class="product-image grid-a"><img src="${jacketList.images[0].src}" alt="${jacketList.images[0].alt}" /></div>
                                      <p class="product-name grid-b">${jacketList.name}</p>
                                      <p class="price bold brid-c">${jacketList.price_html}</p>
                                      </a>`;
        }
        else{
            console.log("Size not available");
        }

    });
}

async function sizeFilterM(){
    if(this.checked){
        const productsize = await getProducts();
        productContainer.innerHTML = "";
        sizeM(productsize);
    }
    else {
    loadProducts(allProductBase);
    }
}

function sizeM(productsize){
    Object.values(productsize).forEach(function(jacketList){
        const sizePath = jacketList.attributes.flatMap(size=>size.terms.flatMap(sizeType=>sizeType.name));
        if(sizePath.includes("M")){
            productContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?id=${jacketList.id}">
                                      <div class="product-image grid-a"><img src="${jacketList.images[0].src}" alt="${jacketList.images[0].alt}" /></div>
                                      <p class="product-name grid-b">${jacketList.name}</p>
                                      <p class="price bold brid-c">${jacketList.price_html}</p>
                                      </a>`;
        }
        else{
            console.log("Size not available");
        }

    });
}

async function sizeFilterL(){
    if(this.checked){
        const productsize = await getProducts();
        productContainer.innerHTML = "";
        sizeL(productsize);
    }
    else {
    loadProducts(allProductBase);
    }
}

function sizeL(productsize){
    Object.values(productsize).forEach(function(jacketList){
        const sizePath = jacketList.attributes.flatMap(size=>size.terms.flatMap(sizeType=>sizeType.name));
        if(sizePath.includes("L")){
            productContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?id=${jacketList.id}">
                                      <div class="product-image grid-a"><img src="${jacketList.images[0].src}" alt="${jacketList.images[0].alt}" /></div>
                                      <p class="product-name grid-b">${jacketList.name}</p>
                                      <p class="price bold brid-c">${jacketList.price_html}</p>
                                      </a>`;
        }
        else{
            console.log("Size not available");
        }

    });
}

async function sizeFilterXL(){
    if(this.checked){
        const productsize = await getProducts();
        productContainer.innerHTML = "";
        sizeXL(productsize);
    }
    else {
    loadProducts(allProductBase);
    }
}

function sizeXL(productsize){
    Object.values(productsize).forEach(function(jacketList){
        const sizePath = jacketList.attributes.flatMap(size=>size.terms.flatMap(sizeType=>sizeType.name));
        if(sizePath.includes("XL")){
            productContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?id=${jacketList.id}">
                                      <div class="product-image grid-a"><img src="${jacketList.images[0].src}" alt="${jacketList.images[0].alt}" /></div>
                                      <p class="product-name grid-b">${jacketList.name}</p>
                                      <p class="price bold brid-c">${jacketList.price_html}</p>
                                      </a>`;
        }
        else{
            console.log("Size not available");
        }

    });
}


// sizeFilter()

// function sizeXS(jacketList){
//     if(sizePath.includes("XS")){
//         console.log("----------------WIN---------------", jacketList);
//     }
//     else{
//         console.log("Fail");
//     }
// }

// async function getProducts(){
//     try{
//         const response = await fetch(allProductBase);
//         const data = await response.json();
//         console.log("url info", data);

//         return data;
//     }
//     catch (error) {
//         console.log(error);
//         productContainer.innerHTML = error;
//     }
// }

// async function mainProducts(){
//     const productJackets = await getProducts();
//     loadProductsHTML(productJackets);
// }

// mainProducts();

// function loadProductsHTML(productJackets){
//     container.innerText += "";
//     for (let i = 0; i < productJackets.length; i++){
//         const jacket = productJackets[i];
//         loadProductHTML(jacket);
//     }
// }

// function loadProductHTML(jacket){
//     try{
//         const productContainer = document.createElement("div");
//         productContainer.className = "product-style";
//         productContainer.classList.add("jacket");
//         productContainer.id = jacket.id;

//         const imgContainer = document.createElement("div");
//         imgContainer.className = "product-image grid-a";
//         for (let i = 0; i < jacket.images.length; i++){
//             const imgInfo = jacket.images[i];
//             const img = document.createElement("img");  
//             img.src = imgInfo.src;
//             img.alt = imgInfo.alt;
//             imgContainer.append(img);
//         }
//         productContainer.append(imgContainer);

//         const title = document.createElement("p");
//         title.className = "product-name grid-b";
//         // const titelName = jacket.name;
//         // titelName.replace
//         title.innerText = jacket.name;
//         // title.innerText.replace('<p>', '').replace('</p>', '');
//         productContainer.append(title);

        
//         const price = document.createElement("p");
//         price.className = "price bold brid-c";
//         const priceSum = jacket.price_html;
//         console.log("1", priceSum);
//         priceSum.replace('<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>', '');
//         price.innerText = priceSum;
//         console.log("2", priceSum);
//         // price.innerText = jacket.price_html;
//         // price.innerText.replace('<span>', '').replace('</span>', '');
//         productContainer.append(price);

//         container.append(productContainer);

//         // productContainer.innerHTML = "";
            
//         // Object.values(data).forEach(function(jacketList) {
//         // productContainer.innerHTML += `<a class="product-style" href="product-storm-jacket.html?id=${jacketList.id}">
//         //                          <div class="product-image grid-a"><img src="${jacketList.images[0].src}" alt="${jacketList.images[0].alt}" /></div>
//         //                           <p class="product-name grid-b">${jacketList.name}</p>
//         //                           <p class="price bold brid-c">${jacketList.price_html}</p>
//         //                           </a>`;
//         // });
//     }
//     catch (error) {
//         console.log(error);
//         productContainer.innerHTML = error;
//     }
// }