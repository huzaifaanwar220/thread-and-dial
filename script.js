/* =====================================================
   THREAD & DIAL
   FINAL JAVASCRIPT
===================================================== */


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
        stock: "in-stock",
        badge: "NEW",
        description:
            "A clean everyday black t-shirt made for effortless modern style.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "White"],
        image:
            "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=900"
    },

    {
        id: 2,
        name: "Premium White T-Shirt",
        category: "clothing",
        type: "t-shirts",
        price: 2299,
        stock: "in-stock",
        badge: "BEST SELLER",
        description:
            "A versatile premium white t-shirt with a timeless minimalist look.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Black"],
        image:
            "https://images.pexels.com/photos/18257675/pexels-photo-18257675.jpeg?auto=compress&cs=tinysrgb&w=900"
    },

    {
        id: 3,
        name: "Classic Oxford Shirt",
        category: "clothing",
        type: "shirts",
        price: 3999,
        stock: "limited",
        badge: "LIMITED",
        description:
            "A refined Oxford shirt designed for smart casual everyday wear.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Blue"],
        image:
            "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 4,
        name: "Premium Casual Shirt",
        category: "clothing",
        type: "shirts",
        price: 4299,
        stock: "in-stock",
        badge: "NEW",
        description:
            "A modern casual shirt combining comfort with a polished silhouette.",
        sizes: ["M", "L", "XL"],
        colors: ["Black", "Grey"],
        image:
            "https://images.pexels.com/photos/11546650/pexels-photo-11546650.jpeg?auto=compress&cs=tinysrgb&w=900"
    },

    {
        id: 5,
        name: "Essential Grey Hoodie",
        category: "clothing",
        type: "hoodies",
        price: 4999,
        stock: "in-stock",
        badge: "BEST SELLER",
        description:
            "A comfortable grey hoodie designed for relaxed everyday outfits.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Grey", "Black"],
        image:
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 6,
        name: "Classic Black Hoodie",
        category: "clothing",
        type: "hoodies",
        price: 5299,
        stock: "limited",
        badge: "LIMITED",
        description:
            "A premium black hoodie with a clean and understated aesthetic.",
        sizes: ["M", "L", "XL"],
        colors: ["Black", "Grey"],
        image:
            "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 7,
        name: "Modern Relaxed Pants",
        category: "clothing",
        type: "pants",
        price: 4499,
        stock: "in-stock",
        badge: "",
        description:
            "Relaxed modern pants designed to pair easily with everyday essentials.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Beige"],
        image:
            "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=85"
    },


    /* ================= WATCHES ================= */

    {
        id: 8,
        name: "Classic Steel Watch",
        category: "watches",
        type: "classic",
        price: 8999,
        stock: "in-stock",
        badge: "BEST SELLER",
        description:
            "A classic steel watch with a refined design for everyday wear.",
        sizes: ["One Size"],
        colors: ["Silver", "Black"],
        image:
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 9,
        name: "Minimal Black Watch",
        category: "watches",
        type: "minimal",
        price: 7499,
        stock: "in-stock",
        badge: "NEW",
        description:
            "A minimalist black watch created for clean and confident looks.",
        sizes: ["One Size"],
        colors: ["Black"],
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 10,
        name: "Sport Chronograph",
        category: "watches",
        type: "sport",
        price: 9999,
        stock: "limited",
        badge: "LIMITED",
        description:
            "A bold sport chronograph designed for active modern lifestyles.",
        sizes: ["One Size"],
        colors: ["Black", "Silver"],
        image:
            "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 11,
        name: "Luxury Silver Watch",
        category: "watches",
        type: "luxury",
        price: 14999,
        stock: "in-stock",
        badge: "PREMIUM",
        description:
            "A sophisticated silver watch designed to elevate formal looks.",
        sizes: ["One Size"],
        colors: ["Silver"],
        image:
            "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=900&q=85"
    }

];


/* =====================================================
   SETTINGS
===================================================== */

const DELIVERY_FEE = 200;

const WHATSAPP_NUMBER = "923246387175";

const CART_STORAGE_KEY = "threadDialCart";


/* =====================================================
   STATE
===================================================== */

let cart = [];

let currentProduct = null;

let selectedSize = "";

let selectedColor = "";

let currentClothingFilter = "all";

let currentWatchFilter = "all";


/* =====================================================
   LOAD CART FROM LOCAL STORAGE
===================================================== */

