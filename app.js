// "imports"
const argv = require('./config/yargs').argv;
/* se destructura el import */
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let commando = argv._[0];

switch (commando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(mensaje => {
                mensaje.forEach(element => {
                    console.log(element);
                });
            })
            .catch((err) => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ${ archivo}`))
            .catch((err) => console.log(err));

        break;
    default:
        console.log('sin funcion');
}