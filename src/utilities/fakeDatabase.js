const addToDb = (id) => {
    let shoppingCart = {};
    const shoreCart = localStorage.getItem('shoppingCart');
    if (shoreCart) {
        shoppingCart = JSON.parse(shoreCart);
    }

    const quantity = shoppingCart[id];
    if(quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}