var https = require('https');

https.get('https://api.themoviedb.org/3/apod?api_key=6e49f129d415806abc7615d927f227f1', resp => {

let dados = '';

https.on('filme', (chunk) => { dados += chunk; });
// Toda a resposta foi recebida. Exibir o resultado.
https.on('end', () => {
console.log(dados);
});
}).on("error", (err) => {
console.log("Error: " + err.message);
});

https.listen(3000)