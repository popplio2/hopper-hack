const paper = document.querySelector(".paper");

paper.addEventListener('animationend', () => {
  console.log("animation finished!");
  window.location.href = "inter.html";
});
