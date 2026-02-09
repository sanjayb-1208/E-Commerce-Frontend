import { cart, findingMatchingProduct } from "./cart.js";
import { products } from "./products.js";
import { findProductBrand } from "./utils.js";
const productsContainer = document.querySelector(".selected-products");
let checkOutPageHTML = ``;
let deleteButtons;
let totalAmount = 0;
let totalOriginalAmount = 0;

function renderCheckOutPage() {
    let checkOutPageHTML = ``;
    cart.forEach((cartProduct) => {
        let productId = cartProduct.id;
        let product = findingMatchingProduct(productId);

        let productBrand = findProductBrand(product.name);

        let currentProductHTML =
            `<div class="product ${productId}">
                <div class="product-image-container">
                <img class="product-image" src="images/${product.image}" alt="${product.name}">
                </div>
                <div class="product-details-container">
                    <h4 class="product-name">${product.name}</h4>
                    <h3 class="product-brand">${productBrand}</h3>
                    <div class="product-price-container">
                        <h2 class="product-price">$${product.price}</h2>
                        <h3 class="original-product-price"><strike>$${product.originalPrice}</strike></h3>
                        <h3 class="product-offer">${product.discount}%</h3>
                    </div>
                    <div class="product-quantity-container">
                        <h5 class="quantity-text">Quantity : </h5>
                        <h5 class="quantity-number">${cartProduct.quantity}</h5>
                        <div class="update-quantity-input-container">
                            <input type="number" class="update-quantity-input">
                            <button class="update-quantity-input-button">Ok</button>
                        </div>
                        <p class="update-quantity" data-product-id="${product.id}">Update</p>
                        <p class="delete-product" data-product-id="${product.id}">Delete</p>
                    </div>
                    <div class="delivery-details">
                        <p class="delivery-date">Delivery Expected on March 15,Monday</p>
                        <p class="delivery-price">Free Delivery</p>
                    </div>



                </div>
            </div>`;

        checkOutPageHTML += currentProductHTML;


    })

    if (cart.length == 0) {
        let currentProductHTML =
            `<div style="display:flex;align-items:center;justify-content:center;height:100%;">
        <h1>Add Some Product to Cart</h1>
    </div>`;
        checkOutPageHTML += currentProductHTML;
    }


    productsContainer.innerHTML = checkOutPageHTML;
    deleteButtons = document.querySelectorAll(".delete-product");


    deleteButtons.forEach(button => {
    button.addEventListener("click", () => {
        let productId = button.dataset.productId;
        let matchingProduct;
        let productPosition
        cart.forEach((cartProduct, currentProductPosition) => {
            if (cartProduct.id == productId) {
                matchingProduct = cartProduct;
                productPosition = currentProductPosition;
            }

        })
        console.log(matchingProduct);
        cart.splice(productPosition, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(cart);
        renderCheckOutPage();
        findingTotalAmount(cart);
    })


});
}
renderCheckOutPage();
findingTotalAmount(cart);





//update button working



let updateButtons = document.querySelectorAll(".update-quantity");

updateButtons.forEach((updateButton) => {

    

    updateButton.addEventListener("click", () => {
        let updateContainer = updateButton.previousElementSibling;
        updateContainer.classList.remove("update-quantity-input-container");
        updateContainer.classList.add("update-quantity-input-container-after");
        updateButton.style.display = "none";
        let quantityNumber = updateContainer.previousElementSibling;
        quantityNumber.style.display = "none";
        let okButtons = document.querySelectorAll(".update-quantity-input-button");

        okButtons.forEach((button) => {

    button.addEventListener("click", () => {
        let updateContainer = button.parentElement;
        let updateQuantitycontainer = button.previousElementSibling;
        let updateQuantity = updateQuantitycontainer.value;



        updateContainer.classList.remove("update-quantity-input-container-after");
        updateContainer.classList.add("update-quantity-input-container");
        let quantityNumber = updateContainer.previousElementSibling;
        if(updateQuantity != 0){
        quantityNumber.innerHTML = updateQuantity;
        }
        else{
            alert("The quantity cannot be Zero If you want to delete a Product try the delete button");
        }
        updateButton.style.display = "inline-block";
        console.log(updateButton.dataset.productId);
        quantityNumber.style.display = "inline-block";

        updateProductQuantityUsingButton(updateButton.dataset.productId,updateQuantity);

    })

})

    })

})

function updateProductQuantityUsingButton(productId,quantity){
    let matchingProduct;
    cart.forEach(product =>{
        if(product.id == productId){
            matchingProduct = product;
        }
    })
    matchingProduct.quantity = Number(quantity);
    console.log(matchingProduct);
    console.log(cart);
    localStorage.setItem("cart",JSON.stringify(cart))
    findingTotalAmount(cart);
}


//Bill Rendering and finding total


function findingTotalAmount(cart) {
    totalAmount = 0;
    totalOriginalAmount = 0;
    cart.forEach(cartItem => {
        let productId = cartItem.id
        let matchingProduct = findingMatchingProduct(productId);
        totalAmount += (matchingProduct.price * cartItem.quantity);
        totalOriginalAmount += (matchingProduct.originalPrice * cartItem.quantity);
    })
    renderBill();
}


function renderBill() {

    let billHTML =
        `
        <div class="single-line">
                <p class="c1">No. of Items</p>
                <h3 class="c2">Items(${cart.length}) : </h3>
                <h3 class="c3">$${totalAmount}</h3>
            </div>
            <div class="single-line">
                <p class="c1">OriginalPrice</p>
                <h3 class="c2">Price : </h3>
                <h3 class="c3"><strike>$${totalOriginalAmount}</strike></h3>
            </div>
            <div class="single-line">
                <p class="c1">Price for Delivery</p>
                <h3 class="c2">Free Delivery: </h3>
                <h3 class="c3">$0</h3>
            </div>
            <hr>
            <div class="single-line">
                <p class="c1">Total amount</p>
                <h3 class="c2">Total : </h3>
                <h3 class="c3">$${totalAmount}</h3>
            </div>

    `
    if (cart.length == 0) {
        billHTML =
            `
            <h1>Add something in the cart to Load Bill</h1>
        `
    }
    let billContainer = document.querySelector(".bill-container");
    billContainer.innerHTML = billHTML;
}



