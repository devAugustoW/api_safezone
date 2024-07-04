import User from "../models/User";

class SessionController{
    async store(req, res){
        const { email, password } = req.body

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email, password});
            return res.json(user);
        }        

        return res.json({ messagem: 'Usuário já existe.'})
    }
}

export default new SessionController();