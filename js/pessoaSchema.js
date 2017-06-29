var mongoose = require('mongoose');
var Validator = require('jsonschema').Validator;
var v = new Validator();

var url = 'mongodb://localhost:27017/hypermedia';
mongoose.Promise = global.Promise;
mongoose.connect(url);

var schema = {
	nome: {
		first: {
			type: String,
			description: "Primeiro nome da pessoa",
			required: [true, "Informe o primeiro nome"]
		},
		middle: {
			"type": "string",
			"description": "Nomes que estiver entre o primeiro e o último nome da pessoa"
		},
		last: {
			"type": "string",
			"description": "Último nome da pessoa",
			required: [true, "Informe o último nome"]
		}
	},
	email: {
		type: 'string',
		required: [true, "Informe um email"]
	},
	photourl: {
		type: 'string',
		maxlength: 250
	},
	descricao: {
		type: 'string',
		maxlength: 500,
		required: [true, 'Informe uma descrição']
	},
	formacao: [{
		descricao: {
			type: 'string',
			maxlength: 300,
			enum: ["Graduação", "Mestrado", "Doutorado"] // Define quais tipos de valores são aceitos (literalmente)
		},
		tituloobtido: {
			type: 'string',
			maxlength: 100
		},
		instituicao: {
			type: 'string',
			maxlength: 100
		},
		local: {
			type: 'string',
			maxlength: 100
		},
		titulo: {
			type: 'string',
			maxlength: 150
		},
		anoinicio: {
			type: 'number',
			minimum: 10000
		},
		anofim: 'number',
		orientador: 'string'
	}],
	publicacao: [{
		tipo: {
			type: string,
			description: 'Tipo da publicação: livro, revista, periódico, tese, dissertação etc',
			enum: ['Livro', 'Revista', 'Periódico', 'Workshop', 'Conferência'],
			required: [true, 'Informe o tipo de publicação']
		},
		titulo: {
			type: 'string',
			maxlength: 100
		},
		ano: 'number',
		evento: {
			type: 'string',
			maxlength: 100
		},
		local: {
			type: 'string',
			maxlength: 100
		},
		volume: 'number',
		pages: {
			type: 'string',
			maxlength: 10
		},
		autores: [{
			nome: {
			first: {
				type: String,
				description: "Primeiro nome da pessoa",
				required: [true, "Informe o primeiro nome"]
				},
			middle: {
				"type": "string",
				"description": "Nomes que estiver entre o primeiro e o último nome da pessoa"
				},
			last: {
				"type": "string",
				"description": "Último nome da pessoa",
				required: [true, "Informe o último nome"]
				}
			},
			maxItems: 12 // 12 autores no máximo
			minItems: 1 // No mínimo um autor
		}]
	}],
	orientacao: [{
		aluno: {
			type: 'string',
			maxlength: 100
		},
		titulo: {
			type: 'string',
			maxlength: 150
		},
		nivel: {
			type: 'string',
			enum: ['Iniciação Científica', 'Graduação', 'Mestrado', 'Doutorado', 'Pós-doutorado'],
		},
		anoinicio: 'number',
		anofim: 'number',
		instituicao: {
			type: 'string',
			maxlength: 100
		}
	}]
};
var Pessoa = mongoose.model('pessoa', schema);
PessoaProvider = function () {};



PessoaProvider.prototype.findAll = function (callback) {
    Pessoa.find({}, function (err, posts) {
        callback(null, posts);
    });
};

PessoaProvider.prototype.findAllIdNome = function (callback) {
    Pessoa.find({}, {_id: 1, nome: 1, photourl: 1}, function (err, posts) {
        callback(null, posts);
    });
};


PessoaProvider.prototype.findPorNome = function (nome, callback) {
    
    Pessoa.find({"nome.first": nome}, {nome: 1, _id: 1, photourl: 1}, function (err, post) {
        if (!err) {
            callback(null, post);
        }
    });
};

PessoaProvider.prototype.findPorIdBasicInfo = function (id, callback) {
    Pessoa.findById(id, {id: 1, nome: 1, descricao: 1, email: 1, photourl: 1}, function (err, post) {
        if (!err) {
            callback(null, post);
        }
    });
};

PessoaProvider.prototype.findPorIdAllInfo = function (id, callback) {
    Pessoa.findById(id, function (err, post) {
        if (!err) {
            callback(null, post);
        }
    });
};

PessoaProvider.prototype.findPorIdPublicacao = function (id, callback) {
    Pessoa.findById(id, {id: 1, publicacao: 1}, function (err, post) {
        if (!err) {
            callback(null, post);
        }
    });
};

PessoaProvider.prototype.findPorIdOrientacao = function (id, callback) {
    Pessoa.findById(id, {id: 1, orientacao: 1}, function (err, post) {
        if (!err) {
            callback(null, post);
        }
    });
};

PessoaProvider.prototype.findPorIdAboutme = function (id, callback) {
    Pessoa.findById(id, {id: 1, formacao: 1}, function (err, post) {
        if (!err) {
            callback(null, post);
        }
    });
};

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
PessoaProvider.prototype.savePessoa = function (myjson, body, callback) {
    var myvalidation = v.validate(myjson, schema);
    if (myvalidation.errors.length === 0) {
        var pes = new Pessoa(myjson);
        pes.save(function (err) {
            if (err)
                console.log(err);
        }).then(item => {
            console.log("Item salvo na base de dados");
        }).catch(err => {
            console.log("Não foi possível salvar o item na base de dados");
        });
    } else {
        console.log(myvalidation.errors);
    }
};

exports.PessoaProvider = PessoaProvider;

