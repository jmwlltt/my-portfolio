
// =========================================
// 1. SELECT HTML ELEMENTS
// =========================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".navigation a");
const backToTop = document.getElementById("backToTop");
const yearElement = document.getElementById("year");


// =========================================
// 2. MOBILE NAVIGATION
// =========================================

menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});


// CLOSE MENU AFTER CLICKING A LINK

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});


// =========================================
// 3. AUTOMATIC COPYRIGHT YEAR
// =========================================

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =========================================
// 4. BACK TO TOP BUTTON
// =========================================

window.addEventListener("scroll", () => {

    if (backToTop) {
        backToTop.classList.toggle(
            "visible",
            window.scrollY > 450
        );
    }

    // =====================================
    // 5. ACTIVE NAVIGATION LINK
    // =====================================

    let currentSection = "home";

    document.querySelectorAll("main section[id]").forEach((section) => {
        if (window.scrollY >= section.offsetTop - 150) {
            currentSection = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${currentSection}`
        );
    });

});


// =========================================
// 6. BACK TO TOP CLICK FUNCTION
// =========================================

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
