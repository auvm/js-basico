var articulos = [
    {   nombre: "Bicicleta",
        costo: 3000 },

    {   nombre: "televisión",
        costo: 2000 },

    {   nombre: "libro",
        costo: 1000 },
    
    {   nombre: "celular",
        costo: 8000 },

    {   nombre: "laptop",
        costo: 13000 },

    {   nombre: "teclado",
        costo: 2000 },
    
    {   nombre: "audifonos",
        costo: 1700 }
];

// el método find recibe una función que retorna el 
// objeto que cumple con las caracteristicas solicitadas
var encuentraArticulo = articulos.find(
    function(articulo){
        return articulo.nombre === "teclado"; 
    }
);
undefined

// resultado
encuentraArticulo
{nombre: 'teclado', costo: 2000}


// la fución de forEarch funciona como
// en otros lenguales de programación,
// pero también recibe la función con el 
// objeto que utilizará 
articulos.forEach(function(articulo){
    console.log("articulo: "+articulo.nombre+"|  Costo: $"+articulo.costo);
});
// VM1214:2 articulo: Bicicleta|  Costo: $3000
// VM1214:2 articulo: televisión|  Costo: $2000
// VM1214:2 articulo: libro|  Costo: $1000
// VM1214:2 articulo: celular|  Costo: $8000
// VM1214:2 articulo: laptop|  Costo: $13000
// VM1214:2 articulo: teclado|  Costo: $2000
// VM1214:2 articulo: audifonos|  Costo: $1700

// la función some solo servirá para decir de manera booleana
// si se cumple la condición de nuestra función
var articulosBaratos = articulos.some(
    function(articulo){
        return articulo.costo <= 2000;    });
undefined

// resultado de false/true
articulosBaratos
true