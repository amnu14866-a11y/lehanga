const products = [
    {
        id: 1,
        name: "Royal Red Bridal Lehenga",
        category: "bridal",
        price: 18999,
        image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 2,
        name: "Pink Embroidered Lehenga",
        category: "party",
        price: 12999,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 3,
        name: "Golden Designer Lehenga",
        category: "designer",
        price: 15999,
        image: "https://images.unsplash.com/photo-1610189012906-5a1c1d2f9a5f?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 4,
        name: "Maroon Wedding Lehenga",
        category: "bridal",
        price: 21999,
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 5,
        name: "Pastel Green Lehenga",
        category: "party",
        price: 9999,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 6,
        name: "Blue Velvet Designer Lehenga",
        category: "designer",
        price: 17999,
        image: "https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 7,
        name: "Peach Bridal Lehenga",
        category: "bridal",
        price: 19999,
        image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 8,
        name: "Black Party Lehenga",
        category: "party",
        price: 11999,
        image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&w=700&q=80"
    }
];

let cart = [];

function displayProducts(list) {

    const container = document.getElementById("productContainer");

    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = "<p>No products found.</p>";
        return;
    }

    list.forEach(product => {

        container.innerHTML += `
            <div class="product-card">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image"
                >

                <div class="product-info">

                    <span class="category">
                        ${product.category}
                    </span>

                    <h3>${product.name}</h3>

                    <div class="price">
                        ₹${product.price.toLocaleString("en-IN")}
                    </div>

                    <button
                        class="add-btn"
                        onclick="addToCart(${product.id})"
                    >
                        Add to Cart
                    </button>

                </div>

            </div>
        `;
    });
}

function filterProducts(category) {

    if (category === "all") {
        displayProducts(products);
    } else {
        const filtered = products.filter(
            product => product.category === category
        );

        displayProducts(filtered);
    }
}

function searchProducts() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(search)
    );

    displayProducts(filtered);
}

function addToCart(id) {

    const product = products.find(
        product => product.id === id
    );

    cart.push(product);

    updateCart();

    alert(`${product.name} added to cart!`);
}

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((product, index) => {

        total += product.price;

        cartItems.innerHTML += `
            <div class="cart-item">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div>
                    <h4>${product.name}</h4>

                    <p>
                        ₹${product.price.toLocaleString("en-IN")}
                    </p>

                    <button
                        class="remove-btn"
                        onclick="removeFromCart(${index})"
                    >
                        Remove
                    </button>
                </div>

            </div>
        `;
    });

    cartCount.textContent = cart.length;

    cartTotal.textContent =
        total.toLocaleString("en-IN");
}

function openCart() {

    document
        .getElementById("cart")
        .classList.add("active");

    document
        .getElementById("cartOverlay")
        .classList.add("active");
}

function closeCart() {

    document
        .getElementById("cart")
        .classList.remove("active");

    document
        .getElementById("cartOverlay")
        .classList.remove("active");
}

function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    alert(
        "Thank you for shopping with Royal Lehenga! " +
        "Checkout functionality can be connected to a payment gateway."
    );
}

function sendMessage(event) {

    event.preventDefault();

    alert(
        "Thank you! Your message has been sent successfully."
    );

    event.target.reset();
}

displayProducts(products);
updateCart();

