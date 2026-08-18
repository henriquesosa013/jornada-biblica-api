# Teste Técnico - API Jornada Bíblica

## 1. Objetivo do teste

Este teste tem como objetivo orientar um estudante de tecnologia a recriar a API do jogo **Jornada Bíblica**.

O candidato deve desenvolver uma API em **Node.js**, publicar a aplicação no **Render** e usar **MongoDB Atlas** como banco de dados.

## 2. Entendimento do domínio

A base atual mostra uma API modular em `Express`, com persistência em `MongoDB`, autenticação por token e rotas voltadas a um jogo de perguntas bíblicas.

O núcleo funcional identificado é:

- cadastro e autenticação de usuários
- consulta de livros, capítulos e versículos da Bíblia
- entrega de perguntas do jogo
- registro de respostas do usuário
- cálculo de ranking
- sugestão de novas perguntas por usuários

Também existem módulos complementares como `battle`, `adverts`, `feed`, `socialNetwork`, `notification`, `report`, `ia` e `fac`.

Para este teste, o aluno deve implementar **todos os módulos da API, com exceção do módulo relacionado ao jogo de parapente**.

## 3. Escopo do teste

### Escopo obrigatório

- API em Node.js
- framework HTTP: `Express`
- banco de dados: `MongoDB Atlas`
- autenticação com `JWT`
- deploy no `Render`
- documentação da API com `Swagger`
- tratamento básico de erros

### Funcionalidades obrigatórias

- health check da API
- cadastro de usuário
- login
- consulta de perfil
- ativação de conta por código
- recuperação de senha
- aceite dos termos de uso
- listagem de livros bíblicos
- listagem de capítulos de um livro
- listagem de versículos de um capítulo
- versículo do dia
- busca de perguntas bíblicas
- busca de perguntas gerais
- registro de resposta do usuário
- sugestão de perguntas
- validação administrativa de perguntas sugeridas
- ranking de jogadores
- registro de batalhas
- criação e busca de anúncios
- upload de arquivo
- cadastro, busca, atualização e resposta de itens `fac`
- rede social entre usuários
- criação, busca e remoção de feed
- criação, busca e atualização de notificações
- envio de push notification
- endpoints de relatórios
- endpoints de IA e histórico
- Swagger funcionando e acessível em rota pública da API

### Fora de escopo

- módulo de parapente

## 4. Requisitos técnicos sugeridos

- usar arquitetura em camadas: `routes`, `controllers`, `services/use-cases`, `repositories`, `schemas/models`
- validar entrada de dados
- usar variáveis de ambiente
- não expor segredos no repositório
- retornar JSON em todas as rotas da API
- organizar o projeto para facilitar manutenção
- documentar os endpoints com `Swagger/OpenAPI`

## 5. Modelo de coleções sugerido

O aluno não precisa copiar a estrutura original exatamente. Abaixo está um modelo mínimo coerente com o domínio.

### `users`

Campos sugeridos:

- `_id`
- `name`
- `email`
- `passwordHash`
- `dateBirth`
- `photo`
- `isActive`
- `activeCode`
- `typeUser`
- `createdAt`

### `bible`

Campos sugeridos:

- `_id`
- `book`
- `chapter`
- `verse`
- `text`

### `questions`

Campos sugeridos:

- `_id`
- `question`
- `answers`
- `correctAnswer`
- `level`
- `book`
- `chapter`
- `verseStart`
- `verseEnd`
- `type`
- `createdAt`

### `responses`

Campos sugeridos:

- `_id`
- `userId`
- `questionId`
- `isCorrect`
- `answeredAt`

### `suggestedQuestions`

Campos sugeridos:

- `_id`
- `userId`
- `question`
- `answers`
- `correctAnswer`
- `level`
- `book`
- `chapter`
- `verseStart`
- `verseEnd`
- `status`
- `comment`
- `createdAt`

### `battle`

Campos sugeridos:

- `_id`
- `userId`
- `battleId`
- `data`
- `createdAt`

### `adverts`

Campos sugeridos:

- `_id`
- `userId`
- `title`
- `description`
- `photo`
- `location`
- `createdAt`

### `fac`

Campos sugeridos:

- `_id`
- `userId`
- `description`
- `answer`
- `response`
- `isActive`
- `createdAt`
- `updatedAt`

### `socialNetwork`

Campos sugeridos:

- `_id`
- `userId`
- `friendId`
- `createdAt`

### `feed`

Campos sugeridos:

- `_id`
- `userId`
- `description`
- `photo`
- `createdAt`

### `notifications`

Campos sugeridos:

- `_id`
- `userId`
- `title`
- `description`
- `createdAt`

### `iaHistoric`

Campos sugeridos:

- `_id`
- `userId`
- `question`
- `answer`
- `createdAt`

## 6. Rotas mínimas esperadas

O candidato pode definir os nomes finais das rotas, mas uma proposta coerente é:

### Sistema

- `GET /health`

### Usuários

- `POST /v1/users`
- `POST /v1/auth/login`
- `GET /v1/users/me`
- `POST /v1/users/activate`
- `POST /v1/users/recover-password`
- `PATCH /v1/users/recover-password`
- `GET /v1/terms-of-use`
- `POST /v1/terms-of-use/:id`

