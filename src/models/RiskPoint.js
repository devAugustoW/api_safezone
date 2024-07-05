import { Schema, model } from 'mongoose';

const RiskPointSchema = new Schema({
    ref: String,
    title: String,
    location: {
        latitude: Number,
        longitude: Number,
    },
    description: String,
    status: { type: Boolean, default: false },
    statusDescription: String,
    image: String,
},{ timestamps: true });

export default model('RiskPoint', RiskPointSchema);
