const throwOut = document.querySelector(".throw");
const crumple = new Audio("Paper Crumple Crumpling Scrunch Crunch Sfx.wav");

throwOut.addEventListener('click', () => {
  window.location.href = "trash.html";
  console.log("crumple sound");
  crumple.loop;
  crumple.play();
});



const text = document.getElementById("text");


