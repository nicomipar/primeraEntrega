let cursos =[
    {
        id: 0,
        nombre: 'Ingles',
        duracion: 80,
        valor: 350000
    },
    {
        id: 1,
        nombre: 'Matematicas',
        duracion: 50,
        valor: 450000
    },
    {
        id: 2,
        nombre: 'Quimica',
        duracion: 35,
        valor: 450000
    },
    {
        id: 3,
        nombre: 'Programacion',
        duracion: 40,
        valor: 500000
    }
];

// nombreCurso = 'Programacion';

// let curso = cursos.find(notaEst => notaEst.nombre == nombreCurso)

// let buscarCurso = () => {

// }

let mostrarInfo = (curso, callback) => {
    setTimeout(() => {
        let texto = '--------------------------------- ' + '\r\n' +
        'Id del Curso: ' + curso.id + '\r\n' +
        'Nombre del Curso: ' +curso.nombre + '\r\n' +
        'Duración del Curso: ' +curso.duracion + ' Horas' + '\r\n' +
        'Valor del Curso: $' +curso.valor + '\r\n' +
        '---------------------------------';
        callback(texto);
    }, 0);
}

let mostrarInfo2 = (curso, callback) => {
    setTimeout(() => {
        let texto = '--------------------------------- ' + '\r\n' +
        'Id del Curso: ' + curso.id + '\r\n' +
        'Nombre del Curso: ' +curso.nombre + '\r\n' +
        'Duración del Curso: ' +curso.duracion + ' Horas' + '\r\n' +
        'Valor del Curso: $' +curso.valor + '\r\n' +
        '---------------------------------';
        callback(texto);
    }, 2000);
}

module.exports = {
    mostrarInfo,
    mostrarInfo2,
    cursos
};