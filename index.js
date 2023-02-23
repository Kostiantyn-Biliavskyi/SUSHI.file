
mainSlider.addEventListener("click", typ);

function typ(e) {
    let y = e.target.dataset.nameSushi;
    switch (y) {
        case 'fil':
            alert("lososi");
            break;
        case 'krev':
            alert("krevetki");
            break;
        default:
    }
};
// --------------- функция слайдера фото и точки меняют цвет ------------------------
var stopSetTimeoutGo, i = -1, sliderDot;
function movementFotoMain() {
    let lengthFoto = mainSlider.querySelectorAll('ul>li>img');
    let widthMainSliderFoto = mainSlider.offsetWidth;
    let sum = widthMainSliderFoto;
    sliderDot = navigationMainSlider.querySelectorAll('ul>li');
    i = -1;

    function go() {
        i++;
        if (i < lengthFoto.length) {
            sum = sum - widthMainSliderFoto;
            mainSliderUl.style.left = sum + "px";
        } else {
            sum = 0;
            i = 0;
            mainSliderUl.style.left = sum + "px";
        }
        stopSetTimeoutGo = setTimeout(go, 4000);

        switch (i) {
            case 0:
                sliderDot[4].style.backgroundColor = "#A4ACAD";
                sliderDot[0].style.backgroundColor = "#f66206";
                break;
            case 1:
                sliderDot[0].style.backgroundColor = "#A4ACAD";
                sliderDot[1].style.backgroundColor = "#f66206";
                break;
            case 2:
                sliderDot[1].style.backgroundColor = "#A4ACAD";
                sliderDot[2].style.backgroundColor = "#f66206";
                break;
            case 3:
                sliderDot[2].style.backgroundColor = "#A4ACAD";
                sliderDot[3].style.backgroundColor = "#f66206";
                break;
            case 4:
                sliderDot[3].style.backgroundColor = "#A4ACAD";
                sliderDot[4].style.backgroundColor = "#f66206";
                break;
            default:
        }
    };
    go();
    return 0;
};
movementFotoMain();

mainSlider.addEventListener("mouseenter", mouseMainSlider);
mainSlider.addEventListener("mouseleave", mouseLeavesMainSlider)
function mouseMainSlider(e) {
    clearTimeout(stopSetTimeoutGo);
    return 0;
};
function mouseLeavesMainSlider(e) {
    sliderDot[i].style.backgroundColor = "#A4ACAD";
    movementFotoMain();
    return 0;
};
// ----------------------- функция слайдера фото и точки меняют цвет ------------------
// --------------------------- MINI slider ---------------------------
blockSliderMiniTextNew.addEventListener("click", clickTextNew);
blockSliderMiniTextPopular.addEventListener("click", clickTextPopular);

var sumSliderMini = 0, sliderMiniWidth, widthSliderMiniUl1 = sliderMiniUl1.offsetWidth;
var sumSliderMiniUl1 = widthSliderMiniUl1, targetSliderMiniUl = sliderMiniUl1;
var sliderMiniClass = document.querySelector(".sliderMini");
sliderMiniWidth = sliderMiniClass.offsetWidth;

function clickTextNew() {
    blockSliderMiniTextNew.style.color = "#000000";
    blockSliderMiniTextPopular.style.color = "#A4ACAD";
    sliderMiniUl1.style.display = "";
    sliderMiniUl2.style.display = "none";

    widthSliderMiniUl1 = sliderMiniUl1.offsetWidth;
    sumSliderMiniUl1 = widthSliderMiniUl1;
    targetSliderMiniUl = sliderMiniUl1;
    sliderMiniWidth = sliderMiniClass.offsetWidth;
    sumSliderMini = 0;
    return 0;
};
function clickTextPopular() {
    blockSliderMiniTextPopular.style.color = "#000000";
    blockSliderMiniTextNew.style.color = "#A4ACAD";
    sliderMiniUl1.style.display = "none";
    sliderMiniUl2.style.display = "";

    widthSliderMiniUl1 = sliderMiniUl2.offsetWidth;
    sumSliderMiniUl1 = widthSliderMiniUl1;
    targetSliderMiniUl = sliderMiniUl2;
    sliderMiniWidth = sliderMiniClass.offsetWidth;
    sumSliderMini = 0;
    return 0;
};

blockSliderMiniButtonLeft.addEventListener("click", sliderMiniLeft);
blockSliderMiniButtonLeft.addEventListener("mouseover", leftSaturated);
blockSliderMiniButtonLeft.addEventListener("mouseout", leftDull);

blockSliderMiniButtonRigth.addEventListener("click", sliderMiniRigth);
blockSliderMiniButtonRigth.addEventListener("mouseover", rigthSaturated);
blockSliderMiniButtonRigth.addEventListener("mouseout", rigthDull);

