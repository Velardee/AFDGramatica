const { BrowserWindow, dialog } = require('electron').remote;
const path = require('path');

const button = document.getElementById('comprobar')
const automata = {
    estadoInicial: 1,
    estadoFinal: [1, 2, 3, 4, 5],
    transiciones: [{
            estado: 1,
            simbolo: 'a',
            al_estado: 2
        },
        {
            estado: 1,
            simbolo: 'b',
            al_estado: 4
        },
        {
            estado: 1,
            simbolo: 'c',
            al_estado: 4
        },
        {
            estado: 2,
            simbolo: 'a',
            al_estado: 5
        },
        {
            estado: 2,
            simbolo: 'b',
            al_estado: 6
        },
        {
            estado: 2,
            simbolo: 'c',
            al_estado: 3
        },
        {
            estado: 3,
            simbolo: 'a',
            al_estado: 3
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
            al_estado: 5
        },
        {
            estado: 4,
            simbolo: 'b',
            al_estado: 4
        },
        {
            estado: 4,
            simbolo: 'c',
            al_estado: 4
        },
        {
            estado: 5,
            simbolo: 'a',
            al_estado: 5
        },
        {
            estado: 5,
            simbolo: 'b',
            al_estado: 6
        },
        {
            estado: 5,
            simbolo: 'c',
            al_estado: 4
        },
        {
            estado: 6,
            simbolo: 'a',
            al_estado: 5
        },
        {
            estado: 6,
            simbolo: 'b',
            al_estado: 4
        },
        {
            estado: 6,
            simbolo: 'c',
            al_estado: 4
        }
    ]
}

button.addEventListener('click', (event) => {
    let cadena = document.getElementById('txtCadena').value;
    let estadoActual = automata.estadoInicial;
    let err = false;

    cadena.split('').every(simbolo => {
        let encuentraTransicion = false;
        debugger;
        automata.transiciones.every(transicion => {
            if (transicion.estado == estadoActual && transicion.simbolo == simbolo) {
                estadoActual = transicion.al_estado;
                encuentraTransicion = true;
                return false;
            }
            return true;
        });

        if (!encuentraTransicion) {
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