const express = require('express');
const router = express.Router();
const { postPatient, getPatient } = require("../Controller/controller");



router.post("/patient", postPatient);
router.get("/patient", getPatient);






module.exports = router;