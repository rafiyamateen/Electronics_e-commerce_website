let basket=document.getElementsByTagName('ion-icon'),
spanBasket=document.getElementById('hover');
basket[0].onmouseover=function(){
    spanBasket.style.display='block';
}
basket[0].onmouseout=function(){
    spanBasket.style.display='none';
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
    for (let i = 0; i < nav.length; i++) {
        if (event.target == nav[i]) {
            openNavBar();
            document.getElementsByClassName('logoutConfirm')[0].style.display = '';
            break;
        }
        else if (event.target == document.getElementsByClassName('logout')[0]) {
            closeNavBar();
            document.getElementsByClassName('logoutConfirm')[0].style.display = 'block';
            break;
        }
        else if (event.target != logoutCnfrm[0] && event.target != logoutCnfrm[0].children[0] && event.target != logoutCnfrm[0].children[2]) {
            closeNavBar();
            document.getElementsByClassName('logoutConfirm')[0].style.display = '';
            break;
        }
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
if (logIn) {
    document.getElementsByClassName('userAccount')[0].style.display = 'block';
    document.getElementsByClassName('userAccount')[0].innerText = logIn.username + "'s Account";
    document.getElementsByClassName('openLogin')[0].style.display = 'none';
    document.getElementsByClassName('openSignup')[0].style.display = 'none';
    document.getElementsByClassName('logout')[0].style.display = 'block';
    document.getElementsByTagName('ion-icon')[0].onclick = () => {
        window.location.assign('../cart.html');
    }
}
else {
    document.getElementsByTagName('ion-icon')[0].onclick = () => {
        window.location.assign('../login.html');
    }
}
document.getElementsByClassName('ok')[0].onclick = () => {
    localStorage.removeItem('products');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('totalQuantity');
    window.location.reload();
}