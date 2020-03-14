let itemQuan = document.getElementById('itemQuantity');
document.getElementById('minusQuantity').onclick = function () {
    itemQuan.value--;
    if (itemQuan.value <= 0) {
        itemQuan.value = 1;
    }
};
document.getElementById('plusQuantity').onclick = function () { itemQuan.value++ };
itemQuan.onchange = function () {
    if (itemQuan.value <= 0) {
        itemQuan.value = 1;
    }
}
let slideNum = 1;
slideshow(slideNum);
function runSlides(index) {
    slideshow(slideNum += index)
}
function current(index) {
    slideshow(slideNum = index)
}
function slideshow(index) {
    let slides = document.getElementsByClassName('slides'),
        images = document.getElementsByClassName('slideImg');
    if (index > slides.length) {
        slideNum = 1;
    }
    if (index < 1) {
        slideNum = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < images.length; i++) {
        images[i].className = images[i].className.replace(' current', '');
    }
    slides[slideNum - 1].style.display = 'block';
    images[slideNum - 1].className += ' current';
}
function add() {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let prodItems = {
        image: document.getElementById('itemImage').src,
        name: document.getElementById('name').innerText,
        price: document.getElementById('itemPrice').innerText,
        quantity: document.getElementById('itemQuantity').value
    }
    for (let i = 0; i < products.length; i++) {
        if (prodItems.image == products[i].image) {
            prodItems.quantity = Number(prodItems.quantity);
            prodItems.quantity += Number(products[i].quantity);
            products.splice(i, 1);
            break;
        }
    }
    products.push(prodItems);
    let totalQuantity = 0;
    for (let i = 0; i < products.length; i++) {
        totalQuantity += Number(products[i].quantity);
    }
    localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity));
    localStorage.setItem('products', JSON.stringify(products));
    document.getElementsByClassName('cartNum')[0].innerText = totalQuantity;
}
let loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
if (loggedIn) {
    document.getElementsByClassName('addToCartBtn')[0].onclick = () => {
        add();
    }
    document.getElementsByClassName('checkOut')[0].onclick = () => {
        window.location.assign('../cart.html');
    }
}
else {
    document.getElementsByClassName('addToCartBtn')[0].onclick = () => {
        window.location.assign('../login.html');
    }
    document.getElementsByClassName('checkOut')[0].onclick = () => {
        window.location.assign('../login.html');
    }
}