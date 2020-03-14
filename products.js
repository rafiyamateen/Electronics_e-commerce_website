let addNow = document.getElementsByClassName('addNow'),
    loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
toBuy= document.getElementsByClassName("product");
for(let i=0;i<toBuy.length;i++){
    toBuy[i].onmouseover=()=>{
addNow[i].style.display='block';
    }
    toBuy[i].onmouseout=()=>{
        addNow[i].style.display='none';
            }
}
function add(i) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let prodItems = {
        image: document.getElementsByClassName('itemImage')[i].src,
        name: document.getElementsByClassName('name')[i].innerText,
        price: document.getElementsByClassName('itemPrice')[i].innerText,
        quantity: 1
    }
    for (let i = 0; i < products.length; i++) {
        if (prodItems.image == products[i].image) {
            prodItems.quantity = Number(prodItems.quantity);
            prodItems.quantity += Number(products[i].quantity);
            products.splice(i, 1)
            break;
        }
    }
    products.push(prodItems)
    let totalQuantity = 0;
    for (let i = 0; i < products.length; i++) {
        totalQuantity += Number(products[i].quantity);
    }
    localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity));
    localStorage.setItem('products', JSON.stringify(products));
    document.getElementsByClassName('cartNum')[0].innerText = totalQuantity;
}
if (loggedIn) {
    for (let i = 0; i < addNow.length; i++) {
        addNow[i].onclick = () => {
            add(i);
        }
    }
}
else {
    for (let i = 0; i < addNow.length; i++) {
        addNow[i].onclick = () => {
            window.location.assign('../login.html');
        }
    }
}