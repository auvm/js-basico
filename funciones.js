// hay dos tipos de funciones
// declarativas
// donde se declara la funció ncon un nombre y 
// todo su cuerpo
function miFunction(){
    return 3;
}
miFunction();

// y las expresivas (de expresión)
//también llamadas funciones anónimas
// porque no tienen definido un nombre y
// se almacena en otro objeto
var miFunction = function(a,b){
    return a+b;
}

miFunction(1,2);

// imprimir con variable
function saludarEstudiantes(estudiante){
    console.log(`Buenos dias ${estudiante}!`);
}

saludarEstudiantes("angel uriel");

function suma(a,b){
    var resultado = a + b;
    return resultado;
}
suma(3,2);
5


function suma(a,b){
    return a + b;
}
suma(3,2);
5