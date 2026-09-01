/* =====================================================
   THREAD & DIAL
   COMPLETE PROFESSIONAL JAVASCRIPT
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
        color: "Black",
        sizes: ["S", "M", "L", "XL"],
        stock: 12,
        description:
            "A clean and versatile black t-shirt designed for everyday comfort and effortless style.",
        image:
            "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg"
    },

    {
        id: 2,
        name: "Premium White T-Shirt",
        category: "clothing",
        type: "t-shirts",
        price: 2299,
        color: "White",
        sizes: ["S", "M", "L", "XL"],
        stock: 15,
        description:
            "A premium white essential with a clean silhouette for modern everyday dressing.",
        image:
            "https://images.pexels.com/photos/18257675/pexels-photo-18257675.jpeg"
    },

    {
        id: 3,
        name: "Classic Oxford Shirt",
        category: "clothing",
        type: "shirts",
        price: 3999,
        color: "Blue",
        sizes: ["M", "L", "XL"],
        stock: 8,
        description:
            "A timeless Oxford shirt with a refined look that works for both casual and smart occasions.",
        image:
            "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 4,
        name: "Premium Casual Shirt",
        category: "clothing",
        type: "shirts",
        price: 4299,
        color: "Beige",
        sizes: ["S", "M", "L", "XL"],
        stock: 10,
        description:
            "A modern casual shirt crafted for relaxed styling and everyday comfort.",
        image:
            "https://images.pexels.com/photos/11546650/pexels-photo-11546650.jpeg"
    },

    {
        id: 5,
        name: "Essential Grey Hoodie",
        category: "clothing",
        type: "hoodies",
        price: 4999,
        color: "Grey",
        sizes: ["S", "M", "L", "XL"],
        stock: 7,
        description:
            "A comfortable grey hoodie with a minimal design and relaxed modern fit.",
        image:
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 6,
        name: "Classic Black Hoodie",
        category: "clothing",
        type: "hoodies",
        price: 5299,
        color: "Black",
        sizes: ["M", "L", "XL"],
        stock: 6,
        description:
            "A premium black hoodie designed for a clean and effortless streetwear look.",
        image:
            "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 7,
        name: "Modern Relaxed Pants",
        category: "clothing",
        type: "pants",
        price: 4499,
        color: "Black",
        sizes: ["M", "L", "XL"],
        stock: 9,
        description:
            "Relaxed modern pants with a versatile silhouette for everyday styling.",
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
        color: "Silver",
        sizes: ["One Size"],
        stock: 5,
        description:
            "A refined steel watch with a timeless design suitable for everyday and formal wear.",
        image:
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 9,
        name: "Minimal Black Watch",
        category: "watches",
        type: "minimal",
        price: 7499,
        color: "Black",
        sizes: ["One Size"],
        stock: 8,
        description:
            "A minimal black watch designed for understated and modern style.",
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 10,
        name: "Sport Chronograph",
        category: "watches",
        type: "sport",
        price: 9999,
        color: "Black",
        sizes: ["One Size"],
        stock: 4,
        description:
            "A sporty chronograph watch combining bold details with everyday functionality.",
        image:
            "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 11,
        name: "Luxury Silver Watch",
        category: "watches",
        type: "luxury",
        price: 14999,
        color: "Silver",
        sizes: ["One Size"],
        stock: 3,
        description:
            "A premium silver watch designed to add a sophisticated touch to your look.",
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
   CART
===================================================== */

let cart =
    JSON.parse(
        localStorage.getItem(CART_STORAGE_KEY)
    ) || [];


/* =====================================================
   CURRENT PRODUCT
===================================================== */

let currentModalProductId = null;

let selectedModalSize = null;

let selectedModalColor = null;


/* =====================================================
   CURRENT FILTERS
===================================================== */

let clothingFilter = "all";

let watchFilter = "all";

let selectedColor = "all";

let selectedSize = "all";

let stockFilter = "all";

let searchQuery = "";

let sortOption = "default";


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


/* =====================================================
   PRODUCT MODAL ELEMENTS
===================================================== */

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


/* =====================================================
   PRICE FORMAT
===================================================== */

