
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
    let sum = widthMainSliderFoto, i = -1, ii = -1;
    let sliderDot = navigationMainSlider1.querySelectorAll('ul>li');

    function go() {
        i++;
        if (i < lengthFoto.length) {
            sum = sum - widthMainSliderFoto;
            mainSliderUl.style.left = sum + "px";
            sliderDot[i].style.backgroundColor = "#f66206";
        } else {
            sum = 0;
            i = 0;
            sliderDot[i].style.backgroundColor = "#f66206";
            mainSliderUl.style.left = sum + "px";
        }
        setTimeout(go, 4000);
    };
    go();

    function goDotBlack() {
        ii++;
        sliderDot[ii].style.backgroundColor = "#A4ACAD";
        if (ii == lengthFoto.length - 1) {
            ii = -1;
        }
        setTimeout(goDotBlack, 4000);
    };
    setTimeout(goDotBlack, 4000);
};
movementFotoMain();
// ----------------------- функция слайдера фото и точки меняют цвет ------------------