const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const links = document.querySelector(".links");

const NavHandler = () => {
  xmark.classList.toggle("active");
  links.classList.toggle("navToggler");
};

bars.addEventListener("click", NavHandler);
xmark.addEventListener("click", NavHandler);