function loadCart() {

    try {

        const savedCart =
            localStorage.getItem(CART_STORAGE_KEY);

        if (savedCart) {

            cart = JSON.parse(savedCart);

        }

    } catch (error) {

        cart = [];

    }

}


/* =====================================================
   SAVE CART
===================================================== */

function saveCart() {

    localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(cart)
    );

}


/* =====================================================
   DOM
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

const modalProductStock =
    document.getElementById("modalProductStock");

const modalSizes =
    document.getElementById("modalSizes");

const modalColors =
    document.getElementById("modalColors");

const modalSizeContainer =
    document.getElementById("modalSizeContainer");

const modalColorContainer =
    document.getElementById("modalColorContainer");

const modalAddToCart =
    document.getElementById("modalAddToCart");


/* SEARCH */

const productSearch =
    document.getElementById("productSearch");

const productSort =
    document.getElementById("productSort");


/* =====================================================
   PRICE FORMAT
===================================================== */

function formatPrice(price) {

    return "RS:" + price.toLocaleString();

}


/* =====================================================
   STOCK TEXT
===================================================== */

function getStockText(stock) {

    if (stock === "in-stock") {

        return "In Stock";

    }

    if (stock === "limited") {

        return "Limited Stock";

    }

    return "Out of Stock";

}


/* =====================================================
   CREATE PRODUCT CARD
===================================================== */

function createProductCard(product) {

    const isOutOfStock =
        product.stock === "out";

    return `

        <article
            class="product-card"
            onclick="openProductModal(${product.id})"
        >

            <div class="product-image">

                ${
                    product.badge
                        ? `
                            <span class="product-badge">
                                ${product.badge}
                            </span>
                        `
                        : ""
                }

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.src='https://placehold.co/900x1100?text=THREAD+%26+DIAL'"
                >

                <button
                    class="product-add-btn ${
                        isOutOfStock ? "disabled" : ""
                    }"
                    onclick="event.stopPropagation(); ${
                        isOutOfStock
                            ? ""
                            : `quickAddToCart(${product.id})`
                    }"
                    ${isOutOfStock ? "disabled" : ""}
                >

                    ${
                        isOutOfStock
                            ? "Out of Stock"
                            : "Add to Cart"
                    }

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

                <div class="product-price-row">

                    <strong>
                        ${formatPrice(product.price)}
                    </strong>

                    <span
                        class="stock-text ${
                            product.stock === "limited"
                                ? "limited"
                                : product.stock === "out"
                                    ? "out-stock"
                                    : "in-stock"
                        }"
                    >
                        ${getStockText(product.stock)}
                    </span>

                </div>

            </div>

        </article>

    `;

}


/* =====================================================
   GET FILTERED PRODUCTS
===================================================== */

function getFilteredProducts(category, filter) {

    const searchText =
        productSearch.value
            .toLowerCase()
            .trim();

    let result =
        products.filter(function(product) {

            const matchesCategory =
                product.category === category;

            const matchesFilter =
                filter === "all" ||
                product.type === filter;

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(searchText) ||

                product.description
                    .toLowerCase()
                    .includes(searchText) ||

                product.type
                    .toLowerCase()
                    .includes(searchText);

            return (
                matchesCategory &&
                matchesFilter &&
                matchesSearch
            );

        });


    /* SORT */

    if (productSort.value === "low-high") {

        result.sort(function(a, b) {

            return a.price - b.price;

        });

    }


    if (productSort.value === "high-low") {

        result.sort(function(a, b) {

            return b.price - a.price;

        });

    }


    return result;

}


/* =====================================================
   DISPLAY CLOTHING
===================================================== */

function displayClothing() {

    const filtered =
        getFilteredProducts(
            "clothing",
            currentClothingFilter
        );


    clothingGrid.innerHTML = "";


    if (filtered.length === 0) {

        clothingGrid.innerHTML = `

            <div class="cart-empty">

                <h3>
                    No products found
                </h3>

                <p>
                    Try another search or category.
                </p>

            </div>

        `;

        return;

    }


    filtered.forEach(function(product) {

        clothingGrid.innerHTML +=
            createProductCard(product);

    });

}


/* =====================================================
   DISPLAY WATCHES
===================================================== */

function displayWatches() {

    const filtered =
        getFilteredProducts(
            "watches",
            currentWatchFilter
        );


    watchesGrid.innerHTML = "";


    if (filtered.length === 0) {

        watchesGrid.innerHTML = `

            <div class="cart-empty">

                <h3>
                    No products found
                </h3>

                <p>
                    Try another search or category.
                </p>

            </div>

        `;

        return;

    }


    filtered.forEach(function(product) {

        watchesGrid.innerHTML +=
            createProductCard(product);

    });

}


