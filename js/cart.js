let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {

    let box = document.getElementById("cart-items");

    let total = 0;

    box.innerHTML = "";

    cart.forEach((item, index) => {

        total += item.price * item.qty;

       let image = "";

if (item.name === "Product 1") {
    image = "images/product1.jpeg";
} else if (item.name === "Product 2") {
    image = "images/product2.jpeg";
} else if (item.name === "Product 3") {
    image = "images/product3.jpeg";
}

box.innerHTML += `
<div class="cart-card">

    <img src="${image}" class="cart-img">

    <div class="cart-info">

        <h2>${item.name}</h2>

        <h3>₹${item.price}</h3>

        <div class="qty">
            <button onclick="decrease(${index})">-</button>
            <span>${item.qty}</span>
            <button onclick="increase(${index})">+</button>
        </div>

        <button class="remove" onclick="removeItem(${index})">
            Remove
        </button>

    </div>

</div>
`;
         

    document.getElementById("total").innerHTML = total;

}

function increase(index){

    cart[index].qty++;

    saveCart();

    renderCart();

}

function decrease(index){

    if(cart[index].qty>1){

        cart[index].qty--;

    }

    saveCart();

    renderCart();

}

function removeItem(index){

    cart.splice(index,1);

    saveCart();

    renderCart();

}

renderCart();