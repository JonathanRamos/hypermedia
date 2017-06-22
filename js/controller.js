$(window).on("load", function () {

    var param = getParameterByName('uid');
    var content = getParameterByName('content');
    if (param !== null) {
        Pessoa.definirHrefs(param);
        Pessoa.buscarBasicInfo(param);
        switch (content) {
            case "publicacao":
                Pessoa.buscarPublicacao(param);
                break;
            case "orientacao":
                Pessoa.buscarOrientacao(param);
                break;
            case "aboutme":
                Pessoa.buscarFormacao(param);
                break;
            case "completo":
                Pessoa.buscarCompleto(param);
                break;
            default:
                console.log("Nenhum conteúdo adicional para mostrar");
                break;
        }
    } else {
        var myPageName = document.location.pathname.match(/[^\/]+$/)[0];
        if (myPageName === 'cadastrar.html') {

        }

    }
}
);


$(document).ready(function () {
    $("#buscar").click(function () {
        var nome = $("#nome").val();
        if (nome !== '') {
            PessoaList.buscaPorNome(nome);
        } else {
            alert("Informe um nome para a busca");
        }
        return false;
    });

    $("#buscarTodos").click(function () {
        PessoaList.buscarTodos();
        return false;
    });

    $("#limparLista").click(function () {
        PessoaList.limparLista();
        return true;
    });

    $("#salvar").click(function () {
        var texto = $("#mytext").val();
        if (texto) {
            var aux = JSON.parse(texto);
            $.post("/salvar/:teste", aux,
                    function (data, status) {
                        alert("Salvo na base de dados");
                    }).fail(function (err, status) {
                console.log(status);
                alert("Não foi possível salvar: " + status);
            });
        } else {
            alert("Informe um texto");
        }
        return false;
    }
    );
});

function getParameterByName(name) {
    url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
    if (!results)
        return null;
    if (!results[2])
        return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


