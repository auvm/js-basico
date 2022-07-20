// así se declaran propiedades a un objeto
var carro = {
    marca: "ford",
    modelo: "focus",
    annio: "2019"
};

// accede a las propiedades con el punto .
carro.annio
'2019'
carro.modelo
'focus'
carro.marca
'ford'

// así se declaran métodos a un objeto
var carro = {
    marca: "ford",
    modelo: "focus",
    annio: "2019",
    detalleDelAuto: function(){
        console.log(`Auto: ${this.marca} ${this.modelo} ${this.annio}`);
    
    }
};

// función constructor
function auto(marca, modelo, annio){
    this.marca = marca,
    this.modelo = modelo,
    this.annio = annio
};
// creación de objetos mediante un constructor
var autoNuevo = new auto("Tesla", "model s", 2018);
autoNuevo;


// ejercicio para constuir objetos en un ciclo
function auto(marca, modelo, annio){
    this.marca = marca,
    this.modelo = modelo,
    this.annio = annio
};

var autos = [];
var modelos = ["model y", "model x", "model e", "model s"];
for(var i = 0; i < modelos.length; i++){
    var annio = 2020 + i;
    autos.unshift(new auto("Tesla", modelos[i], annio));
}
for(var auto of autos){
    console.log(auto);
}