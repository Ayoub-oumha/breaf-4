// function of creat elemnt from local storage
function CreatElementFromLocalStorage() {
    let bodyOfTable = document.querySelector(".bodyOfTable");
    bodyOfTable.textContent = "";

    // Loop through localStorage keys to find all products
    Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("name_p_")) {
            // Extract product index from the key
            const index = key.split("_")[2];
            const name = localStorage.getItem(`name_p_${index}`);
            const price = localStorage.getItem(`price_p_${index}`);
            const img = localStorage.getItem(`img_p_${index}`);

            // Create a new row only if the product data exists
            if (name && price && img) {
                let newTr = document.createElement("tr");
                newTr.innerHTML = `
                    <td>
                        <div class="cart-info">
                            <img src="images/${img}" alt="">
                            <div>
                                <p>${name}</p>
                                <small>price: $<span class="lastPrice">${price}</span></small><br>
                                <a id="${index}" class="btnOfRemove">Remove</a>
                            </div>
                        </div>
                    </td>
                    <td><input type="number" class="inputNumbreOfPr" value="1" min="1"></td>
                    <td>$<span class="spanOfprice">${price}</span></td>
                `;
                bodyOfTable.append(newTr);
            }
        }
    });

    
}


// Initial render
CreatElementFromLocalStorage();

let inputNumbreOfPr = document.querySelectorAll(".inputNumbreOfPr");
let spanOfprice = document.querySelectorAll(".spanOfprice");
let lastPrice = document.querySelectorAll(".lastPrice");
// result of total of prices
function TotalOfAllPr() {
    let Totale = document.getElementsByClassName("Totale")[0];
    let Tva = document.getElementsByClassName("Tva")[0];
    let totaleWithTva = document.getElementsByClassName("totaleWithTva")[0];
    let total = 0;
    spanOfprice.forEach((ele) => {
        total = total + parseFloat(ele.textContent) || 0;  // Use 0 if the content is not a number
        console.log(parseFloat(ele.textContent))
    })
    Totale.textContent = total.toFixed(2);
    Tva.textContent = (total * 0.20).toFixed(2);
    let totTva = (total * 0.20).toFixed(2);
    totaleWithTva.textContent = (parseFloat(totTva) + total).toFixed(2)

}
TotalOfAllPr()  


// change in input of number of product
inputNumbreOfPr.forEach((ele, index) => {
    ele.addEventListener('change', () => {
        let prx = ele.value * parseFloat(lastPrice[index].textContent)
        spanOfprice[index].textContent = prx.toFixed(2);
        TotalOfAllPr();

    })

})

let btnOfRemove = document.querySelectorAll(".btnOfRemove");

btnOfRemove.forEach((ele) => {
    ele.addEventListener('click', () => {
        // Remove product data from localStorage
        localStorage.removeItem(`name_p_${ele.id}`);
        localStorage.removeItem(`price_p_${ele.id}`);
        localStorage.removeItem(`img_p_${ele.id}`);
        
        // Get the current product count and decrease it if it's greater than 1
        let numberOfProduct = parseInt(localStorage.getItem("numberOfProduct")) || 0;
        if (numberOfProduct > 1) {
            localStorage.setItem("numberOfProduct", numberOfProduct - 1);
        } else {
            localStorage.removeItem("numberOfProduct");
        }

        // Clear and re-render table contents
        CreatElementFromLocalStorage();
        TotalOfAllPr()  ;
    });
});
