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

// metodo para filtar cosas especificas
var articulosFltrados =
    articulos.filter(function(articulo){
        return articulo.costo <= 1000;
});

// ayuda a mapear todo el contenido del array 
// y nos trae lo que le pidamos de todos los objetos
var nombresArticulos = 
    articulos.map(function(articulo){
        return articulo.nombre;
    });