const mongoose = require("mongoose");

const serveySchema = new mongoose.Schema(
    {
        WeightLoss: { type: String },
        nausea: { type: String },
        Vomiting: { type: String },
        skinRash: { type: String },
        Cough: { type: String },
        LossOfAppetite: { type: String },
        Chills: { type: String },
        Headache: { type: String },
        Sweating: { type: String },
        Fatigue: { type: String },
        Constipation: { type: String },
        StomachPain: { type: String },
        PainBehindtheEyes: { type: String },
        Diarrhoea: { type: String },
        HighFever: { type: String },
        MildFever: { type: String },
        JointPain: { type: String },
        MusclePain: { type: String },
        LossofSmell: { type: String },
        lat: { type: String },
        long: { type: String },
    },
    {
        collection: "servey"
    }
);

module.exports = mongoose.model('servey', serveySchema);