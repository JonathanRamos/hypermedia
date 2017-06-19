const express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Pastas com arquivos estáticos a serem servidos ao client-side
app.use(express.static(path.join(__dirname, '/js')));
app.use(express.static(path.join(__dirname, '/css')));
app.use(express.static(path.join(__dirname, '/views')));
app.use(express.static(path.join(__dirname, '/xml')));
app.use(express.static(path.join(__dirname, '/json')));

var PessoaProvider = require('./js/pessoaSchema').PessoaProvider;
var PessoaProvider = new PessoaProvider();

app.post('/new', function (req, res) {
    PessoaProvider.savePessoa(req.body, function (error, docs) {
        res.redirect('/');
    });
}
);

app.get('/load', function (req, res) {
    PessoaProvider.findAll(function (err, docs) {
        if (err)
            res.json(err);
        else
            res.json(docs);
    });
});

app.get('/load/:uid', function (req, res) {
    if (req.query.uid !== null) {
        PessoaProvider.findPorId(req.query.uid, function (err, docs) {
            if (err)
                res.json(err);
            else
                res.json(docs);
        });
    }
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + 'index.html'));
});
app.listen(1337, function () {
    console.log('Listening on port 1337!');
});