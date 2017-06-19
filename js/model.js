var Pessoa = {
    _id: '',
    getId: function () {
        return this._id;
    },
    setId: function (value) {
        this._id = value;
    },
    name: {
        first: "",
        getFirst: function () {
            return this.first;
        },
        setFirst: function (value) {
            this.first = value;
        },
        middle: "",
        getMiddle: function () {
            return this.middle;
        },
        setMiddle: function (value) {
            this.middle = value;
        },
        last: "",
        getLast: function () {
            return this.last;
        },
        setLast: function (value) {
            this.last = value;
        }
    },
    getName: function () {
        return this.name;
    },
    setName: function (value) {
        this.name = value;
    },
    email: "",
    getEmail: function () {
        return this.email;
    },
    setEmail: function (value) {
        this.email = value;
    },
    photourl: "",
    getPhotourl: function () {
        return this.photourl;
    },
    setPhotourl: function (value) {
        this.photourl = value;
    },
    descricao: "",
    getDescricao: function () {
        return this.descricao;
    },
    setDescricao: function (value) {
        this.descricao = value;
    },
    formacao: [{
            descricao: "",
            getDescricao: function () {
                return this.descricao;
            },
            setDescricao: function (value) {
                this.descricao = value;
            },
            tituloobtido: "",
            getTituloObtido: function () {
                return this.tituloobtido;
            },
            setTituloObtido: function (value) {
                this.tituloobtido = value;
            },
            instituicao: "",
            getInstituicao: function () {
                return this.instituicao;
            },
            setInstituicao: function (value) {
                this.instituicao = value;
            },
            local: "",
            getLocal: function () {
                return this.local;
            },
            setLocal: function (value) {
                this.local = value;
            },
            titulo: "",
            getTitulo: function () {
                return this.titulo;
            },
            setTitulo: function (value) {
                this.titulo = value;
            },
            anoinicio: "",
            getAnoinicio: function () {
                return this.anoinicio;
            },
            setAnoinicio: function (value) {
                this.anoinicio = value;
            },
            anofim: "",
            getAnofim: function () {
                return this.anofim;
            },
            setAnofim: function (value) {
                this.anofim = value;
            },
            orientador: "",
            getOrientador: function () {
                return this.orientador;
            },
            setOrientador: function (value) {
                this.orientador = value;
            }
        }
    ],
    getFormacao: function () {
        return this.formacao;
    },
    setFormacao: function (value) {
        this.formacao = value;
    },

    publicacao: [{

            titulo: "",
            getTitulo: function () {
                return this.titulo;
            },
            setTitulo: function (value) {
                this.titulo = value;
            },
            autores: [{
                    name: {
                        first: "",
                        middle: "",
                        last: ""
                    }
                }],
            getAutores: function () {
                return this.autores;
            },
            setAutores: function (value) {
                this.autores = value;
            },
            evento: "",
            getEvento: function () {
                return this.evento;
            },
            setEvento: function (value) {
                this.evento = value;
            },
            local: "",
            getLocal: function () {
                return this.local;
            },
            setLocal: function (value) {
                this.local = value;
            },
            volume: "",
            getVolume: function () {
                return this.volume;
            },
            setVolume: function (value) {
                this.volume = value;
            },
            pages: "",
            getPages: function () {
                return this.pages;
            },
            setPages: function (value) {
                this.pages = value;
            },
            ano: "",
            getAno: function () {
                return this.ano;
            },
            setAno: function (value) {
                this.ano = value;
            }
        }],
    publicacaoString: "",
    getPublicacaoString: function () {
        var strs = [];

        for (i = 0; i < this.publicacao.length; i++) {
            var str = "";
            var pub = this.publicacao[i];

            for (j = 0; j < pub.autores.length; j++) {
                str += pub.autores[j].name.last.toUpperCase() + ", " +
                        pub.autores[j].name.first[0] + ". ";


                if (pub.autores[j].name.middle) {
                    var strlen = pub.autores[j].name.middle.length;
                    for (k = 0; k < strlen; k++) {
                        var letra = pub.autores[j].name.middle[k];

                        if (letra === letra.toUpperCase() && letra !== ' ')
                            str += pub.autores[j].name.middle[k] + ". ";
                    }
                    ;
                }

            }

            str += pub.titulo + ". "
                    + pub.evento + ". " + pub.local + ". "
                    + pub.ano;
            strs.push(str);
        }

        return strs;
    },
    getPublicacao: function () {
        return this.publicacao;
    },
    setPublicacao: function (value) {
        this.publicacao = value;
    },
    orientacao: [{
            aluno: "",
            getAluno: function () {
                return this.aluno;
            },
            setAluno: function (value) {
                this.aluno = value;
            },
            titulo: "",
            getTitulo: function () {
                return this.titulo;
            },
            setTitulo: function (value) {
                this.titulo = value;
            },
            anoinicio: "",
            getAnoinicio: function () {
                return this.anoinicio;
            },
            setAnoinicio: function (value) {
                this.anoinicio = value;
            },
            anofim: "",
            getAnofim: function () {
                return this.anofim;
            },
            setAnofim: function (value) {
                this.anofim = value;
            },
            nivel: "",
            getNivel: function () {
                return this.nivel;
            },
            setNivel: function (value) {
                this.nivel = value;
            },
            instituicao: "",
            getInstituicao: function () {
                return this.instituicao;
            },
            setInstituicao: function (value) {
                this.instituicao = value;
            }
        }],
    getOrientacao: function () {
        return this.orientacao;
    },
    setOrientacao: function (value) {
        this.orientacao = value;
    },
    orientacaoString: "",
    getOrientacaoString: function () {
        var strs = [];
        for (i = 0; i < this.orientacao.length; i++) {
            var str = "";
            var ori = this.orientacao[i];

            str += ori.anoinicio + " - " + ori.anofim + ". "
                    + ori.aluno + ". " + ori.titulo + ". "
                    + ori.nivel + ": " + ori.instituicao;
            strs.push(str);
        }

        return strs;
    }
};


