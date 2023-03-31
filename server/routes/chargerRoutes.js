const express = require("express")
const router = express.Router()
const { getChargers, hostCharger, editCharger, deleteCharger } = require("../controllers/chargerController")

router.get('/', getChargers)

router.post('/host', hostCharger);

router.put('/:id', editCharger);

router.delete('/:id', deleteCharger);

module.exports = router