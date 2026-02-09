export let products = [
    {
        id:"product-1",
        name:'Nike Football for Men and Women',
        image:"420-445-rabona-pro-5-22-1-fb-80075l-football-nivia-original-imaghjjn9puy3xwr.webp",
        discount:10,
        price:45,
        originalPrice:100,
        ratings:4.5,
        reviews:2401
    },
    {
        id:"product-2",
        name:"Rolex Men Watch Silver",
        image:"1-2870-overfly-men-original-imahdygkyxp4p6zf.webp",
        discount:25,
        price:30,
        originalPrice:50,
        ratings:4.4,
        reviews:23490
    },
    {
        id:"product-3",
        name:"Realme C55 4GB Ram  64GB Rom Ultra Screen",
        image:"-original-imagp55fu6uq2jch.webp",
        discount:25,
        price:540,
        originalPrice:700,
        ratings:4.6,
        reviews:2499
    },
    {
        id:"product-4",
        name:"Redmi 10S 12GB Ram 128GB Storage",
        image:"-original-imagan9qhw9nyhce.webp",
        discount:10,
        price:1080,
        originalPrice:3000,
        ratings:4.9,
        reviews:2390
    },
    {
        id:"product-5",
        name:"Realme Narzo 30A 3GB Ram 32GB Storage",
        image:"narzo-30a-rmx3171-realme-original-imagyhbgzcyfwzfz.webp",
        discount:10,
        price:320,
        originalPrice:400,
        ratings:5.0,
        reviews:23909
    },
    {
        id:"product-6",
        name:"Seoul Messi Jersey Barcelona No10",
        image:"l-5qw5-miami-black-messi-2024-jerseys-yclothy-original-imah4dgtffvet9ut.webp",
        discount:22,
        price:120,
        originalPrice:200,
        ratings:4.6,
        reviews:5467
    },
        {
        id:"product-7",
        name:"Seoul Ronaldo jersey Real Madrid No7",
        image:"xxs-realdragonjernew2023-ronaldo-req1-privic-original-imah878bjkj2r2ug.webp",
        discount:24,
        price:110,
        originalPrice:200,
        ratings:4.7,
        reviews:5432
    },
        {
        id:"product-8",
        name:"Seoul Neymar JR Jersey Barcelona No11",
        image:"xxl-kd20-n10parisblk2023-blksh-msv-original-imagvscjtze5wt2q.webp",
        discount:20,
        price:130,
        originalPrice:210,
        ratings:4.8,
        reviews:8907
    },
        {
        id:"product-9",
        name:"NIKE Men Shoes Black Perfect fit",
        image:"10-hq2588-001-10-nike-black-white-wolf-grey-mtlc-silver-original-imahd2vvtvmx5msh.webp",
        discount:2,
        price:170,
        originalPrice:190,
        ratings:4.2,
        reviews:587
    },
        {
        id:"product-10",
        name:"Seoul Messi Jerseys Pack of 2 Argentina No10",
        image:"10-11-years-mf67-tshirt-arg2022messi-yclothy-original-imah2e3rbs2a3e2c.webp",
        discount:50,
        price:300,
        originalPrice:600,
        ratings:4.9,
        reviews:4563
    },
    {
        id:"product-11",
        name:'Nike Football for Men and Women',
        image:"420-445-rabona-pro-5-22-1-fb-80075l-football-nivia-original-imaghjjn9puy3xwr.webp",
        discount:10,
        price:45,
        originalPrice:100,
        ratings:4.5,
        reviews:2401
    },
    {
        id:"product-12",
        name:"Rolex Men Watch Silver",
        image:"1-2870-overfly-men-original-imahdygkyxp4p6zf.webp",
        discount:25,
        price:30,
        originalPrice:50,
        ratings:4.4,
        reviews:23490
    },
    {
        id:"product-13",
        name:"Realme C55 4GB Ram  64GB Rom Ultra Screen",
        image:"-original-imagp55fu6uq2jch.webp",
        discount:25,
        price:540,
        originalPrice:700,
        ratings:4.6,
        reviews:2499
    },
    {
        id:"product-14",
        name:"Redmi 10S 12GB Ram 128GB Storage",
        image:"-original-imagan9qhw9nyhce.webp",
        discount:10,
        price:1080,
        originalPrice:3000,
        ratings:4.9,
        reviews:2390
    },
    {
        id:"product-15",
        name:"Realme Narzo 30A 3GB Ram 32GB Storage",
        image:"narzo-30a-rmx3171-realme-original-imagyhbgzcyfwzfz.webp",
        discount:10,
        price:320,
        originalPrice:400,
        ratings:5.0,
        reviews:23909
    },
    {
        id:"product-16",
        name:"Seoul Messi Jersey Barcelona No10",
        image:"l-5qw5-miami-black-messi-2024-jerseys-yclothy-original-imah4dgtffvet9ut.webp",
        discount:22,
        price:120,
        originalPrice:200,
        ratings:4.6,
        reviews:5467
    },
        {
        id:"product-17",
        name:"Seoul Ronaldo jersey Real Madrid No7",
        image:"xxs-realdragonjernew2023-ronaldo-req1-privic-original-imah878bjkj2r2ug.webp",
        discount:24,
        price:110,
        originalPrice:200,
        ratings:4.7,
        reviews:5432
    },
        {
        id:"product-18",
        name:"Seoul Neymar JR Jersey Barcelona No11",
        image:"xxl-kd20-n10parisblk2023-blksh-msv-original-imagvscjtze5wt2q.webp",
        discount:20,
        price:130,
        originalPrice:210,
        ratings:4.8,
        reviews:8907
    },
        {
        id:"product-19",
        name:"NIKE Men Shoes Black Perfect fit",
        image:"10-hq2588-001-10-nike-black-white-wolf-grey-mtlc-silver-original-imahd2vvtvmx5msh.webp",
        discount:2,
        price:170,
        originalPrice:190,
        ratings:4.2,
        reviews:587
    },
        {
        id:"product-20",
        name:"Seoul Messi Jerseys Pack of 2 Argentina No10",
        image:"10-11-years-mf67-tshirt-arg2022messi-yclothy-original-imah2e3rbs2a3e2c.webp",
        discount:50,
        price:300,
        originalPrice:600,
        ratings:4.9,
        reviews:4563
    }

]




let dummyselectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
if (!dummyselectedProduct){
    dummyselectedProduct = [products[0]];
}

export let selectedProduct = dummyselectedProduct;
localStorage.setItem("selectedProduct",JSON.stringify(selectedProduct));

export function changeSelectedProduct(productId){
    let productMatch;
    let productPos;

    products.forEach((product,index)=>{
        if(product.id == productId){
            productMatch = product;
            productPos = index;
        }
    })
    selectedProduct.splice(0);
    selectedProduct.push(products[productPos]);
    localStorage.setItem("selectedProduct",JSON.stringify(selectedProduct));
    return productPos;




}