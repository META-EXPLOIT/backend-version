# Backend-Version

## Plataforma Diversight - Equipe META-EXPLOIT

Link da aplicacao no Heroku: https://heroku-diversight.herokuapp.com

Codigo referente ao backend da aplicacao Diversight, uma plataforma de "enterprise score", para fornecer dados personalizados de formularios que visam tabelar o quao "diverso" e inclusivo, e o ambiente de trabalho da empresa.

- Iniciando o projeto: ```yarn init -y```

Esse comando inicia o projeto com configuracoes padrao, utilizando o Yarn.

- Instalacao do Sequelize: ```yarn add express sequelize pg```

- Instalacao do Nodemon (auto-relod no "ctrl+s"): ```yarn add nodemon -D```

- Instalacao do CLI do Sequelize: ```yarn add sequelize-cli -D```

## Iniciando a configuracao do BD

- Instalacao do CLI do Sequelize: ```yarn add sequelize-cli -D```

- Abaixo segue os principais codigos para criacao de migrations e criacao de tabelas:
``` 
yarn sequelize init
yarn sequelize migration:create --name=create-user
yarn sequelize db:migrate
```

Esse ultimo comando ira dar erro, e preciso add a seguinte configuracao ao arquivo de database.js:
```
dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
```

Feito isso, habilitando a conexao SSL e resolvendo o bug de "unathorized certified" cm o "rejectUnauthorized: false", a criacao da tabela ocorrera sem problemas cm o ultimo comando.

- Adicionando o "bcrypt" para criptografar as senhas no BD: ```yarn add bcrypt```

- Adicionando o JWT para token de requisicoes Front/Mobile: ```yarn add jsonwebtoken```

## Heroku - Deployment
- Precisa do script "start" para rodar;
- Heroku altera dinamicamente a porta em que a aplicacao esta sendo executada: env port binding randonly ```app.listen(process.env.PORT || 3000);```
- Criar arquivo procfile (```web: node src/index.js```).

## Rotas da aplicacao no Heroku:
```
{
  "routeListUsers": "/users (GET) -> list all users",
  "routeRegisterUser": "/user_register (POST) -> register a user",
  "routeLoginUser": "/user_login (POST) -> user login",
  "routeListRH": "/rh (GET) -> list RH members",
  "routeRegisterRH": "/rh_register (POST) -> register RH member",
  "routeLoginRH": "/rh_login (POST) -> RH login",
  "routeListColab": "/colabs (GET) -> list all collaborators",
  "routeRegisterColab": "/colab_register (POST) -> register a collaborator",
  "routeLoginColab": "/colab_login (POST) -> collaborator login",
  "registerExample": "{name: Name, role: 1, company: 3, email: name@company.com, password: admin}",
  "loginExample": "{email: name@company.com, password: admin}",
  "routeRegisterForm": "/form_register (POST) -> register a form",
  "routeListForm": "/forms (GET) -> list all forms",
  "routeListFrontend": "/list_colabs (POST) -> list all collaborators {name, role} filtered by company {company}",
  "routeDataUserMobile": "/user_data (POST) -> list all user data {empresa, raca, genero, orient_sex, pcd, pcd_visual, pcd_fisica, pcd_audicao, pcd_intelectual, pcd_psicologica, pcd_readaptado} filtered by user id {id}",
  "routeRespostaRegister": "/resposta_register (POST) -> register answers",
  "routeRespostaList": "/respostas (GET) -> list all forms entries",
  "routeUserUpdate": "/user_update (POST) -> user data update {nome, raca, genero, orient_sex, pcd, data_nasc, empresa, area_atuac, cargo} filtered by user id {id}",
  "routeRegisterDashboard": "/dashboard_register (POST) -> register company dashboard {empresa, NPS_CR_Guia, NPS_CR, NPS_G_Guia, NPS_G, NPS_O_Guia, NPS_O, NPS_PCS_Guia, NPS_PCS, NPS_Geral_Guia, NPS_Geral}",
  "routeFilterDashboard": "/dashboard_filter (POST) -> filter and show dashboards by company {company}",
  "routeListDashboard": "/dashboard (GET) -> list all dashboards"
}
```
