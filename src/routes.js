const Router = require("express");

const routes = new Router();
const port = 3000;

//Teste Cadastro Usuarios //////////////////////////////////////////////////////////////////////
const UserController = require('./app/Controllers/UserController.js');

routes.post('/user_register', UserController.store);
routes.get('/users', UserController.index);

//Teste Login Usuarios
routes.post('/user_login', UserController.login);

//Cadastro RH e Colaborador ////////////////////////////////////////////////////////////////////
const RHController = require('./app/Controllers/RHController');
const ColaboradorController = require('./app/Controllers/ColaboradorController');

routes.post('/rh_register', RHController.store);
routes.get('/rh', RHController.index);
routes.post('/colab_register', ColaboradorController.store);
routes.get('/colabs', ColaboradorController.index);

//Login RH e Colaborador ///////////////////////////////////////////////////////////////////////
routes.post('/rh_login', RHController.login);
routes.post('/colab_login', ColaboradorController.login);

//Teste Cadastro Form //////////////////////////////////////////////////////////////////////////
const FormController = require('./app/Controllers/FormController.js');

routes.post('/form_register', FormController.store);
routes.get('/forms', FormController.index);

//Listagem Frontend
//routes.post('/list_rh', RHController.list);
routes.post('/list_colabs', ColaboradorController.list);

//User Data
routes.post('/user_data', ColaboradorController.userData);

//Registro Respostas
const RespostaController = require('./app/Controllers/RespostaController.js');
const DashboardController = require("./app/Controllers/DashboardController.js");

routes.post('/resposta_register', RespostaController.store);
routes.get('/respostas', RespostaController.index);

//Update Data User
routes.post('/user_update', ColaboradorController.userUpdate);

//Dashboard
routes.post('/dashboard_register', DashboardController.store);
routes.post('/dashboard_filter', DashboardController.list);
routes.get('/dashboard', DashboardController.index);

//Rota padrao para testar aplicacao ////////////////////////////////////////////////////////////
routes.get('/', (req, res) => {
  res.json({ 
    message: `App Running on Port ${ process.env.PORT || port}!`,
    routeListUsers: "/users (GET) -> lista usuarios",
    routeRegisterUser: "/user_register (POST) -> registra usuario",
    routeLoginUser: "/user_login (POST) -> login",
    routeListRH: "/rh (GET) -> lista rh",
    routeRegisterRH: "/rh_register (POST) -> registra rh",
    routeLoginRH: "/rh_login (POST) -> login",
    routeListColab: "/colabs (GET) -> lista colabs",
    routeRegisterColab: "/colab_register (POST) -> registra colab",
    routeLoginColab: "/colab_login (POST) -> login",
    registerExample: "{nome: Giulia, cargo: 1, empresa: 3, email: giulia@ioasys.com, senha: admin}",
    loginExample: "{email: marco@ioasys.com, senha: admin}",
    routeRegisterForm: "/form_register (POST) -> registra form",
    routeListForm: "/forms (GET) -> lista formularios",
    routeListFrontend: "[GIULIA] -- /list_colabs (POST) -> lista colaboradores {nome, cargo} filtrados pela empresa {empresa}",
    routeDataUserMobile: "[OTAVIO] -- /user_data (POST) -> lista os dados dos colaboradores {empresa, raca, genero, orient_sex, pcd, pcd_visual, pcd_fisica, pcd_audicao, pcd_intelectual, pcd_psicologica, pcd_readaptado} filtrados pelo id de usuario {id}",
    routeRespostaRegister: "/resposta_register (POST) -> registra as respostas de um formulario",
    routeRespostaList: "/respostas (GET) -> lista todas as respostas de formularios",
    routeUserUpdate: "/user_update (POST) -> atualiza dados {nome, raca, genero, orient_sex, pcd, data_nasc, empresa, area_atuac, cargo} do usuario, filtrado pelo id {id}",
    routeRegisterDashboard: "/dashboard_register (POST) -> registra dashboard de empresa {empresa, NPS_CR_Guia, NPS_CR, NPS_G_Guia, NPS_G, NPS_O_Guia, NPS_O, NPS_PCS_Guia, NPS_PCS, NPS_Geral_Guia, NPS_Geral}",
    routeFilterDashboard: "/dashboard_filter (POST) -> filtra e mostra dashboard por empresa {empresa}",
    routeListDashboard: "/dashboard (GET) -> lista dashboards"
  });
});

/*
routes.get('/', (req, res) => {
  res.json({message: `App Running on Port ${ process.env.PORT }!`});
});
*/

module.exports = routes;
