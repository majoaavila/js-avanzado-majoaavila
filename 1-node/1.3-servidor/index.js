const http = require('http');

const server = http.createServer((request, response) => {
    //status: codigo que da el server al cliente para darle a conocer su status
    const status = 200; //ok

    //mimetype: indica el formato de los archivos de respuesta
    const mimeType = {'Content-Type': 'text/html'};
    response.writeHead(status, mimeType);
    response.write('<html> <body> Hola desde el html de node js </body> </html>');
    response.end();
});

server.listen(8000);
console.log('el server fue iniciado...')