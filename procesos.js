const {cursos} = require('./datos');
const fs = require('fs');
const express = require('express')
var app = express()

const opciones = {
    idCurso:{
        demand: true,
        alias: 'idC'
    },
    nombreEstudiante:{
        demand: true,
        alias: 'nomEst'
    },
    docEstudiante:{
        demand: true,
        alias: 'docEst'
    }
}

const argv = require('yargs')
                    .command ('inscribir','Inscribir un Alumno', opciones)
                    .argv
// console.log(argv.idCurso);
let curso = cursos.find(curso => curso.id == argv.idCurso)

let texto =     '<br> ' +
'NUEVA INSCRIPCIÓN' + '<br>' +
'--------------------------------- ' + '<br>' +
'Nombre del Estudiante: ' +argv.nombreEstudiante + '<br>' +
'Documento de Identidad: '+argv.docEstudiante + '<br>' +
'--------------------------------- ' + '<br>' +
'Id del Curso Seleccionado: '+curso.id+ '<br>' +
'Nombre del Curso: '+curso.nombre+ '<br>' +
'Duración del Curso: '+curso.duracion+ '<br>' +
'Valor del Curso: '+curso.valor + '<br>' +
'--------------------------------- '
// console.log(texto);

fs.appendFile('public/inscripciones.html', '\r\n' + texto, function (err) {
    if (err) throw err;
    console.log('Alumno Inscrito Satisfactoriamente!');
  });

    app.use(express.static(__dirname + '/public'))

    app.listen(3000)
    console.log("Server Online");

// let crearArchivo = () =>{

//     fs.writeFile('archivo55.txt', texto, (err) =>{
//         if(err) throw (err);
//         console.log('se ha creado un archivo')
//     });
// }
// crearArchivo();


