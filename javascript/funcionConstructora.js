function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
//new va a generar un nuevo objeto que dreviada de otro objeto 
var NuevoAuto = new auto( "Tesla", "Model3", "2024");

console.log(NuevoAuto);

var autoNuevo2 = new auto("BMW", "X6", 2024);
var autoNuevo3 = new auto("Toyota", "Corolla", 2019);

console.log(autoNuevo2);
