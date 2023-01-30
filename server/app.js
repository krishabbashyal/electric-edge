const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors())

const PORT = 3000;

app.get('/', (req, res) => {
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
});

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
}
);