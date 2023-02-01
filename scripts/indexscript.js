window.onload = function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    if (username === "admin" && password === "password") {
		window.location = "home.html";
      alert("Login successful!");
    } else {
      alert("Login failed. Try again.");
    }
  });
};

