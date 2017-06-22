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
app.use(express.static(path.join(__dirname, '/template')));

var PessoaProvider = require('./js/pessoaSchema').PessoaProvider;
var PessoaProvider = new PessoaProvider();

app.post('/salvar/:teste', function (req, res) {
    PessoaProvider.savePessoa(req.body, function (err, docs) {
        console.log(err);
        res.send('It worked!');
    });
}
);

app.get('/load', function (req, res) {
    PessoaProvider.findAllIdNome(function (err, docs) {
        if (err)
            res.json(err);
        else
            res.json(docs);
    });

});

app.get('/load/:nome', function (req, res) {
    console.log("cheguei aqui")
    if (req.query.nome !== null) {
        PessoaProvider.findPorNome(req.query.nome, function (err, docs) {
            if (err)
                res.json(err);
            else {
                res.json(docs);
                console.log(docs);
            }
        });
    }
});



app.get('/load/:uid', function (req, res) {
    console.log(req.query);
    if (req.query.uid !== null) {
        PessoaProvider.findPorId(req.query.uid, function (err, docs) {
            if (err)
                res.json(err);
            else
                res.json(docs);
        });
    }
});

app.get('/load/basicInfo/:uid', function (req, res) {
    console.log("Retrieving basic info from id=" + req.query.uid);
    if (req.query.uid !== null) {
        PessoaProvider.findPorIdBasicInfo(req.query.uid, function (err, docs) {
            if (err)
                res.json(err);
            else
                res.json(docs);
        });
    }
});

app.get('/load/completo/:uid', function (req, res) {
    console.log("Retrieving all information from id=" + req.query.uid);
    if (req.query.uid !== null) {
        PessoaProvider.findPorIdAllInfo(req.query.uid, function (err, docs) {
            if (err)
                res.json(err);
            else
                res.json(docs);
        });
    }
});

app.get('/load/publicacao/:uid', function (req, res) {
    console.log("Retrieving basic info from id=" + req.query.uid);
    if (req.query.uid !== null) {
        PessoaProvider.findPorIdPublicacao(req.query.uid, function (err, docs) {
            if (err)
                res.json(err);
            else
                res.json(docs);
        });
    }
});

app.get('/load/orientacao/:uid', function (req, res) {
    console.log("Retrieving basic info from id=" + req.query.uid);
    if (req.query.uid !== null) {
        PessoaProvider.findPorIdOrientacao(req.query.uid, function (err, docs) {
            if (err)
                res.json(err);
            else
                res.json(docs);
        });
    }
});

app.get('/load/formacao/:uid', function (req, res) {
    console.log("Retrieving formação(aboutme) from id=" + req.query.uid);
    if (req.query.uid !== null) {
        PessoaProvider.findPorIdAboutme(req.query.uid, function (err, docs) {
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