import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "André";
cliente1.cpf = 11122233344;

const cliente2 = new Cliente();
cliente2.nome = "Miguel";
cliente2.cpf = 22233344455;


const contaCorrente1 = new ContaCorrente();
contaCorrente1.agencia = 1001;
contaCorrente1.cliente = cliente1;
contaCorrente1._saldo = 0;

const contaCorrente2 = new ContaCorrente();
contaCorrente2.agencia = 1001;
contaCorrente2.cliente = cliente2;
contaCorrente2._saldo = 0;

contaCorrente1.depositar(100);
contaCorrente2.depositar(100);

contaCorrente1.sacar(50);
contaCorrente2.sacar(50);

contaCorrente1.transferir(10, contaCorrente2);

console.log(contaCorrente1);
console.log(contaCorrente2);