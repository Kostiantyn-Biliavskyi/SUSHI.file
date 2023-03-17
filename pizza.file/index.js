
var mas = [pizza_1 = { src: '../css/css.foto/1617186811_40-p-krasivaya-pitstsa-krasivo-48.jpg', name: 'Карибы', prise: 300, weight: 850 },
pizza_2 = { src: '../css/css.foto/1617186830_24-p-krasivaya-pitstsa-krasivo-31.jpg', name: 'Август', prise: 500, weight: 600 },
pizza_3 = { src: '../css/css.foto/1617186811_40-p-krasivaya-pitstsa-krasivo-48.jpg', name: 'Сырная', prise: 850, weight: 700 },
pizza_4 = { src: '../css/css.foto/1617186830_24-p-krasivaya-pitstsa-krasivo-31.jpg', name: 'Филадельфия', prise: 350, weight: 550 },
pizza_5 = { src: '../css/css.foto/1617186830_24-p-krasivaya-pitstsa-krasivo-31.jpg', name: 'Овощная', prise: 400, weight: 500 },
pizza_6 = { src: '../css/css.foto/1617186811_40-p-krasivaya-pitstsa-krasivo-48.jpg', name: 'Салями', prise: 450, weight: 550 },
pizza_7 = { src: '../css/css.foto/1617186811_40-p-krasivaya-pitstsa-krasivo-48.jpg', name: 'Паприка', prise: 500, weight: 500 },
pizza_8 = { src: '../css/css.foto/1617186811_40-p-krasivaya-pitstsa-krasivo-48.jpg', name: 'Креветки', prise: 350, weight: 550 },
pizza_9 = { src: '../css/css.foto/1617186830_24-p-krasivaya-pitstsa-krasivo-31.jpg', name: 'Анчоусы', prise: 600, weight: 550 },

];

createCardProduct();
function createCardProduct() {// создание карточки товара
    let xDiv = document.querySelector('.createDivNew');
    for (let i = 0; i < 9; i++) {
        let newWraper = document.createElement('div');
        newWraper.className = 'wraper';
        xDiv.prepend(newWraper);

        newWraper.prepend(templatePizza.content.cloneNode(true));
        newWraper.querySelector('.sliderMiniLiFoto').src = mas[i].src;
        newWraper.querySelector('.productName').textContent = mas[i].name;
        newWraper.querySelector('.Thprices').textContent = mas[i].prise;
        newWraper.querySelector('.productWeight').textContent = mas[i].weight;
    }

};
function sortPrise() {// сорт дороже
    let masSort = [], bufer;
    for (let i = 0; i < mas.length; i++) {
        masSort[i] = mas[i].prise;
    }
    masSort.sort(function (a, b) { return a - b });
    for (let i = 0; i < mas.length; i++) {
        for (let ii = 0; ii < mas.length; ii++) {
            if (masSort[i] == mas[ii].prise) {
                bufer = mas[i]
                mas[i] = mas[ii];
                mas[ii] = bufer;
            }
        }
    }
    createCardProduct();
};
function sortPriseСheap() {// сорт дешевле
    let masSort = [], bufer;
    for (let i = 0; i < mas.length; i++) {
        masSort[i] = mas[i].prise;
    }
    masSort.sort(function (a, b) { return a - b });
    for (let i = 0; i < mas.length; i++) {
        for (let ii = 0; ii < mas.length; ii++) {
            if (masSort[i] == mas[ii].prise) {
                bufer = mas[i]
                mas[i] = mas[ii];
                mas[ii] = bufer;
            }
        }
    }
    mas.reverse();
    createCardProduct();
};
function deleteDiv() { // удаляет все карточки
    for (let i = 0; i < mas.length; i++) {
        let xDiv = document.querySelector('.wraper');
        xDiv.remove();
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
        default:
            break;
    }
};

console.log(mas);
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

/*function sortProduct(e) {// сортирует страницу по возростанию
    let iFunc = 0, masProduct = [], iii = 0, nameClassSort = "";

    switch (e.target.id) {
        case "sortCheap":
            nameClassSort = ".Thprices";
            for (let ix = 0; ix < tablePizza.rows.length; ix++) {
                for (let iy = 0; iy < tablePizza.rows[ix].cells.length; iy++) {
                    masProduct[iii] = +tablePizza.rows[ix].cells[iy].querySelector(nameClassSort).textContent;
                    iii++;
                }
            }
            masProduct.sort(function (a, b) { return a - b });
            break;
        case "sortExpensive":
            nameClassSort = ".Thprices";
            for (let ix = 0; ix < tablePizza.rows.length; ix++) {
                for (let iy = 0; iy < tablePizza.rows[ix].cells.length; iy++) {
                    masProduct[iii] = +tablePizza.rows[ix].cells[iy].querySelector(nameClassSort).textContent;
                    iii++;
                }
            }
            masProduct.sort(function (a, b) { return a - b });
            masProduct.reverse();
            break;
        case "sortWeight":
            nameClassSort = ".productWeight";
            for (let ix = 0; ix < tablePizza.rows.length; ix++) {
                for (let iy = 0; iy < tablePizza.rows[ix].cells.length; iy++) {
                    masProduct[iii] = +tablePizza.rows[ix].cells[iy].querySelector(nameClassSort).textContent;
                    iii++;
                }
            }
            masProduct.sort(function (a, b) { return a - b });
            break;
        case "sortName":
            nameClassSort = ".productName";
            for (let ix = 0; ix < tablePizza.rows.length; ix++) {
                for (let iy = 0; iy < tablePizza.rows[ix].cells.length; iy++) {
                    masProduct[iii] = tablePizza.rows[ix].cells[iy].querySelector(nameClassSort).textContent;
                    iii++;
                }
            }
            masProduct.sort((a, b) => a.localeCompare(b));
            break;
        default:
            break;
    }

    function sortCheap() {
        let Irow = 0, Ikcells = 0, rut;
        for (let ir = 0; ir < masProduct.length; ir++) {
            if (ir == 3 || ir == 6 || ir == 9 || ir == 12 || ir == 15 || ir == 18 || ir == 21 || ir == 24) {
                Irow = Irow + 1;
                Ikcells = 0;
            }
            for (let it = 0; it < tablePizza.rows.length; it++) {
                for (let id = 0; id < tablePizza.rows[it].cells.length; id++) {
                    if (masProduct[ir] == tablePizza.rows[it].cells[id].querySelector(nameClassSort).textContent) {
                        rut = tablePizza.rows[Irow].cells[Ikcells].innerHTML;
                        tablePizza.rows[Irow].cells[Ikcells].innerHTML = tablePizza.rows[it].cells[id].innerHTML;
                        tablePizza.rows[it].cells[id].innerHTML = rut;
                    }
                }
            }
            Ikcells++;
        }

        if (iFunc == 4) {
            iFunc = 0;
            return 0;
        } else {
            iFunc++;
            sortCheap();
        }
    }
    sortCheap();

    return 0;
};*/

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