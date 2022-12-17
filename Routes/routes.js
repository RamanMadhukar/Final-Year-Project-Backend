const express = require('express');
const router = express.Router();
const { postPatient, getPatient, getNearPatient } = require("../Controller/controller");



router.post("/patient", postPatient);
router.get("/patient", getPatient);
router.get("/nearPatient", getNearPatient);

module.exports = router;