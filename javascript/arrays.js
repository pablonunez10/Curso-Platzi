var frutas = ["Manzana", "Banana", "Cereza", "Fresa" ];
console.log(frutas);


//var masFrutas = frutas.push("Uvas " , " Pera"); //para agregar elementos al array



//var ultimo = frutas.pop("Uvas" , "Pera"); //elimina el ultimo elemento del array

//console.log(frutas);

var nuevaLongitud = frutas.unshift("Kiwi"); //eliminar el elemento que este en el inicio

console.log(frutas);

var borarfruta = frutas.shift("Kiwi")


console.log(frutas);

var posicion = frutas.indexOf("Banana");

console.log(posicion);