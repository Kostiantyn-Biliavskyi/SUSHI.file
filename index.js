
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

function movementFotoMain() {
    let lengthFoto = mainSlider.querySelectorAll('ul>li>img');
    let widthMainSliderFoto = mainSlider.offsetWidth, sum = widthMainSliderFoto, i = 1;
    function go() {
        i++;
        if (i <= lengthFoto.length) {
            sum = sum - widthMainSliderFoto;
            mainSliderUl.style.left = sum + "px";
        } else {
            sum = 0;
            i = 1;
            mainSliderUl.style.left = sum + "px";
        }
        setTimeout(go, 4000);
    };
    go();

};
movementFotoMain();