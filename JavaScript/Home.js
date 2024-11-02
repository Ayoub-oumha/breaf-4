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
    let existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        // If product exists, increase the quantity
        existingProduct.quantity++;
    } else {
        // Add a new product with quantity 1
        cart.push({
            id: +btn.id,
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
    changeInfoOfheader() ;
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
        window.open("./product-detail.html" ,"_parent");
    });
});



// headerr
function changeInfoOfheader(){
    let priceHeader = document.getElementById("price-header");
    let numberOfproductadded = document.getElementById("numberOfproductadded")
    let products = JSON.parse(localStorage.getItem("cart")) || [];
    let totalePrice = 0 ;
    let totaleProduct = 0 ;
    
    products.forEach(pr =>{
        totalePrice +=  pr.price * pr.quantity
        
        
    })
    
    priceHeader.textContent = totalePrice.toFixed(2)
    numberOfproductadded.textContent = products.length
    

}
changeInfoOfheader();
