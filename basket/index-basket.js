var nameOrder = [], priceProduct = [], src = [], iBasket1 = 0;
createBlock();

function createBlock() {
    iBasket1 = localStorage.getItem('iBasket');
    nameOrder = localStorage.getItem('nameOrder').split(',');
    priceProduct = localStorage.getItem('priceProduct').split(',');
    src = localStorage.getItem('src').split(',');

    // document.getElementById("de").innerHTML = nameOrder;

    for (let a = 0; a < nameOrder.length - 1; a++) {
        if (nameOrder[a] == '' || nameOrder == ' ') {
        } else {
            let clone = document.createElement('div');
            mainBlock.after(clone);
            clone.append(templateCloneBlock.content.cloneNode(true));
            let nameProd = document.querySelector('.nameProduct');
            let fotoMin = document.querySelector('.fotoProductMini');
            let priceProd = document.querySelector('.priceProduct');
            let blockProd = document.querySelector('.blockProduct');
            fotoMin.src = '../' + src[a];
            nameProd.innerHTML = nameOrder[a];
            priceProd.innerHTML = priceProduct[a];
            blockProd.dataset.iterator = a;
        }
    }
};

bodyBlock.addEventListener("click", deleteBlock);
let y;
function deleteBlock(e) {
    let string;
    if (e.target.className == 'deleterProduct') {
        y = e.target.parentElement.dataset.iterator;
        e.target.parentElement.remove();
        delete nameOrder[y];
        delete priceProduct[y];
        delete src[y];
        string = nameOrder.join('');
        if (string == '') {
            localStorage.clear();
            return 0;
        } else {
            iBasket1 = iBasket1 - 1;
            localStorage.setItem('iBasket', iBasket1)
            localStorage.setItem('nameOrder', nameOrder);
            localStorage.setItem('src', src);
            localStorage.setItem('priceProduct', priceProduct);
        }
    }

};