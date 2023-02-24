createBlock();
function createBlock() {
    let nameOrder = [], priceProduct = [], src = [], iBasket1 = 0;

    iBasket1 = localStorage.getItem('iBasket');
    nameOrder = localStorage.getItem('nameOrder').split(',');
    priceProduct = localStorage.getItem('priceProduct').split(',');
    src = localStorage.getItem('src').split(',');

    // document.getElementById("de").innerHTML = nameOrder;

    for (let a = 0; a < iBasket1; a++) {

        let clone = blockProduct.cloneNode(true);
        fotoProductMini.src = '../' + src[a];
        nameProduct.innerHTML = nameOrder[a];
        de.after(clone);
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
// setTimeout(localStorage.clear(), 0);
mainBlock.addEventListener("click", deleteBlock);

function deleteBlock(e) {
    alert(e.target.parentElement.dataset.dataIndex);
    e.target.parentElement.remove();
};