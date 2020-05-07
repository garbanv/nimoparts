const inicioBtn = document.querySelector("#inicioBtn");
const nosotrosBtn = document.querySelector("#nosotrosBtn");
const contactoBtn = document.querySelector("#contactoBtn");
const nosotros = document.querySelector("#nosotros");
const inicio = document.querySelector("nav");
const contacto = document.querySelector("#masInfo");

const responsiveBtn = document.querySelector("nav button");
const nav = document.querySelector("#navegacion");

responsiveBtn.addEventListener("click", function () {
    nav.classList.toggle("hidden");
})

nosotrosBtn.addEventListener("click", function (e) {
    e.preventDefault();
    nosotros.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
})

contactoBtn.addEventListener("click", function (e) {
    e.preventDefault();
    contacto.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
})

contactoBtn2.addEventListener("click", function (e) {
    e.preventDefault();
    contacto.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
})