function formatPrice(price) {

    return "RS:" + Number(price).toLocaleString();

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
   PRODUCT CARD
===================================================== */

function createProductCard(product) {

    const outOfStock =
        product.stock <= 0;

    const stockText =
        outOfStock
            ? "Out of Stock"
            : product.stock <= 5
                ? `Only ${product.stock} left`
                : "In Stock";

    const sizesText =
        product.sizes.join(", ");

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
                >

                <span class="product-stock-badge">
                    ${stockText}
                </span>

                <button
                    class="product-add-btn"
                    onclick="event.stopPropagation(); quickAddToCart(${product.id})"
                    ${outOfStock ? "disabled" : ""}
                >
                    ${outOfStock ? "Out of Stock" : "Add to Cart"}
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

                <div class="product-details">

                    <p>
                        <strong>Color:</strong>
                        ${product.color}
                    </p>

                    <p>
                        <strong>Sizes:</strong>
                        ${sizesText}
                    </p>

                </div>

                <strong class="product-price">
                    ${formatPrice(product.price)}
                </strong>

            </div>

        </article>

    `;

}


/* =====================================================
   FILTER PRODUCTS
===================================================== */

function filterProducts(category) {

    return products.filter(function(product) {

        if (product.category !== category) {
            return false;
        }


        /* TYPE FILTER */

        if (category === "clothing") {

            if (
                clothingFilter !== "all" &&
                product.type !== clothingFilter
            ) {
                return false;
            }

        }


        if (category === "watches") {

            if (
                watchFilter !== "all" &&
                product.type !== watchFilter
            ) {
                return false;
            }

        }


        /* COLOR */

        if (
            selectedColor !== "all" &&
            product.color !== selectedColor
        ) {
            return false;
        }


        /* SIZE */

        if (
            selectedSize !== "all" &&
            !product.sizes.includes(selectedSize)
        ) {
            return false;
        }


        /* STOCK */

        if (
            stockFilter === "in-stock" &&
            product.stock <= 0
        ) {
            return false;
        }


        if (
            stockFilter === "low-stock" &&
            (
                product.stock <= 0 ||
                product.stock > 5
            )
        ) {
            return false;
        }


        /* SEARCH */

        if (searchQuery) {

            const searchText =
                (
                    product.name +
                    " " +
                    product.category +
                    " " +
                    product.type +
                    " " +
                    product.color +
                    " " +
                    product.description
                ).toLowerCase();

            if (
                !searchText.includes(
                    searchQuery.toLowerCase()
                )
            ) {
                return false;
            }

        }


        return true;

    });

}


/* =====================================================
   SORT PRODUCTS
===================================================== */

function sortProducts(productList) {

    const sorted =
        [...productList];


    if (sortOption === "price-low") {

        sorted.sort(
            (a, b) =>
                a.price - b.price
        );

    }


    if (sortOption === "price-high") {

        sorted.sort(
            (a, b) =>
                b.price - a.price
        );

    }


    if (sortOption === "name-az") {

        sorted.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }


    if (sortOption === "name-za") {

        sorted.sort(
            (a, b) =>
                b.name.localeCompare(a.name)
        );

    }


    return sorted;

}


/* =====================================================
   DISPLAY CLOTHING
===================================================== */

function displayClothing() {

    if (!clothingGrid) {
        return;
    }


    let filtered =
        filterProducts("clothing");


    filtered =
        sortProducts(filtered);


    clothingGrid.innerHTML = "";


    if (filtered.length === 0) {

        clothingGrid.innerHTML = `

            <div class="no-products">
                No products found.
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

    if (!watchesGrid) {
        return;
    }


    let filtered =
        filterProducts("watches");


    filtered =
        sortProducts(filtered);


    watchesGrid.innerHTML = "";


    if (filtered.length === 0) {

        watchesGrid.innerHTML = `

            <div class="no-products">
                No products found.
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
   QUICK ADD TO CART
===================================================== */

function quickAddToCart(productId) {

    const product =
        products.find(function(product) {

            return product.id === productId;

        });


    if (!product) {
        return;
    }


    if (product.stock <= 0) {

        alert(
            "Sorry, this product is out of stock."
        );

        return;

    }


    /*
       Quick Add uses the first available
       size and the product's color.
    */

    const defaultSize =
        product.sizes[0];

    const defaultColor =
        product.color;


    addProductVariantToCart(
        product,
        defaultSize,
        defaultColor
    );

}


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(productId) {

    const product =
        products.find(function(product) {

            return product.id === productId;

        });


    if (!product) {
        return;
    }


    if (product.stock <= 0) {

        alert(
            "Sorry, this product is out of stock."
        );

        return;

    }


    const size =
        selectedModalSize ||
        product.sizes[0];

    const color =
        selectedModalColor ||
        product.color;


    addProductVariantToCart(
        product,
        size,
        color
    );

}


/* =====================================================
   ADD PRODUCT VARIANT TO CART
===================================================== */

function addProductVariantToCart(
    product,
    size,
    color
) {

    if (!product) {
        return;
    }


    if (!size) {

        alert(
            "Please select a size."
        );

        return;

    }


    if (!color) {

        alert(
            "Please select a color."
        );

        return;

    }


    /*
       Check whether same product,
       same size and same color already exist.
    */

    const existing =
        cart.find(function(item) {

            return (
                item.id === product.id &&
                item.size === size &&
                item.color === color
            );

        });


    if (existing) {

        if (
            existing.quantity >=
            product.stock
        ) {

            alert(
                `Only ${product.stock} item(s) available.`
            );

            return;

        }


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

    closeProductDetails();

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


    if (cartCount) {

        cartCount.textContent =
            quantity;

    }


    renderCart();

    updateCheckoutSummary();

}


/* =====================================================
   RENDER CART
===================================================== */

function renderCart() {

    if (!cartItems) {
        return;
    }


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


        if (cartTotal) {

            cartTotal.textContent =
                "RS:0";

        }

        return;

    }


    let subtotal = 0;


    cart.forEach(function(item) {

        const itemTotal =
            item.price *
            item.quantity;


        subtotal += itemTotal;


        /*
           Backward compatibility for
           old cart items saved in localStorage.
        */

        const displaySize =
            item.size || "One Size";

        const displayColor =
            item.color || "Standard";


        cartItems.innerHTML += `

            <div class="cart-item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >


                <div class="cart-item-info">

                    <h4>
                        ${item.name}
                    </h4>

                    <p>
                        ${formatPrice(item.price)}
                    </p>

                    <div class="cart-variant">

                        <span>
                            Size: ${displaySize}
                        </span>

                        <span>
                            Color: ${displayColor}
                        </span>

                    </div>


                    <div class="quantity-controls">

                        <button
                            onclick="decreaseQuantity(
                                ${item.id},
                                '${escapeAttribute(displaySize)}',
                                '${escapeAttribute(displayColor)}'
                            )"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            onclick="increaseQuantity(
                                ${item.id},
                                '${escapeAttribute(displaySize)}',
                                '${escapeAttribute(displayColor)}'
                            )"
                        >
                            +
                        </button>

                    </div>


                    <button
                        class="remove-item"
                        onclick="removeFromCart(
                            ${item.id},
                            '${escapeAttribute(displaySize)}',
                            '${escapeAttribute(displayColor)}'
                        )"
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


    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(subtotal);

    }

}


