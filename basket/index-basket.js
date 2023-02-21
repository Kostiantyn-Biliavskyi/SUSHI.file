var nameOrder = localStorage.getItem('nameOrder');
var priceProduct = localStorage.getItem('priceProduct');
var src = localStorage.getItem('src');
var iBasket = localStorage.getItem('iBasket');

document.getElementById("de").innerHTML = iBasket;


var img = document.createElement('img');
img.src = '../' + src;
img.className = 'fotoMini';
de.append(img);





// setTimeout(localStorage.clear(), 2000);


