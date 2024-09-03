/*let titulo = document.querySelector('h1');      selecionei o espaço h1 do HTML 
  titulo.innerHTML = 'Jogo do número secreto';    innerHTML = dentro do HTML

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';                   */

let listaDeNumerosSorteados = []; 
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});    //comando para adicionar voz ao jogo
                                                                                //em português e na velocidade 1.2
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');                                                                           
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;             //atribiu o valor digitado em input pelo usuário na variável chute

    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);  

        document.getElementById('reiniciar').removeAttribute('disabled');
    }   
        else {
            if(chute > numeroSecreto) {
                exibirTextoNaTela('p', 'Digite um número menor');
            }
            else {
                exibirTextoNaTela('p', 'Digite um número maior');
        }
            tentativas++; 
            limparCampo();
    }  

}

function gerarNumeroAleatorio() { 
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtdDeElementosNaLista = listaDeNumerosSorteados.length;

    if (qtdDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }


    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }   else {
        listaDeNumerosSorteados.push(numeroEscolhido);                      //push, função que adiciona item ao final da lista
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''; 
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}








//Exercícios


/*



Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];


Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++',
'Kotlin'e 'Python'.
let linguagemDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];


Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
let linguagemDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
linguagemDeProgramacao.push('Java', 'Ruby', 'GoLang');


Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let lista['Matheus', 'Melissa', 'julia'];
console.log(lista[0]);


Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
let lista['Matheus', 'Melissa', 'julia'];
console.log(lista[1]);


Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
let lista['Matheus', 'Melissa', 'julia'];
console.log(lista[2]);



Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros,
e peso, em quilogramas, que serão recebidos como parâmetro.
function massaCorporal(altura, peso) {
    let imc = peso / (altura * altura); 
}


Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularNumeroFatorial(numero) {
    if(numero == 0 || numero == 1) {
        return 1
    }
        let fatorial = 1;
        for (let i = 2; i <= 2; i++) {
        fatorial *= i;

        let numero = 5;
        let resultado = calcularNumeroFatorial(numero);
        console.log(`O fatorial de ${numero} é ${resultado}`);
}

Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais.
Para isso, considere a cotação do dólar igual a R$4,80.
function cotacao(valorEmDolar) {
let valorCotacao = 4.80;
let reais = valorEmDolar * valorCotacao;
return reais.toFixed(2);
} 
    let valorEmDolar = 3000;
    let reais = cotacao(valorEmDolar);
    console.log(`${valorEmDolar} em dolar equivale a R$${reais}`);


Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que
serão dadas como parâmetro.
function calcularAreaPerimetro (altura, largura) {
    let area = altura * largura;
    let perimetro = (altura * 2) + (largura * 2);
    console.log(`A área do retângulo é ${area}m`);
    console.log(`O perimetro do retângulo é ${perimetro}m`);
}
    let altura = 10;
    let largura = 20;
    calcularAreaPerimetro(altura, largura);


Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido
como parâmetro. Considere Pi = 3,14.
function calcularAreaPerimetro(raio) {
    let Pi = 3.14;
    let area = Pi * (raio * raio);
    let perimetro = 2 * Pi * raio;
    console.log(`A área da sala é ${area}`);
    console.log(`O perimetro da sala é ${perimetro}`);
}
    let Pi = 3.14;
    let raio = 5;
    calcularAreaPerimetro(raio);

Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero) {
    for (i = 0; i <= 10; i++) {
        let mostrarTabuada = numero * i;
        console.log(`${numero} * ${i} = ${mostrarTabuada}`);
    }
}   
    let numero = 10;
    tabuada(numero);




Criar uma função que exibe "Olá, mundo!" no console.
function iniciar() {
    console.log('Olá Mundo!')
}
    iniciar();

Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function iniciar(texto) {
    console.log(`Ola, ${texto}`);
} 
    iniciar("Melissa");


Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calcularDobro(numero) {
    return numero * 2;
}
    let resultadoDobro = calcularDobro();
    console.log(`O dobro desse ${numero} é ${resultadoDobro}`);


Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}
    let media = calcularMedia(5, 10, 9);
    console.log(media);

Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function numero(a, b) {
    return (a > b || b > a);
}   
    let numeroMaior = numero(10, 20);
    console.log(numeroMaior);


Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function numero(a) {
    return (a * a);
}
    let dobro = numero(5);
    console.log(dobro);








*/

