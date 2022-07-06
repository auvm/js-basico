/*  hoisting es lo que sucede cuando, al llamar a 
    variables o funciones que aún no se han inicializado,
    son automáticamente declaradas por el interprete y
    se inicializan a nulo o indefinido. Por lo que 
    las funciones y resultados que se obtengan de esas
    variables o funciones sin inicializar, tendrán esos
    valores
*/

console.log(miNombre);

var miNombre = "uriel";
//se inicializa después, por lo que 
// imprime undefined


//el interprete declara la función
hey();
//llamma a la función
function hey(){
    console.log("Hola "+miNombre);
}
//pero imprime "Hola undefined"

var miNombre = "uriel";