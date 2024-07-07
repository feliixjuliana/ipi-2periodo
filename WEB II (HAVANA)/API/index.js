const https = require('https');
https.get('https://pokeapi.co/api/v2',
(resp) => {
let dados = '';
// Um bloco de dados foi recebido.
resp.on('data', (chunk) => { dados += chunk; });
// Toda a resposta foi recebida. Exibir o resultado.
resp.on('end', () => {
console.log(JSON.parse(data).explanation);
});
}).on("error", (err) => {
console.log("Error: " + err.message);
});