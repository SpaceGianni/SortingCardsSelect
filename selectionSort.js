const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const tipos = ["♥", "♦", "♠ ", "♠"];

let arrCartas = [];

let newObject = {};



//CAPTURA DEL INPUT

const inputUsuario = () => {
    let input = document.getElementById("inputUsuario");
    return (parseInt(input.value));
}

let input = document.getElementById("inputUsuario");
input.addEventListener("change", inputUsuario);



//GENERAR CARTAS

let seccionCarta = document.getElementById("sec-generar"); //llamo a la seccion donde se crearán las cartas
let botonGenerar = document.getElementById("btnGenCarta"); //llamo al botón que crea las cartas

botonGenerar.addEventListener("click", () => { //escucho al botón que crea las cartas, lo asocio a la fx dibujar y lo guardo en una variable
    let resultado0 = dibujarCarta(arrCartas);
    //console.log(resultado0)
});

function dibujarCarta() {
    arrCartas = []; // en cada ciclo, el array se vacía
    seccionCarta.innerHTML = ""; //en cada ciclo, mi sección se vacía
    let contenedorCarta = document.createElement("div");// creo el contenedor de las cartas

    for (i = 0; i < inputUsuario(); i++) {
        let sortNumbers = valores[Math.floor((Math.random() * 12) + 1)];
        let sortTipos = tipos[Math.floor(Math.random() * 4)];

        let color = sortTipos === "♥" || sortTipos === "♦" ? "red" : "black"; //condición para renderizar el color del tipo de carta

        let objCarta = {};
        //console.log(objCarta);

        objCarta.numero = sortNumbers;
        objCarta.tipo = sortTipos;
        arrCartas.push(objCarta); //guardo la creación de los elementos de la carta en el arrCartas
        //console.log(arrCartas);


        let nuevaCarta = document.createElement("div"); //creo la carta como div
        let divNumero = document.createElement("div"); //creo el número de la carta como div
        let divTipo = document.createElement("div"); // creo los tipos de la carta como div
        let divTipo2 = document.createElement("div");// creo los tipos de la carta como div

        divTipo.style.color = color; //al tipo de la carta de la aplico el color que le corresponda
        divTipo2.style.color = color; //al tipo de la carta de la aplico el color que le corresponda

        divNumero.innerHTML = cambiarValor(objCarta.numero);// les asocio la función cambiar valor a los numeros creados

        divTipo.innerHTML = objCarta.tipo; //añado el tipo al div tipo
        divTipo2.innerHTML = objCarta.tipo; //añado el tipo al div tipo

        contenedorCarta.classList.add("section-cartas"); //aplico clase al contenedor de la carta
        nuevaCarta.classList.add("carta"); //aplico clase a la carta
        divNumero.classList.add("carta-numeros"); //aplico clase al numero de la carta
        divTipo.classList.add("tipo-arriba"); //aplico clase arriba al tipo de la carta
        divTipo2.classList.add("tipo-abajo"); //aplico clase abajo al tipo de la carta

        nuevaCarta.append(divNumero, divTipo, divTipo2) //añado contenido a la carta: el número y dos tipos
        contenedorCarta.appendChild(nuevaCarta); //añado la carta a su contenedor
    }

    seccionCarta.append(contenedorCarta); //añado el contenedor a la seccion
}

function cambiarValor(valor) { //función que condiciona algunos valores de las cartas para que aparezcan en el orden deseado
    switch (valor) {
        case 1: return "A";
        case 11: return "J";
        case 12: return "Q";
        case 13: return "K";
        default: return valor;
    }
}


//ORDENAR LAS CARTAS

let arrSorted = [];

let secAlgoritmo = document.getElementById("sec-algoritmo"); //llamo a la seccion donde estáran las cartas ordenadas

let botonOrdenar = document.getElementById("btnClasCarta"); //llamo al botón que dispara la función que ordena las cartas
botonOrdenar.addEventListener("click", () => {
    arrSorted = selectSort2(arrCartas);

});


function selectSort2(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - 1; j++) {
            if (arr[j].numero > arr[j + 1].numero) {
                let aux = arr[j].numero;
                arr[j].numero = arr[j + 1].numero;
                arr[j + 1].numero = aux;
                //console.log("posicion j+1", arr[j+1].numero);
            }
        }
    }
    return arr;

};

botonOrdenar.addEventListener("click", () => {
    dibujarCartaOrdenadas(arrSorted);
    // console.log(arrSorted);
})



function dibujarCartaOrdenadas(arr) {
    console.log("arrSorted", arrSorted);
    let contenedorCarta = document.createElement("div");// creo el contenedor de las cartas

    for (i = 0; i < arr.length; i++) {
        
        contenedorCarta.classList.add("section-cartas"); //aplico clase al contenedor de la carta

        let nuevaCarta = document.createElement("div"); //creo la carta como div
        let divNumero = document.createElement("div"); //creo el número de la carta como div
        let divTipo = document.createElement("div"); // creo los tipos de la carta como div
        let divTipo2 = document.createElement("div");// creo los tipos de la carta como div

        nuevaCarta.classList.add("carta"); //aplico clase a la carta
        divNumero.classList.add("carta-numeros"); //aplico clase al numero de la carta
        divTipo.classList.add("tipo-arriba"); //aplico clase arriba al tipo de la carta
        divTipo2.classList.add("tipo-abajo"); //aplico clase abajo al tipo de la carta

        let color = arrSorted[i].tipo === "♥" || arrSorted[i].tipo === "♦" ? "red" : "black"; //condición para renderizar el color del tipo de carta
        divTipo.style.color = color; //al tipo de la carta de la aplico el color que le corresponda
        divTipo2.style.color = color; //al tipo d

        divTipo.innerHTML = arrSorted[i].tipo; //añado el tipo al div tipo
        divTipo2.innerHTML = arrSorted[i].tipo; //añado el tipo al div tipo
        divNumero.innerHTML = arrCartas[i].numero; // añado el número de la carta al div
        
        nuevaCarta.append(divNumero, divTipo, divTipo2) //añado contenido a la carta: el número y dos tipos
        contenedorCarta.appendChild(nuevaCarta); //añado la carta a su contenedor

    }

    secAlgoritmo.append(contenedorCarta); //añado el contenedor a la seccion

    return arr;
}




