let bodyOfTable = document.querySelector(".bodyOfTable");

// Function to create table rows from local storage
function CreatElementFromLocalStorage() {
    // Get the cart array from local storage, or initialize an empty array if none exists
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Loop through each product in the cart and create a table row
    cart.forEach((product, index) => {
        let newTr = document.createElement("tr");
        newTr.id = `${product.id}`;
        newTr.className = "tr";
        newTr.innerHTML = `
            <td>
                <div class="cart-info">
                    <img src="images/${product.image}" alt="${product.name}">
                    <div>
                        <p>${product.name}</p>
                        <small>price: $<span class="lastPrice">${product.price}</span></small><br>
                        <a id="${product.id}" class="btnOfRemove">Remove</a>
                    </div>
                </div>
            </td>
            <td><input type="number" class="inputNumbreOfPr" value="${product.quantity}" min="1"></td>
            <td>$<span class="spanOfprice">${(product.price * product.quantity).toFixed(2)}</span></td>
        `;
        bodyOfTable.append(newTr);
    });
    
    // Add event listeners after elements are created
    addEventListeners();
}

// Function to calculate and update total prices
function TotalOfAllPr() {
    let Totale = document.querySelector(".Totale");
    let Tva = document.querySelector(".Tva");
    let totaleWithTva = document.querySelector(".totaleWithTva");
    let total = 0;

    document.querySelectorAll(".spanOfprice").forEach((ele) => {
        total += parseFloat(ele.textContent) || 0;
    });

    Totale.textContent = total.toFixed(2);
    Tva.textContent = (total * 0.20).toFixed(2);
    totaleWithTva.textContent = (total * 1.20).toFixed(2);
}

// Function to handle events after dynamically creating elements
function addEventListeners() {
    let inputNumbreOfPr = document.querySelectorAll(".inputNumbreOfPr");
    let spanOfprice = document.querySelectorAll(".spanOfprice");
    let lastPrice = document.querySelectorAll(".lastPrice");

    // Update product quantity and total price when input changes
    inputNumbreOfPr.forEach((ele, index) => {
        ele.addEventListener("change", () => {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let product = cart.find(item => item.id == ele.closest("tr").id);

            if (product) {
                product.quantity = parseInt(ele.value);
                localStorage.setItem("cart", JSON.stringify(cart));

                spanOfprice[index].textContent = (product.price * product.quantity).toFixed(2);
                TotalOfAllPr();
            }
        });
    });

    // Remove product when "Remove" button is clicked
    document.querySelectorAll(".btnOfRemove").forEach(ele => {
        ele.addEventListener("click", () => {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let updatedCart = cart.filter(product => product.id != ele.id);

            localStorage.setItem("cart", JSON.stringify(updatedCart));
            localStorage.setItem("numberOfProduct", updatedCart.length);

            document.getElementById(ele.id).remove();
            TotalOfAllPr();
        });
    });
}

// Initial render
CreatElementFromLocalStorage();
TotalOfAllPr();
