/* =====================================================
   THREAD & DIAL
   PROFESSIONAL E-COMMERCE JAVASCRIPT
===================================================== */


/* =====================================================
   SETTINGS
===================================================== */

const DELIVERY_FEE = 200;

const WHATSAPP_NUMBER = "923246387175";


/* =====================================================
   PRODUCTS
===================================================== */

const products = [

    /* ================= CLOTHING ================= */

    {
        id: 1,
        name: "Essential Black T-Shirt",
        category: "clothing",
        type: "t-shirts",
        price: 2499,
        image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
        description: "A clean and versatile black t-shirt designed for everyday comfort and effortless style."
    },

    {
        id: 2,
        name: "Premium White T-Shirt",
        category: "clothing",
        type: "t-shirts",
        price: 2299,
        image: "https://images.pexels.com/photos/18257675/pexels-photo-18257675.jpeg",
        description: "A premium white essential with a clean modern silhouette."
    },

    {
        id: 3,
        name: "Classic Oxford Shirt",
        category: "clothing",
        type: "shirts",
        price: 3999,
        image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=80",
        description: "A timeless Oxford shirt suitable for smart and casual occasions."
    },

    {
        id: 4,
        name: "Premium Casual Shirt",
        category: "clothing",
        type: "shirts",
        price: 4299,
        image: "https://images.pexels.com/photos/11546650/pexels-photo-11546650.jpeg",
        description: "A relaxed casual shirt designed for modern everyday looks."
    },

    {
        id: 5,
        name: "Essential Grey Hoodie",
        category: "clothing",
        type: "hoodies",
        price: 4999,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80",
        description: "A comfortable grey hoodie with a clean minimalist design."
    },

    {
        id: 6,
        name: "Classic Black Hoodie",
        category: "clothing",
        type: "hoodies",
        price: 5299,
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=80",
        description: "A premium black hoodie for effortless street and casual styling."
    },

    {
        id: 7,
        name: "Modern Relaxed Pants",
        category: "clothing",
        type: "pants",
        price: 4499,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80",
        description: "Modern relaxed-fit pants designed for comfort and everyday wear."
    },


    /* ================= WATCHES ================= */

    {
        id: 8,
        name: "Classic Steel Watch",
        category: "watches",
        type: "classic",
        price: 8999,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=80",
        description: "A classic steel watch with a refined design for timeless outfits."
    },

    {
        id: 9,
        name: "Minimal Black Watch",
        category: "watches",
        type: "minimal",
        price: 7499,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
        description: "A minimalist black watch created for clean and modern looks."
    },

    {
        id: 10,
        name: "Sport Chronograph",
        category: "watches",
        type: "sport",
        price: 9999,
        image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=900&q=80",
        description: "A sporty chronograph-style watch built for confident everyday wear."
    },

    {
        id: 11,
        name: "Luxury Silver Watch",
        category: "watches",
        type: "luxury",
        price: 14999,
        image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=900&q=80",
        description: "A sophisticated silver watch designed to elevate formal and premium looks."
    }

];


/* =====================================================
   CART
===================================================== */

let cart = [];


/* =====================================================
   DOM ELEMENTS
===================================================== */

const clothingGrid =
    document.getElementById("clothingGrid");

const watchesGrid =
    document.getElementById("watchesGrid");

const cartButton =
    document.getElementById("cartButton");

const cartCount =
    document.getElementById("cartCount");

const cartDrawer =
    document.getElementById("cartDrawer");

const closeCart =
    document.getElementById("closeCart");

const cartItems =
    document.getElementById("cartItems");

const cartTotal =
    document.getElementById("cartTotal");

const overlay =
    document.getElementById("checkoutOverlay");

const checkoutButton =
    document.getElementById("checkoutButton");

const checkoutModal =
    document.getElementById("checkoutModal");

const closeCheckout =
    document.getElementById("closeCheckout");

const orderForm =
    document.getElementById("orderForm");

const checkoutContent =
    document.getElementById("checkoutContent");

const checkoutItemsCount =
    document.getElementById("checkoutItemsCount");

const checkoutSubtotal =
    document.getElementById("checkoutSubtotal");

const checkoutGrandTotal =
    document.getElementById("checkoutGrandTotal");

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");

