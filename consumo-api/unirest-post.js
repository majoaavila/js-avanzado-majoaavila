var unirest = require('unirest');
var req = unirest('POST', 'https://rickandmortyapi.com/api/character/');

headers({
    'Content-Type': 'application/json'
}).send(JSON.stringify({
    name: 'Morty',
    status: 'Alive',
    species: 'Human'
})).end(function (res) {
    if (res.error) throw new Error(res.error);
    console.log(res.body);
});
