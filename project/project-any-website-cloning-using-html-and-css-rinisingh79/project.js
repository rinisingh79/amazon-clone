// Search Functionality
alert("JavaScript Connected ");
const searchInput = document.querySelector(".searchInput");

const boxes = document.querySelectorAll(".box");

searchInput.addEventListener("keyup", function () {
    let value = searchInput.value.toLowerCase();

    boxes.forEach(box => {
        let title = box.querySelector("h2").innerText.toLowerCase();

        if (title.includes(value)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
});

// Cart Counter
let cartCount = 0;
const cart = document.querySelector(".cart");

// Add click event on all product boxes
boxes.forEach(box => {
    box.addEventListener("click", function () {
        cartCount++;
        cart.innerHTML =
            `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;
    });
});

// Back To Top Button
document.querySelector(".footer-part1").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Sign In Button
document.querySelector(".login").addEventListener("click", () => {
    alert("Redirecting to Sign In Page...");
});

// Product Hover Effect
boxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.style.transform = "scale(1.03)";
        box.style.transition = "0.3s";
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "scale(1)";
    });
});

// Menu Button
document.querySelector(".menu-option").addEventListener("click", () => {
    alert("Menu Opened!");
});

// Amazon India Link
document.querySelector(".mid-message a").addEventListener("click", (e) => {
    e.preventDefault();
    window.open("https://www.amazon.in", "_blank");
});