const mongoose = require("mongoose");

const myDataP = new mongoose.Schema(
    {

        city: { type: String },
        city_ascii: { type: String },
        lat: { type: Number },
        lng: { type: Number },
        country: { type: String },
        iso2: { type: String },
        iso3: { type: String },
        admin_name: { type: String },
        capital: { type: String },
        population: { type: String },
        id: { type: String },

        // name: { type: String },
        // age: { type: Number },
        // disease: { type: String },
        // lat: { type: String },
        // lng: { type: String },
    },
    {
        collection: "myData"
    }
);

module.exports = mongoose.model('myData', myDataP);