# Crypto API

## 📌 Sobre o Projeto
A **Crypto API** é uma API REST para gerenciamento de usuários e consulta de criptomoedas. Ela permite:
- Cadastro, edição, busca e filtro de usuários.
- Consumo da API **CoinGecko** para obter dados sobre criptomoedas.
- Persistência de dados em um banco **MongoDB**.

## 🚀 Tecnologias Utilizadas
- **Node.js**
- **Express.js** (Framework para API REST)
- **MongoDB** (Banco de dados NoSQL)
- **Mongoose** (ODM para MongoDB)
- **CoinGecko API** (Para obter informações de criptomoedas)
- **Dotenv** (Gerenciamento de variáveis de ambiente)
- **Bcrypt.js** (Hash de senhas)
- **JSON Web Token (JWT)** (Autenticação)
- **CORS** (Segurança para requisições)

## 📂 Estrutura do Projeto
```
crypto-api/
│-- src/
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── cryptoController.js
│   ├── models/
│   │   ├── userModel.js
│   │   ├── cryptoModel.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── cryptoRoutes.js
│   ├── db.js
│   ├── index.js
│   ├── .env
│-- package.json
│-- README.md
```

## 🛠 Configuração e Instalação
### **1. Clonar o Repositório**
```sh
git clone https://github.com/seu-usuario/crypto-api.git
cd crypto-api
```

### **2. Instalar Dependências**
```sh
npm install
```

### **3. Configurar Variáveis de Ambiente**
Crie um arquivo `.env` na raiz do projeto e adicione:
```ini
MONGO_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/?retryWrites=true&w=majority
JWT_SECRET=sua_chave_secreta
COINGECKO_API_URL=https://api.coingecko.com/api/v3
```

### **4. Iniciar o Servidor**
```sh
npx nodemon src/index.js
```
O servidor estará rodando em `http://localhost:3000`.

## 📌 Endpoints
### **Usuários**
| Método | Rota             | Descrição |
|---------|-----------------|-------------|
| POST    | /api/users      | Criar usuário |
| GET     | /api/users      | Listar usuários |
| GET     | /api/users/:id  | Buscar por ID |
| PUT     | /api/users/:id  | Atualizar usuário |

### **Criptomoedas**
| Método | Rota             | Descrição |
|---------|-----------------|-------------|
| GET     | /api/cryptos    | Listar criptos |
| GET     | /api/cryptos/:id | Buscar cripto por ID |

## 🧪 Testes Automatizados
Os testes automatizados para a aplicação estão implementados com **Jest**. Para rodar os testes, use o seguinte comando:

```sh
npm test

### Testes incluídos:
- Testes de criação, atualização e listagem de usuários.
- Testes de consulta de dados sobre criptomoedas.


## 📄 Licença
Este projeto está sob a licença MIT.

