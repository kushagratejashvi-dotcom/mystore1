let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

function addCart(name, price, image) {

    cart.push({
        name: name,
        price: price,
        image: image,
        qty: 1
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " added to cart!");
}

function updateCartCount() {

    const count = document.getElementById("cart-count");

    if(count){
        count.innerHTML = cart.length;
    }

}