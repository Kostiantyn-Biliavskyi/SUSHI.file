var inputFocus = document.querySelector('.formOrder');

inputFocus.addEventListener('click', function (e) {
    if (e.target.value === 'Имя* ' || e.target.value === 'Фамилия* ' || e.target.value === 'Телефон* '
        || e.target.value === 'Введите промокод ' || e.target.value === 'Город* ' || e.target.value === 'Улица* '
        || e.target.value === 'Дом* ' || e.target.value === 'Кв.* ' || e.target.value === 'Код '
        || e.target.value === 'E-mail ' || e.target.value === 'Коментарий к заказу ') {
        e.target.value = "";
    }

    e.target.onblur = function (e) {
        if (e.target.value == "" || e.target.value == " " || e.target.value == "  ") {
            switch (e.target.name) {
                case 'name':
                    e.target.value = 'Имя* ';
                    break;
                case 'surname':
                    e.target.value = 'Фамилия* ';
                    break;
                case 'tel':
                    e.target.value = 'Телефон* ';
                    break;
                case 'commit':
                    e.target.value = 'Коментарий к заказу ';
                    break;
                case 'promo':
                    e.target.value = 'Введите промокод ';
                    break;
                case 'city':
                    e.target.value = 'Город* ';
                    break;
                case 'street':
                    e.target.value = 'Улица* ';
                    break;
                case 'house':
                    e.target.value = 'Дом* ';
                    break;
                case 'apartament':
                    e.target.value = 'Кв.* ';
                    break;
                case 'code':
                    e.target.value = 'Код ';
                    break;
                case 'email':
                    e.target.value = 'E-mail ';
                    break;
                default:
                    alert('ERROR');
                    break;
            }
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
var sumTotal = 0, priseX = 0;
createBlock();

function createBlock() {
    nameOrder = localStorage.getItem('nameOrder');
    if (nameOrder == '' || nameOrder == ' ' || nameOrder == null) {
        emptyBasket();
        return 0;
    }
    iBasket1 = +localStorage.getItem('iBasket');
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
            let clone = document.createElement('div');   // создание карточки
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
            let x = priceProduct[a] * quantityProdMas[a];
            priceProd.innerHTML = priceProduct[a] * quantityProdMas[a];
            blockProd.dataset.iterator = a;
            sumTotal = sumTotal + x;
        }
        document.querySelector('.sumOrderNumber').value = sumTotal;
    }
};

clickCardProduct.addEventListener('click', function (e) {
    let sumProduct;
    if (e.target.className == 'minus') {
        let parentBl = e.target.parentElement;
        let quantityBl = +parentBl.querySelector('.quantity').value;
        let x = quantityBl;
        let priceNumber = +parentBl.querySelector('.priceProduct').textContent;
        let poisk = parentBl.querySelector('.nameProduct').textContent;

        if (quantityBl > 1) {
            e.target.style.backgroundColor = '#FF9846';
            setTimeout(() => e.target.style.backgroundColor = '', 100);
            quantityBl = quantityBl - 1;
            parentBl.querySelector('.quantity').value = quantityBl;

            for (let a = 0; a < nameOrder.length - 1; a++) {
                if (nameOrder[a] == poisk) {
                    quantityProdMas[a] = quantityBl;
                    sumProduct = priceNumber / x;
                    priseX = sumProduct;
                    sumProduct = sumProduct * quantityBl;
                    parentBl.querySelector('.priceProduct').textContent = sumProduct;
                    localStorage.setItem('sumProduct', sumProduct);
                }
            }
            let de = quantityProdMas.join(',');
            localStorage.setItem('quantityBl', de);
            sumTotal = sumTotal - priseX;
            document.querySelector('.sumOrderNumber').value = sumTotal;
            iBasket1 = iBasket1 - 1;
            localStorage.setItem('iBasket', iBasket1);
            document.querySelector('.quantityProductNumber').innerHTML = iBasket1;
        }
    }

    if (e.target.className == 'plus') {
        e.target.style.backgroundColor = '#FF9846';
        setTimeout(() => e.target.style.backgroundColor = '', 100);

        let parentBl = e.target.parentElement;
        let quantityBl = +parentBl.querySelector('.quantity').value;
        let x = quantityBl;
        quantityBl = quantityBl + 1;
        parentBl.querySelector('.quantity').value = quantityBl;

        let priceNumber = +parentBl.querySelector('.priceProduct').textContent;
        let poisk = parentBl.querySelector('.nameProduct').textContent;

        for (let a = 0; a < nameOrder.length - 1; a++) {
            if (nameOrder[a] == poisk) {
                quantityProdMas[a] = quantityBl;
                sumProduct = priceNumber / x;
                priseX = sumProduct;
                sumProduct = sumProduct * quantityBl;
                parentBl.querySelector('.priceProduct').textContent = sumProduct;
                localStorage.setItem('sumProduct', sumProduct);
            }
        }
        let de = quantityProdMas.join(',');
        localStorage.setItem('quantityBl', de);
        sumTotal = sumTotal + priseX;
        document.querySelector('.sumOrderNumber').value = sumTotal;
        iBasket1 = iBasket1 + 1;
        localStorage.setItem('iBasket', iBasket1);
        document.querySelector('.quantityProductNumber').innerHTML = iBasket1;
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

        iBasket1 = iBasket1 - (+ParentParent.querySelector('.quantity').value);
        document.querySelector('.quantityProductNumber').textContent = iBasket1;

        sumTotal = sumTotal - (+ParentParent.querySelector('.priceProduct').textContent);
        document.querySelector('.sumOrderNumber').value = sumTotal;
        ParentParent.remove();
        delete nameOrder[y];
        delete priceProduct[y];
        delete src[y];
        string = nameOrder.join('');
        if (string == '') {
            localStorage.clear();
            emptyBasket();
            return 0;
        } else {
            localStorage.setItem('iBasket', iBasket1)
            localStorage.setItem('nameOrder', nameOrder);
            localStorage.setItem('src', src);
            localStorage.setItem('priceProduct', priceProduct);
        }
    }

};
valuta.addEventListener('focus', function () {
    valuta.blur();
});
var iter = 0;
form.addEventListener('submit', function (e) {
    if (nameOrder == '' || nameOrder == ' ' || nameOrder == null) {
        document.querySelector('.emptyBasket').style.backgroundColor = 'red';
        setTimeout(() => { document.querySelector('.emptyBasket').style.backgroundColor = '#f66206'; }, 200);
        x++;
        e.preventDefault();
    }
    const test = ['Имя* ', 'Фамилия* ', 'Телефон* ', 'Город* ', 'Улица* ', 'Дом* ', 'Кв.* '];
    const classReq = document.querySelectorAll('._req');
    for (let i = 0; i < classReq.length; i++) {
        if (classReq[i].value === test[i]) {
            e.preventDefault();
            classReq[i].style.boxShadow = "0 0 15px #f74a47";
            setTimeout(() => { classReq[i].style.boxShadow = ""; }, 1500);
            iter++;
        }
    }

    if (iter > 0) {
        setTimeout(fieldsExam, 1000);
    }

    if (classReq[2].value != 'Телефон* ') {
        let y = Number(classReq[2].value);
        if (Number.isInteger(y)) {
        } else {
            e.preventDefault();
            classReq[2].style.boxShadow = "0 0 15px #f74a47";
            setTimeout(() => { classReq[2].style.boxShadow = ""; }, 1500);
            setTimeout(numberExam, 1000);
        }
    }

    let email = document.querySelector('.email');
    if (email.value == '' || email.value == 'E-mail ' || email.value == ' ') {
    } else {
        if (email.value.includes('@')) {
        } else {
            e.preventDefault();
            email.style.boxShadow = "0 0 15px #f74a47";
            setTimeout(() => { email.style.boxShadow = ""; }, 1500);
            setTimeout(emailExam, 1000);
        }
    }
});

function numberExam() {
    alert('Напешите номерр телефона');
};
function fieldsExam() {
    alert('Заполните все поля формы')
}
function emailExam() {
    alert('Не правельно набран Е-mail');
}
// --------------------------------------------------------------


