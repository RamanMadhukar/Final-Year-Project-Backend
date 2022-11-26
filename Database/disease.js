const mongoose = require("mongoose");

const disease = new mongoose.Schema(
    {
        id: { type: Number },
        city: { type: String },
        lat: { type: Number },
        long: { type: Number },
        country: { type: String },
        disease: { type: String },
        start_date: { type: String },
        end_date: { type: String }
    },
    {
        collection: "disease"
    }
);

module.exports = mongoose.model('disease', disease);