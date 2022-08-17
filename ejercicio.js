var usuario = "tijera";
var maquina = "piedra";


if (usuario == "tijera" && maquina == "papel"){
    console.log("Usuario ha ganado");
} else if (usuario == "papel" && maquina == "piedra"){
    console.log("Usuario ha ganado");
} else if (usuario == "piedra" && maquina == "tijera"){
    console.log("Usuario ha ganado");
} else if (usuario == maquina){
    console.log("Empate");
}else{
    console.log("Usuario Perdio");
}