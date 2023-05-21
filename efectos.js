document.addEventListener("DOMContentLoaded", function() {
  var nombres = document.querySelectorAll("ul.enlaces li a span");

  nombres.forEach(function(nombre) {
    var logo = nombre.previousElementSibling;

    nombre.addEventListener("mouseenter", function() {
      logo.classList.add("logo-motion");
    });

    nombre.addEventListener("mouseleave", function() {
      logo.classList.remove("logo-motion");
    });
  });
});