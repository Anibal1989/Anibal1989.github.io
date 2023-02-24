const btnToggle = document.querySelector(".toggle-btn");
btnToggle.addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("active");
});

const logotipo = document.querySelector(".logo");
const body = document.querySelector("body");

const colores=["lightblue","blue","green","orange"]

logotipo.addEventListener("click", function () {
    const indice = parseInt(Math.random()*colores.length);
    body.style.backgroundColor = colores[indice];
});
