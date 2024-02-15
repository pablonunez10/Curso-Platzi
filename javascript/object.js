var miAuto = {
    marca:  "Mercedes",
    modelo: "ML 302",
    annio: 2024,
    detalleDelAuto: function (){
        console.log(`Auto de la marca ${this.marca}` + ` y del annio ${this.annio}`)
    }
}; 


console.log(miAuto.marca);
console.log(miAuto.modelo);
console.log(miAuto.detalleDelAuto());