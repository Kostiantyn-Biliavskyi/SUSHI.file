function colorName() { // цвет текста меню красный
    let nameTitle = document.querySelectorAll('.menuButtonText');
    for (let key = 0; key < nameTitle.length; key++) {
        if (nameTitle[key].dataset.product === 'sushi_1') {
            nameTitle[key].style.color = '#ff4000';
        }
    }
    page_3.className = 'pageColor';
};
colorName();

var masTwo = [];
function createTwoMas() {
    let mas = [];
    mas = sessionStorage.getItem('masSushi').split(';');
    for (let i = 0; i < mas.length; i++) {
        masTwo[i] = [];// объявление двумерного массива
        let superMas = [];
        superMas = mas[i].split(',');
        for (let a = 0; a < 4; a++) {
            masTwo[i][a] = superMas[a];
        }
    }
};
createTwoMas();

createCardProduct();
function createCardProduct() {// создание карточки товара

    let xDiv = document.querySelector('.createDivNew');
    for (let i = 18; i < masTwo.length; i++) {
        let newWraper = document.createElement('div');
        newWraper.className = 'wraper';
        xDiv.append(newWraper);
        newWraper.append(templatePizza.content.cloneNode(true));
        newWraper.querySelector('.sliderMiniLiFoto').src = masTwo[i][0];
        newWraper.querySelector('.productName').textContent = masTwo[i][1];
        newWraper.querySelector('.Thprices').textContent = masTwo[i][2];
        newWraper.querySelector('.productWeight').textContent = masTwo[i][3];
    }
};

function deleteDiv() { // удаляет все карточки
    let xDiv = document.querySelectorAll('.wraper');
    for (let i = 0; i < xDiv.length; i++) {
        xDiv[i].remove();
    }
};

pageNavigation.addEventListener("mouseover", comesButton);
pageNavigation.addEventListener("mouseout", leavesButton);
function comesButton(e) {
    if (e.target.dataset.page == "boxShadow") {
        e.target.style.boxShadow = "0px 0px 3px 2px darkgrey";
    }
    return 0;
};
function leavesButton(e) {
    if (e.target.dataset.page == "boxShadow") {
        e.target.style.boxShadow = "0px 0px 0px 0px";
    }
    return 0;
};

function cordButton() {
    let widthBlock = document.querySelector('.createDivNew').offsetWidth;
    let widthPage = pageNavigation.offsetWidth;
    widthBlock = widthBlock / 2;
    widthPage = widthPage / 2;
    widthPage = widthBlock - widthPage;
    pageNavigation.style.left = widthPage + 'px';
}
cordButton();

function cordButton() {
    let widthBlock = document.querySelector('.createDivNew').offsetWidth;
    let widthPage = pageNavigation.offsetWidth;
    widthBlock = widthBlock / 2;
    widthPage = widthPage / 2;
    widthPage = widthBlock - widthPage;
    pageNavigation.style.left = widthPage + 'px';
}
cordButton();

// ------------------------------------------------------------
function textOpeningBlock() {

    blockTextAnotaciyaButton.addEventListener("click", textOpening);
    var AnotaciyaButtonI = 0;
    function textOpening() {
        if (AnotaciyaButtonI == 0) {
            AnotaciyaButtonI++;
            document.querySelector(".blockTextAnotaciya").style.height = 350 + "px";
            blockTextAnotaciyaButton.style.top = 1990 + "px";
            document.querySelector(".blockTextAnotaciyaP3").style.opacity = 1;
            document.querySelector(".blockTextAnotaciyaLi2").style.opacity = 1;
            document.querySelector(".blockTextAnotaciyaLi3").style.opacity = 1;
            document.querySelector(".blockTextAnotaciyaTrigle").style.transform = "rotate(-315deg)";
            document.querySelector(".blockTextAnotaciyaTrigle").style.top = 10 + "px";

        } else {
            AnotaciyaButtonI = 0;
            document.querySelector(".blockTextAnotaciya").style.height = 270 + "px";
            blockTextAnotaciyaButton.style.top = 1934 + "px";
            document.querySelector(".blockTextAnotaciyaP3").style.opacity = 0.3;
            document.querySelector(".blockTextAnotaciyaLi2").style.opacity = 0.5;
            document.querySelector(".blockTextAnotaciyaLi3").style.opacity = 0.6;
            document.querySelector(".blockTextAnotaciyaTrigle").style.transform = "rotate(-135deg)";
            document.querySelector(".blockTextAnotaciyaTrigle").style.top = 3 + "px";
        }
    };
    return 0;
};
textOpeningBlock();
// ---------------------------------------------------------
var cityTarget = document.querySelector(".selectSity");

