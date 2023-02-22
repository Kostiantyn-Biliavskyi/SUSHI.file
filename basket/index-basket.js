var nameOrder = localStorage.getItem('nameOrder');
var priceProduct = localStorage.getItem('priceProduct');
var src = localStorage.getItem('src');
var iBasket1 = 0;
iBasket1 = localStorage.getItem('iBasket');
document.getElementById("de").innerHTML = iBasket1;


localStorage.setItem('iBas', iBasket1);

var img = document.createElement('img');
img.src = '../' + src;
img.className = 'fotoMini';
de.append(img);





// setTimeout(localStorage.clear(), 2000);


