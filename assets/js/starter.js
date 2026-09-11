// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";

import "../../node_modules/bootstrap/js/dist/util.js";
import "../../node_modules/bootstrap/js/dist/modal.js";

const form = document.getElementById("newsletterForm");
const emailInput = document.getElementById("newsletterEmail");
const errorMessage = document.getElementById("newsletterError");
const toast = document.getElementById("newsletterToast");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!validEmail) {
    errorMessage.textContent = "Introduce un email válido";
    emailInput.classList.add("is-invalid");
    return;
  }

  errorMessage.textContent = "";
  emailInput.classList.remove("is-invalid");

  toast.classList.remove("hide");
  toast.classList.add("show");

  setTimeout(function () {
    toast.classList.remove("show");
    toast.classList.add("hide");
  }, 2200);

  setTimeout(function () {
    toast.classList.remove("hide");
    emailInput.value = "";
  }, 2600);
});
