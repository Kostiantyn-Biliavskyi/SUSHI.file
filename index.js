
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
};
function mouseLeavesMainSlider(e) {
    sliderDot[i].style.backgroundColor = "#A4ACAD";
    movementFotoMain();
};

// ----------------------- функция слайдера фото и точки меняют цвет ------------------
blockSliderMiniButtonLeft.addEventListener("click", sliderMiniLeft);
blockSliderMiniButtonLeft.addEventListener("mouseover", mi);
blockSliderMiniButtonLeft.addEventListener("mouseout", ti);

blockSliderMiniButtonRigth.addEventListener("click", sliderMiniRigth);
blockSliderMiniButtonRigth.addEventListener("mouseover", ma);
blockSliderMiniButtonRigth.addEventListener("mouseout", to);

var sumSliderMini = 0, sliderMiniWidth, widthSliderMiniUl1 = sliderMiniUl1.offsetWidth;
var sumSliderMiniUl1 = widthSliderMiniUl1, colorButton1 = "#f08c0a", colorButton2 = "#f3be79";
var sliderMiniClass = document.querySelector(".sliderMini");

function sliderMiniLeft() {
    sliderMiniWidth = sliderMiniClass.offsetWidth;
    if (sumSliderMiniUl1 > sliderMiniWidth) {
        sumSliderMini = sumSliderMini - sliderMiniWidth;
        sumSliderMiniUl1 = sumSliderMiniUl1 - sliderMiniWidth;
        sliderMiniUl1.style.left = sumSliderMini + "px";
        // colorButton1 = "#f08c0a";
    } else {
        // colorButton1 = "#f3be79";
    }
};

function sliderMiniRigth() {
    sliderMiniWidth = sliderMiniClass.offsetWidth;
    if (sumSliderMiniUl1 < widthSliderMiniUl1) {
        sumSliderMini = sumSliderMini + sliderMiniWidth;
        sumSliderMiniUl1 = sumSliderMiniUl1 + sliderMiniWidth;
        sliderMiniUl1.style.left = sumSliderMini + "px";
        // colorButton1 = "#f3be79";
    } else {
        // colorButton1 = "#f08c0a";
    }
};
function mi() {
    if (sumSliderMiniUl1 > sliderMiniWidth) {
        colorButton1 = "#f08c0a";
    } else {
        colorButton1 = "#f3be79";
    }
    blockSliderMiniButtonLeft.style.backgroundColor = colorButton1;
};
function ti() {
    if (sumSliderMiniUl1 < widthSliderMiniUl1) {
        colorButton1 = "#f3be79";
    } else {
        colorButton1 = "#f08c0a";
    }
    blockSliderMiniButtonLeft.style.backgroundColor = colorButton2;
};
function ma() {
    blockSliderMiniButtonRigth.style.backgroundColor = colorButton1;
};
function to() {
    blockSliderMiniButtonRigth.style.backgroundColor = colorButton2;
}