
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
blockSliderMiniButtonRigth.addEventListener("click", sliderMiniRigth);
var sumSliderMini = 0, sliderMiniWidth, widthSliderMiniUl1 = sliderMiniUl1.offsetWidth;
var sumSliderMiniUl1 = 0;
function sliderMiniLeft() {
    let sliderMiniClass = document.querySelector(".sliderMini");
    sliderMiniWidth = sliderMiniClass.offsetWidth;
    sumSliderMini = sumSliderMini - sliderMiniWidth;

    sumSliderMiniUl1 = widthSliderMiniUl1 - sliderMiniWidth;
    alert(sumSliderMiniUl1);
    if (sumSliderMiniUl1 >= sliderMiniWidth) {
        sliderMiniUl1.style.left = sumSliderMini + "px";
    }
};
function sliderMiniRigth() {
    // let sliderMiniClass = document.querySelector(".sliderMini");
    // sliderMiniWidth = sliderMiniClass.offsetWidth;

    // sumSliderMini = sumSliderMini + sliderMiniWidth;

    // sumSliderMiniUl1 = widthSliderMiniUl1 + sumSliderMini;

    // if (sumSliderMiniUl1 > sliderMiniWidth) {
    //     sliderMiniUl1.style.left = sumSliderMini + "px";
    // }

};