let i = 0,
    slides = ['images/home/slide4.jpg', 'images/home/slide8.jpg', 'images/home/slide3.jpg', 'images/home/slide7.jpg', 'images/home/slide6.png', 'images/home/slide9.jpg', 'images/home/slide10.jpg'];
function changeSlide() {
    document.getElementsByClassName('slide')[0].src = slides[i];
    if (i < slides.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    setTimeout('changeSlide()', 1700)
}
window.onload = changeSlide;
document.getElementById('searchInput').onkeyup = () => {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let products = document.getElementsByClassName('text');
    for (let i = 0; i < products.length; i++) {
        if (products[i].innerHTML.toLowerCase().indexOf(input) != -1) {
            products[i].parentNode.style.width = '';
            products[i].parentNode.parentNode.style.display = '';
        }
        else {
            products[i].parentNode.style.width = '0';
            products[i].parentNode.parentNode.style.display = 'none';

        }
    }
}