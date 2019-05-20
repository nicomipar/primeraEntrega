const {cursos} = require('./datos');
const fs = require('fs');

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

let texto =     '--------------------------------- ' + '\r\n' +
'NUEVA INSCRIPCIÓN' + '\r\n' +
'--------------------------------- ' + '\r\n' +
'Nombre del Estudiante: ' +argv.nombreEstudiante + '\r\n' +
'Documento de Identidad: '+argv.docEstudiante + '\r\n' +
'--------------------------------- ' + '\r\n' +
'Id del Curso Seleccionado: '+curso.id+ '\r\n' +
'Nombre del Curso: '+curso.nombre+ '\r\n' +
'Duración del Curso: '+curso.duracion+ '\r\n' +
'Valor del Curso: '+curso.valor + '\r\n' +
'--------------------------------- '
console.log(texto);

fs.appendFile('inscripciones.txt', '\r\n' + texto, function (err) {
    if (err) throw err;
    console.log('Alumno inscrito satisfactoriamente!');
  });

// let crearArchivo = () =>{

//     fs.writeFile('archivo55.txt', texto, (err) =>{
//         if(err) throw (err);
//         console.log('se ha creado un archivo')
//     });
// }
// crearArchivo();


