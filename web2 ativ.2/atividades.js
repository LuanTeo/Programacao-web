// Importa o módulo readline-sync para entrada de dados
const readlineSync = require('readline-sync');

// Função para calcular a média das notas
function calcularMedia() {
  const n1 = readlineSync.questionFloat('Digite a primeira nota: ');
  const n2 = readlineSync.questionFloat('Digite a segunda nota: ');
  const n3 = readlineSync.questionFloat('Digite a terceira nota: ');
  const n4 = readlineSync.questionFloat('Digite a quarta nota: ');

  // Converte as entradas para números e calcula a média
  const media = (n1 + n2 + n3 + n4) / 4;

  // Exibe a média no console
  console.log(`A média do aluno é: ${media.toFixed(2)}`);

  // Volta para o menu após exibir a média
  mostrarMenu();
}

// Função para calcular o salário com aumento e desconto do INSS
function calcularSalario() {
  const salarioInicial = readlineSync.questionFloat('Digite o salário inicial do funcionário: ');

  // Calcula o aumento de 20%
  const aumento = salarioInicial * 0.20;
  const salarioComAumento = salarioInicial + aumento;

  // Calcula o desconto do INSS (8% do salário com aumento)
  const descontoINSS = salarioComAumento * 0.08;

  // Calcula o salário final
  const salarioFinal = salarioComAumento - descontoINSS;

  // Exibe os resultados
  console.log(`Salário inicial: R$ ${salarioInicial.toFixed(2)}`);
  console.log(`Salário com aumento de 20%: R$ ${salarioComAumento.toFixed(2)}`);
  console.log(`Desconto do INSS (8%): R$ ${descontoINSS.toFixed(2)}`);
  console.log(`Salário final: R$ ${salarioFinal.toFixed(2)}`);

  // Volta para o menu após exibir os resultados
  mostrarMenu();
}

// Função para calcular a média e situação dos alunos
function aprovacao() {
  let alunos = [];
  let resposta = "";

  do {
    const matricula = readlineSync.question("Digite a matrícula do aluno: ");
    const nome = readlineSync.question('Digite o nome do aluno: ');
    const nota1 = readlineSync.questionFloat('Digite a primeira nota do aluno: ');
    const nota2 = readlineSync.questionFloat('Digite a segunda nota do aluno: ');

    let alunoNovo = { matricula, nome, nota1, nota2 };
    alunos.push(alunoNovo);

    resposta = readlineSync.question("Deseja adicionar outro aluno? (S/N): ");
  } while (resposta.toUpperCase() === "S" || resposta.toUpperCase() === "SIM");

  let somaMedias = 0;
  console.log("\n--- Resultados dos Alunos ---");
  alunos.forEach(aluno => {
    const mediaAluno = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Matrícula: ${aluno.matricula}, Nome: ${aluno.nome}, Situação: ${situacao(aluno.nota1, aluno.nota2)}`);
    somaMedias += mediaAluno;
  });

  // Calcula e exibe a média geral
  const mediaGeral = somaMedias / alunos.length;
  console.log(`\nA média geral dos alunos é: ${mediaGeral.toFixed(2)}`);

  // Volta para o menu após exibir os resultados
  mostrarMenu();
}

// Função para determinar a situação do aluno
function situacao(nota1, nota2) {
  const media = (parseFloat(nota1) + parseFloat(nota2)) / 2;
  if (media > 7) return "Aprovado";
  else if (media === 7) return "Recuperação";
  else return "Reprovado";
}

// Função para calcular o valor total arrecadado com camisetas
function calcularVendaCamisetas() {
  const pequenas = readlineSync.questionInt('Quantidade de camisetas pequenas: ');
  const medias = readlineSync.questionInt('Quantidade de camisetas médias: ');
  const grandes = readlineSync.questionInt('Quantidade de camisetas grandes: ');

  const total = pequenas * 10 + medias * 12 + grandes * 15;
  console.log(`Valor total arrecadado: R$ ${total.toFixed(2)}`);

  // Volta para o menu após exibir os resultados
  mostrarMenu();
}

// Função para dividir a conta do bar entre Carlos, André e Felipe
function dividirContaBar() {
  const valorConta = readlineSync.questionFloat('Digite o valor total da conta: ');
  const total = parseFloat(valorConta);
  const valorPorPessoa = total / 3;
  const carlos = Math.floor(valorPorPessoa);
  const andre = Math.floor(valorPorPessoa);
  const felipe = total - carlos - andre;

  console.log(`Carlos deve pagar: R$ ${carlos.toFixed(2)}`);
  console.log(`André deve pagar: R$ ${andre.toFixed(2)}`);
  console.log(`Felipe deve pagar: R$ ${felipe.toFixed(2)}`);

  // Volta para o menu após exibir os resultados
  mostrarMenu();
}

// Função para mostrar o menu e escolher entre as opções
function mostrarMenu() {
  console.log("\nMenu:");
  console.log("1. Calcular Média");
  console.log("2. Calcular Salário");
  console.log("3. Aprovação de Alunos");
  console.log("4. Calcular Venda de Camisetas");
  console.log("5. Dividir Conta do Bar");
  console.log("6. Sair");

  const opcao = readlineSync.question('Escolha uma opção: ');

  if (opcao === '1') {
    calcularMedia();
  } else if (opcao === '2') {
    calcularSalario();
  } else if (opcao === '3') {
    aprovacao();
  } else if (opcao === '4') {
    calcularVendaCamisetas();
  } else if (opcao === '5') {
    dividirContaBar();
  } else if (opcao === '6') {
    console.log("Saindo...");
    process.exit(0); // Encerra o programa
  } else {
    console.log("Opção inválida! Tente novamente.");
    mostrarMenu();
  }
}

// Iniciar o programa mostrando o menu
mostrarMenu();
