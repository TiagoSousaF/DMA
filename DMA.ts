console.clear();
const teclado = require(`prompt-sync`)();
const data = new Date;
let dia: number = data.getDate();
let mes: number = data.getMonth();
let ano: number = data.getFullYear();
mes ++;
function dataAtual(): void{
    let d: number = parseInt(teclado(`Digite o Dia: `));
    let m: number = parseInt(teclado(`Digite o Mês: `));
    let a: number = parseInt(teclado(`Digite o Ano: `));
    if(dia == d && mes == m && ano == a){
        console.log(`Hoje é ${dia}/${mes}/${ano}!`);
    }
    else if(dia != d && mes == m && ano == a){
        console.log(`O dia é inválido`);
    }
    else if(dia == d && mes != m && ano == a){
        console.log(`O mês é inválido`);
    }
    else if(dia == d && mes == m && ano != a){
        console.log(`O ano é inválido`);
    }
    else if(dia != d && mes != m && ano == a){
        console.log(`O dia e o mês são inválidos`);
    }
    else if(dia != d && mes == m && ano != a){
        console.log(`O dia e o ano são inválidos`);
    }
    else if(dia == d && mes != m && ano != a){
        console.log(`O mês e o ano são inválidos`);
    }
    else if(dia != d && mes != m && ano != a){
        console.log(`O dia, o mês e o ano são inválidos`);
    }
    else console.log(`Algo deu errado!`);
}

dataAtual();