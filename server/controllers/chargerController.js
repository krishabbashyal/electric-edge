const asyncHandler = require('express-async-handler')

const Charger = require("../models/chargersModel")

const getChargers = asyncHandler(async (req, res) => {
    const chargers = await Charger.find()
    res.status(200);
    res.json(chargers)
});


const hostCharger = asyncHandler(async (req, res) => {
    if(!(req.body.city)) {
        res.status(400)
        throw new Error("Please add the city where the charger is located")
    }
    if(!(req.body.state)) {
        res.status(400)
        throw new Error("Please add the state where the charger is located")
    }
    if(!(req.body.chargerType)) {
        res.status(400)
        throw new Error("Please add information about the type of charger")
    }
    if(!(req.body.hourlyRate)) {
        res.status(400)
        throw new Error("Please add the hourly rate of the charger")
    }

    const charger = await Charger.create({
        city: req.body.city,
        state: req.body.state,
        chargerType: req.body.chargerType,
        hourlyRate: req.body.hourlyRate,
        chargerDescription: req.body.chargerDescription
    })

    res.status(200);
    res.json(charger);
    console.log("Request accepted")

});

const editCharger = asyncHandler(async (req, res) => {
    const charger = await Charger.findById(req.params.id)

    if(!charger){
        res.status(400)
        throw new Error("Charger does not exist")
    }

    const updatedCharger = await Charger.findByIdAndUpdate(req.params.id, req.body, {new: true} )

    res.status(200);
    res.json(updatedCharger);
});

const deleteCharger = asyncHandler(async (req, res) => {
    const charger = await Charger.findById(req.params.id)

    if(!charger){
        res.status(400)
        throw new Error("Charger does not exist")
    }

    await Charger.findByIdAndDelete(req.params.id, req.body)

    res.status(200);
    res.json({"message": `Charger ${req.params.id} has been deleted`});
});

module.exports = {
    getChargers, hostCharger, editCharger, deleteCharger
}