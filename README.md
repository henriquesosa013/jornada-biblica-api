# 📖 API Jornada Bíblica 🎮
API REST desenvolvida em Node.js + Express para o jogo "Jornada Bíblica" . A API oferece autenticação com JWT, leitura de textos bíblicos, sistema de quiz/perguntas com pontuação e ranking, batalhas entre jogadores, upload de mídias, notificações, suporte FAC, rede social entre usuários e feed da comunidade.
---
## 🚀 Tecnologias Utilizadas
* **Runtime:** Node.js (ES Modules)
* **Framework Web:** Express.js
* **ODM:** Mongoose
* **Banco de Dados:** MongoDB Atlas
* **Autenticação:** JSON Web Token (JWT)
* **Uploads:** Multer
* **Documentação:** Swagger UI (OpenAPI/Swagger 2.0)
* **Deploy:** Render
---
## 📜 Documentação Interativa (Swagger UI)
A API possui documentação completa e testável via **Swagger UI**. Você pode testar todas as rotas diretamente pelo navegador.
* 🌐 **Documentação em Produção (Render):** https://jornada-biblica-api.onrender.com/api-docs/
* 💻 **Documentação Local:** `http://localhost:<PORTA>/api-docs/` (conforme definido no `.env`)
---
## ✨ Funcionalidades da API
### 🔐 Autenticação & Usuários
* `POST /register` - Cadastro de novos usuários com criptografia de senha.
* `POST /login` - Autenticação de usuário e geração de Token JWT.
* `GET /users/me` - Consulta do perfil do usuário autenticado (requer login).
### 📖 Bíblia Sagrada
* `GET /bible/books` - Listagem de todos os livros da Bíblia.
* `GET /bible/chapters?book=Gênesis` - Listagem dos capítulos de um livro específico.
* `GET /bible/verses?book=Gênesis&chapter=1` - Leitura dos versículos de um capítulo.
* `GET /bible/verseday` - Obtenção do versículo do dia (aleatório).
### 🎯 Perguntas, Respostas & Ranking
* `GET /questions` - Busca de perguntas do jogo (requer login).
* `POST /questions/answer` - Envio de resposta do usuário com validação de acerto.
* `GET /ranking` - Ranking dos jogadores com mais acertos.
### ⚔️ Batalhas & Anúncios
* `POST /battle` - Registro de partidas/batalhas de um jogador.
* `POST /adverts` & `GET /adverts` - Criação e listagem de anúncios na plataforma.
* `POST /upload-file` - Upload de fotos e arquivos de mídia.
### 🙋 FAC (Fale Conosco)
* `POST /fac` & `PUT /fac` - Criação de dúvidas e respostas de suporte (Administrador).
* `GET /fac` & `GET /fac/submites` - Listagem de itens FAC e das submissões respondidas.
### 👥 Rede Social & Feed
* `POST /socialnetwork`, `DELETE /socialnetwork`, `GET /socialnetwork`, `GET /socialnetworkALL` - Gerenciamento de conexões entre usuários.
* `POST /feed`, `GET /feed`, `DELETE /feed` - Criação, listagem e remoção de postagens no feed.
### 🔔 Notificações & Relatórios
* `POST /notifications`, `PUT /notifications`, `GET /notifications` - Envio e leitura de notificações.
* `GET /report/*` - Relatórios do sistema para administradores.
---
## 🛠️ Como Executar o Projeto Localmente
### Pré-requisitos
* Node.js v18+ instalado
* Conta/instância no MongoDB Atlas
### 1. Clonar o Repositório
```bash
git clone https://github.com/henriquesosa013/api-jornada-biblica.git
cd api-jornada-biblica
```
### 2. Instalar as Dependências
```bash
npm install
```
### 3. Configurar as Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto contendo:
```env
MONGODB_URI="mongodb+srv://usuario:senha@cluster.mongodb.net/sua_database"
JWT_SECRET="sua_chave_secreta_jwt"
PORT="SUA_PORTA"
```
### 4. Iniciar o Servidor
```bash
npm run start
```
O servidor estará rodando na porta configurada no seu `.env` e a documentação do Swagger estará acessível em `http://localhost:<PORTA>/api-docs/`.
