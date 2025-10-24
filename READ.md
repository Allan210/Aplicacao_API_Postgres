# Autores

RA: 2502913 Nome: Allan Keiji Kimura 
RA: 2500298 Nome: Evillyn Ghiovana de Oliveira Galvão 
RA: 250 Nome: Lucas Dias


# Projeto de Teste: Aplicação TypeScript com Banco de Dados PostgreSQL

Olá, desenvolvedor(a)! 👋

Este projeto tem como objetivo demonstrar, de forma simples e didática, como **conectar uma aplicação TypeScript a um banco de dados PostgreSQL** e realizar operações básicas de inserção de dados.

Este repositório foi criado como **material de apoio** para aprendizado prático de integração entre back-end e banco de dados.  

Caso precise montar seu banco de dados localmente, você pode seguir o tutorial do professor Eduardo Popovici:
👉 [Como montar um container com PostgreSQL no Docker](https://www.eduardopopovici.com/2025/09/como-montar-um-conteiner-com-postgre.html)

---

### 🎯 Objetivo do Projeto

A aplicação tem o propósito de:

1. **Conectar-se** a um banco PostgreSQL em execução (preferencialmente via Docker).  
2. **Receber dados do usuário** (como nome, idade, e data de nascimento).  
3. **Executar comandos SQL** para inserir as informações na tabela `pessoas`.  
4. **Encerrar a conexão** de forma segura após a operação.  

---

### 🧰 Ferramentas Necessárias

Antes de iniciar, garanta que você tenha instalado:

- [Node.js](https://nodejs.org/en/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Docker](https://www.docker.com/)  
- [PGAdmin 4](https://www.pgadmin.org/)  
- [VSCode](https://code.visualstudio.com/)  
- [Git Bash](https://gitforwindows.org/)  


---

### ⚠️ Aviso de Segurança

No arquivo principal da aplicação (ex: `AplicacaoBancoDeDados.ts`), as **credenciais do banco** podem estar escritas diretamente no código:

```typescript
const dbConfig = {
    user: 'aluno',
    host: 'localhost',
    database: 'db_profedu',
    password: '102030', // ⚠️ Atenção: prática insegura!
    port: 5432,
};
👉 Em um ambiente de aprendizado isso é aceitável, mas em projetos reais nunca exponha credenciais diretamente no código.
A prática correta é usar variáveis de ambiente (.env) junto com a biblioteca dotenv.


Clone do repositorio



📂 Estrutura do Projeto
Ao clonar ou descompactar o projeto, você encontrará algo semelhante a:

/APLICACAO_API_POSTGRES
|
|-- /dist/
|   |-- AplicacaoBancoDeDados.js   <-- Código compilado para execução no Node.js
|
|-- /src/
|   |-- AplicacaoBancoDeDados.ts   <-- Código-fonte TypeScript principal
|
|-- /node_modules/                 <-- Dependências instaladas pelo npm
|
|-- package.json                   <-- Metadados do projeto e scripts
|
|-- tsconfig.json                  <-- Configurações do compilador TypeScript
|
|-- README.md                      <-- Este arquivo

🚀 Como Executar o Projeto
Siga os passos abaixo dentro da pasta do projeto:

1️⃣ Instalar as dependências:

bash
npm install

2️⃣ Compilar o código TypeScript:
bash
npx tsc

3️⃣ Executar o programa:
bash
node dist/AplicacaoBancoDeDados.js

Durante a execução, o terminal solicitará que você informe os dados.
Após confirmar, acesse o pgAdmin e verifique se as informações foram gravadas corretamente na tabela do banco.



✅ Conclusão
Este projeto é um exemplo prático de integração entre TypeScript e PostgreSQL, ideal para quem está começando a desenvolver back-end e deseja entender o fluxo básico de:

Entrada de dados → Inserção no banco → Validação do resultado.
