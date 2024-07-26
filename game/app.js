// AULA ACOMPANHADA

alert('boas-vindas ao jogo do numero secreto');
let numeroSecreto = 5;
let chute = prompt('Escolha um numero entre 1 e 30')
let tentativa=1

while (chute != numeroSecreto) {

     chute = prompt('Escolha um numero entre 1 e 30')
    if(chute == numeroSecreto){
    } else{
    if(numeroSecreto > chute){
        alert(`Numero Secreto é Maior que ${chute}`)
    } else{
        alert(`Numero Secreto é Menor que ${chute}`)
   }
   tentativa++
}

}

let palavraTentativa = tentativa>1?"tentativas":"tentativa";
alert(`Isso aê Você Descobriu o Numero Secreto que é: ${numeroSecreto} com ${tentativa} ${palavraTentativa}`)





