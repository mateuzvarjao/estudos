class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
        } 
    }
}

const Cliente1 = new Cliente();

Cliente1.nome = "Ricardo";
Cliente1.cpf = 11122233309;


const Cliente2 = new Cliente();
Cliente2.nome = "Alice";
Cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);