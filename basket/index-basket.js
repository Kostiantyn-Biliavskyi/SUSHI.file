createBlock();
function createBlock() {
    let nameOrder = [], priceProduct = [], src = [], iBasket1 = 0;

    iBasket1 = localStorage.getItem('iBasket');
    nameOrder = localStorage.getItem('nameOrder').split(',');
    priceProduct = localStorage.getItem('priceProduct').split(',');
    src = localStorage.getItem('src').split(',');

    // document.getElementById("de").innerHTML = nameOrder;
    for (let a = 0; a < nameOrder.length - 1; a++) {

        let clone = document.createElement('div');
        mainBlock.after(clone);
        clone.append(templateCloneBlock.content.cloneNode(true));
        let nameProd = document.querySelector('.nameProduct');
        let fotoMin = document.querySelector('.fotoProductMini');
        let priceProd = document.querySelector('.priceProduct');
        let blockProd = document.querySelector('.blockProduct');
        fotoMin.src = '../' + src[a];
        nameProd.innerHTML = nameOrder[a];
        priceProd.innerHTML = priceProduct[a];
        blockProd.dataset.iterator = a;
        /* let block = document.createElement('div');
         block.id = 'blockProdukt';
         de.prepend(block);
 
         let img = document.createElement('img');
         img.src = '../' + src[a];
         img.id = 'fotoMini';
         block.prepend(img);
 
         let nameProduct = document.createElement('div');
         nameProduct.innerHTML = nameOrder[a];
         nameProduct.id = 'yt';
         block.prepend(nameProduct);
 
         let clearBl = document.createElement('div');
         clearBl.innerHTML = 'clear';
         clearBl.id = 'clearBlock';
         block.prepend(clearBl);*/
    }

};
//localStorage.clear();
bodyBlock.addEventListener("click", deleteBlock);

function deleteBlock(e) {
    let y;
    if (e.target.className === 'deleterProduct') {
        y = +e.targe.parentElement.dataset.iterator;
        alert(typeof (y));
        e.target.parentElement.remove();
        delete nameOrder[y];
        delete priceProduct[y];
        delete src[y];
        // nameOrder = localStorage.setItem('tt');
        // src = localStorage.setItem('ss');
        // priceProduct = localStorage.setItem('pp');
    }
};