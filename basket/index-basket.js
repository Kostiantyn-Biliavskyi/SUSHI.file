var inputFocus = document.querySelector('.formOrder');

inputFocus.addEventListener('click', function (e) {
    var valueTar = e.target.value;
    if (e.target.value === 'Имя* ' || e.target.value === 'Фамилия* ' || e.target.value === 'Телефон* '
        || e.target.value === 'Введите промокод ' || e.target.value === 'Город* ' || e.target.value === 'Улица* '
        || e.target.value === 'Дом* ' || e.target.value === 'Кв.* ' || e.target.value === 'Код '
        || e.target.value === 'E-mail ' || e.target.value === 'Коментарий к заказу ') {
        e.target.value = "";
    }

    e.target.onblur = function () {
        if (e.target.value == "" || e.target.value == " " || e.target.value == "  ") {
            e.target.value = valueTar;
        }
    };

});

// добавление товара в корзину
function emptyBasket() {
    let emptyBasket = document.createElement('div');
    emptyBasket.className = 'emptyBasket';
    emptyBasket.innerHTML = 'Корзина пуста. <br><br> Добавьте товар !';
    document.querySelector('.wraperTemplateCloneBlock').prepend(emptyBasket);
};
var nameOrder = [], priceProduct = [], src = [], iBasket1 = 0, quantityProdMas = [];

createBlock();

function createBlock() {
    nameOrder = localStorage.getItem('nameOrder');
    if (nameOrder == '' || nameOrder == ' ' || nameOrder == null) {
        emptyBasket();
        return 0;
    }
    iBasket1 = localStorage.getItem('iBasket');
    nameOrder = localStorage.getItem('nameOrder').split(',');
    priceProduct = localStorage.getItem('priceProduct').split(',');
    src = localStorage.getItem('src').split(',');
    document.querySelector('.quantityProductNumber').innerHTML = iBasket1;
    var k = localStorage.getItem('quantityBl');
    if (k != null) {
        quantityProdMas = localStorage.getItem('quantityBl').split(',');
    }

    for (let a = 0; a < nameOrder.length - 1; a++) {

        if (nameOrder[a] == '' || nameOrder[a] == ' ') {
        } else {
            let clone = document.createElement('div');
            document.querySelector('.wraperTemplateCloneBlock').prepend(clone);
            clone.append(templateCloneBlock.content.cloneNode(true));
            let nameProd = document.querySelector('.nameProduct');
            let fotoMin = document.querySelector('.fotoProductMini');
            let priceProd = document.querySelector('.priceProduct');
            let blockProd = document.querySelector('.blockProduct');
            if (k == null) {
                quantityProdMas[a] = document.querySelector('.quantity').value;
            } else {
                if (quantityProdMas[a] == undefined) {
                    quantityProdMas[a] = document.querySelector('.quantity').value;
                }
                document.querySelector('.quantity').value = quantityProdMas[a];
            }
            fotoMin.src = '../' + src[a];
            nameProd.innerHTML = nameOrder[a];
            priceProd.innerHTML = priceProduct[a] * quantityProdMas[a];
            blockProd.dataset.iterator = a;
        }
    }
};

clickCardProduct.addEventListener('click', function (e) {
    let sumProduct;
    if (e.target.className == 'minus') {
        sumProduct = +localStorage.getItem('sumProduct');
        e.target.style.backgroundColor = '#FF9846';
        setTimeout(() => e.target.style.backgroundColor = '', 100);

        let parentBl = e.target.parentElement;
        let quantityBl = +parentBl.querySelector('.quantity').value;
        quantityBl = quantityBl - 1;
        parentBl.querySelector('.quantity').value = quantityBl;

        let priceObjct = parentBl.querySelector('.priceProduct');
        let poisk = parentBl.querySelector('.nameProduct').textContent;

        for (let a = 0; a < nameOrder.length - 1; a++) {
            if (nameOrder[a] == poisk) {
                quantityProdMas[a] = quantityBl;
                sumProduct = sumProduct - priceProduct[a];
                priceObjct.textContent = sumProduct;
                localStorage.setItem('sumProduct', sumProduct);
            }
        }
        let de = quantityProdMas.join(',');
        localStorage.setItem('quantityBl', de);
    }

    if (e.target.className == 'plus') {
        sumProduct = +localStorage.getItem('sumProduct');
        e.target.style.backgroundColor = '#FF9846';
        setTimeout(() => e.target.style.backgroundColor = '', 100);

        let parentBl = e.target.parentElement;
        let quantityBl = +parentBl.querySelector('.quantity').value;
        quantityBl = quantityBl + 1;
        parentBl.querySelector('.quantity').value = quantityBl;

        let priceObjct = parentBl.querySelector('.priceProduct');
        let poisk = parentBl.querySelector('.nameProduct').textContent;
        for (let a = 0; a < nameOrder.length - 1; a++) {
            if (nameOrder[a] == poisk) {
                quantityProdMas[a] = quantityBl;
                sumProduct = priceProduct[a] * quantityBl;
                priceObjct.textContent = sumProduct;
                localStorage.setItem('sumProduct', sumProduct);
            }
        }
        let de = quantityProdMas.join(',');
        localStorage.setItem('quantityBl', de);
    }
    return 0;
});

window.addEventListener("click", deleteBlock);

function deleteBlock(e) {
    let string, y;
    if (e.target.className === 'deleterProduct' || e.target.className === 'fotoLid' || e.target.className === 'fotoBascet') {
        let parentTarget, ParentParent;
        if (e.target.className === 'fotoLid' || e.target.className === 'fotoBascet') {
            parentTarget = e.target.parentElement;
            ParentParent = parentTarget.parentElement;
        }
        y = ParentParent.dataset.iterator;
        ParentParent.remove();
        delete nameOrder[y];
        delete priceProduct[y];
        delete src[y];
        string = nameOrder.join('');
        if (string == '') {
            localStorage.clear();
            emptyBasket();
            iBasket1 = iBasket1 - 1;
            document.querySelector('.quantityProductNumber').innerHTML = iBasket1;
            return 0;
        } else {
            iBasket1 = iBasket1 - 1;
            document.querySelector('.quantityProductNumber').innerHTML = iBasket1;
            localStorage.setItem('iBasket', iBasket1)
            localStorage.setItem('nameOrder', nameOrder);
            localStorage.setItem('src', src);
            localStorage.setItem('priceProduct', priceProduct);
        }
    }

};
// --------------------------------------------------------------


