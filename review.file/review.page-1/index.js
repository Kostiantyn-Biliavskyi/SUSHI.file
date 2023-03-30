
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
//------------------------------------------------------------

createReview.addEventListener("click", clientWritesReview);

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
// -------------------------------------------------------
function def() {
    iBasket = localStorage.getItem('iBasket'); // козина изменяет количество
    if (iBasket == 0) {
        sumProduct.innerHTML = '';
    } else {
        sumProduct.innerHTML = iBasket;
    }
};
def();

// -----------------------------------------------------------
menu.addEventListener('click', function (e) { // при клике в меню делает бакграунд серам.выделяет клик
    e.target.closest('.menuButton').style.backgroundColor = '#ebe8e8';
    setTimeout(() => e.target.closest('.menuButton').style.backgroundColor = '', 150);
});
// -------------------------------------------------------------
jQuery(function ($) {
    $("#telUser").mask("+380( 99 ) 999 99 99");
});
// ------------------------------------------------------------