/* =====================================================
   ESCAPE ATTRIBUTE
===================================================== */

function escapeAttribute(value) {

    return String(value)
        .replace(/'/g, "\\'");

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
            item.price *
            item.quantity;

    });


    const total =
        subtotal + DELIVERY_FEE;


    if (checkoutItemsCount) {

        checkoutItemsCount.textContent =
            quantity;

    }


    if (checkoutSubtotal) {

        checkoutSubtotal.textContent =
            formatPrice(subtotal);

    }


    if (checkoutGrandTotal) {

        checkoutGrandTotal.textContent =
            formatPrice(
                cart.length > 0
                    ? total
                    : 0
            );

    }

}


/* =====================================================
   INCREASE QUANTITY
===================================================== */

function increaseQuantity(
    productId,
    size,
    color
) {

    const item =
        cart.find(function(item) {

            return (
                item.id === productId &&
                (item.size || "One Size") === size &&
                (item.color || "Standard") === color
            );

        });


    const product =
        products.find(function(product) {

            return product.id === productId;

        });


    if (!item || !product) {
        return;
    }


    if (
        item.quantity >=
        product.stock
    ) {

        alert(
            `Only ${product.stock} item(s) available.`
        );

        return;

    }


    item.quantity++;

    saveCart();

    updateCart();

}


