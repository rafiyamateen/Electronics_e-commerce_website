let basket = document.getElementsByTagName('ion-icon'),
    spanBasket = document.getElementById('hover');
basket[0].onmouseover = function () {
    spanBasket.style.display = 'block';
}
basket[0].onmouseout = function () {
    spanBasket.style.display = 'none';
}
function openNavBar() {
    document.getElementsByTagName('nav')[0].style.width = '220px';
}
function closeNavBar() {
    document.getElementsByTagName('nav')[0].style.width = '0';
    document.getElementsByTagName('nav')[0].style.marginLeft = '-7px';
}
window.onclick = function () {
    let nav = document.getElementsByClassName('navbar'),
        logoutCnfrm = document.getElementsByClassName('logoutConfirm');
    if (event.target == nav[0] || event.target == document.getElementsByClassName('fas')[0]) {
        openNavBar();
        document.getElementsByClassName('logoutConfirm')[0].style.display = '';
    }
    else if (event.target == document.getElementsByClassName('logout')[0]) {
        closeNavBar();
        document.getElementsByClassName('logoutConfirm')[0].style.display = 'block';
    }
    else if (event.target != logoutCnfrm[0] && event.target != logoutCnfrm[0].children[0] && event.target != logoutCnfrm[0].children[2]) {
        closeNavBar();
        document.getElementsByClassName('logoutConfirm')[0].style.display = '';
    }
}
let totalQuantity = JSON.parse(localStorage.getItem('totalQuantity'));
if (totalQuantity) {
    document.getElementsByClassName('cartNum')[0].innerText = totalQuantity;
}
else {
    document.getElementsByClassName('cartNum')[0].innerText = 0;
}
function openForm(href) {
    window.location.href = href;
}
let logIn = JSON.parse(localStorage.getItem('loggedIn'));
let slash = location.href.lastIndexOf('/');
if (logIn) {
    document.getElementsByClassName('userAccount')[0].style.display = 'block';
    document.getElementsByClassName('userAccount')[0].innerText = logIn.username + "'s Account";
    document.getElementsByClassName('openLogin')[0].style.display = 'none';
    document.getElementsByClassName('openSignup')[0].style.display = 'none';
    document.getElementsByClassName('logout')[0].style.display = 'block';
    document.getElementsByTagName('ion-icon')[0].onclick = () => {
        if (location.href.slice(slash) == '/index.html' || location.href.slice(slash) == '/cart.html') {
            location.href = location.href.slice(0, slash) + '/cart.html';
        }
        else {
            window.location.assign('../cart.html');
        }
    }
}
else {
    document.getElementsByTagName('ion-icon')[0].onclick = () => {
        if (location.href.slice(slash) == '/index.html' || location.href.slice(slash) == '/cart.html' || location.href.slice(slash) == '/signUp.html' || location.href.slice(slash) == '/login.html') {
            location.href = location.href.slice(0, slash) + '/login.html';
        }
        else {
            window.location.assign('../login.html');
        }
    }
}
document.getElementsByClassName('ok')[0].onclick = () => {
    localStorage.removeItem('products');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('totalQuantity');
    window.location.reload();
}
