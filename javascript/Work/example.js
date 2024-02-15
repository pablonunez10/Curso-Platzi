var articulos = [
    {nombre : "Bici", Costo: 3000},
    {nombre: "TV", Costo: 6000},
    {nombre: "Iphone", Costo: 65000},

];
// map mapea el contenido total de array y nos trae justo lo que estamos pidiendo

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre 
});

console.log(nombreArticulos);




//filter genera un nuevo array y filtra de acuerdo a la condicion

var articulosFiltrados = articulos.filter(function (articulo) {

    return articulo.Costo >= 3000
});
console.log(articulosFiltrados);

