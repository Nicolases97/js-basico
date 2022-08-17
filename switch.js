var usuario = prompt("Ingresa tu opción: piedra, papel o tijera ");
var options = ["piedra", "papel", "tijera"];
var maquina = options[Math.floor(Math.random() * 3)];

switch (true){
    case (usuario === "piedra" && maquina === "papel"):
        console.log("Ganaste");
        break;
    case (usuario === "papel" && maquina === "tijera"):
        console.log("Ganaste");
        break;
    case (usuario === "tijera" && maquina === "piedra"):
        console.log("Ganaste");
        break;
    case (usuario === maquina ):
        console.log("Empate");
        break;
    default:
        console.log("Perdiste");
}

console.log(maquina);
console.log(usuario);