/* =====================================================
   REFRESH PRODUCTS
===================================================== */

function refreshProducts() {

    displayClothing();

    displayWatches();

}


/* =====================================================
   QUICK ADD
===================================================== */

function quickAddToCart(productId) {

    const product =
        products.find(function(product) {

            return product.id === productId;

        });


    if (!product) {
        return;
    }


    if (product.stock === "out") {

        return;

    }


    let size =
        product.sizes &&
        product.sizes.length
            ? product.sizes[0]
            : "One Size";


    let color =
        product.colors &&
        product.colors.length
            ? product.colors[0]
            : "Default";


    addProductToCart(
        product,
        size,
        color
    );

}


/* =====================================================
   ADD PRODUCT TO CART
===================================================== */

function addProductToCart(
    product,
    size,
    color
) {

    if (product.stock === "out") {

        alert("This product is out of stock.");

        return;

    }


    const existing =
        cart.find(function(item) {

            return (
                item.id === product.id &&
                item.size === size &&
                item.color === color
            );

        });


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            image: product.image,

            size: size,

            color: color,

            quantity: 1

        });

    }


    saveCart();

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


    cartCount.textContent = quantity;


    renderCart();

    updateCheckoutSummary();

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

        cartTotal.textContent = "RS:0";

        return;

    }


    let subtotal = 0;


    cart.forEach(function(item, index) {

        const itemTotal =
            item.price * item.quantity;


        subtotal += itemTotal;


        cartItems.innerHTML += `

            <div class="cart-item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    onerror="this.src='https://placehold.co/300x400?text=THREAD+%26+DIAL'"
                >


                <div class="cart-item-info">

                    <h4>
                        ${item.name}
                    </h4>

                    <div class="cart-variant">
                        Size: ${item.size}
                        |
                        Color: ${item.color}
                    </div>

                    <p>
                        ${formatPrice(item.price)}
                    </p>


                    <div class="quantity-controls">

                        <button
                            onclick="decreaseQuantity(${index})"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            onclick="increaseQuantity(${index})"
                        >
                            +
                        </button>

                    </div>


                    <button
                        class="remove-item"
                        onclick="removeFromCart(${index})"
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

}


/* =====================================================
   INCREASE
===================================================== */

function increaseQuantity(index) {

    if (!cart[index]) {
        return;
    }


    cart[index].quantity++;


    saveCart();

    updateCart();

}


/* =====================================================
   DECREASE
===================================================== */

function decreaseQuantity(index) {

    if (!cart[index]) {
        return;
    }


    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }


    saveCart();

    updateCart();

}


/* =====================================================
   REMOVE
===================================================== */

function removeFromCart(index) {

    if (!cart[index]) {
        return;
    }


    cart.splice(index, 1);


    saveCart();

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
   PRODUCT MODAL
===================================================== */

function openProductModal(productId) {

    const product =
        products.find(function(product) {

            return product.id === productId;

        });


    if (!product) {
        return;
    }


    currentProduct = product;

    selectedSize =
        product.sizes[0] || "One Size";

    selectedColor =
        product.colors[0] || "Default";


    modalProductImage.src =
        product.image;

    modalProductImage.alt =
        product.name;


    modalProductCategory.textContent =
        product.type;


    modalProductName.textContent =
        product.name;


    modalProductDescription.textContent =
        product.description;


    modalProductPrice.textContent =
        formatPrice(product.price);


    modalProductStock.textContent =
        getStockText(product.stock);


    modalProductStock.className =
        "modal-stock " +
        (
            product.stock === "limited"
                ? "limited"
                : product.stock === "out"
                    ? "out-stock"
                    : "in-stock"
        );


    renderModalOptions();


    modalAddToCart.disabled =
        product.stock === "out";


    modalAddToCart.textContent =
        product.stock === "out"
            ? "Out of Stock"
            : "Add to Cart";


    productModal.classList.add("show");

    document.body.classList.add("no-scroll");

}


/* =====================================================
   RENDER MODAL OPTIONS
===================================================== */

function renderModalOptions() {

    if (!currentProduct) {
        return;
    }


    /* SIZE */

    modalSizes.innerHTML = "";


    if (
        currentProduct.sizes &&
        currentProduct.sizes.length > 0
    ) {

        modalSizeContainer.style.display =
            "block";


        currentProduct.sizes.forEach(function(size) {

            const button =
                document.createElement("button");


            button.className =
                "option-button";


            if (size === selectedSize) {

                button.classList.add("selected");

            }


            button.textContent = size;


            button.type = "button";


            button.addEventListener(
                "click",
                function() {

                    selectedSize = size;

                    renderModalOptions();

                }
            );


            modalSizes.appendChild(button);

        });

    } else {

        modalSizeContainer.style.display =
            "none";

    }


    /* COLOR */

    modalColors.innerHTML = "";


    if (
        currentProduct.colors &&
        currentProduct.colors.length > 0
    ) {

        modalColorContainer.style.display =
            "block";


        currentProduct.colors.forEach(function(color) {

            const button =
                document.createElement("button");


            button.className =
                "option-button";


            if (color === selectedColor) {

                button.classList.add("selected");

            }


            button.textContent = color;


            button.type = "button";


            button.addEventListener(
                "click",
                function() {

                    selectedColor = color;

                    renderModalOptions();

                }
            );


            modalColors.appendChild(button);

        });

    } else {

        modalColorContainer.style.display =
            "none";

    }

}


/* =====================================================
   CLOSE PRODUCT MODAL
===================================================== */

function closeProductDetails() {

    productModal.classList.remove("show");

    document.body.classList.remove("no-scroll");

    currentProduct = null;

}


/* =====================================================
   MODAL ADD TO CART
===================================================== */

modalAddToCart.addEventListener(
    "click",
    function() {

        if (!currentProduct) {
            return;
        }


        addProductToCart(
            currentProduct,
            selectedSize,
            selectedColor
        );


        closeProductDetails();

    }
);


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
        formatPrice(
            cart.length > 0
                ? total
                : 0
        );

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
   CART BUTTON
===================================================== */

cartButton.addEventListener(
    "click",
    function() {

        openCart();

    }
);


/* =====================================================
   CLOSE CART
===================================================== */

closeCart.addEventListener(
    "click",
    function() {

        closeCartDrawer();

    }
);


/* =====================================================
   OVERLAY
===================================================== */

overlay.addEventListener(
    "click",
    function() {

        closeCartDrawer();

    }
);


/* =====================================================
   CHECKOUT
===================================================== */

checkoutButton.addEventListener(
    "click",
    function() {

        closeCartDrawer();

        openCheckout();

    }
);


/* =====================================================
   CLOSE CHECKOUT
===================================================== */

closeCheckout.addEventListener(
    "click",
    function() {

        closeCheckoutModal();

    }
);


/* =====================================================
   CLOSE PRODUCT MODAL
===================================================== */

closeProductModal.addEventListener(
    "click",
    function() {

        closeProductDetails();

    }
);


/* =====================================================
   CLICK OUTSIDE PRODUCT MODAL
===================================================== */

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


/* =====================================================
   SEARCH
===================================================== */

productSearch.addEventListener(
    "input",
    function() {

        refreshProducts();

    }
);


/* =====================================================
   SORT
===================================================== */

productSort.addEventListener(
    "change",
    function() {

        refreshProducts();

    }
);


/* =====================================================
   CLOTHING FILTER
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

                    btn.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add("active");


            currentClothingFilter =
                button.getAttribute(
                    "data-filter"
                );


            displayClothing();

        }
    );

});


/* =====================================================
   WATCH FILTER
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

                    btn.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add("active");


            currentWatchFilter =
                button.getAttribute(
                    "data-filter"
                );


            displayWatches();

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

            alert(
                "Your cart is empty."
            );

            return;

        }


        const customerName =
            document
                .getElementById("customerName")
                .value
                .trim();


        const customerPhone =
            document
                .getElementById("customerPhone")
                .value
                .trim();


        const customerAddress =
            document
                .getElementById("customerAddress")
                .value
                .trim();


        const paymentMethod =
            document
                .getElementById("paymentMethod")
                .value;


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


        /* WHATSAPP MESSAGE */

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
                " | Size: " +
                item.size +
                " | Color: " +
                item.color +
                " | Qty: " +
                item.quantity +
                " | " +
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


        /* SUCCESS SCREEN */

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


        /* CLEAR CART */

        cart = [];

        saveCart();

        updateCart();


        /* CONTINUE */

        document
            .getElementById(
                "continueShopping"
            )
            .addEventListener(
                "click",
                function() {

                    closeCheckoutModal();

                    location.reload();

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

                navLinks.classList.remove(
                    "show"
                );

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
   INITIAL LOAD
===================================================== */

loadCart();

displayClothing();

displayWatches();

updateCart();