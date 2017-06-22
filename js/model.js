var PessoaList = {
    list: [{
            _id: '',
            nome: {
                first: "",
                middle: "",
                last: ""
            },
            photourl: "",
            getNome: function () {
                return this.nome;
            },
            setNome: function (value) {
                this.nome = value;
            },
            getPhotoUrl: function () {
                return this.photourl;
            },
            setPhotoUrl: function (value) {
                this.photourl = value;
            }
        }],
    getList: function () {
        return this.list;
    },
    setList: function (value) {
        this.list = value;
        $(PessoaList).triggerHandler('pessoaListChange');
    },
    buscaPorNome: function (nome) {
        $.get("/load/:nome", {"nome": nome},
                function (data, status) {
                    if (data) {
                        console.log(data);
                        PessoaList.setList(data);
                        console.log(data);
                    } else {

                        console.log("Nenhuma pessoa referente a busca.");
                    }
                }).fail(function (err, status) {
            console.log(err);
        });
    },
    buscarTodos: function () {
        $.get("/load", function (data, status) {
            if (data) {
                PessoaList.setList(data);
            } else {
                console.log("No data loaded");
            }
        }).fail(function (err, status) {
            console.log(err);
        });
    },
    limparLista: function () {
        PessoaList.setList({});
    }
};
var Pessoa = {
    _id: '',
    nome: {
        first: "",
        middle: "",
        last: ""
    },
    email: "",
    photourl: "",
    descricao: "",
    orientacaohref: "",
    publicacaohref: "",
    aboutmehref: "",
    completohref: "",
    publicacaoString: "",
    orientacaoString: "",
    publicacao: [{
            titulo: "",
            autores: [{
                    first: "",
                    middle: "",
                    last: ""
                }],
            evento: "",
            local: "",
            pages: "",
            ano: ""
        }],
    formacao: [{
            descricao: "",
            tituloobtido: "",
            instituicao: "",
            local: "",
            titulo: "",
            anoinicio: "",
            anofim: "",
            orientador: "", getDescricao: function () {
                return this.descricao;
            },
            setDescricao: function (value) {
                this.descricao = value;
            },
            getTituloObtido: function () {
                return this.tituloobtido;
            },
            setTituloObtido: function (value) {
                this.tituloobtido = value;
            },
            getInstituicao: function () {
                return this.instituicao;
            },
            setInstituicao: function (value) {
                this.instituicao = value;
            },
            getLocal: function () {
                return this.local;
            },
            setLocal: function (value) {
                this.local = value;
            },
            getTitulo: function () {
                return this.titulo;
            },
            setTitulo: function (value) {
                this.titulo = value;
            },
            getAnoinicio: function () {
                return this.anoinicio;
            },
            setAnoinicio: function (value) {
                this.anoinicio = value;
            },
            getAnofim: function () {
                return this.anofim;
            },
            setAnofim: function (value) {
                this.anofim = value;
            },
            getOrientador: function () {
                return this.orientador;
            },
            setOrientador: function (value) {
                this.orientador = value;
            }
        }],
    orientacao: [{
            aluno: "",
            titulo: "",
            anoinicio: "",
            anofim: "",
            nivel: "",
            instituicao: "",
            getInstituicao: function () {
                return this.instituicao;
            },
            setInstituicao: function (value) {
                this.instituicao = value;
            },
            getTitulo: function () {
                return this.titulo;
            },
            setTitulo: function (value) {
                this.titulo = value;
            },
            getAutores: function () {
                return this.autores;
            },
            setAutores: function (value) {
                this.autores = value;
            },
            getEvento: function () {
                return this.evento;
            },
            setEvento: function (value) {
                this.evento = value;
            },
            getLocal: function () {
                return this.local;
            },
            setLocal: function (value) {
                this.local = value;
            },
            getVolume: function () {
                return this.volume;
            },
            setVolume: function (value) {
                this.volume = value;
            },
            getPages: function () {
                return this.pages;
            },
            setPages: function (value) {
                this.pages = value;
            },
            getAno: function () {
                return this.ano;
            },
            setAno: function (value) {
                this.ano = value;
            }
        }],
    getId: function () {
        return this._id;
    },
    setId: function (value) {
        this._id = value;
    },
    getNome: function () {
        return this.nome;
    },
    setNome: function (value) {
        this.nome = value;
        $(Pessoa).triggerHandler('nomeChange');
    },
    getNomeFirst: function () {
        return this.nome.first;
    },
    setNomeFirst: function (value) {
        this.nome.first = value;
    },
    getNomeMiddle: function () {
        return this.nome.middle;
    },
    setNomeMiddle: function (value) {
        this.nome.middle = value;
    },
    getNomeLast: function () {
        return this.nome.last;
    },
    setNomeLast: function (value) {
        this.nome.last = value;
    },
    getEmail: function () {
        return this.email;
    },
    setEmail: function (value) {
        this.email = value;
        $(Pessoa).triggerHandler('emailChange');
    },
    getPhotourl: function () {
        return this.photourl;
    },
    setPhotourl: function (value) {
        this.photourl = value;
        $(Pessoa).triggerHandler('photourlChange');
    },
    getDescricao: function () {
        return this.descricao;
    },
    setDescricao: function (value) {
        this.descricao = value;
        $(Pessoa).triggerHandler('descricaoChange');
    },
    getFormacao: function () {
        return this.formacao;
    },
    setFormacao: function (value) {
        this.formacao = value;
        $(Pessoa).triggerHandler('showAboutMe');
    },
    getPublicacao: function () {
        return this.publicacao;
    },
    setPublicacao: function (value) {
        this.publicacao = value;
        $(Pessoa).triggerHandler('showPublicacao');
    },
    getPublicacaoString: function () {
        var strs = [];
        for (i = 0; i < this.publicacao.length; i++) {
            var str = "";
            var pub = this.publicacao[i];
            for (j = 0; j < pub.autores.length; j++) {
                str += pub.autores[j].nome.last.toUpperCase() + ", " +
                        pub.autores[j].nome.first[0] + ". ";
                if (pub.autores[j].nome.middle) {
                    var strlen = pub.autores[j].nome.middle.length;
                    for (k = 0; k < strlen; k++) {
                        var letra = pub.autores[j].nome.middle[k];
                        if (letra === letra.toUpperCase() && letra !== ' ')
                            str += pub.autores[j].nome.middle[k] + ". ";
                    }
                    ;
                }

            }

            str += pub.titulo + ". "
                    + pub.evento + ". ";
            if (pub.local) {
                str += pub.local + ". ";
            }
            if (pub.volume) {
                str += "v. " + pub.volume + ". ";
            }
            if (pub.pages) {
                str += "p. " + pub.pages + ". ";
            }
            str += +pub.ano;
            strs.push(str);
        }

        return strs;
    },
    getOrientacao: function () {
        return this.orientacao;
    },
    setOrientacao: function (value) {
        this.orientacao = value;
        $(Pessoa).triggerHandler('showOrientacao');
    },
    getOrientacaoString: function () {
        var strs = [];
        for (i = 0; i < this.orientacao.length; i++) {
            var str = "";
            var ori = this.orientacao[i];
            str += ori.anoinicio;

            if (ori.anofim) {
                str += " - " + ori.anofim;
            }
            str += ". " + ori.aluno + ". " + ori.titulo + ". "
                    + ori.nivel + ": " + ori.instituicao;
            strs.push(str);
        }

        return strs;
    },
    getAboutmehref: function () {
        return this.aboutmehref;
    },
    setAboutmehref: function (value) {
        this.aboutmehref = "main.html?uid=" + value + "&content=aboutme";
        $(Pessoa).triggerHandler('setAboutMe-href');
    },
    getPublicacaohref: function () {
        return this.publicacaohref;
    },
    setPublicacaohref: function (value) {
        this.publicacaohref = "main.html?uid=" + value + "&content=publicacao";
        $(Pessoa).triggerHandler('setPublicacao-href');
    },
    getOrientacaohref: function () {
        return this.orientacaohref;
    },
    setOrientacaohref: function (value) {
        this.orientacaohref = "main.html?uid=" + value + "&content=orientacao";
        $(Pessoa).triggerHandler('setOrientacao-href');
    },
    getCompletohref: function () {
        return this.completohref;
    },
    setCompletohref: function (value) {
        this.completohref = "main.html?uid=" + value + "&content=completo";
        $(Pessoa).triggerHandler('setCompleto-href');
    },
    getAluno: function () {
        return this.aluno;
    },
    setAluno: function (value) {
        this.aluno = value;
    },
    getTitulo: function () {
        return this.titulo;
    },
    setTitulo: function (value) {
        this.titulo = value;
    },
    getAnoinicio: function () {
        return this.anoinicio;
    },
    setAnoinicio: function (value) {
        this.anoinicio = value;
    },
    getAnofim: function () {
        return this.anofim;
    },
    setAnofim: function (value) {
        this.anofim = value;
    },
    getNivel: function () {
        return this.nivel;
    },
    setNivel: function (value) {
        this.nivel = value;
    },
    buscarPublicacao: function (param) {
        $.get("/load/publicacao/:uid", {uid: param},
                function (data2, status2) {
                    console.log(data2);
                    if (data2) {
                        Pessoa.setPublicacao(data2.publicacao);
                    } else
                    {
                        console.log("Nenhuma formação encontrada.");
                    }
                }).fail(function (err, status) {
            console.log(err);
        });
    },
    buscarOrientacao: function (param) {
        $.get("/load/orientacao/:uid", {uid: param},
                function (data2, status2) {
                    if (data2) {
                        Pessoa.setOrientacao(data2.orientacao);
                    } else
                    {
                        console.log("Nenhuma orientação encontrada.");
                    }
                }).fail(function (err, status) {
            console.log(err);
        });
    },
    buscarFormacao: function (param) {
        $.get("/load/formacao/:uid", {uid: param},
                function (data2, status2) {
                    if (data2) {
                        Pessoa.setFormacao(data2.formacao);
                    } else
                    {
                        console.log("Nenhuma formação encontrada.");
                    }
                }).fail(function (err, status) {
            console.log(err);
        });
    },
    buscarBasicInfo: function (param) {
        $.get("/load/basicInfo/:uid", {uid: param},
                function (data, status) {
                    if (data) {
                        Pessoa.setNome(data.nome);
                        Pessoa.setId(data._id);
                        Pessoa.setDescricao(data.descricao);
                        Pessoa.setEmail(data.email);
                        console.log(data.photourl);
                        Pessoa.setPhotourl(data.photourl);
                    } else {
                        console.log("Nenhuma informação básica encontrada.");
                    }
                }).fail(function (err, status) {
            console.log(err);
        });
    },
    buscarCompleto: function (param) {
        $.get("/load/completo/:uid", {uid: param},
                function (data, status) {
                    if (data) {
                        Pessoa.setFormacao(data.formacao);
                        Pessoa.setOrientacao(data.orientacao);
                        Pessoa.setPublicacao(data.publicacao);
                    } else {
                        console.log("As informações completas não foram encontradas.");
                    }
                }).fail(function (err, status) {
            console.log(err);
        });
    },
    definirHrefs: function (param) {
        this.setAboutmehref(param);
        this.setOrientacaohref(param);
        this.setPublicacaohref(param);
        this.setCompletohref(param);
    },
    salvarPessoa: function () {
        $("#salvar").click(function () {
            var aux = JSON.parse($("#mytext").val());
            $.post("/salvar/:teste", aux,
                    function (data, status) {
                        return true;
                    }).fail(function (err, status) {
                console.log(status);
                return false;
            });
            return false;
        }
        );
    },
    isThereLivro: function () {
        for (i = 0; i < this.publicacao.length; i++) {
            if (this.publicacao[i].tipo === "Livro") {
                return true;
            }
        }
        return false;
    },
    isTherePeriodico: function () {
        for (i = 0; i < this.publicacao.length; i++) {
            if (this.publicacao[i].tipo === "Periodico") {
                return true;
            }
        }
        return false;
    },
    isThereRevista: function () {
        for (i = 0; i < this.publicacao.length; i++) {
            if (this.publicacao[i].tipo === "Revista") {
                return true;
            }
        }
        return false;
    },
    isThereWorkshop: function () {
        for (i = 0; i < this.publicacao.length; i++) {
            if (this.publicacao[i].tipo === "Workshop") {
                return true;
            }
        }
        return false;
    }
    ,
    isThereConferencia: function () {
        for (i = 0; i < this.publicacao.length; i++) {
            if (this.publicacao[i].tipo === "Conferência") {
                return true;
            }
        }
        return false;
    }
};


