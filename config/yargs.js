const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: false,
        alias: 'l',
        default: 10
    }
}

//Parametros de entrada
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un nuevo archivo con las tablas de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
};