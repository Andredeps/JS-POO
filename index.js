import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//Criando os clientes
const cliente1 = new Cliente('André', 11122233344455);
const cliente2 = new Cliente('Miguel', 22233344455566);
//Criando as contas dos clientes
const contaCorrente1 = new ContaCorrente(1001, cliente1);
const contaCorrente2 = new ContaCorrente(1001, cliente2);
//Depositando valores nas contas dos clientes
contaCorrente1.depositar(100);
contaCorrente2.depositar(100);
//Sacando valores das contas
contaCorrente1.sacar(50);
contaCorrente2.sacar(50);
//Transferindo valores das contas
contaCorrente1.transferir(10, contaCorrente2);
//Mostrando contas
console.log(contaCorrente1);
console.log(contaCorrente2);