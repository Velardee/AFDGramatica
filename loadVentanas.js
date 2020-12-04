const { BrowserWindow } = require('electron').remote;
const path = require('path');

const firstAfdButton = document.getElementById('1AFD');
const secondAfdButton = document.getElementById('2AFD');

firstAfdButton.addEventListener('click', (event) => {
    const afd1 = path.join('file://', __dirname, '/windows/AFD1/1AFD.html');

    let window1 = new BrowserWindow({
        width: 700,
        height: 570,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            nodeIntegrationInWorker: true
        }
    });

    window1.on('close', () => { window1 = null });
    window1.loadURL(afd1);
    window1.show();
});

secondAfdButton.addEventListener('click', (event) => {
    const afd2 = path.join('file://', __dirname, '/windows/AFD2/2AFD.html');

    let window2 = new BrowserWindow({
        width: 700,
        height: 570,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            nodeIntegrationInWorker: true
        }
    });

    window2.on('close', () => { window2 = null });
    window2.loadURL(afd2);
    window2.show();
});