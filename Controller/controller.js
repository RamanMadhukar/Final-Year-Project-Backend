const querySchema = require('../Database/patient')

exports.postPatient = (req, res) => {
    // const { name, age, disease } = req.body.patient;
    // const { lat, lng } = req.body.position;
    // const query = new querySchema({ name, age, disease, lat, lng });

    // query.save((err, data) => {
    //     if (err) {
    //         console.log('error', err);
    //         return res.status(400).json({
    //             error: 'Error saving employee in database. Try again'
    //         });
    //     }
    //     return res.json({
    //         message: 'data saved'
    //     });
    // });
    return res.send("post triggred");
}

exports.getPatient = (req, res) => {

    // querySchema.find(function (err, found) {
    //     return res.json(found);
    // });

        return res.send("found");


}