// requireds
const fs = require('fs'); //import de libreria nativa de node


/* por consola escribe la tabla hasta el limite */
let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`Valor ${ base } en la base que ingresaste no es número. Debes dar la PSU otra vez`);
            return;
        }
        if (!Number(limite)) {
            reject(`Valor ${ limite } en el limite que ingresaste no es número. Debes dar la PSU otra vez`);
            return;
        }

        let res = 0;
        let obj = [];
        for (var i = 1; i <= limite; i++) {
            res = base * i
            var mess = `${base} * ${ i } = ${res}`
            obj.push(mess);
        }

        if (obj.length === 0) {
            reject(`El valor ${ limite } del limite no es suficiente para sacar las tablas`)
            return;
        }

        resolve(obj)

    })

}


/* lectura archivo dado una base */
let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject(`Valor ${ base } que ingresaste no es número. Debes dar la PSU otra vez`);
            return;
        }

        // tabla de multiplicar
        for (let i = 1; i <= limite; i++) {
            var res = base * i

            data += `${base} * ${ i } = ${res}\n`;
        };

        // escribe en archivo

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });

}

// se agrega amodulo elementos que se desea usar de forma global
module.exports = {
    crearArchivo: crearArchivo, //<nombre propiedad>: <funcion o valor>
    listarTabla: listarTabla
}