/* =====================================================
   DECREASE QUANTITY
===================================================== */

function decreaseQuantity(
    productId,
    size,
    color
) {

    const item =
        cart.find(function(item) {

            return (
                item.id === productId &&
                (item.size || "One Size") === size &&
                (item.color || "Standard") === color
            );

        });


    if (!item) {
        return;
    }


    if (item.quantity > 1) {

        item.quantity--;

    } else {

        cart =
            cart.filter(function(item) {

                return !(
                    item.id === productId &&
                    (item.size || "One Size") === size &&
                    (item.color || "Standard") === color
                );

            });

    }


    saveCart();

    updateCart();

}


/* =====================================================
   REMOVE FROM CART
===================================================== */

function removeFromCart(
    productId,
    size,
    color
) {

    cart =
        cart.filter(function(item) {

            return !(
                item.id === productId &&
                (item.size || "One Size") === size &&
                (item.color || "Standard") === color
            );

        });


    saveCart();

    updateCart();

}


/* =====================================================
   OPEN CART
===================================================== */

function openCart() {

    if (!cartDrawer) {
        return;
    }


    cartDrawer.classList.add("show");


    if (overlay) {

        overlay.classList.add("show");

    }


    document.body.classList.add(
        "no-scroll"
    );

}


/* =====================================================
   CLOSE CART
===================================================== */

function closeCartDrawer() {

    if (cartDrawer) {

        cartDrawer.classList.remove(
            "show"
        );

    }


    if (overlay) {

        overlay.classList.remove(
            "show"
        );

    }


    document.body.classList.remove(
        "no-scroll"
    );

}


/* =====================================================
   OPEN CHECKOUT
===================================================== */

function openCheckout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;

    }


    updateCheckoutSummary();


    if (checkoutModal) {

        checkoutModal.classList.add(
            "show"
        );

    }


    document.body.classList.add(
        "no-scroll"
    );

}


/* =====================================================
   CLOSE CHECKOUT
===================================================== */

function closeCheckoutModal() {

    if (checkoutModal) {

        checkoutModal.classList.remove(
            "show"
        );

    }


    document.body.classList.remove(
        "no-scroll"
    );

}


/* =====================================================
   OPEN PRODUCT MODAL
===================================================== */

function openProductModal(productId) {

    const product =
        products.find(function(product) {

            return product.id === productId;

        });


    if (!product || !productModal) {
        return;
    }


    currentModalProductId =
        productId;


    /*
       Reset selections every time
       modal is opened.
    */

    selectedModalSize = null;

    selectedModalColor = null;


    /* IMAGE */

    if (modalProductImage) {

        modalProductImage.src =
            product.image;

        modalProductImage.alt =
            product.name;

    }


    /* CATEGORY */

    if (modalProductCategory) {

        modalProductCategory.textContent =
            product.type;

    }


    /* NAME */

    if (modalProductName) {

        modalProductName.textContent =
            product.name;

    }


    /* DESCRIPTION */

    if (modalProductDescription) {

        modalProductDescription.textContent =
            product.description;

    }


    /* PRICE */

    if (modalProductPrice) {

        modalProductPrice.textContent =
            formatPrice(product.price);

    }


    /* STOCK */

    if (modalProductStock) {

        if (product.stock <= 0) {

            modalProductStock.textContent =
                "Out of Stock";

        } else {

            modalProductStock.textContent =
                `${product.stock} items available`;

        }

    }


    /* =================================================
       SIZE BUTTONS
    ================================================= */

    if (modalSizes) {

        modalSizes.innerHTML = "";


        if (
            product.sizes &&
            product.sizes.length > 0
        ) {

            product.sizes.forEach(function(size) {

                const button =
                    document.createElement("button");

                button.type = "button";

                button.className =
                    "option-btn";

                button.textContent =
                    size;


                button.addEventListener(
                    "click",
                    function() {

                        selectedModalSize =
                            size;


                        modalSizes
                            .querySelectorAll(".option-btn")
                            .forEach(function(btn) {

                                btn.classList.remove(
                                    "active"
                                );

                            });


                        button.classList.add(
                            "active"
                        );

                    }
                );


                modalSizes.appendChild(
                    button
                );

            });


            if (modalSizeContainer) {

                modalSizeContainer.style.display =
                    "block";

            }

        } else {

            if (modalSizeContainer) {

                modalSizeContainer.style.display =
                    "none";

            }

        }

    }


    /* =================================================
       COLOR BUTTON
    ================================================= */

    if (modalColors) {

        modalColors.innerHTML = "";


        if (product.color) {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "option-btn";

            button.textContent =
                product.color;


            button.addEventListener(
                "click",
                function() {

                    selectedModalColor =
                        product.color;


                    modalColors
                        .querySelectorAll(".option-btn")
                        .forEach(function(btn) {

                            btn.classList.remove(
                                "active"
                            );

                        });


                    button.classList.add(
                        "active"
                    );

                }
            );


            modalColors.appendChild(
                button
            );


            if (modalColorContainer) {

                modalColorContainer.style.display =
                    "block";

            }

        } else {

            if (modalColorContainer) {

                modalColorContainer.style.display =
                    "none";

            }

        }

    }


    /* ADD TO CART BUTTON */

    if (modalAddToCart) {

        if (product.stock <= 0) {

            modalAddToCart.textContent =
                "Out of Stock";

            modalAddToCart.disabled =
                true;

        } else {

            modalAddToCart.textContent =
                "Add to Cart";

            modalAddToCart.disabled =
                false;

        }

    }


    productModal.classList.add(
        "show"
    );


    document.body.classList.add(
        "no-scroll"
    );

}


