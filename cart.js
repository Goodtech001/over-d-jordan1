let iconCart = document.querySelector(".icon");
let closeBtn = document.querySelector(".cardTab .close");
let body = document.querySelector("body");

iconCart.addEventListener("click", () => {
  body.classList.toggle("activeTabCart");
});
closeBtn.addEventListener("click", () => {
  body.classList.toggle("activeTabCart");
});

let productn = null;
// get data from file json
fetch('products.json')
.then(response => response.json())
.then(data => {
  productn = data;
  addDataToHTML();
}) 
//  show data in list html
function addDataToHTML(){
  // remove data default in html
  let flexHTML = document.querySelector('.flex');
   flexHTML.innerHTML = '' ;

  // add new datas
  if(productn != null){
    productn.forEach(products => {
      let newProducts = document.createElement('div');
      newProducts.classList.add('product');
      newProducts.innerHTML =
      `<img src="${products.image}">
      <h3>${products.name}</h3>
       <p >&#x20A6; ${products.price}</p>
       <div class="add"><button onclick="addCart(${products.id})">Add To Cart</button></div>`;
       flexHTML.appendChild(newProducts);
    });
  }
}
let listcarts = [];
//  and i get cookie data cart
function checkCart(){
  var cookieValue = document.cookie
  .split(';')
  .find(row => ResizeObserver.startsWith('listcarts='));
  if(cookieValue){
    listcarts = JSON.parse(cookieValue.split('=')[1]);
  }
}
checkCart();
function addCart($idproducts){
  let productsCopy = JSON.parse(JSON.stringify(productn));
  // if this product is not in the cart
  if(!listcarts[$idproducts]){
    let dataproducts = productsCopy.filter(
      products => products.id == $idproducts
    )[0];
    // add data product in cart
    listcarts[$idproducts] = dataproducts;
    listcarts[$idproducts].quantity = 1;
  }else{
    // if this product is already in the cart
    // i just increased the quantity
    listcarts[$idproducts].quantity++;
  }
  // i will save datas cart in cookie
  // to  save this datas cart when i turn of the computer
  let timeSave = "expires=Thu, 31 Dec 2025 23:59:59 UTC";
  document.cookie = "listcarts="+JSON.stringify(listcarts)+"; "+timeSave+"; path=/;";
  addCartToHTML();
}
addCartToHTML();
function addCartToHTML(){
  // clear data default;
  let listcartsHTML = document.querySelector('.listcarts');
  listcartsHTML.innerHTML = '';


  let totaHTML = document.querySelector('.totalQuantity');
  let totalQuantity = 0;

  if(listcarts){
    listcarts.forEach(products => {
      if(products){
        let newCart = document.createElement('div');
        newCart.classList.add('items');
        newCart.innerHTML = 
         `<img src="${products.image}">
                            <div class="content">
                                <div class="name">${products.name}</div>
                                <div class="price">&#x20A6;${products.price}</div>
                
                            </div>

                            <div class="quantity">
                                <button onclick="changeQuantity(${products.id}, '-')">-</button>
                                <span class="value">${products.quantity}</span>
                                <button onclick="changeQuantity(${products.id}, '+')">+</button>
                            </div>`;
          listcartsHTML.appendChild(newCart);
          totalQuantity = totalQuantity + products.quantity;
      }
    })
  }

  totaHTML.innerText = totalQuantity;
}
function changeQuantity($idproducts, $type){
  switch ($type) {
    case '+':
      listcarts[$idproducts].quantity++;
      break;
      case '-':
      listcarts[$idproducts].quantity--;
      if(listcarts[$idproducts].quantity <= 0){
        delete listcarts[$idproducts];
      }
      break;

    default:
      break;
  }
  //  saave new data in cookie
  let timeSave = "expires=Thu, 31 Dec 2025 23:59:59 UTC";
  document.cookie = "listcarts="+JSON.stringify(listcarts)+"; "+timeSave+"; path=/;";

  // reload the cart in html
  addCartToHTML();
}