### Bíblia

- `GET /v1/bible/books`
- `GET /v1/bible/chapters?book=...`
- `GET /v1/bible/verses?book=...&chapter=...`
- `GET /v1/bible/verse-day`

### Perguntas

- `GET /v1/questions`
- `GET /v1/questions/general`
- `POST /v1/questions/answer`
- `GET /v1/ranking`

### Sugestões

- `POST /v1/questions/suggestions`
- `GET /v1/questions/suggestions`
- `PATCH /v1/questions/suggestions/:id/review`

### Battle

- `POST /v1/battle`

### Adverts

- `POST /v1/adverts`
- `GET /v1/adverts`
- `POST /v1/upload-file`

### FAC

- `POST /v1/fac`
- `PUT /v1/fac`
- `GET /v1/fac`
- `POST /v1/fac/submit`
- `GET /v1/fac/submit`

### Rede social

- `POST /v1/social-network`
- `DELETE /v1/social-network`
- `GET /v1/social-network`
- `GET /v1/social-network/all`

### Feed

- `POST /v1/feed`
- `DELETE /v1/feed`
- `GET /v1/feed`

### Notificações

- `POST /v1/notification`
- `PUT /v1/notification`
- `GET /v1/notification`
- `POST /v1/push-notification`

### Relatórios

- `GET /v1/report/question-response`
- `GET /v1/report/number-question-response`
- `GET /v1/report/number-user`
- `GET /v1/report/number-question-hours`
- `GET /v1/report/search-ia`

### IA

- `GET /v1/ia`
- `GET /v1/ia/historic`

## 7. Histórias de usuário

### História 1 - Subir a API

Como estudante, quero criar a estrutura inicial da API para disponibilizar uma base pronta para evoluir o jogo.

Critérios de aceite:

- projeto inicia localmente com `npm run start`
- existe uma rota de health check
- a API lê variáveis de ambiente
- existe conexão com MongoDB Atlas
- existe uma rota de documentação Swagger funcionando

### História 2 - Cadastrar usuário

Como jogador, quero criar minha conta para acessar a Jornada Bíblica.

Critérios de aceite:

- deve validar nome, email e senha
- não deve permitir email duplicado
- deve salvar senha com hash
- deve retornar dados básicos do usuário sem expor a senha

### História 3 - Fazer login

Como jogador, quero autenticar na API para acessar rotas protegidas.

Critérios de aceite:

- login deve aceitar email e senha
- deve validar credenciais incorretas
- deve gerar JWT
- rotas protegidas devem exigir token válido

### História 4 - Consultar perfil

Como jogador autenticado, quero visualizar meus dados para confirmar que minha conta foi criada corretamente.

Critérios de aceite:

- rota protegida por JWT
- deve retornar dados do usuário autenticado
- não deve retornar senha

### História 5 - Consultar livros da Bíblia

Como jogador, quero listar os livros da Bíblia para navegar pelo conteúdo bíblico do jogo.

Critérios de aceite:

- a rota deve retornar lista sem duplicidade
- deve funcionar com dados carregados no MongoDB

### História 6 - Consultar capítulos de um livro

Como jogador, quero consultar os capítulos de um livro para explorar o conteúdo que embasa as perguntas.

Critérios de aceite:

- deve receber o nome do livro
- deve validar ausência do parâmetro obrigatório
- deve retornar os capítulos disponíveis

### História 7 - Consultar versículos

Como jogador, quero consultar os versículos de um capítulo para ler a referência da pergunta.

Critérios de aceite:

- deve receber livro e capítulo
- deve retornar a lista de versículos
- deve tratar livro/capítulo inexistente

### História 8 - Buscar perguntas do jogo

Como jogador, quero receber perguntas bíblicas para responder e progredir no jogo.

Critérios de aceite:

- rota protegida
- deve buscar perguntas no banco
- deve permitir filtro por dificuldade
- deve evitar, se possível, repetir perguntas já respondidas pelo usuário

### História 9 - Registrar resposta

Como jogador, quero enviar minha resposta para que a plataforma contabilize meu desempenho.

Critérios de aceite:

- rota protegida
- deve receber `questionId` e resposta escolhida
- deve verificar se a pergunta existe
- deve registrar se o usuário acertou ou errou
- deve persistir histórico de respostas

### História 10 - Exibir ranking

Como jogador, quero ver o ranking para comparar meu desempenho com outros jogadores.

Critérios de aceite:

- rota protegida
- ranking deve considerar acertos
- em caso de empate, pode usar menor número de erros ou data de criação
- retorno deve apresentar posição e pontuação

### História 11 - Sugerir pergunta

Como jogador, quero sugerir uma nova pergunta bíblica para contribuir com o crescimento do jogo.

Critérios de aceite:

- rota protegida
- deve validar enunciado, alternativas, resposta correta e referência bíblica
- deve salvar com status pendente

### História 12 - Revisar pergunta sugerida

Como administrador, quero aprovar ou rejeitar perguntas sugeridas para manter a qualidade do jogo.

