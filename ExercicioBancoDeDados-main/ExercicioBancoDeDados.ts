// api_aluno_completo.js
// ----------------------------------------------------
// Exercício completo:
// - Solicita nome, série, idade
// - Solicita 8 notas de cada matéria (Matemática, Geografia, História)
// - Calcula média de cada matéria
// - Armazena tudo no PostgreSQL
// ----------------------------------------------------

// Importação das bibliotecas
const { Pool } = require('pg');
const readlineSync = require('readline-sync');

// ----------------------------------------------------
// CONFIGURAÇÕES DO BANCO DE DADOS
// ----------------------------------------------------
const dbConfig = {
  user: 'aluno',
  host: 'localhost',
  database: 'db_profedu',
  password: '102030',
  port: 5432,
};

// ----------------------------------------------------
// CONEXÃO
// ----------------------------------------------------
const pool = new Pool(dbConfig);

// ----------------------------------------------------
// FUNÇÃO PRINCIPAL
// ----------------------------------------------------
async function cadastrarAluno() {
  console.log("\n--- Cadastro de Aluno ---");

  const nome = readlineSync.question('Nome do aluno: ');
  const serie = readlineSync.question('Série: ');
  const idade = readlineSync.questionInt('Idade: ');

  // Cria tabela caso não exista
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS alunos (
      id SERIAL PRIMARY KEY,
      nome TEXT NOT NULL,
      serie TEXT NOT NULL,
      idade INT NOT NULL,
      media_matematica NUMERIC(5,2),
      media_geografia NUMERIC(5,2),
      media_historia NUMERIC(5,2)
    );
  `;
  await pool.query(createTableQuery);

  // ----------------------------------------------------
  // Função auxiliar para ler notas e calcular média
  // ----------------------------------------------------
  function calcularMedia(nomeMateria: string) {
    console.log(`\n--- ${nomeMateria} ---`);
    let soma = 0;
    for (let i = 1; i <= 8; i++) {
      const nota = readlineSync.questionFloat(`Digite a nota ${i}: `);
      soma += nota;
    }
    const media = soma / 8;
    console.log(`Média de ${nomeMateria}: ${media.toFixed(2)}`);
    return media;
  }

  // ----------------------------------------------------
  // Coleta notas e calcula médias
  // ----------------------------------------------------
  const mediaMatematica = calcularMedia("Matemática");
  const mediaGeografia = calcularMedia("Geografia");
  const mediaHistoria = calcularMedia("História");

  // ----------------------------------------------------
  // Salva no banco de dados
  // ----------------------------------------------------
  try {
    console.log("\nSalvando dados no banco...");
    const insertQuery = `
      INSERT INTO alunos (nome, serie, idade, media_matematica, media_geografia, media_historia)
      VALUES ($1, $2, $3, $4, $5, $6)
    `;
    const values = [nome, serie, idade, mediaMatematica, mediaGeografia, mediaHistoria];
    await pool.query(insertQuery, values);

    console.log("\n-----------------------------------");
    console.log("Aluno cadastrado com sucesso!");
    console.log(`Nome: ${nome}`);
    console.log(`Série: ${serie}`);
    console.log(`Idade: ${idade}`);
    console.log(`Médias => Matemática: ${mediaMatematica.toFixed(2)}, Geografia: ${mediaGeografia.toFixed(2)}, História: ${mediaHistoria.toFixed(2)}`);
    console.log("-----------------------------------");

  } catch (error) {
    console.error("Erro ao salvar no banco:", error);
  } finally {
    await pool.end();
    console.log("\nConexão com o banco encerrada.");
  }
}

// ----------------------------------------------------
// EXECUÇÃO
// ----------------------------------------------------
cadastrarAluno();
