import {selectedProduct,products} from "./products.js";
import { findProductBrand } from "./utils.js";

console.log(5);
let trueProduct = selectedProduct[0];

let fullContainer = document.querySelector(".full-container");

let currentHTML = `
        <div class="center-container">
        <div class="image-container">
            <img src="./images/${trueProduct.image}" alt="">
        </div>
        </div>

        <hr>

        <div class="product-details">
            <h2 class="product-name">${trueProduct.name}</h2>
            <h3 class="product-brand">${findProductBrand(trueProduct.name)}</h3>
            <div class="product-price-details">
                <h2 class="product-price-details-heading">Product Price Details</h2>
                <hr>
                <h3 class="product-original-price">Price : <strike>$${trueProduct.originalPrice}</strike></h3>
                <h3 class="product-discount-percent">Discount : ${trueProduct.discount}%</h3>
                <p class="price-after-discount-text">Price after Discount Applied</p>
                <h3 class="product-price">Price : $${trueProduct.price}</h3>
                <h3 class="shipping-price">Shipping Price : $0</h3>
                <p class="free-shipping-text">Free shipping for you...</p>
            </div>
        
        <div class="product-rating-details">
            <h2 class="product-rating-heading">Product Heading</h2>
            <hr>
            <p class="total-reviews">${trueProduct.reviews} Reviews</p>
            <h2 class="total-purchases">Total Purchases : 12009</h2>
            <h2 class="product-ratings">Ratings ${trueProduct.ratings}/5</h2>
        </div>
        </div>`;

fullContainer.innerHTML = currentHTML;