const newsletterForm =
    document.getElementById("newsletterForm");

const newsletterMessage =
    document.getElementById("newsletterMessage");


/* PRODUCT MODAL */

const productModal =
    document.getElementById("productModal");

const closeProductModal =
    document.getElementById("closeProductModal");

const modalProductImage =
    document.getElementById("modalProductImage");

const modalProductCategory =
    document.getElementById("modalProductCategory");

const modalProductName =
    document.getElementById("modalProductName");

const modalProductDescription =
    document.getElementById("modalProductDescription");

const modalProductPrice =
    document.getElementById("modalProductPrice");

const modalAddToCart =
    document.getElementById("modalAddToCart");

let selectedProductId = null;


/* =====================================================
   PRICE FORMAT
===================================================== */

function formatPrice(price) {

    return "RS:" + price.toLocaleString("en-PK");

}


/* =====================================================
   CREATE PRODUCT CARD
===================================================== */

function createProductCard(product) {

    return `
        <article
            class="product-card"
            onclick="openProductModal(${product.id})"
        >

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.src='https://placehold.co/600x700?text=THREAD+%26+DIAL'"
                >

                <button
                    class="product-add-btn"
                    onclick="event.stopPropagation(); addToCart(${product.id})"
                >
                    Add to Cart
                </button>

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.type}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p class="product-description">
                    ${product.description}
                </p>

                <strong>
                    ${formatPrice(product.price)}
                </strong>

            </div>

        </article>
    `;

}


/* =====================================================
   DISPLAY CLOTHING
===================================================== */

function displayClothing(filter = "all") {

    if (!clothingGrid) return;

    clothingGrid.innerHTML = "";

    const filteredProducts =
        products.filter(function(product) {

            return (
                product.category === "clothing" &&
                (
                    filter === "all" ||
                    product.type === filter
                )
            );

        });


    filteredProducts.forEach(function(product) {

        clothingGrid.innerHTML +=
            createProductCard(product);

    });

}


/* =====================================================
   DISPLAY WATCHES
===================================================== */

function displayWatches(filter = "all") {

    if (!watchesGrid) return;

    watchesGrid.innerHTML = "";

    const filteredProducts =
        products.filter(function(product) {

            return (
                product.category === "watches" &&
                (
                    filter === "all" ||
                    product.type === filter
                )
            );

        });


    filteredProducts.forEach(function(product) {

        watchesGrid.innerHTML +=
            createProductCard(product);

    });

}


/* =====================================================
   PRODUCT MODAL
===================================================== */

function openProductModal(productId) {

    const product =
        products.find(function(product) {

            return product.id === productId;

        });


    if (!product) return;


    selectedProductId = productId;

    modalProductImage.src = product.image;

    modalProductImage.alt = product.name;

    modalProductCategory.textContent =
        product.type;

    modalProductName.textContent =
        product.name;

    modalProductDescription.textContent =
        product.description;

    modalProductPrice.textContent =
        formatPrice(product.price);

    productModal.classList.add("show");

    document.body.classList.add("no-scroll");

}


function closeProductDetails() {

    productModal.classList.remove("show");

    document.body.classList.remove("no-scroll");

}


/* =====================================================
   PRODUCT MODAL EVENTS
===================================================== */

closeProductModal.addEventListener(
    "click",
    closeProductDetails
);


productModal.addEventListener(
    "click",
    function(event) {

        if (
            event.target === productModal
        ) {

            closeProductDetails();

        }

    }
);


modalAddToCart.addEventListener(
    "click",
    function() {

        if (selectedProductId) {

            addToCart(selectedProductId);

            closeProductDetails();

        }

    }
);


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(productId) {

    const product =
        products.find(function(product) {

            return product.id === productId;

        });


    if (!product) return;


    const existing =
        cart.find(function(item) {

            return item.id === productId;

        });


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            image: product.image,

            quantity: 1

        });

    }


    updateCart();

    openCart();

}


/* =====================================================
   UPDATE CART
===================================================== */

function updateCart() {

    let quantity = 0;

    cart.forEach(function(item) {

        quantity += item.quantity;

    });


    cartCount.textContent =
        quantity;

    renderCart();

}


/* =====================================================
   RENDER CART
===================================================== */

