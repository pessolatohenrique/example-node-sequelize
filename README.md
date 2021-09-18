# Template para Node (Sequelize)

### Sobre

O objetivo deste projeto é fornecer um template com recursos comuns à todos os projetos em Node.js e Sequelize (Framework ORM)

### Tecnologias

- Node.js
- Sequelize (ORM)

### Instalação do projeto

Acesse a pasta do projeto e rode o comando para instalar as dependências npm:

    npm install

Criar arquivo .env e configurar as variáveis de ambiente, semelhantes ao arquivo "env-example".

Criar arquivo .sequelizerc com as configurações definidas em "sequelizerc-example"

Execute as "migrations" disponíveis, por meio do comando:

    npx sequelize-cli db:migrate

Execute os "seeders" disponíveis, por meio do comando:

    npx sequelize-cli db:seed:all

E, por fim, rode o projeto:

```
  npm start
```

### Comandos importantes

Para utilização do sequelize em linha de comando (CLI), utilizar:

    npx sequelize-cli <comando>

Por exemplo:

    npx sequelize-cli --help

Para verificar os parâmetros permitidos em um comando, utilizar o "help". Por exemplo:

    npx sequelize-cli --help db:seed

### Observações

Os endpoints criados podem ser importados por meio do arquivo "endpoints.json" em um Software como o Postman (ou semelhante).
