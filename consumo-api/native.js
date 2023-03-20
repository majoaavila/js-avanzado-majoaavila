var https = require('follow-redirects').https; // https://www.npmjs.com/package/follow-redirects
var fs = require('fs'); // para leer el fichero de configuración

var options = {
    'method': 'GET',    // GET, POST, PUT, DELETE, etc.
    'hostname': 'https://rickandmortyapi.com', // The hostname of the server to connect to.
    'path': '/api/character/' // The path to the resource.
}

var req = https.request(options, function (res) {
    var chunks = []; // Array para almacenar los chunks de la respuesta

    res.on("data", function (chunk) { // Evento de data, que se ejecuta cada vez que se recibe un chunk de la respuesta
        chunks.push(chunk); // Añadimos el chunk a la lista de chunks
    
    });

    res.on("end", function (chunks) { // Evento de end, que se ejecuta una vez que la respuesta ha terminado
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });
    
    res.on("error", function (error) {
        console.error(error);
    }).on("close", function () {
        console.log("close");
    }).on("finish", function () {
        console.log("finish");
    }).on("pipe", function () {
        console.log("pipe");
    }).on("unpipe", function () {
        console.log("unpipe");
    }).on("end", function () {
        console.log("end");
    }).on("readable", function () {
        console.log("readable");
    }).on("resume", function () {
        console.log("resume");
    }).on("drain", function () {
        console.log("drain");
    }).on("pause", function () {
        console.log("pause");
    }).on("data", function () {
        console.log("data");
    }).on("error", function () {
        console.log("error");
    }).on("close", function () {
        console.log("close");
    }).on("finish", function () {
        console.log("finish");
    }).on("pipe", function () {
        console.log("pipe");
    }).on("unpipe", function () {
        console.log("unpipe");
    }).on("end", function () {
        console.log("end");
    }).on("readable", function () {
        console.log("readable");
    }).on("resume", function () {
        console.log("resume");
    }).on("drain", function () {
        console.log("drain");
    }).on("pause", function () {
        console.log("pause");
    }).on("data", function () {
        console.log("data");

});
});
