document.addEventListener("DOMContentLoaded", function() {
  var submitBtn = document.querySelector("input[type='submit']");
  var nameInput = document.querySelector("input[type='text']");
  var emailInput = document.querySelector("input[type='email']");

  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var name = nameInput.value;
    var email = emailInput.value;

    // Regex validation for the name
    var nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(name)) {
      alert("Name must only contain letters");
      return;
    }

    alert("Thank you for signing up, " + name + "! We will send updates to " + email + ".");
  });
});

var dropdown = document.querySelector(".dropdown-btn");
dropdown.addEventListener("click", function() {
  document.querySelector(".dropdown-content").classList.toggle("show");
});

const homeBtn = document.querySelector("#home-btn");
const newsletterBtn = document.querySelector("#newsletter-btn");
const aboutBtn = document.querySelector("#about-btn");
const contactBtn = document.querySelector("#contact-btn");
const signOutBtn = document.querySelector("#sign-out-btn");

homeBtn.addEventListener("click", function() {
  window.location.href = "home.html";
});

newsletterBtn.addEventListener("click", function() {
  window.location.href = "registration.html";
});

aboutBtn.addEventListener("click", function() {
  window.location.href = "about.html";
});

contactBtn.addEventListener("click", function() {
  window.location.href = "contact.html";
});

signOutBtn.addEventListener("click", function() {
  window.location.href = "index.html";
});

