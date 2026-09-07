// Var é uma Variável Global, podendo ser acessada em qualquer lugar do código
var nome = "João";

if (true) {
    // Let é uma Variável Local, podendo ser acessada apenas dentro do bloco de código
    let idade = 30;
    console.log("Idade dentro do bloco: " + idade);
}

// A variável idade não pode ser acessada fora do bloco, pois foi declarada com let
// console.log("Idade fora do bloco: " + idade); // Isso vai gerar um erro  

if (true) {
    // Const é uma Variável Local, podendo ser acessada apenas dentro do bloco de código
    const cidade = "São Paulo";
    console.log("Cidade dentro do bloco: " + cidade);
}

// A variável cidade não pode ser acessada fora do bloco, pois foi declarada com const
// console.log("Cidade fora do bloco: " + cidade); // Isso vai gerar um erro    

console.log("---------------------------------");

//let nome; // Indefinida

//const nomeNulo = null; // Nula

//console.log("Nome: " + nome); // Indefinida
//console.log("Nome Nulo: " + nomeNulo); // Nula

// Esse exemplo acima retorna erro, pois a variável nome foi declarada com var, e não pode ser redeclarada com let ou const.

const aluno = {

    id: 13456,
    nome: "João",
    ativo: true,
    pos: null,
    dataNascimento: "2000-01-01",
    endereco: {
        rua: "Rua A",
        numero: 123,
        bairro: "Centro",
        cidade: "São Paulo"
    }

}

console.log(aluno);

console.log("---------------------------------");

const frutas = ["Maçã", "Banana", "Laranja", "Uva"];

console.log(frutas);

const arrayAleatorio = [1, "Dois", true, null, "João", 1, 2, 3];

console.log(arrayAleatorio);

console.log("---------------------------------");

//Função
//Função para somar dois números
function somar(a, b) {
    return a + b;
}

console.log(somar(2, 3)); // Chamada da função   

//Função como parametro de outra função
function calcular(a, b, printNome) {
    printNome();
    return a + b;
}


const valor1 = "10";
const valor2 = 10;

// IF com dois iguais, compara apenas o valor, não o tipo de dado
if (valor1 == valor2) {
    console.log("Os valores são iguais");
}

// IF com três iguais, compara o valor e o tipo de dado
if (valor1 === valor2) {
    console.log("Os valores e tipos são iguais");
}

