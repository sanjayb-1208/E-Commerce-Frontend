import { products } from "./products.js"

export function findingMatchingProduct(id){
    let matchingProduct;
    products.forEach((product)=>{
        if(product.id == id)
        {
            matchingProduct = product;
        }
    

    })
    return matchingProduct;
    
}
// localStorage.removeItem('cart');
let dummyCart = JSON.parse(localStorage.getItem("cart"));

if(dummyCart ==null){
    dummyCart = [];
}




export let cart = dummyCart;

localStorage.setItem("cart",JSON.stringify(cart));