function sliderMiniLeft() {
    if (sumSliderMiniUl1 > sliderMiniWidth) {
        sumSliderMini = sumSliderMini - sliderMiniWidth;
        sumSliderMiniUl1 = sumSliderMiniUl1 - sliderMiniWidth;
        targetSliderMiniUl.style.left = sumSliderMini + "px";
        // blockSliderMiniButtonRigth.addEventListener("click", sliderMiniRigth);
    } else {
        blockSliderMiniButtonLeft.style.opacity = 0.3;
        // blockSliderMiniButtonLeft.removeEventListener("click", sliderMiniLeft);
    }
    return 0;
};

function sliderMiniRigth() {
    if (sumSliderMiniUl1 < widthSliderMiniUl1) {
        sumSliderMini = sumSliderMini + sliderMiniWidth;
        sumSliderMiniUl1 = sumSliderMiniUl1 + sliderMiniWidth;
        targetSliderMiniUl.style.left = sumSliderMini + "px";
        // blockSliderMiniButtonLeft.addEventListener("click", sliderMiniLeft);
    } else {
        blockSliderMiniButtonRigth.style.opacity = 0.3;
        // blockSliderMiniButtonRigth.removeEventListener("click", sliderMiniRigth);
    }
    return 0;
};
// --------------------------------------------------------------------------
function leftSaturated() {
    if (sumSliderMiniUl1 > sliderMiniWidth) {
        blockSliderMiniButtonLeft.style.opacity = 1;
    } else {
        blockSliderMiniButtonLeft.style.opacity = 0.3;
    }
    return 0;
};

function leftDull() {
    blockSliderMiniButtonLeft.style.opacity = 0.3;
    return 0;
};

function rigthSaturated() {
    if (sumSliderMiniUl1 < widthSliderMiniUl1) {
        blockSliderMiniButtonRigth.style.opacity = 1;
    } else {
        blockSliderMiniButtonRigth.style.opacity = 0.3;
    }
    return 0;
};

function rigthDull() {
    blockSliderMiniButtonRigth.style.opacity = 0.3;
    return 0;
};
sliderMiniUl2.style.display = "none";

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
jQuery(function ($) {
    $("#telUser").mask("+380( 99 ) 999 99 99");
});

// ------------------------------------------------------------
var review = document.querySelector(".reviews");
review = addEventListener("click", callProductSelection);
menu.addEventListener("click", productSelection);
firma.addEventListener("click", productSelection);
function callProductSelection(e) {
    if (e.target.className == "reviews") {
        productSelection(e);
    }
    return 0;
};
var cordLineHed, createDivProdukt;
function productSelection(e) {

    cordLineHed = document.querySelector(".lineHed");

    if (e.target.id == "menu" || e.target.id == "pageNavigation") {
        return 0;
    } else {
        if (document.body.querySelector(".createDivNew") != null) {
            createDivProdukt.remove();
        }

        if (e.target.dataset.product == "mainPage") {
            blockCentrSliders.style.display = "";
            return 0;
        } else {
            blockCentrSliders.style.display = "none";
            createDivProdukt = document.createElement('div');
            createDivProdukt.className = "createDivNew";
            cordLineHed.after(createDivProdukt);
        }
        switch (e.target.dataset.product) {
            case "pizza":
                createDivProdukt.append(templatePizza.content.cloneNode(true));
                search();
                centrButton();
                break;
            case "seti":
                createDivProdukt.append(templateSeti.content.cloneNode(true));
                search();
                break;
            case "wok":
                createDivProdukt.append(templateWok.content.cloneNode(true));
                search();
                break;
            case "roll":
                createDivProdukt.append(templateRoll.content.cloneNode(true));
                search();
                break;
            case "sushi_1":
                createDivProdukt.append(templateSushi.content.cloneNode(true));
                search();
                centrButton();
                break;
            case "salad":
                createDivProdukt.append(templateSalad.content.cloneNode(true));
                search();
                break;
            case "soup":
                createDivProdukt.append(templateSoup.content.cloneNode(true));
                search();
                break;
            case "review":
                createDivProdukt.append(templateReview.content.cloneNode(true));
                clickCreateReview();
                break;
            default:
                alert("ERROR");
        }
    }
    return 0;
};

function centrButton() {// для многостараничных меню. делает кнопки активными
    let widthCreatedDiv = document.body.querySelector(".createDivNew");// центрирует кнопки страниц внизу
    let widthBlockPage = pageNavigation.offsetWidth / 2;
    let widthblockCenterMain = widthCreatedDiv.offsetWidth / 2;
    widthCreatedDiv = widthblockCenterMain - widthBlockPage;
    pageNavigation.style.left = widthCreatedDiv + "px";
    pageNavigation.addEventListener("click", styleButtonNavigation);
    pageNavigation.addEventListener("click", switchingPage);
    pageNavigation.addEventListener("mouseover", comesButton);
    pageNavigation.addEventListener("mouseout", leavesButton);
    saveClick_2 = document.getElementById("page_1");
    iPage = 0;
    return 0;
};
var saveClick_1, saveClick_2, iPage = 0;
function search() { // одностраничное меню
    sortingProduct.addEventListener("click", sortProduct);
    sortingProduct.addEventListener("mouseover", menuSortingOpen);
    sortingProduct.addEventListener("mouseout", menuSortingClose);
    tablePizza.addEventListener("click", customerСhoice);
};

