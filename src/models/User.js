import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    email: String,
    password: String,
    password_hash: String,
});

export default model('User', UserSchema);