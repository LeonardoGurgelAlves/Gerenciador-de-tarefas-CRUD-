# 📚 Gerenciador de Tarefas - Projeto Acadêmico (CRUD)

Este projeto consiste em um Gerenciador de tarefas desenvolvido para o trabalho de **Desenvolvimento Web**, implementando um sistema completo que cria(Create), Lê/mostra visualmente (Read), permite atualizações/alterações (Update), assim como permite a exclusão de informações (Delete).

##📋 Funcionalidades do Sistema

    **Create:** Cadastro de tarefas com título, descrição, data de vencimento e prioridade.

    **Read:** Listagem visual com cards coloridos baseados na prioridade (Baixa/Média/Alta).

    **Update:** Edição completa de dados e atualização de status (Pendente/Em andamento/Concluída).

    **Delete:** Remoção de tarefas com confirmação de segurança via JavaScript.

## 👨‍💻Tecnologias utilizadas:

* **Backend:** Utilizamos **Node.js** com o framework **Express** para gerenciar o servidor e suas rotas.
* **Database:** A persistência de dados foi feita no **MongoDB Atlas (Nuvem)**, utilizando a biblioteca **Mongoose** para modelagem dos dados (Schema) e validação.
* **Frontend:** A interface foi construída com **EJS (Embedded JavaScript)**, permitindo renderizar dados dinâmicos do backend diretamente no HTML. A estilização utilizou **Bootstrap 5** para responsividade e **CSS** para identidade visual.

## 📖Bibliotecas utilizadas:

    **express:** Framework para criar o servidor web.

    **mongoose:** ODM para interagir com o MongoDB.

    **ejs:** Template engine para gerar HTML dinâmico.

    **dotenv:** Para carregar variáveis de ambiente do arquivo .env (proteção de credenciais).

    **method-override:** Middleware essencial para suportar métodos PUT e DELETE em formulários HTML, que nativamente suportam apenas GET e POST.
    
## 💻Comandos e Dependências:

Durante o desenvolvimento no VS Code, utilizamos o **NPM (Node Package Manager)** para gerenciar o projeto. Todos os comandos citados a seguir foram inseridos e executados pelo **terminal do VS Code (Ctrl + ')**.

**1. Inicialização do Projeto:**

**npm init -y**

**2. Instalação das Dependências:**

**npm install express mongoose ejs dotenv method-override**

**3. Inicialização do servidor após todas configurações e preparativos necessários:**

** node server.js**

## 📂 Estrutura de Arquivos

A organização das pastas foi pensada para separar responsabilidades:

```text
/gerenciador-tarefas
│
├── controllers/        # Lógica de controle (Regras de negócio do CRUD)
│   └── tarefaController.js
├── models/             # Definição do Schema do Banco de Dados
│   └── Tarefa.js
├── public/             # Arquivos estáticos (CSS, Imagens)
│   └── css/
│       └── style.css
├── routes/             # Definição das rotas (URLs) da aplicação
│   └── tarefas.js
├── views/              # Interface do usuário (Telas .ejs)
│   └── partials/       # Fragmentos reutilizáveis (header, footer)
│       └── index.ejs       # Tela de listagem (Home)
│       └── nova.ejs        # Formulário de criação
│       └── editar.ejs      # Formulário de edição
├── .env                # Variáveis de ambiente (Segurança - Senhas(Não são enviadas para o GitHub))
├── .gitignore          # Arquivos para o Git ignorar
├── package.json        # Dependências do projeto
└── server.js           # Arquivo principal (Ponto de entrada)

##💡 Desafios e Soluções (Erros Enfrentados)

Durante a construção, superamos os seguintes desafios técnicos:

    Limitação dos Formulários HTML: Como navegadores não enviam requisições PUT/DELETE nativamente por formulário, implementamos o method-override para simular essas requisições e manter o padrão RESTful nas rotas.

    Conexão com Banco na Nuvem: A configuração do MongoDB Atlas exigiu atenção especial à Connection String e à liberação de IP (Network Access) para permitir conexões de diferentes locais (faculdade/casa).

    Módulos e Caminhos: A organização em pastas exigiu o uso correto de caminhos relativos (../controllers, ./routes) para evitar erros de MODULE_NOT_FOUND.

## ✅Como Rodar o Projeto (Instruções)

Pré-requisitos: Node.js e VS Code instalados, Git, e permissões de admnistrador para algumas configurações do PowerShell caso necessárias.

    **Clone o repositório:**

**git clone [https://github.com/SEU-USUARIO/gerenciador-tarefas.git](https://github.com/SEU-USUARIO/gerenciador-tarefas.git)**
cd gerenciador-tarefas

**Instale as dependências:**

**npm install** (Irá instalar todas os "igredientes" presentes no **package.json**).

**Configure as Variáveis de Ambiente:**

    Crie um arquivo chamado **.env na raiz** do projeto.

    Adicione o seguinte conteúdo: **Login e senha do Admin ou string de conexão do MongoDB Atlas**.

**Snippet de código .env:**

**PORT=3000**
**DB_CONNECTION_STRING=mongodb+srv://USUARIO:SENHA@cluster...**

**Iniciar o Servidor:**

**node server.js**

**Acesse o Navegador(Edge,Chrome,Firefox e etc..) e abra: http://localhost:3000**

---
**Desenvolvido por:** Leonardo Gurgel(linkgit) e Yorran Barroso(linkgit).