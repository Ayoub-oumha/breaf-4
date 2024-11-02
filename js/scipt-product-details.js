let Bigimg = document.getElementById("Bigimg") ;
function galleryImg(photo){
    Bigimg.src = photo.src ;
}

const products = [
    { id: 1, name: "T-shirt en coton", price: 19.99, description: "T-shirt confortable en coton bio.", image: "product-1.jpg",  category: "T-shirt" , img1 : "gallery-1.jpg" , img2 : "gallery-2.jpg", img3 : "gallery-3.jpg", img4 : "gallery-4.jpg"  },
    { id: 2, name: "Jean slim", price: 49.99, description: "Jean slim fit en denim stretch.", image: "product-2.jpg", category: "Pants" , img1 : "gallery-1.jpg" , img2 : "gallery-2.jpg", img3 : "gallery-3.jpg", img4 : "gallery-4.jpg"  },
    { id: 3, name: "Sweat à capuche", price: 35.99, description: "Sweat à capuche doux et confortable.", image: "product-3.jpg", category: "T-shirt" , img1 : "gallery-1.jpg" , img2 : "gallery-2.jpg", img3 : "gallery-3.jpg", img4 : "gallery-4.jpg"  },
    { id: 4, name: "Robe d'été", price: 29.99, description: "Robe légère parfaite pour l'été.", image: "product-4.jpg", category: "T-shirt" , img1 : "gallery-1.jpg" , img2 : "gallery-2.jpg", img3 : "gallery-3.jpg", img4 : "gallery-4.jpg"  },
    { id: 5, name: "Casquette", price: 15.99, description: "Casquette de style décontracté pour l'été.", image: "product-5.jpg", category: "Accessoire" , img1 : "gallery-1.jpg" , img2 : "gallery-2.jpg", img3 : "gallery-3.jpg", img4 : "gallery-4.jpg"  },
    { id: 6, name: "Sneakers blanches", price: 79.99, description: "Sneakers blanches confortables et élégantes.", image: "product-6.jpg", category: "Shoes" , img1 : "gallery-1.jpg" , img2 : "gallery-2.jpg", img3 : "gallery-3.jpg", img4 : "gallery-4.jpg"  },
    { id: 7, name: "Pantalon de sport", price: 29.99, description: "Pantalon de sport léger et respirant.", image: "product-7.jpg", category: "Pants" , img1 : "gallery-1.jpg" , img2 : "gallery-2.jpg", img3 : "gallery-3.jpg", img4 : "gallery-4.jpg"  },
    { id: 8, name: "Chaussettes en coton", price: 5.99, description: "Chaussettes douces en coton bio.", image: "product-8.jpg", category: "Socks" , img1 : "gallery-1.jpg" , img2 : "gallery-2.jpg", img3 : "gallery-3.jpg", img4 : "gallery-4.jpg"  },
    { id: 9, name: "Lunettes de soleil", price: 19.99, description: "Lunettes de soleil polarisées.", image: "product-9.jpg", category: "Accessoire" , img1 : "gallery-1.jpg" , img2 : "gallery-2.jpg", img3 : "gallery-3.jpg", img4 : "gallery-4.jpg"  },
    { id: 10, name: "Sandales d'été", price: 25.99, description: "Sandales légères pour l'été.", image: "product-10.jpg", category: "Shoes" , img1 : "gallery-1.jpg" , img2 : "gallery-2.jpg", img3 : "gallery-3.jpg", img4 : "gallery-4.jpg"  },
    { id: 11, name: "Bonnet en laine", price: 12.99, description: "Bonnet chaud en laine mérinos.", image: "product-11.jpg", category: "Accessoire" , img1 : "gallery-1.jpg" , img2 : "gallery-2.jpg", img3 : "gallery-3.jpg", img4 : "gallery-4.jpg"  },
    { id: 12, name: "Pyjama en coton", price: 22.99, description: "Pyjama doux et confortable en coton.", image: "product-12.jpg", category: "T-shirt" , img1 : "gallery-1.jpg" , img2 : "gallery-2.jpg", img3 : "gallery-3.jpg", img4 : "gallery-4.jpg"  }
]


function changeinof(){
    let bigImg =  document.getElementById("Bigimg") ;
    let shortImgs = document.querySelectorAll(".shortImg");
    let titleOfimg = document.getElementById("titleOfimg")
    let idOfImage = parseInt(localStorage.getItem("id-img-detail"))  ;
    let desciptionOfimg =  document.getElementById("desciptionOfimg")
    let priceOfimg =  document.getElementById("priceOfimg")
    products.forEach((ele , index)=>{
        
        
        if(ele.id === idOfImage ){
            
            bigImg.src = "images/" +  products[index].image;
            shortImgs[0].src =   "images/" +  products[index].img1;
            shortImgs[1].src =   "images/" +  products[index].img2;
            shortImgs[2].src =   "images/" +  products[index].img3;
            shortImgs[3].src =   "images/" +  products[index].img4;
            titleOfimg.innerHTML =  products[index].name ;
            priceOfimg.innerHTML =  products[index].price ;
            desciptionOfimg.innerHTML =  products[index].description;
        }
       
    })
    
}
changeinof()



// add to cart btn 
function addToCart(){
let btnAddtoCart = document.getElementById("btnAddtoCart");
let numberOfprodu = document.getElementById("numberofpro");
let bigImg =  document.getElementById("Bigimg") ;
let titleOfimg = document.getElementById("titleOfimg")
let priceOfimg =  document.getElementById("priceOfimg")
let idOfImage = parseInt(localStorage.getItem("id-img-detail"))  ;
btnAddtoCart.addEventListener('click', ()=>{
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
        let findProductFromLocalstorage = cart.find(ele => ele.id == parseInt(idOfImage)  ) ;
        if(findProductFromLocalstorage){
            findProductFromLocalstorage.quantity +=  parseInt( numberOfprodu.value )  ;
        }
        else {
            // Add a new product with quantity 1
        cart.push({
            id: parseInt(idOfImage),
            name: titleOfimg.textContent,
            price: parseFloat(priceOfimg.textContent) ,
            image: products[parseInt(idOfImage)].image,
            quantity: parseInt( numberOfprodu.value ) 
        });
        }
  
    
    console.log(cart)
    localStorage.setItem("cart", JSON.stringify(cart) )
    changeInfoOfheader();

})

}
addToCart()



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