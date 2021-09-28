addToCartBtn = document.getElementsByClassName('addToCartBtn1');
cartContainer = document.getElementsByClassName('cartContainer')[0];


for (var i = 0; i < addToCartBtn.length; i++) {
    console.log("done");
    addToCartBtn[i].addEventListener('click', updateCartContainer)
}

function updateCartContainer(e) {
    addToCartBtn = e.target;
    productContainer = addToCartBtn.parentElement;
    productTitle = document.getElementById("prodtitle").innerText;
    productPrice = document.getElementById("prodprice").innerText;
    

    cartTitles = cartContainer.getElementsByClassName('cartTitle');
    for (var i = 0; i < cartTitles.length; i++) {
        if (cartTitles[i].innerText == productTitle) {
            alert('Product already to cart');
            return;
        }
    }


    AddRowInCart(productTitle, productPrice);





}

// add new row in cart
function AddRowInCart(productTitle, productPrice) {


    div = document.createElement('div');
    div.classList.add('row');
    insideDiv = `<br><br><div style="float: left;position: relative; left: 22%;" cartTitle"> ${productTitle} </div>
    <div style="float: left;position: relative; left: 45%; cartQuantity">1</div>
<div style="float: left;position: relative; left: 68%; cartPrice"> ${productPrice}</div>
 `;
    div.innerHTML = insideDiv
    cartContainer.appendChild(div);
    totalPrice = 0;
    cartPrice = cartContainer.getElementsByClassName('cartPrice');
    for (var i = 0; i < cartPrice.length; i++) {
        priceFormatedNumb = cartPrice[i].innerText.replace('₹', '').replace(',', '');
        totalPrice = totalPrice + parseInt((priceFormatedNumb));
    }
    //document.getElementsByClassName('cartTotalPrice')[0].innerText = new Number(totalPrice).toLocaleString('en');;



    removeButton = document.getElementsByClassName('removeButton');
    for (var i = 0; i < removeButton.length; i++) {
        removeButton[i].addEventListener('click', removeFromCart)
    }
}



// remove product from Cart

function removeFromCart(e) {
    e.target.parentElement.remove();
    updatePriceAfterRemove();
}


