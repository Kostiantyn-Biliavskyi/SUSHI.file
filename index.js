
document.querySelector('.mainPageText').style.color = '#ff4000';
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
                alert('ERROR');
                break;
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

    var masName = [], label = 0, classMas, typ, classMasMini, classMasMini2;
    classMas = mainSliderUl.querySelectorAll('.mainSliderLi');
    classMasMini = sliderMiniUl1.querySelectorAll('.sliderMiniLi');
    classMasMini2 = sliderMiniUl2.querySelectorAll('.sliderMiniLi');

    if (nameOrder === null || nameOrder === '' || nameOrder === ' ') {
    } else {
        masName = localStorage.getItem('nameOrder').split(',');
        label = 1;
    }

    if (label === 1) {
        for (let i = 0; i < classMas.length; i++) {
            typ = classMas[i].querySelectorAll('.mainSliderText1');

            for (let ix = 0; ix < typ.length; typ++) {
                for (let r = 0; r < masName.length; r++) {
                    if (typ[ix].textContent === masName[r]) {
                        classMas[i].querySelector('.mainSliderTextButton').textContent = 'В корзине';
                    }
                }
            }
        }

        for (let i = 0; i < classMasMini.length; i++) {
            typ = classMasMini[i].querySelectorAll('.sliderMiniLiTextName');

            for (let ix = 0; ix < typ.length; typ++) {
                for (let r = 0; r < masName.length; r++) {
                    if (typ[ix].textContent === masName[r]) {
                        classMasMini[i].querySelector('.literColor').textContent = 'В корзине';
                    }
                }
            }
        }

        for (let i = 0; i < classMasMini2.length; i++) {
            typ = classMasMini2[i].querySelectorAll('.sliderMiniLiTextName');

            for (let ix = 0; ix < typ.length; typ++) {
                for (let r = 0; r < masName.length; r++) {
                    if (typ[ix].textContent === masName[r]) {
                        classMasMini2[i].querySelector('.literColor').textContent = 'В корзине';
                    }
                }
            }
        }
    }

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

        if (e.target.innerHTML != 'Хочу') {
            return 0;
        }

        src = src + '../' + (e.target.parentNode.querySelector('.mainSliderFoto').getAttribute('src') + ',');
        nameOrder = nameOrder + (e.target.parentNode.querySelector('.mainSliderText1').textContent + ',');
        priceProduct = priceProduct + (e.target.parentNode.querySelector('.mainNewPrise').textContent + ',');
        localStorage.setItem('nameOrder', nameOrder);
        localStorage.setItem('priceProduct', priceProduct);
        localStorage.setItem('src', src);
        iBasket++;
        sumProduct.innerHTML = iBasket;
        localStorage.setItem('iBasket', iBasket);
        e.target.innerHTML = 'В корзине';

    }

    if (e.target.id === 'sliderMiniLiButton') {

        if (nameOrder == null) {
            iBasket = 0;
            nameOrder = '';
            src = '';
            priceProduct = '';
        }

        if (e.target.innerHTML != 'Хочу') {
            return 0;
        }

        src = src + '../' + (e.target.parentNode.querySelector('.sliderMiniLiFoto').getAttribute('src') + ',');
        nameOrder = nameOrder + (e.target.parentNode.querySelector('.sliderMiniLiTextName').textContent + ',');
        priceProduct = priceProduct + (e.target.parentNode.querySelector('.Thprices').textContent + ',');
        localStorage.setItem('nameOrder', nameOrder);
        localStorage.setItem('priceProduct', priceProduct);
        localStorage.setItem('src', src);
        iBasket++;
        sumProduct.innerHTML = iBasket;
        localStorage.setItem('iBasket', iBasket);
        e.target.innerHTML = 'В корзине';
    }
    return 0;
};
// -------------------------------------------------------------
var clickButton = document.querySelector('.block');
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