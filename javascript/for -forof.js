var estudiantes = ["Maria", "Sergio", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`)
}

for (var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);


}

var estudiantes = ["Maria", "Sergio", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`)
}
for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}