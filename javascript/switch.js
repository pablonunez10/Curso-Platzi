var  numero = 1000;
switch (numero) {
    case 1:
        console.log('soy uno');
        break;
    case 10:
        console.log('soy un diez');
        break
    case 100:
        console.log('soy un cien');
        break
    default:
        console.log('no soy nada');  
}

var tijeras = 'tijeras';
var piedra = 'piedra';
var papel = 'papel';

function resul(yo,pc){
    switch (true) {
        case yo === pc:
            console.log('Empate');
            break
        case yo === tijeras && pc === papel || yo == piedra && pc == tijeras || yo === papel && pc === piedra: 
            console.log('GANASTEEE') 
            break
        default:
            console.log('PERDISTE');
    }
}

resul(tijeras,papel);