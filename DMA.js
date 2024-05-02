console.clear();
var teclado = require("prompt-sync")();
var data = new Date;
var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();
mes++;
function dataAtual() {
    var d = parseInt(teclado("Digite o Dia: "));
    var m = parseInt(teclado("Digite o M\u00EAs: "));
    var a = parseInt(teclado("Digite o Ano: "));
    if (dia == d && mes == m && ano == a) {
        console.log("Hoje \u00E9 ".concat(dia, "/").concat(mes, "/").concat(ano));
    }
    else if (dia != d && mes == m && ano == a) {
        console.log("O dia \u00E9 inv\u00E1lido");
    }
    else if (dia == d && mes != m && ano == a) {
        console.log("O m\u00EAs \u00E9 inv\u00E1lido");
    }
    else if (dia == d && mes == m && ano != a) {
        console.log("O ano \u00E9 inv\u00E1lido");
    }
    else if (dia != d && mes != m && ano == a) {
        console.log("O dia e o m\u00EAs s\u00E3o inv\u00E1lidos");
    }
    else if (dia != d && mes == m && ano != a) {
        console.log("O dia e o ano s\u00E3o inv\u00E1lidos");
    }
    else if (dia == d && mes != m && ano != a) {
        console.log("O m\u00EAs e o ano s\u00E3o inv\u00E1lidos");
    }
    else if (dia != d && mes != m && ano != a) {
        console.log("O dia, o m\u00EAs e o ano s\u00E3o inv\u00E1lidos");
    }
    else
        console.log("Algo deu errado!");
}
dataAtual();
