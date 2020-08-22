var createPostModal = document.getElementById("createPostModal");

// Modal open button
var createPostBtn = document.getElementById("createPostBtn");

// Modal close button
var closeCreatePost = document.getElementById("closeCreatePost");

createPostBtn.addEventListener("click", () => openModal(createPostModal));
closeCreatePost.addEventListener("click", () => closeModal(createPostModal));

window.addEventListener("click", function(event) {
  if (event.target == createPostModal) {
    createPostModal.style.display = "none";
  }
});