class Cliente{
    nome;
    cpf;
}

class  ContaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor  > 0) return;
            this._saldo += valor;
    }
}

const cliente1 = new Cliente();
cliente1.nome = "André";
cliente1.cpf = 11122233344;

const cliente2 = new Cliente();
cliente2.nome = "Miguel";
cliente2.cpf = 22233344455;

const ContaCorrenteAndré = new ContaCorrente();
ContaCorrenteAndré.agencia = 1001;

ContaCorrenteAndré.depositar(-100);
ContaCorrenteAndré.depositar(100);
ContaCorrenteAndré.depositar(100);

const valorSacado = ContaCorrenteAndré.sacar(50);
console.log(valorSacado);

console.log(ContaCorrenteAndré);