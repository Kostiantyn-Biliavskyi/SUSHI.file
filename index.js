
var stopSetTimeoutGo, stopGoDotBlack, i = -1, sliderDot;
mainSlider.addEventListener("click", typ);

function typ(e) {
    var y = e.target.dataset.nameSushi;
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
// -----------------------------------------------------------
jQuery(function ($) {
    $("#telUser").mask("+380( 99 ) 999 99 99");
});