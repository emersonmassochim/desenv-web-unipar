
// Gerar Cadastro de um Banco

//Consultar dados da Conta: Exibe os dados do titular 
//(estes dados podem ser variáveis fixas criadas por você, como Nome, Agência e Número da Conta).

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const titular = {
    nome: "Emerson Massochim",
    agencia: "1234-5",
    numeroConta: "67890-1",
    saldo: 10000.00 // Saldo inicial da conta
};

function consultarDadosConta() {
    console.log("Dados da Conta:");
    console.log(`Titular: ${titular.nome}`);
    console.log(`Agência: ${titular.agencia}`);
    console.log(`Número da Conta: ${titular.numeroConta}`);
}

//Consultar Saldo: Exibe o saldo atual da conta. 
// Atenção: O saldo deve ser exibido em formato de moeda (Reais - R$) e 
// deve refletir exatamente as operações de crédito e débito feitas.

function exibirSaldo() {
    console.log(`Saldo: R$ ${titular.saldo.toFixed(2)}`);
}

//Realizar Débito: Pede ao usuário um valor para sacar/debitar. 
// Subtrai esse valor do saldo atual. 
// (Bônus opcional: validar se o usuário tem saldo suficiente antes de debitar).

function realizarDebito(valor) {
    
    if (valor <= titular.saldo) {
        titular.saldo -= valor;
        console.log(`Débito realizado com sucesso. Novo saldo: R$ ${titular.saldo.toFixed(2)}`);
    } else {
        console.log("Saldo insuficiente.");
        console.log(`Saldo atual: R$ ${titular.saldo.toFixed(2)}`);
        rl.question("Digite um valor válido para débito: ", function (novoValor) {
            realizarDebito(Number(novoValor)); // chama de novo, esperando a resposta
        });
    }
}

//Realizar Crédito: Pede ao usuário um valor para depositar. Soma esse valor ao saldo atual.

function realizarCredito(valor) {
    titular.saldo += valor;
    console.log(`Crédito realizado com sucesso. Novo saldo: R$ ${titular.saldo.toFixed(2)}`);
}

//O sistema deve continuar rodando e exibindo o menu até que o usuário decida sair 
// (você pode adicionar uma opção "0" ou "5" para encerrar o programa).

function exibirMenu() {
    console.log("Menu:");
    console.log("[1] - Consultar dados da conta");
    console.log("[2] - Consultar saldo");
    console.log("[3] - Realizar débito");
    console.log("[4] - Realizar crédito");
    console.log("[0] - Sair");
}

//Principal - Sistema Bancário

console.log("Bem-vindo ao Sistema Bancário!");
//Ler a opção do usuário e executar a ação correspondente.

let opcao;
let valorDebito;
let valorCredito;

// Sistema bancário
console.log("Bem-vindo ao Sistema Bancário!");

function iniciarSistema() {
    exibirMenu();

    rl.question("Digite a opção desejada: ", function (opcao) {

        switch (opcao) {
            case "1":
                consultarDadosConta();
                iniciarSistema();
                break;

            case "2":
                exibirSaldo();
                iniciarSistema();
                break;

            case "3":
                rl.question("Digite o valor para débito: ", function (valor) {
                    realizarDebito(Number(valor));
                    iniciarSistema();
                });
                break;

            case "4":
                rl.question("Digite o valor para crédito: ", function (valor) {
                    realizarCredito(Number(valor));
                    iniciarSistema();
                });
                break;

            case "0":
                console.log("Saindo do sistema...");
                rl.close();
                break;

            default:
                console.log("Opção inválida.");
                iniciarSistema();
        }
    });
}

iniciarSistema();