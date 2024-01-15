let puntosUsuario = 0;
let puntosPC = 0;


// Estas variables llaman a los ID necesarios del HTML para usarlos en JS

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntosJugador");
let contenedorPuntosPC = document.querySelector("#puntosComputador");
let mensaje = document.querySelector("#mensaje");
let contendorGanaPunto = document.querySelector("#ganaPunto");
let eligeTuArma = document.querySelector("#eligeTuArma");

let contenedorEleccionUsuario = document.querySelector("#eleccionUsuario");
let contenedorEleccionPC = document.querySelector("#eleccionComputadora");

//Se llaman los 3 botones con la clase .arma
let botonesArmas = document.querySelectorAll(".arma");
//Este evento llama la funcion iniciarTurno() cada vez que se da click
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});


// FUNCION PRINCIPAL
function iniciarTurno(e) {

    let eleccionPC = Math.floor(Math.random() * 3); //Numero aleatorio entre 0,1,2 para ver que tira el programa
    let eleccionUsuario = e.currentTarget.id; //Elección del usuario por medio del click

    // Piedra => 0
    // Papel => 1
    // Tijera => 2

    //En este IF, se convierte el numero aleatorio, en valor Piedra, Papel o Tijera
    if (eleccionPC === 0) {
        eleccionPC = "Piedra🪨";
    } else if (eleccionPC === 1) {
        eleccionPC = "Papel📖";
    } else if (eleccionPC === 2) {
        eleccionPC = "Tijera✂️";
    };


    // Piedra le gana a Tijera
    // Papel le gana a Piedra
    // Tijera le gana a Papel


    // Condicional con reglas de juego:

    if ( //Opciones para que gane el usuario 
        (eleccionUsuario === "Piedra🪨" && eleccionPC === "Tijera✂️") ||
        (eleccionUsuario === "Papel📖" && eleccionPC === "Piedra🪨") ||
        (eleccionUsuario === "Tijera✂️" && eleccionPC === "Papel📖")
    ) {
        ganaUsuario()
    } else if ( //Opciones para que gane la PC
        (eleccionPC === "Piedra🪨" && eleccionUsuario === "Tijera✂️") ||
        (eleccionPC === "Papel📖" && eleccionUsuario === "Piedra🪨") ||
        (eleccionPC === "Tijera✂️" && eleccionUsuario === "Papel📖")
    ) {
        ganaPC()
    } else ( //Si no se cumple, hay un empate
        empate()
    )

    mensaje.classList.remove("disabled"); //Quitamos la clase disabled a #mensaje para que se muestre una vez inicie el juego
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPC.innerText = eleccionPC;

    //IF para acabar el juego y dar la opción de Reiniciarlo
    if (puntosUsuario === 5 || puntosPC === 5) {

        if (puntosUsuario === 5) {
            instrucciones.innerText = "🔥¡Has Ganado el Juego!🔥"
        }
        if (puntosPC === 5) {
            instrucciones.innerText = "La PC ha Ganado el Juego😭"
        }

        eligeTuArma.classList.add("disabled"); //Ocultamos #mesaje
        reiniciar.classList.remove("disabled"); //Aparece la opción de Reiniciar 
        reiniciar.addEventListener("click", reinicarJuego);

    }
}



/*Estas funciones son llamadas dentro de la función principal, 
 Pero se escriben fuera, para mayor orden, y claridad.*/


function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contendorGanaPunto.innerText = "¡Ganaste un Punto!🔥";
}

function ganaPC() {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contendorGanaPunto.innerText = "La PC gano un Punto 😂";
}

function empate() {
    contendorGanaPunto.innerText = "Empate 😱";
}

function reinicarJuego() {
    reiniciar.classList.add("disabled");
    eligeTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosUsuario = 0;
    puntosPC = 0;

    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;

    instrucciones.innerText = "El primero en llegar a 5 puntos gana🚀"

}