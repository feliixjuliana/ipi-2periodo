const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;

const { Op } = require('sequelize');
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');

var urlencodedParser = bodyParser.urlencoded({
    extended:
        false
})


app.get('/', (req, res) => {
    res.render('home')
});

app.get('/busca', (req, res) => {
    res.render('buscaProdutos')
});


const Produto = require('./model/produto')

/*app.get('/produtos', (req, res) => {

    var nomeFiltro = req.query.nomeFiltro;
    var precoMaximo = req.query.precoMaximo;

    var resultadodaBusca = [];
    produtos.forEach(produto => {
        if (produto.nome.includes(nomeFiltro) &&
            produto.preco <= precoMaximo) {
            resultadodaBusca.push(produto);
        }
    })
    res.send(resultadodaBusca);

    var todosProdutos = '';
    for (var i = 0; i < produtos.length; i++) {
        todosProdutos += "Código: " + produtos[i].codigo;
        todosProdutos += "Nome: " + produtos[i].nome;
        todosProdutos += "Preço: " + produtos[i].preco;
        todosProdutos += "<br>";

    }
    res.send(todosProdutos) 
});*/

app.post('/insereProdutos', urlencodedParser, (req, res) => {

    var codigoProduto = req.body.codigo;
    var nomeProduto = req.body.nome;
    var precoProduto = req.body.preco;
    var marcaProduto = req.body.marca;


    var produto = Produto.create({
        codigo: codigoProduto,
        nome: nomeProduto,
        preco: precoProduto,
        marca: marcaProduto
    }).then(function () {
        res.send("Produto inserido com sucesso!")
    }).catch(function (erro) {
        res.send("Erro ao inserir produto: " + erro)
    })


    /* var resultadodaBusca = [];
     produtos.forEach(produto => {
         if (produto.nome.includes(nomeFiltro) &&
             produto.preco <= precoMaximo) {
             resultadodaBusca.push(produto);
         }
     })
     res.send(resultadodaBusca);
 
     var todosProdutos = '';
     for (var i = 0; i < produtos.length; i++) {
         todosProdutos += "Código: " + produtos[i].codigo;
         todosProdutos += "Nome: " + produtos[i].nome;
         todosProdutos += "Preço: " + produtos[i].preco;
         todosProdutos += "<br>";
 
     }
     res.send(todosProdutos) */
});

app.get('/alteraProduto', (req, res) => {

    var idProduto = req.query.id;

    Produto.findOne({
        where: { id: idProduto }
    }).then(function (produto) {
        console.log(produto)

        var formulario = "<form action='/updateProduto' method='post'>";
        formulario += "<input type = 'hidden' name='id' value='" + produto.id + "'>";
        formulario += "Código do Produto: <input type='text' name='codigo' id='codigo' value='" + produto.codigo + "'><br>";
        formulario += "Nome do Produto: <input type='text' name='nome' id='nome' value='" + produto.nome + "'> <br>"
        formulario += "Preço: <input type='text' name='preco' id='preco' value='" + produto.preco + "'> <br> "
        formulario += "Marca: <input type='text' name='marca' id='marca' value='" + produto.marca + "'> <br> "
        formulario += "<input type='submit' value='Cadastrar'>"
        formulario += "</form>";

        res.send("<br> Veja nossos produtos</br><br>" + formulario)


    }).catch(function (erro) {
        console.log("Erro na consulta: " + erro)
    })

})

app.get('/excluiProduto', (req, res) => {

    var idProduto = req.query.id;

    Produto.destroy({
        where: {
            id: idProduto
        }
    }).then(function () {

        res.send("<br> Produto excluído com sucesso!</br>")


    }).catch(function (erro) {
        console.log("Erro na exclusão." + erro)
        res.send("Erro na exclusão." + erro)
    })

});

app.post("/updateProduto", urlencodedParser, (req, res) => {

    var idProduto = req.body.id;
    var codigoProduto = req.body.codigo;
    var nomeProduto = req.body.nome;
    var precoProduto = req.body.preco;
    var marcaProduto = req.body.marca;
    Produto.update(
        {
            codigo: codigoProduto,
            nome: nomeProduto,
            preco: precoProduto,
            marca: marcaProduto
        },
        {
            where: {
                id: idProduto
            }
        }
    ).then(function (produto) {
        res.send("<br>Produto alterado</br>")
    }).catch(function (erro) {
        res.send("<br>Erro ao alterar </br>")
    })
})

app.post('/produtos', urlencodedParser, (req, res) => {

    var nomeFiltro = req.body.nomeFiltro;
    var todosProdutos = "";
    nomeFiltro = '%' + nomeFiltro + '%';

    Produto.findAll({
        where: { nome: { [Op.like]: nomeFiltro } }
    }).then(function (produtos) {
        console.log(produtos)


        res.render('resultadoBusca', { produtos: produtos });


    }).catch(function (erro) {
        console.log("Erro na consulta: " + erro)
    })



});

app.listen(PORT, () => {
    console.log("http://localhost:" + 3000);
});

