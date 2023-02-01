document.addEventListener("DOMContentLoaded", function() {
const homeBtn = document.querySelector("#home-btn");
const newsletterBtn = document.querySelector("#newsletter-btn");
const aboutBtn = document.querySelector("#about-btn");
const contactBtn = document.querySelector("#contact-btn");
const signOutBtn = document.querySelector("#sign-out-btn");

if (homeBtn) {
homeBtn.addEventListener("click", function() {
window.location.href = "home.html";
});
}
if (newsletterBtn) {
newsletterBtn.addEventListener("click", function() {
window.location.href = "registration.html";
});
}
if (aboutBtn) {
aboutBtn.addEventListener("click", function() {
window.location.href = "about.html";
});
}
if (contactBtn) {
contactBtn.addEventListener("click", function() {
window.location.href = "contact.html";
});
}
if (signOutBtn) {
signOutBtn.addEventListener("click", function() {
window.location.href = "index.html";
});
}
});