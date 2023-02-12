const paper = document.querySelector(".paper");

paper.addEventListener('animationend', () => {
  console.log("animation finished!");
  window.location.href = "inter.html";
});

window.onload = function() {
  document.getElementById("audio").play();
}