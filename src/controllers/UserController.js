import User from "../models/User";

class UserController{
   async store(req, res){
      const { email, password_hash } = req.body

      let userExists = await User.findOne({ email });

      if (!userExists) {
         let user = await User.create({ email, password_hash});
         return res.json({user});
      }        
      return res.json({ messagem: 'Usuário já existe.'})
   }
}
export default new UserController();