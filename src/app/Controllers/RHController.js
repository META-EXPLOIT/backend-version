const RH = require('../models/RH');
const bcrypt = require('bcrypt');

class RHController{
  async store(req, res){
    const {nome, cargo, empresa, email, senha} = req.body;
    const hash = await bcrypt.hash(senha, 10);

    const rh = await RH.create({nome, cargo, empresa, email, senha: hash});

    return res.json(rh);
  }

  async login(req, res){
    const auth = req.body;
    const user = await RH.findOne({ where: { email: auth.email } });

    if (user){
      //const compare = await bcrypt.compare(user.senha, auth.senha);

      await bcrypt.compare(auth.senha, user.senha, function(err, result){
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
      return res.json({ message: "Membro RH Nao Encontrado" });
    }
  }

  /*
  async list(req, res){
    const body = req.body;
    const rh = await RH.findAll({ attributes:  ['nome', 'cargo'], where: { empresa: body.empresa } });

    if(!rh.length){
      return res.json({ message: "A empresa especificada nao possui membros RH cadastrados." });
    }

    return res.json(rh);
  }
  */

  /*
  async RHUpdate(req, res){
    const user_id = req.body.id;
    const user = await Colaborador.findOne({ where: { id: user_id } });

    const new_user = await user.update(req.body);;
    
    return res.json(new_user);
  }
  */

  async index(req, res){
    const rh = await RH.findAll();

    return res.json(rh);
  }
}

module.exports = new RHController();

/*
routes.post('/rh_signin', async (req, res) => {
  try{
    const {email,senha} = req.body;
    const hash = await bcrypt.hash(senha, 10);
    await db('rh').insert({email:email,hash:hash});
    res.status(200).json(Operação realizada com sucesso.);
  }catch(err){
    console.log(err);
    res.status(500).send("Não foi possível realizar a operação.")
  }
});
*/