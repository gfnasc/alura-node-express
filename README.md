Aqui está um exemplo de **README.md** para a sua API de Livraria Online:

---

# 📚 BookStore API

Esta é uma API RESTful para gerenciar livros em uma livraria online. A API permite que você adicione, edite, remova e liste livros, além de fornecer recursos para autenticação de usuários e gerenciamento de favoritos.

## 🚀 Funcionalidades

- Adicionar, editar e excluir livros (rota protegida para admins).
- Listar todos os livros cadastrados.
- Pesquisar livros por título ou autor.
- Autenticação de usuários com JWT.
- Gerenciar lista de livros favoritos de um usuário.

## 🛠 Tecnologias Utilizadas

- **Node.js** e **Express**: Para o desenvolvimento do servidor.
- **MongoDB** e **Mongoose**: Para gerenciamento de banco de dados.
- **JWT (JSON Web Token)**: Para autenticação.
- **Bcrypt**: Para hash de senhas.

## 🧑‍💻 Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- [MongoDB](https://www.mongodb.com/) rodando localmente ou em um serviço na nuvem.

### Passo a Passo

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/livraria-api.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd livraria-api
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/livraria
   JWT_SECRET=sua_chave_secreta
   ```

5. Inicie o servidor:
   ```bash
   npm start
   ```

6. A API estará disponível em `http://localhost:3000/api`.

## 🔑 Autenticação

Algumas rotas são protegidas por autenticação JWT. Para acessar essas rotas, é necessário criar um usuário (ou logar com um existente) e enviar o token JWT no cabeçalho das requisições.

### Registro de Usuário

- **POST** `/api/register`
  
  Exemplo de corpo da requisição:
  ```json
  {
    "name": "Guilherme",
    "email": "guilherme@example.com",
    "password": "senha123"
  }
  ```

### Login de Usuário

- **POST** `/api/login`
  
  Exemplo de corpo da requisição:
  ```json
  {
    "email": "guilherme@example.com",
    "password": "senha123"
  }
  ```

O token JWT será retornado e deverá ser enviado no cabeçalho `Authorization` das requisições protegidas:
```
Authorization: Bearer <token_jwt>
```

## 📚 Endpoints

### **Livros**
- **GET** `/api/books`: Retorna todos os livros.
- **GET** `/api/books/:id`: Retorna detalhes de um livro.
- **POST** `/api/books`: Adiciona um novo livro (apenas admin).
- **PUT** `/api/books/:id`: Atualiza um livro (apenas admin).
- **DELETE** `/api/books/:id`: Remove um livro (apenas admin).

### **Usuários**
- **GET** `/api/users/:id/favorites`: Retorna a lista de livros favoritos do usuário.
- **POST** `/api/users/:id/favorites`: Adiciona um livro aos favoritos.
- **DELETE** `/api/users/:id/favorites/:bookId`: Remove um livro dos favoritos.

### **Pesquisa**
- **GET** `/api/books/search?title=NomeDoLivro`: Pesquisa livros por título.
- **GET** `/api/books/search?author=NomeDoAutor`: Pesquisa livros por autor.

## ⚙️ Estrutura do Projeto

```bash
.
├── src
│   ├── controllers    # Lógica dos endpoints
│   ├── models         # Modelos do MongoDB
│   ├── routes         # Definição das rotas
│   ├── middlewares    # Middleware de autenticação
│   └── utils          # Funções auxiliares (ex: validação)
├── app.js             # Configuração principal do Express
└── server.js          # Arquivo de inicialização do servidor
```

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.
