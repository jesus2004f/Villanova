const menu = {
    "Helados Clásicos": [
        { name: "Arroz con leche", price: 48 },
        { name: "Chocolate", price: 48 },
        { name: "Fresas con crema", price: 48 },
        // Agrega más helados clásicos
    ],
    // Agrega más categorías y productos
};

const cart = [];
let total = 0;

document.addEventListener("DOMContentLoaded", () => {
    displayCategory("Helados Clásicos");
});

function displayCategory(categoryName) {
    const categoryDiv = document.getElementById(categoryName.toLowerCase().replace(/\s/g, '-'));

    menu[categoryName].forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `<p>${product.name} - $${product.price.toFixed(2)}</p>`;
        productDiv.onclick = () => addToCart(product);

        categoryDiv.appendChild(productDiv);
    });
}

function addToCart(product) {
    cart.push(product);
    total += product.price;

    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById("cart-items");
    const totalDiv = document.getElementById("total");

    cartItemsDiv.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsDiv.appendChild(li);
    });

    totalDiv.innerHTML = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    const ticketDiv = document.getElementById("ticket");
    const date = new Date().toLocaleString();

    const ticketContent = `
        <h2>¡Gracias por tu compra!</h2>
        <p>Fecha: ${date}</p>
        <h3>Detalles de la compra:</h3>
        <ul>
            ${cart.map(item => `<li>${item.name} - $${item.price.toFixed(2)}</li>`).join("")}
        </ul>
        <p>Total: $${total.toFixed(2)}</p>
    `;

    ticketDiv.innerHTML = ticketContent;
}

