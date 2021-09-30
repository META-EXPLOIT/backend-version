`yarn init -y`

`yarn add express sequelize pg`

`yarn add nodemon -D`

`yarn add sequelize-cli -D`


`yarn sequelize init`

`yarn sequelize migration:create --name=create-user`

`yarn sequelize db:migrate`

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

`yarn add bcrypt`

`yarn add jsonwebtoken`


**Heroku**
script start
env port binding randonly (app.listen(process.env.PORT || 3000))
procfile (web: node src/index.js)