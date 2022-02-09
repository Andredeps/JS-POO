import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "André";
cliente1.cpf = 11122233344;

const cliente2 = new Cliente();
cliente2.nome = "Miguel";
cliente2.cpf = 22233344455;

const ContaCorrenteAndré = new ContaCorrente();
ContaCorrenteAndré.agencia = 1001;
ContaCorrenteAndré.cliente = cliente1;
ContaCorrenteAndré.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 1002;

ContaCorrenteAndré.transferir(200, conta2);

console.log(conta2);