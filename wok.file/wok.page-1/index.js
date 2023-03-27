var mas = [
    //                        фото.                                      название. цена. вес.  
    ['../../css/css.foto/schezwan-or-szechwan-hakka-noodles-with-paneer-or-cottage-cheese-served-in-a-bowl-selective-focus.jpg', 'Саломон', 600, 850],
    ['../../css/css.foto/top-view-of-delicious-noodles-concept.jpg', 'Якудза', 500, 700],
    ['../../css/css.foto/schezwan-or-szechwan-hakka-noodles-with-paneer-or-cottage-cheese-served-in-a-bowl-selective-focus.jpg', 'Филодельфия с лососем', 850, 1200],
    ['../../css/css.foto/schezwan-or-szechwan-hakka-noodles-with-paneer-or-cottage-cheese-served-in-a-bowl-selective-focus.jpg', 'Филадельфия с угрём', 350, 550],
    ['../../css/css.foto/top-view-of-delicious-noodles-concept.jpg', 'Камикадзе', 1000, 900],
    ['../../css/css.foto/schezwan-or-szechwan-hakka-noodles-with-paneer-or-cottage-cheese-served-in-a-bowl-selective-focus.jpg', 'Филадельфия топ', 450, 550],
    ['../../css/css.foto/top-view-of-delicious-noodles-concept.jpg', 'Филадельфия сёмга', 800, 1100],
    ['../../css/css.foto/schezwan-or-szechwan-hakka-noodles-with-paneer-or-cottage-cheese-served-in-a-bowl-selective-focus.jpg', 'Креветки', 350, 550],
    ['../../css/css.foto/top-view-of-delicious-noodles-concept.jpg', 'Анчоусы', 600, 550],
];
function colorName() {
    let nameTitle = document.querySelectorAll('.menuButtonText');
    for (let key = 0; key < nameTitle.length; key++) {
        if (nameTitle[key].dataset.product === 'wok') {
            nameTitle[key].style.color = '#ff4000';
        }
    }
    page_1.className = 'pageColor';
};
colorName();

function createTwoMas() {
    let masTwo = [];
    if (sessionStorage.getItem('masWokSort') != null) {
        masTwo = sessionStorage.getItem('masWokSort').split(';');
        for (let i = 0; i < masTwo.length; i++) {
            mas[i] = [];// объявление двумерного массива
            let superMas = [];
            superMas = masTwo[i].split(',');

            for (let a = 0; a < 4; a++) {
                mas[i][a] = superMas[a];
            }
        }
    }
    createCardProduct();
};
createTwoMas();

function createCardProduct() {// создание карточки товара
    let xDiv = document.querySelector('.createDivNew');

    for (let i = 0; i < 9; i++) {
        let newWraper = document.createElement('div');
        newWraper.className = 'wraper';
        xDiv.append(newWraper);

        newWraper.append(templatePizza.content.cloneNode(true));

        newWraper.querySelector('.sliderMiniLiFoto').src = mas[i][0];
        newWraper.querySelector('.productName').textContent = mas[i][1];
        newWraper.querySelector('.Thprices').textContent = mas[i][2];
        newWraper.querySelector('.productWeight').textContent = mas[i][3];
    }

    let masString = [], stringNew = '';
    for (let x = 0; x < mas.length; x++) {
        masString[x] = mas[x][0] + ',' + mas[x][1] + ',' + mas[x][2] + ',' + mas[x][3];
    }
    stringNew = masString.join(';');
    sessionStorage.setItem('masWok', stringNew);
};

function sortPrise() {// сорт дороже
    let masSort = [], bufer;
    for (let i = 0; i < mas.length; i++) {
        masSort[i] = mas[i][2];
    }
    masSort.sort(function (a, b) { return a - b });
    for (let a = 0; a < 2; a++) {
        for (let i = 0; i < mas.length; i++) {
            for (let ii = 0; ii < mas.length; ii++) {
                if (masSort[i] == mas[ii][2]) {
                    bufer = mas[i]
                    mas[i] = mas[ii];
                    mas[ii] = bufer;
                }
            }
        }
    }
    mas.reverse();
    let masString = mas.join(';');
    sessionStorage.setItem('masWokSort', masString);
    createTwoMas();
};

function sortPriseСheap() {// сорт дешевле
    let masSort = [], bufer;
    for (let i = 0; i < mas.length; i++) {
        masSort[i] = mas[i][2];
    }
    masSort.sort(function (a, b) { return a - b });
    for (let a = 0; a < 2; a++) {
        for (let i = 0; i < mas.length; i++) {
            for (let ii = 0; ii < mas.length; ii++) {
                if (masSort[i] == mas[ii][2]) {
                    bufer = mas[i]
                    mas[i] = mas[ii];
                    mas[ii] = bufer;
                }
            }
        }
    }
    let masString = mas.join(';');
    sessionStorage.setItem('masWokSort', masString);
    createTwoMas();
};

function sortWeight() {// сорт вес
    let masSort = [], bufer;
    for (let i = 0; i < mas.length; i++) {
        masSort[i] = mas[i][3];
    }
    masSort.sort(function (a, b) { return a - b });
    mas.reverse();
    for (let a = 0; a < 2; a++) {
        for (let i = 0; i < mas.length; i++) {
            for (let ii = 0; ii < mas.length; ii++) {
                if (masSort[i] == mas[ii][3]) {
                    bufer = mas[i]
                    mas[i] = mas[ii];
                    mas[ii] = bufer;
                }
            }
        }
    }
    let masString = mas.join(';');
    sessionStorage.setItem('masWokSort', masString);
    createTwoMas();
};

function sortName() { //сорт по названию
    let masSort = [], bufer;
    for (let i = 0; i < mas.length; i++) {
        masSort[i] = mas[i][1];
    }
    masSort.sort((a, b) => a.localeCompare(b));
    for (let a = 0; a < 2; a++) {
        for (let i = 0; i < mas.length; i++) {
            for (let ii = 0; ii < mas.length; ii++) {
                if (masSort[i] == mas[ii][1]) {
                    bufer = mas[i]
                    mas[i] = mas[ii];
                    mas[ii] = bufer;
                }
            }
        }
    }
    let masString = mas.join(';');
    sessionStorage.setItem('masWokSort', masString);
    createTwoMas();
};
function deleteDiv() { // удаляет все карточки
    let xDiv = document.querySelectorAll('.wraper');
    for (let i = 0; i < xDiv.length; i++) {
        xDiv[i].remove();
    }
};
document.addEventListener('click', sortProduct);

function sortProduct(e) {

    switch (e.target.id) {
        case 'sortExpensive':
            deleteDiv();
            sortPrise();
            break;
        case 'sortCheap':
            deleteDiv();
            sortPriseСheap();
            break;
        case 'sortWeight':
            deleteDiv();
            sortWeight();
            break;
        case 'sortName':
            deleteDiv();
            sortName();
            break;
        default:
            break;
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

// sortingProduct.addEventListener("click", sortProduct);
sortingProduct.addEventListener("mouseover", menuSortingOpen);
sortingProduct.addEventListener("mouseout", menuSortingClose);
function menuSortingOpen() {
    menuSort.style.display = "block";
};
function menuSortingClose() {
    menuSort.style.display = "none";
};

// -------------------------------------------------------------------
window.addEventListener("click", customerСhoice);
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

    if (e.target.id === 'sliderMiniLiButton') {

        if (nameOrder == null) {
            iBasket = 0;
            nameOrder = '';
            src = '';
            priceProduct = '';
        }
        src = src + (e.target.parentNode.querySelector('.sliderMiniLiFoto').getAttribute('src').substring(3) + ',');
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