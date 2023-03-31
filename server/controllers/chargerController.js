const asyncHandler = require('express-async-handler')

const getChargers = asyncHandler(async (req, res) => {
    res.status(200);
    res.json({
        "chargers": [{
            "image": "DallasCharger.png",
            "location": "Dallas, TX",
            "type": "Level 2 J-1772 charger",
            "price": "5.40/hr"
        },
        {
            "image": "ShreveportCharger.png",
            "location": "Shreveport, LA",
            "type": "Level 3 CCS2 charger",
            "price": "19.35/hr"
        },
        {
            "image": "HotSpringsCharger.png",
            "location": "Hot Springs, AR",
            "type": "Level 2 J-1772 charger",
            "price": "9.35/hr"
        }
        ]
    });
})

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
    if(!(req.body.price)) {
        res.status(400)
        throw new Error("Please add the hourly rate of the charger")
    }
    res.status(200);
    res.json({
        "message": "Host a charger on the application for others to use!"
    });
    console.log("Request accepted")

});

const editCharger = asyncHandler(async (req, res) => {
    res.status(200);
    res.json({
        "message": `Edit details on charger ${req.params.id}`
    });
});

const deleteCharger = asyncHandler(async (req, res) => {
    res.status(200);
    res.json({
        "message": `Delete charger ${req.params.id}`
    });
});

module.exports = {
    getChargers, hostCharger, editCharger, deleteCharger
}