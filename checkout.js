let listcarts = [];
// get data cart from cookie

function checkCart(){
    var cookieValue = document.cookie
    .split(';')
    .find(row => row.startsWith('list'));
    if(cookieValue){
        listcarts = JSON.parse(cookieValue.split('=')[1]);
    }
}
checkCart();
addCartToHTML();
function addCartToHTML(){
    // clear data from html
    let listcartsHTML = document.querySelector('.returnCart .list');
    listcartsHTML.innerHTML = '';
    let totalQuantityHTML = document.querySelector('totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');


    let totalQuantity = '';
    let totalPrice = '';

    // if has product in cart
    if(listcarts){
        listcarts.forEach(products  => {
            if(products){
                let newP = document.createElement('div');
                newP.classList.add('item');
                newP.innerHTML = 
                ` <img src="${products.image}" alt="">
                    <div class="info">
                        <div class="name">${products.name}</div>
                        <div class="price">&#x20A6;${products.price}/1product</div>
                    </div>
                    <div class="quantity">${products.quantity}</div>
                    <div class="returnPrice">&#x20A6;${products.price * products.quantity}</div>`;
                    listcartsHTML.appendChild(newP);
                    totalQuantity = totalQuantity + products.quantity;
                    totalPrice = totalPrice + (products.price * products.quantity);}
        })
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = '&#x20A6;' + totalPrice;
}