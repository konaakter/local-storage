function getaliment(){
    const productfild = document.getElementById('product');
    const qualityfild = document.getElementById('quiality');
    const product = productfild.value
    const quality =  qualityfild.value
    console.log(product, quality);
    getli(product, quality);
    saveproductstroge(product, quality);
}

const getli = (product, quality) =>{
    const ul = document.getElementById('ulcontainer');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quality}`;
    ul.appendChild(li);

}
 const getstoreproduct = () =>{
    let cart = {}
    const loadcard = localStorage.getItem('cart');
    if (loadcard) {
        cart = JSON.parse(loadcard);    
    }
    return cart;
 }
 const saveproductstroge = (product, quality) =>{
    const cart = getstoreproduct()
    cart[product] = quality;
    const cartstringfild = JSON.stringify(cart);
    localStorage.setItem('cart', cartstringfild);

 }

 const showcartstorage = () =>{
    const savecart = getstoreproduct();
    console.log(savecart);
    for(const product in savecart){
        quality = savecart[product];
        console.log(product, quality)
        getli(product, quality)

    }
 }
 showcartstorage();