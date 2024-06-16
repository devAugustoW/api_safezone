import User from "../models/User";

class LoginController{

    // Controller para logar
    async login(req, res){
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        try{
            if (!user) {
                console.error('Usuário não encontrado.');
                return res.status(400).json({ error: 'Usuário não encontrado.'})
            }

            if (password !== user.password) {
                console.error('Seha inválida.');
                return res.status(400).json({ error: 'Senha inválida.'})
            }

            return res.json({ message: 'Usuário logado!', user })
        } catch (error) {
            console.error('Erro na chamada login:', error)
            return res.status(500).json({ error: 'Erro na chamada.' });
        }
    }
}

export default new LoginController();