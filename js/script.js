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
                <img id="${element.id}" class="imgs" src="images/${element.image}">
                <h4>${element.name}</h4>
                <div class="rating">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                </div>
                <p>$ <span class="prix" ">${element.price}</span> </p>
                <button class="btn-addt-carte " id="${element.id}" onclick="AddToCarte(this)">Add to cart</button>

           `
    boxOfProduct.append(divProduct)
});

let Allproduct = document.querySelectorAll(".product");
let categorySelect = document.getElementById("category-select");
let priceValue = document.getElementById("range");


// Function to filter products based on category and price
function filterProducts() {
    let selectedCategory = categorySelect.value;
    let maxPrice = +priceValue.value;

    Allproduct.forEach((product, index) => {
        let productPrice = +product.querySelector(".prix").textContent; // Assuming .prix holds the price value for each product
        let matchesCategory = selectedCategory === "Default" || product.classList.contains(selectedCategory);
        let matchesPrice = productPrice <= maxPrice;

        // Display product only if it matches both category and price criteria
        product.style.display = matchesCategory && matchesPrice ? "block" : "none";
    });

    // Update the output range text
    outpotRange.textContent = maxPrice + "$";
}

// Attach event listeners
categorySelect.addEventListener("change", filterProducts);
priceValue.addEventListener("change", filterProducts);

// Initial display
filterProducts();










// Get the existing number of products or initialize it to 0 if none
let numberOfProduct = localStorage.getItem("numberOfProduct") 
                      ? parseInt(localStorage.getItem("numberOfProduct")) 
                      : 0;

function AddToCarte(btn) {
    // Fetch the product ID and related product details
    const productId = btn.id - 1;
    const product = products[productId];

    // Retrieve the current cart from local storage, or initialize an empty array if none exists
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in the cart
    let existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        // If product exists, increase the quantity
        existingProduct.quantity++;
    } else {
        // Add a new product with quantity 1
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
        // Increment the product count
        numberOfProduct++;
    }

    // Update local storage with the new cart and product count
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem("numberOfProduct", numberOfProduct);
}

// Set up click event for "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => AddToCarte(btn));
});

// View details on image click
let imgs = document.querySelectorAll(".imgs");
imgs.forEach(ele => {
    ele.addEventListener('click', () => {
        localStorage.setItem("id-img-detail", `${ele.id}`);
        window.open("/product-detail.html");
    });
});
