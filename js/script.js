// JS for Single product detail


// var ProductImg = document.getElementById("product-img");//larger image
// var SmallImg = document.getElementsByClassName("small-img");//it returns list of 4 images having index 0,1,2,3 as we have 4 images with class name "small0-img" 

// SmallImg[0].onclick = function()//when user click on first image or images at 0 index, it will display as ProdcutImg.src replace with clicked or SmallImg[0], so we get smallimg[0] in bigger form, similarly when click on smallimg[1], it will display in bigger picture and so on 
// {
//     ProductImg.src = SmallImg[0].src;   
// }

// SmallImg[1].onclick = function()
// {
//     ProductImg.src = SmallImg[1].src;   
// }

// SmallImg[2].onclick = function()
// {
//     ProductImg.src = SmallImg[2].src;   
// }

// SmallImg[3].onclick = function()
// {
//     ProductImg.src = SmallImg[3].src;   
// }

// array

const products = [
    { id: 1, name: "T-shirt en coton", price: 19.99, description: "T-shirt confortable en coton bio.", image: "product-1.jpg", category: "T-shirt" },
    { id: 2, name: "Jean slim", price: 49.99, description: "Jean slim fit en denim stretch.", image: "product-2.jpg", category: "Pants" },
    { id: 3, name: "Sweat à capuche", price: 35.99, description: "Sweat à capuche doux et confortable.", image: "product-3.jpg", category: "T-shirt" },
    { id: 4, name: "Robe d'été", price: 29.99, description: "Robe légère parfaite pour l'été.", image: "product-4.jpg", category: "T-shirt" },
    { id: 5, name: "Casquette", price: 15.99, description: "Casquette de style décontracté pour l'été.", image: "product-5.jpg", category: "Accessoire" },
    { id: 6, name: "Sneakers blanches", price: 79.99, description: "Sneakers blanches confortables et élégantes.", image: "product-6.jpg", category: "Shoes" },
    { id: 7, name: "Pantalon de sport", price: 29.99, description: "Pantalon de sport léger et respirant.", image: "product-7.jpg", category: "Pants" },
    { id: 8, name: "Chaussettes en coton", price: 5.99, description: "Chaussettes douces en coton bio.", image: "product-8.jpg", category: "Socks" },
    { id: 9, name: "Lunettes de soleil", price: 19.99, description: "Lunettes de soleil polarisées.", image: "product-9.jpg", category: "Accessoire" },
    { id: 10, name: "Sandales d'été", price: 25.99, description: "Sandales légères pour l'été.", image: "product-10.jpg", category: "Shoes" },
    { id: 11, name: "Bonnet en laine", price: 12.99, description: "Bonnet chaud en laine mérinos.", image: "product-11.jpg", category: "Accessoire" },
    { id: 12, name: "Pyjama en coton", price: 22.99, description: "Pyjama doux et confortable en coton.", image: "product-12.jpg", category: "T-shirt" }
]

// script for range
let range = document.getElementById("range");
let outpotRange = document.getElementById("output-range");
outpotRange.textContent = range.value + "$";
range.addEventListener("input", (event) => {
    outpotRange.textContent = event.target.value + "$";
}

)


// box or div of all element

let boxOfProduct = document.getElementById("boxOfProduct");
// loop for all elemnt
products.forEach(element => {
    //creat elemnt
    let divProduct = document.createElement("div");
    divProduct.classList = "col-4" + " " + element.category;
    divProduct.classList.add("product");
    divProduct.innerHTML = ` 
                <img src="images/${element.image}">
                <h4>${element.name}</h4>
                <div class="rating">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                </div>
                <p>$ <span class="prix" ">${element.price}</span> </p>
                <button class="btn-addt-carte" id="${element.id}" onclick="AddToCarte(this)">Add to cart</button>

           `
    boxOfProduct.append(divProduct)
});

// part of filter use selecter by type
let Allproduct = document.querySelectorAll(".product");
let categorySelect = document.getElementById("category-select");
categorySelect.addEventListener("change", () => {

    Allproduct.forEach((ele) => {
        ele.style.display = "block";
        (document.getElementById("range").value) = 100;
        outpotRange.textContent = range.value + "$";
        if (!ele.classList.contains(`${categorySelect.value}`)) {

            ele.style.display = "none";
        }
        if (categorySelect.value == "Default") {
            ele.style.display = "block";
        }
    })
})

//   type of selector use price
let priceValue = document.getElementById("range");
priceValue.onchange = () => {
    let prices = document.querySelectorAll(".prix")
    prices.forEach((ele, index) => {

        // el.style.backgroundColor = "yellow";
        if ((+ele.textContent) > (+priceValue.value)) {
            Allproduct[index].style.display = "none";

        }
        else (Allproduct[index].style.display = "block")
    })
}

// add to carte

let btns = document.querySelectorAll(".btn-addt-carte") ;

function AddToCarte(btn){
    localStorage.setItem(`neme_p_${btn.id -1}` , products[btn.id -1].name);
    localStorage.setItem(`price_p_${btn.id -1}` , products[btn.id -1].price);
    localStorage.setItem(`img_p_${btn.id -1}` , products[btn.id -1].image);
}

