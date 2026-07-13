const form = document.getElementById("checkoutForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("🎉 Order Placed Successfully!");

    localStorage.removeItem("cart");

    window.location.href = "index.html";

});