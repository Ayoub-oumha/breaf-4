let Bigimg = document.getElementById("Bigimg") ;
function galleryImg(photo){
    Bigimg.src = photo.src ;
}

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


function changeinof(){
    let bigImg =  document.getElementById("Bigimg") ;
    let shortImgs = document.querySelectorAll(".shortImg");
    let titleOfimg = document.getElementById("titleOfimg")
    let idOfImage = parseInt(localStorage.getItem("id-img-detail"))  ;
    products.forEach((ele , index)=>{
        
        
        if(ele.id === idOfImage ){
            console.log(ele.id),
            console.log(index)
            bigImg.src = "images/" +  products[index].image;

            titleOfimg.innerHTML =  products[index].name ;


        }
       
    })
    
}
changeinof()
