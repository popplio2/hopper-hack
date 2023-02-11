const paper = document.querySelector(".paper");
paper.addEventListener('animationend', () => {
  console.log("animation finished!");
  window.location.href = "inter.html";
});
const throw2 = document.getElementById("throw");
throw2.addEventListener("click", console.log("hi"));

const text = document.getElementById("text");

function crumplePaper () {
	let crumple = new Audio('Paper Crumple Crumpling Scrunch Crunch Sfx.wav');
	crumple.play();
}
