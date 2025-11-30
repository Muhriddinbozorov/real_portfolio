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
const form = document.getElementById("contactForm");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
e.preventDefault();

status.innerHTML = `
    <div class="alert alert-info text-center p-3 shadow-sm" style="animation: fadeIn 0.4s;">
    ⏳ Xabar yuborilmoqda...
    </div>
`;

const formData = new FormData(form);

const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
});

if (response.ok) {
    status.innerHTML = `
    <div class="card border-success shadow-sm" style="animation: fadeIn 0.4s;">
        <div class="card-body text-center text-success">
        <h5 class="card-title">✔ Xabar muvaffaqiyatli yuborildi!</h5>
        <p class="card-text">Menga xabar yuborganingiz uchun tashakkur.</p>
        </div>
    </div>
    `;
    form.reset();
} else {
    status.innerHTML = `
    <div class="card border-danger shadow-sm" style="animation: fadeIn 0.4s;">
        <div class="card-body text-center text-danger">
        <h5 class="card-title">❌ Xatolik yuz berdi</h5>
        <p class="card-text">Iltimos, qayta urinib ko‘ring.</p>
        </div>
    </div>
    `;
}
});


