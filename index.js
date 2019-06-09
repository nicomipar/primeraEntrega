const {cursos, mostrarInfo, mostrarInfo2} = require('./datos');

mostrarInfo(cursos[0], function (texto){
    console.log(texto);
    mostrarInfo2(cursos[1], function (texto){
        console.log(texto);
        mostrarInfo2(cursos[2], function (texto){
            console.log(texto);
            mostrarInfo2(cursos[3], function (texto){
                console.log(texto);
            });
        });
    });    
});

// console.log(curso);


// console.log(mostrarInfo(cursoProgramacion));
// console.log(mostrarInfo(cursoMatematicas));
// console.log(mostrarInfo(cursoQuimica));