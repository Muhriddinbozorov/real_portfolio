// Scroll uchun animatsiya
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 900,
        once: true
    });
});
// Scroll qilganda navbar kichrayadi
window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    navbar.classList.toggle("scrolled", window.scrollY > 10);
});

// muvaffaqiyatli yuborildi xabari
document.getElementById("contactForm").addEventListener("submit", function() {
    setTimeout(() => {
        alert("Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanaman.");
    }, 300);
});

