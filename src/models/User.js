import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
  },
    password_hash: {
      type: String,
      required: true
    }
  }
);

UserSchema.pre('save', async function (next) {
  const user = this;

  if (!user.isModified('password_hash')) {
    return next();
  }

  try{
    const salt = await bcrypt.genSalt(8);
    this.password_hash = await bcrypt.hash(this.password_hash, salt);
    next();
  } catch(error){
    next(error);
  }
})
export default model('User', UserSchema);