/* =====================================================
   CLOSE PRODUCT MODAL
===================================================== */

function closeProductDetails() {

    if (!productModal) {
        return;
    }


    productModal.classList.remove(
        "show"
    );


    document.body.classList.remove(
        "no-scroll"
    );


    currentModalProductId =
        null;

    selectedModalSize =
        null;

    selectedModalColor =
        null;

}


/* =====================================================
   MODAL ADD TO CART
===================================================== */

if (modalAddToCart) {

    modalAddToCart.addEventListener(
        "click",
        function() {

            if (
                currentModalProductId === null
            ) {
                return;
            }


            const product =
                products.find(function(product) {

                    return (
                        product.id ===
                        currentModalProductId
                    );

                });


            if (!product) {
                return;
            }


            /*
               Require size selection.
            */

            if (
                product.sizes &&
                product.sizes.length > 0 &&
                !selectedModalSize
            ) {

                alert(
                    "Please select a size."
                );

                return;

            }


            /*
               Require color selection.
            */

            if (
                product.color &&
                !selectedModalColor
            ) {

                alert(
                    "Please select a color."
                );

                return;

            }


            addProductVariantToCart(
                product,
                selectedModalSize,
                selectedModalColor
            );

        }
    );

}


/* =====================================================
   CART BUTTON
===================================================== */

if (cartButton) {

    cartButton.addEventListener(
        "click",
        function() {

            openCart();

        }
    );

}


/* =====================================================
   CLOSE CART
===================================================== */

if (closeCart) {

    closeCart.addEventListener(
        "click",
        function() {

            closeCartDrawer();

        }
    );

}


/* =====================================================
   OVERLAY
===================================================== */

if (overlay) {

    overlay.addEventListener(
        "click",
        function() {

            closeCartDrawer();

        }
    );

}


/* =====================================================
   CHECKOUT BUTTON
===================================================== */

if (checkoutButton) {

    checkoutButton.addEventListener(
        "click",
        function() {

            if (cart.length === 0) {

                alert(
                    "Your cart is empty."
                );

                return;

            }


            closeCartDrawer();

            openCheckout();

        }
    );

}


/* =====================================================
   CLOSE CHECKOUT
===================================================== */

if (closeCheckout) {

    closeCheckout.addEventListener(
        "click",
        function() {

            closeCheckoutModal();

        }
    );

}


/* =====================================================
   CLOSE PRODUCT MODAL
===================================================== */

if (closeProductModal) {

    closeProductModal.addEventListener(
        "click",
        function() {

            closeProductDetails();

        }
    );

}


/* =====================================================
   CLOSE PRODUCT MODAL ON BACKGROUND
===================================================== */

if (productModal) {

    productModal.addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                productModal
            ) {

                closeProductDetails();

            }

        }
    );

}


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


            button.classList.add(
                "active"
            );


            clothingFilter =
                button.getAttribute(
                    "data-filter"
                );


            refreshProducts();

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


            button.classList.add(
                "active"
            );


            watchFilter =
                button.getAttribute(
                    "data-filter"
                );


            refreshProducts();

        }
    );

});


