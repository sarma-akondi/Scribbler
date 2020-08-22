// SignUp and SignIn modals
var signUpModal = document.getElementById("signUpModal");
var signInModal = document.getElementById("signInModal");

// Modal open button
var signUpBtn = document.getElementById("signUpBtn");
var signInBtn = document.getElementById("signInBtn");
var signUpLink = document.getElementById("signUpLink");

// Modal close button
var closeSignUp = document.getElementById("closeSignUp");
var closeSignIn = document.getElementById("closeSignIn");

// Open modal upon user click
signInBtn.addEventListener("click", () => openModal(signInModal));
signUpBtn.addEventListener("click", () => openModal(signUpModal));

// Close modal upon user click
closeSignUp.addEventListener("click", () => closeModal(signUpModal));
closeSignIn.addEventListener("click", () => closeModal(signInModal));

// Click Handlers below:
// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }
  if (event.target == signInModal) {
    signInModal.style.display = "none";
  }
});
// Open the modal Generic function
openModal = modal => {
  modal.style.display = "block";
};
// Close the modal Generic function
closeModal = modal => {
  modal.style.display = "none";
};
// On clicking sign up hyperlink inside sign in modal
signUpLink.onclick = function() {
  closeModal(signInModal);
  openModal(signUpModal);
};