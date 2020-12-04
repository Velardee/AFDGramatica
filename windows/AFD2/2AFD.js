const { BrowserWindow, dialog } = require('electron').remote;
const path = require('path');

const button = document.getElementById('comprobar')
const automata = {
    estadoInicial: 1,
    estadoFinal: [3, 4],
    transiciones: [{
            estado: 1,
            simbolo: 'a',
            al_estado: 2
        },
        {
            estado: 1,
            simbolo: 'b',
            al_estado: 1
        },
        {
            estado: 1,
            simbolo: 'c',
            al_estado: 1
        },
        {
            estado: 2,
            simbolo: 'a',
            al_estado: 1
        },
        {
            estado: 2,
            simbolo: 'b',
            al_estado: 1
        },
        {
            estado: 2,
            simbolo: 'c',
            al_estado: 3
        },
        {
            estado: 3,
            simbolo: 'a',
            al_estado: 4
        },
        {
            estado: 3,
            simbolo: 'b',
            al_estado: 3
        },
        {
            estado: 3,
            simbolo: 'c',
            al_estado: 3
        },
        {
            estado: 4,
            simbolo: 'a',
            al_estado: 4
        },
        {
            estado: 4,
            simbolo: 'b',
            al_estado: 5
        },
        {
            estado: 4,
            simbolo: 'c',
            al_estado: 3
        },
        {
            estado: 5,
            simbolo: 'a',
            al_estado: 4
        },
        {
            estado: 5,
            simbolo: 'b',
            al_estado: 3
        },
        {
            estado: 5,
            simbolo: 'c',
            al_estado: 3
        }
    ]
}

button.addEventListener('click', (event) => {
    let cadena = document.getElementById('txtCadena').value;
    let estadoActual = automata.estadoInicial;
    let err = false;

    cadena.split('').every(simbolo => {
        let esTransicion = false;
        debugger;
        automata.transiciones.every(transicion => {
            if (transicion.estado == estadoActual && transicion.simbolo == simbolo) {
                estadoActual = transicion.al_estado;
                esTransicion = true;
                return false;
            }
            return true;
        });

        if (!esTransicion) {
            err = true;
            return false;
        }
        return true;
    });

    let termina = false;

    automata.estadoFinal.every(final => {
        if (!err && estadoActual == final) {
            let options = {
                buttons: ['Aceptar'],
                message: 'Cadena ingresada correcta'
            }
            dialog.showMessageBox(options);
            termina = true;
            return false;
        }
        return true;
    });

    if (!termina) {
        dialog.showErrorBox('Error', 'La cadena ingresada es invalida.');
    }
});