cityTarget.addEventListener("click", citySelection);

function citySelection(e) {

    switch (e.target.value) {
        case 'Харьков':
            kharkiv.style.display = "block";
            kiiv.style.display = "none";
            lviv.style.display = "none";
            dnipro.style.display = "none";
            break;
        case 'Киев':
            kiiv.style.display = "block";
            kharkiv.style.display = "none";
            lviv.style.display = "none";
            dnipro.style.display = "none";
            break;
        case 'Львов':
            lviv.style.display = "block";
            kharkiv.style.display = "none";
            kiiv.style.display = "none";
            dnipro.style.display = "none";
            break;
        case 'Днепр':
            dnipro.style.display = "block";
            kharkiv.style.display = "none";
            kiiv.style.display = "none";
            lviv.style.display = "none";
            break;
    };
    return 0;
};
// -----------------------------------------------------------
// -------------------------------------------------------------------
window.addEventListener("click", customerСhoice); //  КОРЗИНА
var nameOrder = '', priceProduct = '', src = '';
var iBasket = 0;

localStorage.setItem('examination', nameOrder);

function def() {
    iBasket = localStorage.getItem('iBasket');
    if (iBasket == 0) {
        sumProduct.innerHTML = '';
    } else {
        sumProduct.innerHTML = iBasket;
    }
    nameOrder = localStorage.getItem('nameOrder');
    src = localStorage.getItem('src');
    priceProduct = localStorage.getItem('priceProduct');
};
def();

function customerСhoice(e) {

    if (e.target.className === 'mainSliderTextButton') {
        if (nameOrder == null) {
            iBasket = 0;
            nameOrder = '';
            src = '';
            priceProduct = '';
        }
        src = src + (e.target.parentNode.querySelector('.mainSliderFoto').getAttribute('src') + ',');
        nameOrder = nameOrder + (e.target.parentNode.querySelector('.mainSliderText1').textContent + ',');
        priceProduct = priceProduct + (e.target.parentNode.querySelector('.mainNewPrise').textContent + ',');
        localStorage.setItem('nameOrder', nameOrder);
        localStorage.setItem('priceProduct', priceProduct);
        localStorage.setItem('src', src);
        iBasket++;
        sumProduct.innerHTML = iBasket;
        localStorage.setItem('iBasket', iBasket);
    }

    if (e.target.id === 'sliderMiniLiButton') {

        if (nameOrder == null) {
            iBasket = 0;
            nameOrder = '';
            src = '';
            priceProduct = '';
        }
        src = src + (e.target.parentNode.querySelector('.sliderMiniLiFoto').getAttribute('src') + ',');
        nameOrder = nameOrder + (e.target.parentNode.querySelector('.sliderMiniLiTextName').textContent + ',');
        priceProduct = priceProduct + (e.target.parentNode.querySelector('.Thprices').textContent + ',');
        localStorage.setItem('nameOrder', nameOrder);
        localStorage.setItem('priceProduct', priceProduct);
        localStorage.setItem('src', src);
        iBasket++;
        sumProduct.innerHTML = iBasket;
        localStorage.setItem('iBasket', iBasket);
    }
    return 0;
};
// -------------------------------------------------------------
var clickButton = document.querySelector('.block');// в кнопке делает буквы черными
clickButton.addEventListener('click', function (e) {
    if (e.target.id == 'sliderMiniLiButton') {
        let paren = e.target.parentElement;
        paren.querySelector('.literColor').style.color = "#000000";
        setTimeout(() => paren.querySelector('.literColor').style.color = '#F2F2F2', 100);
    }

    if (e.target.className == 'mainSliderTextButton') {
        let paren = e.target.parentElement;
        paren.querySelector('.mainSliderTextButton').style.color = "#000000";
        setTimeout(() => paren.querySelector('.mainSliderTextButton').style.color = '#F2F2F2', 100);
    }
});
// ------------------------------------------------------------
menu.addEventListener('click', function (e) {// при клике в меню делает бакграунд серам.выделяет клик
    e.target.closest('.menuButton').style.backgroundColor = '#ebe8e8';
    setTimeout(() => e.target.closest('.menuButton').style.backgroundColor = '', 150);
});
// -------------------------------------------------------------
jQuery(function ($) {
    $("#telUser").mask("+380( 99 ) 999 99 99");
});

// ------------------------------------------------------------