const Colaborador = require('../models/Colaborador');
const bcrypt = require('bcrypt');

class ColaboradorController{
  async store(req, res){
    const {nome, raca, genero, orient_sex, data_nasc, PCD, empresa, area_atuac, cargo, email, senha} = req.body;
    const hash = await bcrypt.hash(senha, 10);

    const colaborador = await Colaborador.create({nome, raca, genero, orient_sex, data_nasc, PCD, empresa, area_atuac, cargo, email, senha: hash});

    return res.json(colaborador);
  }

  async login(req, res){
    const auth = req.body;
    const user = await User.findOne({ where: { email: auth.email } });

    if (user){
      const compare = await bcrypt.compare(user.senha, auth.senha);

      bcrypt.compare(auth.senha, user.senha, function(err, result){
        if (err){ //Handle Error
          return res.json({ message: "Ocorreu um Erro" });
        }
        if (result){ //Send JWT
          return res.json(user);
        }

        return res.json({ message: "Senha Incorreta" });
      });
    }
    else{
      return res.json({ message: "Colaborador Nao Encontrado" });
    }
  }

  async index(req, res){
    const colaboradores = await Colaborador.findAll();

    return res.json(colaboradores);
  }
}

module.exports = new ColaboradorController();