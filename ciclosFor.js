var estudiantes = ["María", "Segio","Rosa", "Daniel"];
function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);

}

// for tradicional
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiante(estudiantes[i]);
}

// for of o equivalente al foreach
for(var estudiante of estudiantes){
    saludarEstudiante(estudiante);
}