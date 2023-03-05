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
var nameOrder = [], priceProduct = [], src = [], iBasket1 = 0, examination = '';

examination = localStorage.getItem('examination');
if (examination == '' || examination == null) {
    emptyBasket();
} else {
    createBlock();
}

function emptyBasket() {
    let emptyBasket = document.createElement('div');
    emptyBasket.className = 'emptyBasket';
    emptyBasket.innerHTML = 'Корзина пуста. <br><br> Добавьте товар в корзину !';
    document.querySelector('.wraperTemplateCloneBlock').prepend(emptyBasket);
};

function createBlock() {
    examination = localStorage.getItem('examination');

    if (examination == '') {
        emptyBasket();
    } else {
        iBasket1 = localStorage.getItem('iBasket');
        nameOrder = localStorage.getItem('nameOrder').split(',');
        priceProduct = localStorage.getItem('priceProduct').split(',');
        src = localStorage.getItem('src').split(',');

        for (let a = 0; a < nameOrder.length - 1; a++) {
            if (nameOrder[a] == '' || nameOrder == ' ') {
            } else {
                let clone = document.createElement('div');
                document.querySelector('.wraperTemplateCloneBlock').prepend(clone);
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
    }
};

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
// --------------------------------------------------------------


