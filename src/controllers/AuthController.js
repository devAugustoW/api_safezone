import 'dotenv/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from "../models/User";

const SECRET_KEY = process.env.SECRET_KEY;

class AuthController{
  async store(req, res){
    const { email, password } = req.body

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.'})
    }

    if (!await bcrypt.compare(password, user.password_hash)) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    const token = jwt.sign(
      { id: user._id }, 
      SECRET_KEY, 
      { expiresIn: '1d' }
    );

    return res.json({
      user: {
        id: user._id,
        email: user.email
      },
      token
    });
  }
}   

export default new AuthController();