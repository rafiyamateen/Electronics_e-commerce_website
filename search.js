document.getElementById('searchInput').onkeyup=()=>{
    let input = document.getElementById('searchInput').value.toLowerCase();
    let products = document.getElementsByClassName('text');
let addNow = document.getElementsByClassName('addNow'),
toBuy= document.getElementsByClassName("product");
for (let i = 0; i < products.length; i++) {
        if (products[i].innerHTML.toLowerCase().indexOf(input) != -1) {
            products[i].parentNode.parentNode.style.display = '';
            products[i].parentNode.parentNode.parentNode.style.width = '';
            products[i].parentNode.parentNode.parentNode.style.height = '';
            products[i].parentNode.parentNode.parentNode.style.margin = '';
        }
        else {
            products[i].parentNode.parentNode.style.display = 'none';
            products[i].parentNode.parentNode.parentNode.style.width = '0';
            products[i].parentNode.parentNode.parentNode.style.height = '0';
            products[i].parentNode.parentNode.parentNode.style.margin = '0';
                toBuy[i].onmouseover=()=>{
                    addNow[i].style.display='none';
                        }
        }
    }
}