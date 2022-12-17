const mongoose = require("mongoose");

const querySchema = new mongoose.Schema(
    {
        name: { type: String },
        age: { type: Number },
        disease: { type: String },
        lat: { type: String },
        lng: { type: String },
    },
    {
        collection: "query"
    }
);

module.exports = mongoose.model('query', querySchema);
