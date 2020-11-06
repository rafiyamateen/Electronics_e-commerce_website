function updateCart() {
    var products = JSON.parse(localStorage.getItem('products'));
    if (products) {
        document.getElementsByTagName('tbody')[0].innerHTML = '';
        for (let i = 0; i < products.length; i++) {
            let image = products[i].image,
                name = products[i].name,
                price = products[i].price,
                quantity = products[i].quantity;
            document.getElementsByTagName('tbody')[0].innerHTML += '<tr id="cartRow"><td><span class="delCart" onclick="delCart()">&times;</span></td><td><image id="image" height="100" width="100" src="' +
                image + '"></td><td>' + name + '</td><td>' + 'Rs.' + price + '</td><td><button class="minusQuantity">-</button><input type = "text" value = "'
                + quantity + '" class="quantity" onchange="calcAmount();"><button class="plusQuantity">+</button></td></tr>';
        }
        calcAmount();
        quantityChange();
    }
    else {
        document.getElementsByClassName('empty')[0].style.display = '';
    }
}
function delCart() {
    let products = JSON.parse(localStorage.getItem('products')),
        image = event.target.parentNode.nextSibling.getElementsByTagName('img')[0];
    for (let i = 0; i < products.length; i++) {
        if (products[i].image == image.src) {
            products.splice(i, 1);
            let totalQuantity = 0;
            for (let i = 0; i < products.length; i++) {
                totalQuantity += Number(products[i].quantity);
            }
            localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity));
            if (products == '') {
                localStorage.removeItem('products');
                document.getElementById('cartTable').outerHTML = '';
                document.getElementsByClassName('empty')[0].style.display = '';
            }
            else {
                localStorage.setItem('products', JSON.stringify(products));
            }
            break;
        }
    }
    updateCart();
}
function calcAmount() {
    let product = JSON.parse(localStorage.getItem('products'));
    let subtotal = 0;
    let quantities = document.getElementById('cartTable').getElementsByTagName('input');
    for (let i = 0; i < product.length; i++) {
        if (quantities[i].value <= 0) {
            quantities[i].value = 1;
        }
        product[i].quantity = quantities[i].value;
        let calcPrice = product[i].price.replace(/,/g, '');
        subtotal += Number(calcPrice * product[i].quantity);
    }
    let totalQuantity = 0;
    for (let i = 0; i < product.length; i++) {
        totalQuantity += Number(product[i].quantity);
    }
    localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity));
    document.getElementsByClassName('cartNum')[0].innerText = totalQuantity;
    let shipping = 999,
        cartTotal = subtotal + shipping;
    document.getElementById('subtotal').innerText = `Rs.${subtotal}`;
    document.getElementById('cartTotal').innerText = `Rs.${cartTotal}`;console.log(shipping);
    document.getElementById('shipping').innerText = `Rs.${shipping}`;
    document.getElementsByTagName('thead')[0].style.visibility = 'visible';
    document.getElementsByTagName('tfoot')[0].style.visibility = 'visible';
    localStorage.setItem('products', JSON.stringify(product));
}
function quantityChange() {
    itemQuan = document.getElementsByClassName('quantity');
    for (let i = 0; i < itemQuan.length; i++) {
        document.getElementsByClassName('minusQuantity')[i].onclick = function () {
            itemQuan[i].value--;
            if (itemQuan[i].value <= 0) {
                itemQuan[i].value = 1;
            }
            calcAmount();
        };
        document.getElementsByClassName('plusQuantity')[i].onclick = function () {
            itemQuan[i].value++;
            calcAmount();
        }
    }
}
updateCart();
