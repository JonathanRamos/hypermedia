var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/hypermedia';
mongoose.Promise = global.Promise;
mongoose.connect(url);
var Schema = mongoose.Schema
        , ObjectId = Schema.ObjectId;
var schema = new mongoose.Schema({
    name: {
        first: {
            "type": "string",
            "description": "Primeiro nome da pessoa"
        },
        middle: {
            "type": "string",
            "description": "Nomes que estiver entre o primeiro e o último nome da pessoa"
        },
        last: {
            "type": "string",
            "description": "Último nome da pessoa"
        }
    },
    "required": ["first", "last"],
    email: 'string',
    photourl: 'string',
    descricao: 'string',
    formacao: [{
            descricao: 'string',
            tituloobtido: 'string',
            instituicao: 'string',
            local: 'string',
            titulo: 'string',
            anoinicio: 'number',
            anofim: 'number',
            orientador: 'string'
        }],
    publicacao: [{
            tipo: {
                "type": "string",
                "description": "Tipo da publicação: livro, revista, periódico, tese, dissertação etc"
            },
            titulo: 'string',
            ano: 'number',
            evento: 'string',
            local: 'string',
            autores: [{
                    name: {
                        first: 'string',
                        middle: 'string',
                        last: 'string'
                    }
                }]
        }],
    orientacao: [{
            nome: 'string',
            titulo: 'string',
            nivel: 'string',
            anoinicio: 'number',
            anofim: 'number',
            instituicao: 'string'
        }]
});
var Pessoa = mongoose.model('pessoa', schema);
PessoaProvider = function () {};
//Find all posts
PessoaProvider.prototype.findAll = function (callback) {
    Pessoa.find({}, function (err, posts) {
        callback(null, posts);
    });
};
//Find post by ID
PessoaProvider.prototype.findPorId = function (id, callback) {
    Pessoa.findById(id, function (err, post) {
        if (!err) {
            callback(null, post);
        }
    });
};
//Update post by ID
PessoaProvider.prototype.updateById = function (id, body, callback) {
    Pessoa.findById(id, function (err, post) {
        if (!err) {
            name.first = body.first;
            name.middle = body.middle;
            name.last = body.last;
            post.save(function (err) {
                callback();
            });
        }
    });
};
//Create a new post
PessoaProvider.prototype.savePessoa = function (body, callback) {
    var pes = new Pessoa(JSON.parse(body.mytext));
    pes.save().then(item => {
        console.log("item saved to database");
    }).catch(err => {
        console.log("unable to save to database");
    });
};
exports.PessoaProvider = PessoaProvider;

