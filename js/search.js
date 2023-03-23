import {jacketList} from "./products.js";


console.log("hello", jacketList);

const searchInput = document.querySelector("#search-bar-input");
//const searchResultsList = document.querySelector("#search-result-list");
const searchResultsListId = document.getElementById("#search-result-list");
const searchResult = document.querySelector("#search-result-list");


searchInput.addEventListener("input", inputContent);
document.addEventListener("click", noSearchList);

function inputContent(inputText){
    const value = inputText.target.value.toLowerCase();
    console.log(value);

    let result = jacketList.filter(jacketName => jacketName.name.toLowerCase().includes(value));
    
    console.log(result);
    searchResultsList(result)
}

function searchResultsList(result){

    // searchResult.innerHTML += `<div>heeeeeelo>/div>
    //                            <div class="product-image grid-a"><img src="images/product_img/${searchList.img}" alt="${searchList.description}" /></div>
    //                           `;
    searchResult.innerHTML = "";
    Object.values(result).forEach(function(searchList) {
        searchResult.innerHTML += ` <a class="search-list-products" href="product-storm-jacket.html?name=${searchList.name}">
                                    <img class="search-img" src="images/product_img/${searchList.img}" alt="${searchList.description}" />
                                    <p>${searchList.name}</p>
                                    </a>
                                  `;
    });
}

function noSearchList(){
    searchResult.innerHTML = ""
}


// function searchResult(){
//     products.forEach((jacketList)=>{
//         let inputText = document.createElement("inputText");
//         inputText.innerText = jacketList;
//         inputText.classList.add("listItem");
//         searchResultsListId.appendChild(inputText);
//     })
// }
//searchResult()

// <div class="product-image grid-a"><img src="images/product_img/${searchList.img}" alt="${searchList.description}" /></div>

/*
function searchResult(){
    filter = searchInput.value.toLowerCase();
    
    for (i = 0; i < products.length; i++){
        item = products[i].getElementsByTagName("item")[0];
        inputValue = item.textContent || item.innerText;
        
        if (inputValue.toLowerCase().indexOf(filter) > -1){
            products[i].style.display = "";
        }else{
            products[i].style.display = "none";
        }
    }
}
*/



/*
const searchCardTemplate = document.querySelector("#search-result")

fetch (products)
    .then ( res => res.json())
    .then ( data => {
        data.forEach(user => {
        const card = searchCardTemplate.content.cloneNode(true).children[0]
        console.log(user)
        })
    });
*/
// Searchbar:
