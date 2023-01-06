
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
    }
};


