# Backend-Version

## Plataforma Diversight - Time META-EXPLOIT
Codigo referente ao backend da aplicacao Diversight, uma plataforma de "enterprise score", para fornecer dados personalizados de formularios que visam tabelar o quao "diverso" e inclusivo, e o ambiente de trabalho da empresa.

- Iniciando o projeto: ```yarn init -y```

Esse comando inicia o projeto com configuracoes padrao, utilizando o Yarn.

- Instalacao do Sequelize: ```yarn add express sequelize pg```

- Instalacao do Nodemon (auto-relod no "ctrl+s"): ```yarn add nodemon -D```

- Instalacao do CLI do Sequelize: ```yarn add sequelize-cli -D```

## Iniciando a configuracao do BD

- Instalacao do CLI do Sequelize: ```yarn add sequelize-cli -D```
yarn sequelize init
yarn sequelize migration:create --name=create-user
yarn sequelize db:migrate

Esse ultimo comando ira dar erro, e preciso add a seguinte configuracao ao arquivo de database.js:

	dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }

Feito isso, habilitando a conexao SSL e resolvendo o bug de "unathorized certified" cm o "rejectUnauthorized: false", a criacao da tabela ocorrera sem problemas cm o ultimo comando.

yarn add bcrypt
yarn add jsonwebtoken


## Heroku - Deployment
script start
env port binding randonly (app.listen(process.env.PORT || 3000))
procfile (web: node src/index.js)
