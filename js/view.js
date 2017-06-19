$(document).ready(function () { // Observer

    $(Pessoa).on('nameChangeHeader', function () { // Observer
        var element = document.getElementById("conteudo");
        var para = document.createElement("h2");
        var node = document.createTextNode("Pessoas cadastradas");
        para.appendChild(node);
        element.appendChild(para);
    });
    $(Pessoa).on('nameChange', function () { // Observer
        var element = document.getElementById("conteudo");
        if (Pessoa.length === 0) {
            var para = document.createElement("h3");
            var node = document.createTextNode("Nenhuma pessoa encontrada.");
            para.appendChild(node);
            element.appendChild(para);
        } else {
            var para = document.createElement("li");
            var para2 = document.createElement("a");
            var node = document.createTextNode(Pessoa.name.first + " " + (Pessoa.name.middle == null ? "" : Pessoa.name.middle + " ") + Pessoa.name.last);
            para2.href = "main.html?uid=" + Pessoa.getId();
            para2.appendChild(node);
            para.appendChild(para2);
            element.appendChild(para);
        }

    });
    $(Pessoa).on('showPublicacao', function () { // Observer
        var str = Pessoa.name.first + " " + (Pessoa.name.middle == null ? "" : Pessoa.name.middle + " ") + Pessoa.name.last;
        document.getElementById("pessoa").getElementsByTagName("h2")[0].innerHTML = str;
    });
    $(Pessoa).on('photoUrlChange', function () { // Observer
        var element = document.getElementById("photo");
        var para = document.createElement("img");
        para.src = (Pessoa.photurl !== null ? "http://www.visualimpactmannequins.co.uk/ekmps/shops/vimannequins/images/head-abstract-male-female-tf-th--43-p.jpg" : Pessoa.photurl);
        console.log(Pessoa.photurl);
        element.appendChild(para);
    });
    $(Pessoa).on('emailChange', function () { // Observer
        document.getElementById("pessoa").getElementsByTagName("p")[0].innerHTML = Pessoa.email;
    });
    $(Pessoa).on('nomeChange', function () { // Observer
        var str = Pessoa.name.first + " " + (Pessoa.name.middle == null ? "" : Pessoa.name.middle + " ") + Pessoa.name.last;
        document.getElementById("pessoa").getElementsByTagName("h2")[0].innerHTML = str;
    });
    $(Pessoa).on('descricaoChange', function () { // Observer
        document.getElementById("descricao").getElementsByTagName("p")[0].innerHTML = Pessoa.descricao;
    });
    $(Pessoa).on('showPublicacao', function () { // Observer
        var element = document.getElementById("publicacoes");
        var para = document.createElement("h3");

        if (Pessoa.getPublicacao().length > 0) {
            var node = document.createTextNode("Trabalhos publicados");
            para.appendChild(node);
            element.appendChild(para);
            var publicacoes = Pessoa.getPublicacaoString();
            for (i = 0; i < Pessoa.getPublicacao().length; i++) {
                var para = document.createElement("p");
                var node = document.createTextNode(publicacoes[i]);
                para.appendChild(node);
                element.appendChild(para);
            }
        } else {
            var node = document.createTextNode("Nenhuma publicação encontrada.");
            para.appendChild(node);
            para.style = "color: red;";
            element.appendChild(para);
        }
    });


    $(Pessoa).on('showOrientacao', function () { // Observer
        var element = document.getElementById("publicacoes");
        var para = document.createElement("h3");

        var orientacoes = Pessoa.getOrientacaoString();
        if (Pessoa.getOrientacao().length > 0) {
            var node = document.createTextNode("Orientações");
            para.appendChild(node);
            element.appendChild(para);
            for (i = 0; i < Pessoa.getOrientacao().length; i++) {
                var para = document.createElement("p");
                var node = document.createTextNode(orientacoes[i]);
                para.appendChild(node);
                element.appendChild(para);
            }
        } else {
            var node = document.createTextNode("Nenhuma orientação encontrada.");
            para.appendChild(node);
            para.style = "color: red;";
            element.appendChild(para);
        }
    });
    $(Pessoa).on('showAboutMe', function () { // Observer

        var element1 = document.getElementById("aboutme");
        var element2 = document.getElementById("formacao_data");
        var element3 = document.getElementById("formacao_data2");

        var formacao = Pessoa.getFormacao();
        for (i = 0; i < formacao.length; i++) {

            var para = document.createElement("h3");
            var node = document.createTextNode(formacao[i].descricao + ": " 
                    + formacao[i].anoinicio + " - " 
                    + (formacao[i].anofim !== null ? "presente" : formacao[i].anofim));
            para.appendChild(node);
            element2.appendChild(para);

           var para = document.createElement("p");
            var node = document.createTextNode(formacao[i].tituloobtido + ": " 
                    + formacao[i].instituicao + ". " + formacao[i].local + ".");
            para.appendChild(node);
            element2.appendChild(para);
            

            var para = document.createElement("p");
            var para2 = document.createElement("b");
            var node = document.createTextNode("Título: " + formacao[i].titulo);
            para2.appendChild(node);
            para.appendChild(para2);
            element2.appendChild(para);
            
            

            var para = document.createElement("p");
            var node = document.createTextNode("Orientador(a): " + formacao[i].orientador + ".");
            para.appendChild(node);
            element2.appendChild(para);
        }
    });

    $(Pessoa).on('setAboutMe-href', function () { // Observer
        var param = getParameterByName('uid');
        var element = window.document.getElementById("menu").getElementsByTagName("a")[0];
        element.href = "main.html?uid=" + param + "&content=aboutme";
    });
    $(Pessoa).on('setPublicacao-href', function () { // Observer
        var param = getParameterByName('uid');
        var element = window.document.getElementById("menu").getElementsByTagName("a")[1];
        element.href = "main.html?uid=" + param + "&content=publicacao";
    });
    $(Pessoa).on('setOrientacao-href', function () { // Observer
        var param = getParameterByName('uid');
        var element = window.document.getElementById("menu").getElementsByTagName("a")[2];
        element.href = "main.html?uid=" + param + "&content=orientacao";
    });
});