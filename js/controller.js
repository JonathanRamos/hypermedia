$(window).on("load", function () {
    var param = getParameterByName('uid');
    var content = getParameterByName('content');
    if (param !== null) {
        $(Pessoa).triggerHandler('setAboutMe-href');
        $(Pessoa).triggerHandler('setPublicacao-href');
        $(Pessoa).triggerHandler('setOrientacao-href');
        $.get("/load/:uid", {uid: param},
                function (data, status) {
                    if (data) {
                        atribuirJSON2HTMLPessoaPublicacao(data);
                        $(Pessoa).triggerHandler('emailChange');
                        $(Pessoa).triggerHandler('descricaoChange');
                        $(Pessoa).triggerHandler('nomeChange');
                        $(Pessoa).triggerHandler('descricaoChange');
                        switch (content) {
                            case "publicacao":
                                $(Pessoa).triggerHandler('showPublicacao');
                                break;
                            case "orientacao":
                                $(Pessoa).triggerHandler('showOrientacao');
                                break;
                            case "aboutme":
                                $(Pessoa).triggerHandler('showAboutMe');
                                break;
                        }
                    } else {
                        console.log("No data loaded");
                    }
                }).fail(function (err, status) {
            console.log(err);
        });
    } else {
        $.get("/load", function (data, status) {
            if (data) {
                atribuirJSON2HTMLPessoa(data);
            } else {
                console.log("No data loaded");
            }
        }).fail(function (err, status) {
            console.log(err);
        });
    }
}
);

$(document).ready(function () {
    $("button").click(function () {
        $.post("/new").fail(function (err, status) {
            console.log(err);
        });
    });
});


function atribuirJSON2HTMLPessoa(arr) {
    $(Pessoa).triggerHandler('nameChangeHeader');
    for (i = 0; i < arr.length; i++) {
        Pessoa.setName(arr[i].name);
        Pessoa.setId(arr[i]._id);
        $(Pessoa).triggerHandler('nameChange');
    }
}

function atribuirJSON2HTMLPessoaPublicacao(arr) {
    Pessoa.setName(arr.name);
    Pessoa.setId(arr._id);
    Pessoa.setDescricao(arr.descricao);
    Pessoa.setEmail(arr.email);
    Pessoa.setPhotourl(arr.photourl);
    Pessoa.setPublicacao(arr.publicacao);
    Pessoa.setOrientacao(arr.orientacao);
    Pessoa.setFormacao(arr.formacao);
}


function atribuiXMLtoHTML(xhttp) {
    var xmlDoc = xhttp.responseXML;

    var nome = xmlDoc.getElementsByTagName("nome")[0].childNodes[0].nodeValue;
    var sobrenome = xmlDoc.getElementsByTagName("sobrenome")[0].childNodes[0].nodeValue;
    var descricao = xmlDoc.getElementsByTagName("descricao")[0].childNodes[0].nodeValue;
    var x = xmlDoc.getElementsByTagName("publicacao");
    var y = xmlDoc.getElementsByTagName("orientacao");

    Pessoa.setSobrenome(sobrenome);
    Pessoa.setNome(nome);
    Pessoa.setDescricao(descricao);

    if (x !== null && x.length > 0) {
        atribuiPublicacoes(x);
    }
    if (y !== null && y.length > 0) {
        atribuiOrientacoes(y);
    }
}

function atribuiPublicacoes(x) {


    var publicacoes = [];
    for (i = 0; i < x.length; i++) {
        var autores = x[i].getElementsByTagName("autores");
        var titulo = x[i].getElementsByTagName("titulo");
        var evento = x[i].getElementsByTagName("evento");
        var local = x[i].getElementsByTagName("local");
        var volume = x[i].getElementsByTagName("volume");
        var pages = x[i].getElementsByTagName("pages");
        var ano = x[i].getElementsByTagName("ano");

        var pub = Publicacao;

        if (autores.length !== 0)
            pub.setAutores("" + autores[0].childNodes[0].nodeValue);
        if (titulo.length !== 0)
            pub.setTitulo(titulo[0].childNodes[0].nodeValue);
        if (evento.length !== 0)
            pub.setEvento(evento[0].childNodes[0].nodeValue);
        if (local.length !== 0)
            pub.setLocal(local[0].childNodes[0].nodeValue);
        if (volume.length !== 0)
            pub.setVolume(volume[0].childNodes[0].nodeValue);
        if (pages.length !== 0)
            pub.setPages(pages[0].childNodes[0].nodeValue);
        if (ano.length !== 0)
            pub.setAno(ano[0].childNodes[0].nodeValue);

        publicacoes.push({autores: pub.getAutores(),
            titulo: pub.getTitulo(),
            evento: pub.getEvento(),
            local: pub.getLocal(),
            volume: pub.getVolume(),
            pages: pub.getPages(),
            ano: pub.getAno()});
    }
    Pessoa.setPublicacao(publicacoes);
}

function atribuiOrientacoes(y) {

    var orientacoes = [];
    for (i = 0; i < y.length; i++) {
        var aluno = y[i].getElementsByTagName("aluno");
        var link = y[i].getElementsByTagName("link");
        var anoinicio = y[i].getElementsByTagName("anoinicio");
        var anofim = y[i].getElementsByTagName("anofim");
        var nivel = y[i].getElementsByTagName("nivel");
        var titulo = y[i].getElementsByTagName("titulo");

        var ori = Orientacao;

        if (aluno.length !== 0)
            ori.setAluno(aluno[0].childNodes[0].nodeValue);
        if (link.length !== 0)
            ori.setLinkref(link[0].childNodes[0].nodeValue);
        if (anoinicio.length !== 0)
            ori.setAnoinicio(anoinicio[0].childNodes[0].nodeValue);
        if (anofim.length !== 0)
            ori.setAnofim(anofim[0].childNodes[0].nodeValue);
        if (nivel.length !== 0)
            ori.setNivel(nivel[0].childNodes[0].nodeValue);
        if (titulo.length !== 0)
            ori.setTitulo(titulo[0].childNodes[0].nodeValue);

        orientacoes.push({aluno: ori.getAluno(),
            link: ori.getLinkref(),
            titulo: ori.getTitulo(),
            anoinicio: ori.getAnoinicio(),
            anofim: ori.getAnofim(),
            nivel: ori.getNivel()});

    }
    Pessoa.setOrientacao(orientacoes);
}

