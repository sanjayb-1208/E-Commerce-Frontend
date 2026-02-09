import {cart,findingMatchingProduct} from "./cart.js";
import { products } from "./products.js";

export function nameChecker(name)
{
    let compressedName = '';
    if(name.length > 28){
        for(let i = 0 ;i<28;i++){
            compressedName += name[i];
        }
        compressedName +='...'
    
    }
    else{
        compressedName +=name;
    }
    return compressedName;
}

export function addedClassListToggle(text)
{
    if(text.classList == "added-show"){
        text.classList.remove("added-show");
        text.classList.add("added-show-open");}

    setTimeout(() =>{
        text.classList.remove("added-show-open");
        text.classList.add("added-show")
    },300)
}

export function findProductBrand(productName){
    let productBrand = '';
    let  i = 0;
    while(productName[i] != " "){
        productBrand +=productName[i];
        i += 1;
    }

    return productBrand;
}

export function addProductToCart(id,cart){
    let isElementExists = false;
    cart.forEach(element => {
        if(id == element.id){
            isElementExists = true;
        }
    });

    if(isElementExists == true){

        
        cart.forEach(element => {
        if(id == element.id){
            element.quantity += 1;
        }
    });
    }
    else{
        let product = findingMatchingProduct(id);
        let element = 
        {
            id:product.id,
            quantity:1
        };
        cart.push(element);
    }

}