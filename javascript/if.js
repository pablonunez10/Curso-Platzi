/// juego de piedra papel o tijera
var piedra = 1;
var papel = 2;
var tijera = 3;

var resultado = function(yo,pc){
    if (yo > 3){
        console.log('Selecionar un numero mayor a 3 ')
    } else if (yo < 1) {
        console.log('Debes seleccionar un numero menor a 1')
    }   
    if(yo === 1 && pc === 3 || yo === 3 && pc === 2 || yo === 2 && pc === 1 ){
        console.log('GANASTE');
    } else if (yo == pc) {
        console.log('EMAPTE');    
    } else {
        console.log('PERDISTE');
    }
    
}


resultado(4,1);








var edad = 4;

if (edad === 18) {
    console.log(' Primera vez que puedes votar ');

} else if (edad > 18) {
    console.log(' Puedes Votar ');
} else {
    console.log(' No puedes votar ');
}



//condition ? true : false;

var numero = 9;

var resultado = numero === 1 ? 'si soy un uno' : 'no soy  uno' ;

console.log(resultado);



//if (false) {
//    console.log("HOLA");
//} else {
//    console.log("soy falso");
//}
