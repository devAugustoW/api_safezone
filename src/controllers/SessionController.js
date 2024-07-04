import User from "../models/User";

class SessionController{
   async store(req, res){
      const { email, password_hash } = req.body

      let user = await User.findOne({ email });

      if (!user) {
         user = await User.create({ email, password_hash});
         return res.json(email);
      }        
      
      return res.json({ messagem: 'Usuário já existe.'})
   }
}

export default new SessionController();