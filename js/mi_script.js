
window.addEventListener("load", function() {
  var mensaje = document.getElementById("mensaje");
  mensaje.classList.add("oculto");
});

let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = 1;
}, 13000); /* Ajusta el tiempo según tus necesidades */