Critérios de aceite:

- rota pode ser administrativa ou simulada
- deve permitir aprovar ou rejeitar
- deve salvar comentário opcional

### História 13 - Registrar batalhas

Como jogador, quero registrar o resultado de uma batalha para manter meu histórico de partidas.

Critérios de aceite:

- rota protegida
- deve receber um identificador da batalha
- não deve permitir duplicidade do mesmo resultado
- deve persistir os dados enviados

### História 14 - Publicar e consultar anúncios

Como jogador, quero publicar e consultar anúncios para interagir com a comunidade do jogo.

Critérios de aceite:

- rotas protegidas
- deve permitir criar anúncio
- deve permitir listar anúncios
- deve permitir upload de arquivo associado

### História 15 - Criar e responder FAC

Como usuário, quero enviar perguntas para administração e, como administrador, quero respondê-las.

Critérios de aceite:

- deve permitir criar item FAC
- deve permitir listar itens FAC
- deve permitir atualizar ou responder item FAC
- deve persistir status de resposta

### História 16 - Gerenciar rede social

Como jogador, quero seguir ou listar outros jogadores para interações sociais dentro da plataforma.

Critérios de aceite:

- rotas protegidas
- deve permitir criar relacionamento entre usuários
- deve permitir remover relacionamento
- deve permitir listar conexões

### História 17 - Gerenciar feed

Como jogador, quero publicar e consultar mensagens no feed da comunidade.

Critérios de aceite:

- rotas protegidas
- deve permitir criar postagem
- deve permitir listar postagens
- deve permitir remover postagem

### História 18 - Gerenciar notificações

Como administrador, quero criar e consultar notificações para informar os jogadores.

Critérios de aceite:

- rotas protegidas
- deve permitir criar, atualizar e listar notificações
- deve prever endpoint para disparo de push notification

### História 19 - Expor relatórios

Como administrador, quero consultar relatórios para acompanhar o uso da plataforma.

Critérios de aceite:

- deve expor métricas de usuários
- deve expor métricas de respostas
- deve expor consultas por período ou horário

### História 20 - Expor consultas de IA

Como administrador ou usuário, quero consultar integrações de IA e o histórico associado para auditoria funcional da plataforma.

Critérios de aceite:

- rota protegida
- deve expor uma rota principal de consulta
- deve expor uma rota de histórico

## 8. Regras de negócio recomendadas

- email de usuário deve ser único
- senha nunca deve ser salva em texto puro
- usuário só responde perguntas existentes
- ranking deve ser derivado das respostas registradas
- referências bíblicas da pergunta devem ser coerentes com livro, capítulo e versículo
- apenas o módulo de parapente deve ficar fora deste desafio

## 9. Seed inicial recomendada

Para viabilizar o teste, o aluno deve incluir carga inicial de dados.

Sugestão:

- popular a coleção `bible` com um recorte pequeno ou com a base completa
- popular a coleção `questions` com pelo menos 20 perguntas
- criar ao menos 1 usuário administrador
- criar dados mínimos para `fac`, `feed`, `socialNetwork`, `notification` e `adverts`

## 10. Variáveis de ambiente esperadas

Exemplo:

```env
PORT=3000
MONGODB_URI=mongodb+srv://...
MONGODB_DB_NAME=jornada_biblica
JWT_SECRET=troque_este_valor
JWT_EXPIRES_IN=7d
```

## 11. Entrega esperada do aluno

- repositório Git com código-fonte
- arquivo `README.md` com instruções de execução
- URL pública da API no Render
- URL pública do Swagger
- link ou evidência do MongoDB Atlas em uso
- coleção de testes no Postman ou arquivo `.json` de exemplos
- evidência de funcionamento dos módulos obrigatórios, exceto parapente

## 12. Critérios de avaliação

- clareza da organização do projeto
- modelagem coerente com o domínio
- cobertura do escopo obrigatório
- qualidade da autenticação
- qualidade da validação de dados
- legibilidade do código
- tratamento de erros
- funcionamento do deploy
- documentação de uso
- qualidade da documentação Swagger

## 13. Diferenciais

- uso de `Docker`
- testes automatizados
- paginação em listagens
- seed automatizada
- pipeline de deploy

## 14. Sugestão de divisão por etapas

### Etapa 1

- estrutura do projeto
- conexão com banco
- health check

### Etapa 2

- cadastro
- login
- middleware JWT

### Etapa 3

- carga da Bíblia
- consulta de livros, capítulos e versículos

### Etapa 4

- perguntas
- respostas
- ranking

### Etapa 5

- battle
- adverts
- fac
- socialNetwork
- feed
- notification

### Etapa 6

- report
- documentação
- deploy no Render
- revisão final

## 15. Resumo final do desafio

O estudante deve recriar a API do jogo **Jornada Bíblica** de forma ampla, incluindo os módulos de autenticação, Bíblia, perguntas, respostas, ranking e todos os módulos complementares existentes, deixando fora do escopo apenas o módulo de **parapente**. O teste deve ser publicado no **Render** e persistir dados no **MongoDB Atlas**.
