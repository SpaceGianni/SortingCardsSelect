

//BOTÓN
let boton = document.getElementById("boton");

function cargarCartas() {
    const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const tipos = ["♥", "♦", "♠ ", "♠"];


    let sortNumbers = valores[Math.floor((Math.random() * 12) + 1)];
    let sortTipos = tipos[Math.floor(Math.random() * 4)];

    let color= sortTipos === "♥" || sortTipos === "♦" ? "red" : "black";

    let numeros = document.getElementById("numeros");
    let tipoArriba = document.getElementById("tipo-arriba");
    let tipoAbajo = document.getElementById("tipo-abajo");

    tipoArriba.style.color = color;
    tipoAbajo.style.color =color;

    numeros.innerHTML = sortNumbers;
    tipoArriba.innerHTML = sortTipos;
    tipoAbajo.innerHTML = sortTipos;

}











