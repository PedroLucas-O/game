// AULA ACOMPANHADA
let listaDeNumerosSortados =[];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativa=1;



function exibirText(tag, texto) {

    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});

}

function exibirMensagemInicial () {
    exibirText('h1', 'Jogo Do Numero Secreto!');
    exibirText('p', 'Escolha Um Numero Entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {

    let chute = document.querySelector('input').value
    if (chute == numeroSecreto) {

        exibirText('h1', "Parabéns Você Acertou o Numero Secreto");
        let palavraTentativa = tentativa>1?"tentativas":"tentativa";
        let mensagemTentativas = `Você Descobrio o Numero Secreto Com ${tentativa} ${palavraTentativa}`;
        exibirText('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')

    } else {

        if (numeroSecreto > chute) {
            exibirText('p', "O Numero Secreto é maior!");
        } else {
            exibirText('p', "O Numero Secreto é menor!");
        }

        tentativa++;
        limparCampo();
    }
}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSortados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {

        listaDeNumerosSortados = [];
        console.log(quantidadeDeElementosNaLista);

    }

    if (listaDeNumerosSortados.includes(numeroEscolhido)) {
        return gerarNumero();
    }else{
        listaDeNumerosSortados.push(numeroEscolhido);
        console.log(listaDeNumerosSortados);
        return numeroEscolhido
    }
};

gerarNumero();

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo () {
     numeroSecreto = gerarNumero();
    limparCampo();
     tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}



