const fs = require('fs');
const path = './';
const nameFile = 'my-file.txt';
const contentForFile = 'Esto lo escribi desde node';
//path abosulto: C:\Users\majoj\OneDrive\Escritorio\Curso DEV.F\DEV-F code\js-avanzado-majoaavila\1-node\1.2-crear-archivo
//path relativo: js-avanzado-majoaavila\1-node\1.2-crear-archivo
const filePath = path + '/' + nameFile;
fs.writeFile(filePath, contentForFile, (error) => {
    if(error) {
        throw error;
    } else {
        console.log('archivo creado exitosamente!')
    }
});