/* =====================================================
   SEARCH
===================================================== */

const searchInput =
    document.getElementById(
        "productSearch"
    );


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function() {

            searchQuery =
                searchInput.value.trim();

            refreshProducts();

        }
    );

}


/* =====================================================
   SORT
===================================================== */

const sortSelect =
    document.getElementById(
        "productSort"
    );


if (sortSelect) {

    sortSelect.addEventListener(
        "change",
        function() {

            const value =
                sortSelect.value;


            if (value === "low-high") {

                sortOption =
                    "price-low";

            } else if (
                value === "high-low"
            ) {

                sortOption =
                    "price-high";

            } else {

                sortOption =
                    "default";

            }


            refreshProducts();

        }
    );

}


/* =====================================================
   OPTIONAL COLOR FILTER
===================================================== */

const colorSelect =
    document.getElementById(
        "colorFilter"
    );


if (colorSelect) {

    colorSelect.addEventListener(
        "change",
        function() {

            selectedColor =
                colorSelect.value;

            refreshProducts();

        }
    );

}


/* =====================================================
   OPTIONAL SIZE FILTER
===================================================== */

const sizeSelect =
    document.getElementById(
        "sizeFilter"
    );


if (sizeSelect) {

    sizeSelect.addEventListener(
        "change",
        function() {

            selectedSize =
                sizeSelect.value;

            refreshProducts();

        }
    );

}


/* =====================================================
   OPTIONAL STOCK FILTER
===================================================== */

const stockSelect =
    document.getElementById(
        "stockFilter"
    );


if (stockSelect) {

    stockSelect.addEventListener(
        "change",
        function() {

            stockFilter =
                stockSelect.value;

            refreshProducts();

        }
    );

}


/* =====================================================
   ORDER FORM
===================================================== */

if (orderForm) {

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
                subtotal +
                DELIVERY_FEE;


            const orderNumber =
                Math.floor(
                    10000 +
                    Math.random() *
                    90000
                );


            /* =================================================
               WHATSAPP MESSAGE
            ================================================= */

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
                "ORDER ITEMS\n\n";


            cart.forEach(function(item) {

                const displaySize =
                    item.size || "One Size";

                const displayColor =
                    item.color || "Standard";


                message +=
                    item.name +
                    "\n";


                message +=
                    "Size: " +
                    displaySize +
                    "\n";


                message +=
                    "Color: " +
                    displayColor +
                    "\n";


                message +=
                    "Quantity: " +
                    item.quantity +
                    "\n";


                message +=
                    "Price: " +
                    formatPrice(
                        item.price *
                        item.quantity
                    ) +
                    "\n\n";

            });


            message +=
                "Subtotal: " +
                formatPrice(subtotal);


            message +=
                "\nDelivery: " +
                formatPrice(
                    DELIVERY_FEE
                );


            message +=
                "\nTotal: " +
                formatPrice(total);


            const whatsappURL =
                "https://wa.me/" +
                WHATSAPP_NUMBER +
                "?text=" +
                encodeURIComponent(
                    message
                );


            /* =================================================
               SUCCESS SCREEN
            ================================================= */

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


            /* =================================================
               CLEAR CART
            ================================================= */

            cart = [];

            saveCart();

            updateCart();


            /* =================================================
               CONTINUE SHOPPING
            ================================================= */

            const continueShopping =
                document.getElementById(
                    "continueShopping"
                );


            if (continueShopping) {

                continueShopping.addEventListener(
                    "click",
                    function() {

                        closeCheckoutModal();

                        location.reload();

                    }
                );

            }

        }
    );

}


/* =====================================================
   MOBILE MENU
===================================================== */

if (menuButton && navLinks) {

    menuButton.addEventListener(
        "click",
        function() {

            navLinks.classList.toggle(
                "show"
            );

        }
    );


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

}


/* =====================================================
   NEWSLETTER
===================================================== */

if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            if (newsletterMessage) {

                newsletterMessage.textContent =
                    "Thank you for subscribing!";

            }


            newsletterForm.reset();

        }
    );

}


/* =====================================================
   INITIAL LOAD
===================================================== */

displayClothing();

displayWatches();

updateCart();