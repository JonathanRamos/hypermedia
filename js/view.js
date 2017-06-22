$(document).ready(function () { // Observer

    $(Pessoa).on('nameChangeHeader', function () {
        var element = document.getElementById("conteudo");
        var para = document.createElement("h2");
        var node = document.createTextNode("Pessoas cadastradas");
        para.appendChild(node);
        element.appendChild(para);
    });

    $(Pessoa).on('photourlChange', function () {
        var img = document.getElementById("pessoa").getElementsByTagName("img")[0];
        console.log(Pessoa.getPhotourl());
        if (Pessoa.getPhotourl()) {
            img.src = Pessoa.getPhotourl();
        } else {
            img.src = "http://www.visualimpactmannequins.co.uk/ekmps/shops/vimannequins/images/head-abstract-male-female-tf-th--43-p.jpg";
        }
    });
    $(Pessoa).on('emailChange', function () {
        if (Pessoa.getEmail()) {
            document.getElementById("pessoa").getElementsByTagName("p")[0].innerHTML = Pessoa.getEmail();
        }
    });
    $(Pessoa).on('nomeChange', function () {
        var str = Pessoa.getNomeFirst() + " " +
                (Pessoa.getNomeMiddle() == null ? "" : Pessoa.getNomeMiddle())
                + " " + Pessoa.getNomeLast();
        document.getElementById("pessoa").getElementsByTagName("h2")[0].innerHTML = str;
    });
    $(Pessoa).on('descricaoChange', function () {
        if (Pessoa.getDescricao()) {
            document.getElementById("pessoa").getElementsByTagName("p")[1].innerHTML = Pessoa.getDescricao();
        }
    });
    $(Pessoa).on('showPublicacao', function () {
        var element = document.getElementById("publicacoes");
        var para = document.createElement("h2");
        var node = document.createTextNode("Trabalhos publicados");
        para.appendChild(node);
        element.appendChild(para);


        if (Pessoa.getPublicacao().length > 0) {


            Pessoa.getPublicacao().sort(function (a, b) {
                return a.ano < b.ano;
            });

            var publicacoes = Pessoa.getPublicacaoString();
            var publicacoes2 = Pessoa.getPublicacao();

            if (Pessoa.isThereLivro()) {
                var para = document.createElement("h3");
                var node = document.createTextNode("Livro");
                para.appendChild(node);
                element.appendChild(para);


                for (i = 0; i < Pessoa.getPublicacao().length; i++) {
                    if (publicacoes2[i].tipo === "Livro") {
                        var para = document.createElement("p");
                        var node = document.createTextNode(publicacoes[i]);
                        para.appendChild(node);
                        element.appendChild(para);
                    }
                }
            }
            if (Pessoa.isThereRevista()) {
                var para = document.createElement("h3");
                var node = document.createTextNode("Revista");
                para.appendChild(node);
                element.appendChild(para);


                for (i = 0; i < Pessoa.getPublicacao().length; i++) {
                    if (publicacoes2[i].tipo === "Revista") {
                        var para = document.createElement("p");
                        var node = document.createTextNode(publicacoes[i]);
                        para.appendChild(node);
                        element.appendChild(para);
                    }
                }
            }

            if (Pessoa.isTherePeriodico()) {
                var para = document.createElement("h3");
                var node = document.createTextNode("Periódico");
                para.appendChild(node);
                element.appendChild(para);


                for (i = 0; i < Pessoa.getPublicacao().length; i++) {
                    if (publicacoes2[i].tipo === "Periódico") {
                        var para = document.createElement("p");
                        var node = document.createTextNode(publicacoes[i]);
                        para.appendChild(node);
                        element.appendChild(para);
                    }
                }
            }

            if (Pessoa.isThereWorkshop()) {
                var para = document.createElement("h3");
                var node = document.createTextNode("Workshop");
                para.appendChild(node);
                element.appendChild(para);


                for (i = 0; i < Pessoa.getPublicacao().length; i++) {
                    if (publicacoes2[i].tipo === "Workshop") {
                        var para = document.createElement("p");
                        var node = document.createTextNode(publicacoes[i]);
                        para.appendChild(node);
                        element.appendChild(para);
                    }
                }
            }
            if (Pessoa.isThereConferencia()) {
                var para = document.createElement("h3");
                var node = document.createTextNode("Conferência");
                para.appendChild(node);
                element.appendChild(para);


                for (i = 0; i < Pessoa.getPublicacao().length; i++) {
                    if (publicacoes2[i].tipo === "Conferência") {
                        var para = document.createElement("p");
                        var node = document.createTextNode(publicacoes[i]);
                        para.appendChild(node);
                        element.appendChild(para);
                    }
                }
            }

        } else {
            var para = document.createElement("p");
            var node = document.createTextNode("Nenhuma publicação encontrada.");
            para.appendChild(node);
            para.style = "color: red;";
            element.appendChild(para);
        }
    });


    $(Pessoa).on('showOrientacao', function () { // Observer
        var element = document.getElementById("publicacoes");
        var para = document.createElement("h3");

        Pessoa.getOrientacao().sort(function (a, b) {
            return a.anoinicio < b.anoinicio;
        });

        var orientacoes = Pessoa.getOrientacaoString();
        var orientacoes2 = Pessoa.getOrientacao();
        console.log(orientacoes2);

        orientacoes.sort(function (a, b) {
            return a.anoinicio < b.anoinicio;
        });

        var para = document.createElement("h2");
        var node = document.createTextNode("Orientações");
        para.appendChild(node);
        element.appendChild(para);

        if (Pessoa.getOrientacao().length > 0) {
            var para = document.createElement("h3");
            var node = document.createTextNode("Em andamento");
            para.appendChild(node);
            element.appendChild(para);

            var para = document.createElement("h4");
            var node = document.createTextNode("Mestrado");
            para.appendChild(node);
            element.appendChild(para);

            for (i = 0; i < Pessoa.getOrientacao().length; i++) {
                if (!orientacoes2[i].anofim && orientacoes2[i].nivel === "Mestrado") {
                    var para = document.createElement("p");
                    var node = document.createTextNode(orientacoes[i]);
                    para.appendChild(node);
                    element.appendChild(para);
                }
            }
            var para = document.createElement("h4");
            var node = document.createTextNode("Doutorado");
            para.appendChild(node);
            element.appendChild(para);

            for (i = 0; i < Pessoa.getOrientacao().length; i++) {
                if (!orientacoes2[i].anofim && orientacoes2[i].nivel === "Doutorado") {
                    var para = document.createElement("p");
                    var node = document.createTextNode(orientacoes[i]);
                    para.appendChild(node);
                    element.appendChild(para);
                }
            }




            var para = document.createElement("h3");
            var node = document.createTextNode("Finalizadas");
            para.appendChild(node);
            element.appendChild(para);

            var para = document.createElement("h4");
            var node = document.createTextNode("Mestrado");
            para.appendChild(node);
            element.appendChild(para);

            for (i = 0; i < Pessoa.getOrientacao().length; i++) {
                if (orientacoes2[i].anofim && orientacoes2[i].nivel === "Mestrado") {
                    var para = document.createElement("p");
                    var node = document.createTextNode(orientacoes[i]);
                    para.appendChild(node);
                    element.appendChild(para);
                }
            }

            var para = document.createElement("h4");
            var node = document.createTextNode("Doutorado");
            para.appendChild(node);
            element.appendChild(para);

            for (i = 0; i < Pessoa.getOrientacao().length; i++) {
                if (orientacoes2[i].anofim && orientacoes2[i].nivel === "Doutorado") {
                    var para = document.createElement("p");
                    var node = document.createTextNode(orientacoes[i]);
                    para.appendChild(node);
                    element.appendChild(para);
                }
            }

        } else {
            var para = document.createElement("p");
            var node = document.createTextNode("Nenhuma orientação encontrada.");
            para.appendChild(node);
            para.style = "color: red;";
            element.appendChild(para);
        }
    });
    $(Pessoa).on('showAboutMe', function () { // Observer

        var element = document.getElementById("aboutme");

        var para = document.createElement("h2");
        var node = document.createTextNode("Sobre mim");
        para.appendChild(node);
        element.appendChild(para);

        var formacao = Pessoa.getFormacao();
        // coloca em ordem do mais atual para o mais antigo
        formacao.sort(function (a, b) {
            return a.anoinicio < b.anoinicio;
        });

        if (formacao.length > 0) {
            for (i = 0; i < formacao.length; i++) {

                var para = document.createElement("h3");
                var node = document.createTextNode(formacao[i].descricao + ": "
                        + formacao[i].anoinicio + " - "
                        + (formacao[i].anofim == null ? "presente" : formacao[i].anofim));
                para.appendChild(node);
                element.appendChild(para);
                var para = document.createElement("p");
                var node = document.createTextNode(formacao[i].tituloobtido + ": "
                        + formacao[i].instituicao + ". " + formacao[i].local + ".");
                para.appendChild(node);
                element.appendChild(para);
                var para = document.createElement("p");
                var para2 = document.createElement("b");
                var node = document.createTextNode("Título: " + formacao[i].titulo);
                para2.appendChild(node);
                para.appendChild(para2);
                element.appendChild(para);
                var para = document.createElement("p");
                var node = document.createTextNode("Orientador(a): " + formacao[i].orientador + ".");
                para.appendChild(node);
                element.appendChild(para);
            }
        } else {
            var para = document.createElement("p");
            var node = document.createTextNode("Nenhuma informação sobre mim.");
            para.appendChild(node);
            para.style = "color: red;";
            element.appendChild(para);
        }
    });

    $(Pessoa).on('setAboutMe-href', function () {
        var element = window.document.getElementById("menu").getElementsByTagName("a")[0];
        element.href = Pessoa.getAboutmehref();
    });
    $(Pessoa).on('setPublicacao-href', function () {
        var element = window.document.getElementById("menu").getElementsByTagName("a")[1];
        element.href = Pessoa.getPublicacaohref();
    });
    $(Pessoa).on('setOrientacao-href', function () {
        var element = window.document.getElementById("menu").getElementsByTagName("a")[2];
        element.href = Pessoa.getOrientacaohref();
    });
    $(Pessoa).on('setCompleto-href', function () {
        var element = window.document.getElementById("menu").getElementsByTagName("a")[3];
        element.href = Pessoa.getCompletohref();
    });

    $(PessoaList).on('pessoaListChange', function () { // Observer
        var element = document.getElementById("conteudo");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        var list = PessoaList.getList();


        if (list.length === 0) {
            var para = document.createElement("h3");
            var node = document.createTextNode("Nenhuma pessoa encontrada.");
            para.appendChild(node);
            element.appendChild(para);
        } else {
            for (i = 0; i < list.length; i++) {
                var para = document.createElement("li");
                var para2 = document.createElement("a");
                var para3 = document.createElement("img");
                if (list[i].photourl) {
                    para3.src = list[i].photourl;
                } else {
                    para3.src = "http://www.visualimpactmannequins.co.uk/ekmps/shops/vimannequins/images/head-abstract-male-female-tf-th--43-p.jpg";
                }
                var node = document.createTextNode(list[i].nome.first
                        + " " + (list[i].nome.middle == null ? "" : list[i].nome.middle) + " "
                        + list[i].nome.last);
                para2.href = "main.html?uid=" + list[i]._id;
                para2.appendChild(node);
                para.appendChild(para3);
                para.appendChild(para2);
                element.appendChild(para);
            }
        }

    });
});

$(function () {
    $("#rodape").load("footer.html");
});

$(function () {
    $("#mySidenav").load("sideNav.html");
});

$(function () {
    $("#header").load("header.html");
});