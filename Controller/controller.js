const querySchema = require('../Database/patient')
const myDataP = require('../Database/myData');
const disease = require('../Database/disease');
const serveySchema = require('../Database/servey');

exports.postPatient = (req, res) => {
    const {
        WeightLoss,
        nausea,
        Vomiting,
        skinRash,
        Cough,
        LossOfAppetite,
        Chills,
        Headache,
        Sweating,
        Fatigue,
        Constipation,
        StomachPain,
        PainBehindtheEyes,
        Diarrhoea,
        HighFever,
        MildFever,
        JointPain,
        MusclePain,
        LossofSmell } = req.body.patient;

    const { lat, long } = req.body.position;

    const servey = new serveySchema({
        WeightLoss,
        nausea,
        Vomiting,
        skinRash,
        Cough,
        LossOfAppetite,
        Chills,
        Headache,
        Sweating,
        Fatigue,
        Constipation,
        StomachPain,
        PainBehindtheEyes,
        Diarrhoea,
        HighFever,
        MildFever,
        JointPain,
        MusclePain,
        LossofSmell,
        lat,
        long
    });

    servey.save((err, data) => {
        if (err) {
            console.log('error', err);
            return res.status(400).json({
                err
            });
        }
        return res.json({
            message: 'data saved'
        });
    });
}

exports.getPatient = async (req, res) => {

    // const data = [];

    // myDataP.find(function (err, found) {
    //     if(found){
    //         found.map(e=> {
    //             const {lat,lng}=e;
    //             data.push({lat,lng})
    //         })
    //         return res.json(data);

    //     }
    //     else{
    //         return res.send(err);
    //     }
    // });

    // var data = await myDataP.find({
    //     lat: { $gt: '8.06666', $lt: '37.1' },
    //     lng: { $gt: '68.55', $lt: '97.28' }
    // });
    // // res.json(data);
    // console.log(data);
    var data = await disease.find();

    return res.json(data);

}

exports.getNearPatient = async (req, res) => {
    var data = await disease.find();

}