function renderCart() {

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="cart-empty">

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add something you love.
                </p>

            </div>
        `;

        cartTotal.textContent =
            "RS:0";

        updateCheckoutSummary();

        return;

    }


    let subtotal = 0;


    cart.forEach(function(item) {

        const itemTotal =
            item.price * item.quantity;

        subtotal += itemTotal;


        cartItems.innerHTML += `

            <div class="cart-item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    onerror="this.src='https://placehold.co/200x250?text=Product'"
                >


                <div class="cart-item-info">

                    <h4>
                        ${item.name}
                    </h4>

                    <p>
                        ${formatPrice(item.price)}
                    </p>


                    <div class="quantity-controls">

                        <button
                            onclick="decreaseQuantity(${item.id})"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            onclick="increaseQuantity(${item.id})"
                        >
                            +
                        </button>

                    </div>


                    <button
                        class="remove-item"
                        onclick="removeFromCart(${item.id})"
                    >
                        Remove
                    </button>

                </div>


                <strong class="cart-item-total">
                    ${formatPrice(itemTotal)}
                </strong>

            </div>

        `;

    });


    cartTotal.textContent =
        formatPrice(subtotal);


    updateCheckoutSummary();

}


/* =====================================================
   CHECKOUT SUMMARY
===================================================== */

function updateCheckoutSummary() {

    let quantity = 0;

    let subtotal = 0;


    cart.forEach(function(item) {

        quantity += item.quantity;

        subtotal +=
            item.price * item.quantity;

    });


    const total =
        subtotal + DELIVERY_FEE;


    checkoutItemsCount.textContent =
        quantity;

    checkoutSubtotal.textContent =
        formatPrice(subtotal);

    checkoutGrandTotal.textContent =
        cart.length > 0
            ? formatPrice(total)
            : "RS:0";

}


/* =====================================================
   INCREASE QUANTITY
===================================================== */

function increaseQuantity(productId) {

    const item =
        cart.find(function(item) {

            return item.id === productId;

        });


    if (!item) return;


    item.quantity++;

    updateCart();

}


/* =====================================================
   DECREASE QUANTITY
===================================================== */

function decreaseQuantity(productId) {

    const item =
        cart.find(function(item) {

            return item.id === productId;

        });


    if (!item) return;


    if (item.quantity > 1) {

        item.quantity--;

    } else {

        cart =
            cart.filter(function(item) {

                return item.id !== productId;

            });

    }


    updateCart();

}


/* =====================================================
   REMOVE ITEM
===================================================== */

function removeFromCart(productId) {

    cart =
        cart.filter(function(item) {

            return item.id !== productId;

        });


    updateCart();

}


/* =====================================================
   OPEN CART
===================================================== */

function openCart() {

    cartDrawer.classList.add("show");

    overlay.classList.add("show");

    document.body.classList.add("no-scroll");

}


/* =====================================================
   CLOSE CART
===================================================== */

function closeCartDrawer() {

    cartDrawer.classList.remove("show");

    overlay.classList.remove("show");

    document.body.classList.remove("no-scroll");

}


/* =====================================================
   OPEN CHECKOUT
===================================================== */

function openCheckout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;

    }


    updateCheckoutSummary();

    checkoutModal.classList.add("show");

    document.body.classList.add("no-scroll");

}


/* =====================================================
   CLOSE CHECKOUT
===================================================== */

function closeCheckoutModal() {

    checkoutModal.classList.remove("show");

    document.body.classList.remove("no-scroll");

}


/* =====================================================
   CART EVENTS
===================================================== */

cartButton.addEventListener(
    "click",
    openCart
);


closeCart.addEventListener(
    "click",
    closeCartDrawer
);


overlay.addEventListener(
    "click",
    closeCartDrawer
);


checkoutButton.addEventListener(
    "click",
    function() {

        closeCartDrawer();

        openCheckout();

    }
);


closeCheckout.addEventListener(
    "click",
    closeCheckoutModal
);


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeCartDrawer();

            closeCheckoutModal();

            closeProductDetails();

        }

    }
);


/* =====================================================
   CLOTHING FILTERS
===================================================== */

const clothingFilters =
    document.querySelectorAll(
        ".clothing-filters .filter-btn"
    );


clothingFilters.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            clothingFilters.forEach(
                function(btn) {

                    btn.classList.remove("active");

                }
            );


            button.classList.add("active");


            const filter =
                button.getAttribute("data-filter");


            displayClothing(filter);

        }
    );

});


/* =====================================================
   WATCH FILTERS
===================================================== */

const watchFilters =
    document.querySelectorAll(
        ".watch-filters .filter-btn"
    );


watchFilters.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            watchFilters.forEach(
                function(btn) {

                    btn.classList.remove("active");

                }
            );


            button.classList.add("active");


            const filter =
                button.getAttribute("data-filter");


            displayWatches(filter);

        }
    );

});


/* =====================================================
   ORDER FORM
===================================================== */

orderForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        if (cart.length === 0) {

            alert("Your cart is empty.");

            return;

        }


        const customerName =
            document.getElementById(
                "customerName"
            ).value.trim();


        const customerPhone =
            document.getElementById(
                "customerPhone"
            ).value.trim();


        const customerAddress =
            document.getElementById(
                "customerAddress"
            ).value.trim();


        const paymentMethod =
            document.getElementById(
                "paymentMethod"
            ).value;


        let subtotal = 0;


        cart.forEach(function(item) {

            subtotal +=
                item.price *
                item.quantity;

        });


        const total =
            subtotal + DELIVERY_FEE;


        const orderNumber =
            Math.floor(
                10000 +
                Math.random() * 90000
            );


        /* ================= MESSAGE ================= */

        let message =
            "THREAD & DIAL ORDER\n\n";


        message +=
            "Order ID: TD-" +
            orderNumber +
            "\n\n";


        message +=
            "CUSTOMER DETAILS\n";


        message +=
            "Name: " +
            customerName +
            "\n";


        message +=
            "Phone: " +
            customerPhone +
            "\n";


        message +=
            "Address: " +
            customerAddress +
            "\n";


        message +=
            "Payment: " +
            paymentMethod +
            "\n\n";


        message +=
            "ORDER ITEMS\n";


        cart.forEach(function(item) {

            message +=
                item.name +
                " x " +
                item.quantity +
                " = " +
                formatPrice(
                    item.price *
                    item.quantity
                ) +
                "\n";

        });


        message +=
            "\nSubtotal: " +
            formatPrice(subtotal);


        message +=
            "\nDelivery: " +
            formatPrice(DELIVERY_FEE);


        message +=
            "\nTotal: " +
            formatPrice(total);


        const whatsappURL =
            "https://wa.me/" +
            WHATSAPP_NUMBER +
            "?text=" +
            encodeURIComponent(message);


        /* ================= SUCCESS ================= */

        checkoutContent.innerHTML = `

            <div class="order-success">

                <div class="success-icon">
                    ✓
                </div>

                <p class="eyebrow">
                    ORDER RECEIVED
                </p>

                <h2>
                    Thank You, ${customerName}!
                </h2>

                <p>
                    Your order has been created successfully.
                </p>

                <p>
                    Order ID:
                    <strong>
                        TD-${orderNumber}
                    </strong>
                </p>

                <p>
                    Total:
                    <strong>
                        ${formatPrice(total)}
                    </strong>
                </p>


                <div class="success-actions">

                    <a
                        href="${whatsappURL}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="whatsapp-btn"
                    >
                        Send Order on WhatsApp
                    </a>


                    <button
                        class="continue-btn"
                        id="continueShopping"
                    >
                        Continue Shopping
                    </button>

                </div>

            </div>

        `;


        cart = [];

        updateCart();


        document
            .getElementById("continueShopping")
            .addEventListener(
                "click",
                function() {

                    closeCheckoutModal();

                    window.location.reload();

                }
            );

    }
);


/* =====================================================
   MOBILE MENU
===================================================== */

menuButton.addEventListener(
    "click",
    function() {

        navLinks.classList.toggle("show");

    }
);


/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

navLinks
    .querySelectorAll("a")
    .forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

                navLinks.classList.remove("show");

            }
        );

    });


/* =====================================================
   NEWSLETTER
===================================================== */

newsletterForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        newsletterMessage.textContent =
            "Thank you for subscribing!";


        newsletterForm.reset();

    }
);


/* =====================================================
   INITIAL LOAD
===================================================== */

displayClothing();

displayWatches();

updateCart();