
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

mainSlider.addEventListener("mouseover", mouseMainSlider);
mainSlider.addEventListener("mouseout", mouseLeavesMainSlider);
var bi, bo, mi;
function mouseMainSlider(e) {

    bi = e.target.dataset.mig;
    // if (e.target.className == "mainSliderFoto" && bi != "hlop") {
    // alert(e.target.id + e.target.className + " заходит");
    // clearTimeout(stopSetTimeoutGo);
    // }
    ku();
    return 0;
};
function mouseLeavesMainSlider(e) {
    bo = e.target.dataset.mig;
    mi = e.target.className;
    if (e.target.className == "mainSliderFoto" && bo != "hlop") {
        alert(e.target.id + e.target.className + " покидает");
        sliderDot[i].style.backgroundColor = "#A4ACAD";
        movementFotoMain();
    }
    // ty();
    return 0;
};

function ku() {
    if (bi != "hlop") {
        alert(bo + " - ku - зашёл");
        // alert(e.target.id + e.target.className + " заходит");
        clearTimeout(stopSetTimeoutGo);
    }
};
// function ty() {
if (mi == "mainSliderFoto" && bo == "hlop") {
    //         alert(e.target.id + e.target.className + " покидает");
    //         sliderDot[i].style.backgroundColor = "#A4ACAD";
    //         movementFotoMain();
}
// }
// ----------------------- функция слайдера фото и точки меняют цвет ------------------