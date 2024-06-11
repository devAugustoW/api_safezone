// mongoose
import { Schema, model } from 'mongoose';

// model riskPointSchema
const RiskPointSchema = new Schema({
    ref: String,
    title: String,
    location: {
        latitude: Number,
        longitude: Number,
    },
    description: String,
    status: { type: Boolean, default: false },
    image: String,
},{ timestamps: true });


// exportar
export default model('RiskPoint', RiskPointSchema);
