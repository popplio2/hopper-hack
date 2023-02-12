const paper = document.querySelector(".paper");
const throwOut = document.querySelector(".throw");
const crumple = new Audio("Paper Crumple Crumpling Scrunch Crunch Sfx.wav");

throwOut.addEventListener('click', () => {
  window.location.href = "trash.html";
  console.log("crumple sound");
  crumple.loop;
  crumple.play();
});

paper.addEventListener('animationend', () => {
  console.log("animation finished!");
  window.location.href = "inter.html";
});


const text = document.getElementById("text");


