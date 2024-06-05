import User from "../models/User";

class LoginController{

    async login(req, res){
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Usuário não encontrado.'})
        }

        if (password !== user.password) {
            return res.status(400).json({ error: 'Senha inválida.'})
        }

        return res.json({ message: 'Usuário logado!', user })
    }
    


}

export default new LoginController();