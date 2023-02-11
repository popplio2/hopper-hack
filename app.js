const paper = document.querySelector(".paper");
const throwOut = document.querySelector(".throw");

throwOut.addEventListener('click', () => {
  window.location.href = "trash.html";
});

paper.addEventListener('animationend', () => {
  console.log("animation finished!");
  window.location.href = "inter.html";
});


const text = document.getElementById("text");

