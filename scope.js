// se le llama scope global 
// y scope local a los niveles 
// de las variables utilizadas
// en un programa.

var miNombre = "uriel";

function nombre(){
    var miApellido = "velasco";
    console.log(miNombre+" "+miApellido);
}

nombre();

// una variable en el scope local
// (dentro de una función por ejemplo)
// puede acceder a una variable global
// pero desde el scope global no se puede
// acceder a las variables del scope local

miApellido; //genera un error