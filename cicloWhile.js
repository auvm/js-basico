var estudiantes = ["María", "Sergio", "Raúl", "Daniel" ];
function saludarEstudiante(estudiantes){
    console.log(`Hola, ${estudiantes}`);

}
// un while que va restando elementos
while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
}

// va imprimiendo la reducción
while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    estudiantes;
    saludarEstudiante(estudiante);
}