function comesButton(e) {
    if (e.target.id != "pageNavigation") {
        e.target.style.boxShadow = "0px 0px 3px 2px darkgrey";
    }
    return 0;
};
function leavesButton(e) {
    if (e.target.id != "pageNavigation") {
        e.target.style.boxShadow = "0px 0px 0px 0px";
    }
    return 0;
};

function menuSortingOpen() {
    menuSort.style.display = "block";
};
function menuSortingClose() {
    menuSort.style.display = "none";
};

var heightPage;
function switchingPage(e) {// перенключение страниц
    heightPage = tablePizza.offsetHeight;

    switch (e.target.id) {
        case "page_1":
            tablePizza.style.top = 0 + "px";
            break;
        case "page_2":
            tablePizza.style.top = -1290 + "px";
            break;
        case "page_3":
            tablePizza.style.top = -(1290 * 2) + "px";
            break;
        default:
    }
    return 0;
};

function styleButtonNavigation(e) {// стилезует кнопки переключения страниц

    if (e.target.id == "pageNavigation") {
        return 0;
    } else {
        iPage++;
        switch (iPage) {
            case 1:
                saveClick_1 = document.getElementById(e.target.id);
                saveClick_1.style.backgroundColor = "#F46D40";
                saveClick_1.style.color = "white";

                saveClick_2.style.backgroundColor = "white";
                saveClick_2.style.color = "blueviolet";
                break;
            case 2:
                saveClick_2 = document.getElementById(e.target.id);
                saveClick_2.style.backgroundColor = "#F46D40";
                saveClick_2.style.color = "white";

                saveClick_1.style.backgroundColor = "white";
                saveClick_1.style.color = "blueviolet";
                iPage = 0;
                break;
            default:
        }

    }
    return 0;
};

function sortProduct(e) {// сортирует страницу по возростанию
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
};
function clickCreateReview() {
    createReview.addEventListener("click", clientWritesReview);
};

function clientWritesReview() {
    paranja.classList.toggle('paranjaClass');
    paranjaForm.classList.toggle('paranjaFormClass');
    paranjaForm.style.display = "block";
    buttonForm.addEventListener("click", sendingForm);
    closeForm.addEventListener("click", clickCloseForm);
};

function sendingForm() {

    if (nameUserForm.value === "" || nameUserForm.value === " " || textMessage.value === "  " || textMessage.value === "," || textMessage.value === ".") {
        nameUserForm.style.boxShadow = "0 0 15px #f74a47";
        nameUserForm.value = "Укажите имя.";
        setTimeout(() => { nameUserForm.style.boxShadow = ""; nameUserForm.value = ""; }, 1500);
    }
    if (textMessage.value === "" || textMessage.value === " " || textMessage.value === "  ") {
        textMessage.style.boxShadow = "0 0 15px #f74a47";
        textMessage.value = "Оставте отзыв.";
        setTimeout(() => { textMessage.style.boxShadow = ""; textMessage.value = ""; }, 1500);
    }
};

function clickCloseForm() {
    paranja.classList.toggle('paranjaClass');
    paranjaForm.classList.toggle('paranjaFormClass');
    paranjaForm.style.display = "none";
    return 0;
};
// -------------------------------------------------------------------
var nameOrder = '', priceProduct = '', src = '';
var iBasket = 0;

function def() {
    iBasket = localStorage.getItem('iBasket');
    sumProduct.innerHTML = iBasket;
    nameOrder = localStorage.getItem('nameOrder');
    src = localStorage.getItem('src');
    priceProduct = localStorage.getItem('priceProduct');
    return 0;
};
def();

function customerСhoice(e) {
    if (iBasket == null) {
        iBasket = 0;
        nameOrder = '';
        src = '';
        priceProduct = '';
    }

    nameOrder = nameOrder + ((e.target.dataset.nameorder) + ',');
    src = src + ((e.target.dataset.src) + ',');
    priceProduct = priceProduct + ((e.target.dataset.priceproduct) + ',');
    alert(nameOrder);
    localStorage.setItem('nameOrder', nameOrder);
    localStorage.setItem('priceProduct', priceProduct);
    localStorage.setItem('src', src);

    iBasket++;
    sumProduct.innerHTML = iBasket;
    localStorage.setItem('iBasket', iBasket);
};