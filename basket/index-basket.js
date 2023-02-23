var nameOrder = [], priceProduct = [], src = [];
var iBasket1 = 0;

iBasket1 = localStorage.getItem('iBasket');

nameOrder = localStorage.getItem('nameOrder').split(',');
priceProduct = localStorage.getItem('priceProduct').split(',');
src = localStorage.getItem('src').split(',');

document.getElementById("de").innerHTML = nameOrder;

for (let a = 0; a < iBasket1; a++) {
    var img;
    img = document.createElement('img');
    img.src = '../' + src[a];
    img.className = 'fotoMini';
    de.append(img);
    var nameProduct;
    nameProduct = document.createElement('div');
    nameProduct.innerHTML = nameOrder[a];
    de.append(nameProduct);
};
// setTimeout(localStorage.clear(), 1000);


