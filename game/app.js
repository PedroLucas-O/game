// AULA ACOMPANHADA

// alert('boas-vindas ao jogo do numero secreto')// let numeroSecreto = parseInt (Math.random()*numeroMaxim;
// let numeroSecreto = gerarNumero();
let numeroSecreto = 5;

// let numeroMaximo = 500;
// let tentativa=1;


// while (chute != numeroSecreto) {

//      chute = prompt(`Escolha um numero entre 0 a ${numeroMaximo}`);
//     if(chute == numeroSecreto){
//         break;
//     } else{
//     if(numeroSecreto > chute){
//         alert(`Numero Secreto é Maior que ${chute}`);
//     } else{
//         alert(`Numero Secreto é Menor que ${chute}`);
//    }
//    tentativa++;
// }

// }

// let palavraTentativa = tentativa>1?"tentativas":"tentativa";
// alert(`Isso aê Você Descobriu o Numero Secreto que é: ${numeroSecreto} com ${tentativa} ${palavraTentativa}`);

// CODIGO BASE

// let titulo = document.querySelector('h1');
// titulo.innerHTML='Jogo do Numero Secreto';

// let tagP = document.querySelector('p');
// tagP.innerHTML='Escolha um Numero Entre 1 e 10 '


function verificarChute () {

    let chute = document.querySelector('input').value
    console.log(chute==numeroSecreto);
}

function exibirText (tag,texto) {

    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;

}       

exibirText('h1','Chalenge Time!');
exibirText('p','Escolha Um Numero Entre 1 e 10')

function gerarNumero () {
    return parseInt (Math.random()*10+1);
};
gerarNumero();

function mentiraPura () {
    
    alert ("EU AMO JAVASCRIPT DIMAISE");

}


