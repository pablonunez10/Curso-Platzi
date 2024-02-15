//find

var articulos = [
    {nombre : "Bici", Costo: 3000},
    {nombre: "TV", Costo: 6000},
    {nombre: "Iphone", Costo: 65000},

];

var encuentraarticulo = articulos.find(function(articulo){
    return articulo.nombre === "Bici" ;
});
console.log(encuentraarticulo);
//for each trata de buscar dentro del array (objeto )sin generar otro array
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

// some verifica con true or false
var articulosbaratos = articulos.some(function(articulo){
    return articulo.Costo <= 3000;
})

console.log(articulosbaratos);