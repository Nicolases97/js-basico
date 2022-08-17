var estudiante = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiante.length; i++){
    saludarEstudiantes(estudiante[i]);
}