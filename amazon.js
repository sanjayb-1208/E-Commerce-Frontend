import { cart } from "./cart.js";
import {changeSelectedProduct, products, selectedProduct} from "./products.js";
import { nameChecker,addedClassListToggle, addProductToCart } from "./utils.js"; 

let productContainerHTML = ``;
const productContainer = document.querySelector(".products-container");
const cartQuantityHTML = document.querySelector(".cart-quantity");
cartQuantityHTML.innerHTML = cart.length;
let pageProducts = products;

function loadPage(pageProducts){
    productContainerHTML = ``;
pageProducts.forEach((product) =>{
    let currentProductHTML = 
    `
    <div class="product ${product.id}">
        <div class="product-selection ${product.id}">
            <div class="image-container">
            <img class="product-image" src="images/${product.image}" alt="${product.name}">
            </div>
        </div>
            <div class="product-details-container">
                <h4 class="product-name">${nameChecker(product.name)}</h4>
                <div class="product-price-container">
                    <h5 class="product-discount">${product.discount}%</h5>
                    <p class="product-price">$${product.price}</p>
                    <p class="product-original-price">
                        <strike>$${product.originalPrice}</strike>                        
                    </p>
                </div>
                <div class="product-ratings-container">
                    <p class="product-ratings">Ratings : ${product.ratings}/5</p>
                    <p class="product-ratings-count">${product.reviews} reviews</p>
                </div>
                
                <div class="buy-button-container">
                    <button class="buy-button" data-product-id="${product.id}">Buy</button>
                    <button class="add-to-cart-button" data-product-id="${product.id}">Add to Cart</button>
                    <p class="added-show">Added</p>
                </div>
                
                
            </div>
            </div>
    `

    productContainerHTML += currentProductHTML;
})

productContainer.innerHTML = productContainerHTML;



//HTML Finished

//Added showing animation

const addTOCartButtons = document.querySelectorAll(".add-to-cart-button");
const buyButtons = document.querySelectorAll(".buy-button");
addTOCartButtons.forEach((button)=>{
    button.addEventListener("click",function(){
        let addedText = button.nextElementSibling;
        addedClassListToggle(addedText);
        console.log(button.dataset.productId);
        addProductToCart(button.dataset.productId,cart);
        localStorage.setItem("cart",JSON.stringify(cart));
        cartQuantityHTML.innerHTML = cart.length;
    })
})
buyButtons.forEach((button)=>{
    button.addEventListener("click",function(){
        let addedText = button.nextElementSibling.nextElementSibling;
        addedClassListToggle(addedText);
        console.log(button.dataset.productId);
        addProductToCart(button.dataset.productId,cart);
        localStorage.setItem("cart",JSON.stringify(cart));
        cartQuantityHTML.innerHTML = cart.length;
    })
})

let anchorProducts = document.querySelectorAll(".product-selection");

anchorProducts.forEach(product =>{

    product.addEventListener("click",()=>{
        let productId = product.classList[1];        
        let changingSelectedProduct = changeSelectedProduct(productId);
        console.log(changingSelectedProduct);
        console.log(selectedProduct);
        window.location.href = "product-details.html";
    })
})

}
loadPage(pageProducts);

//search box working

let productSearchBox = document.querySelector(".search-box");
console.log(productSearchBox);


productSearchBox.addEventListener("input",(e)=>{
    let searchVal = e.target.value.toLowerCase();
    console.log(searchVal);
    let currentProduct = [];
    products.forEach(product =>{
        let productName = product.name.toLowerCase();
        console.log(productName);
        let isDisplayed = productName.includes(searchVal);
        if(isDisplayed){
            currentProduct.push(product);
        }

    })
    console.log(currentProduct)
    loadPage(currentProduct);
})
