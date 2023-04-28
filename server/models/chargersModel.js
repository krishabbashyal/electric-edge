const mongoose = require("mongoose")

const chargerSchema = mongoose.Schema({
    chargerOwner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    city: {
        type: String,
        required: [true, "Please add city"],
    },
    state: {
        type: String,
        required: [true, "Please add state"],
    },
    chargerType: {
        type: String,
        required: [true, "Please add chargerType"],
    },
    hourlyRate: {
        type: Number,
        required: [true, "Please add hourly rate"],
    },
    chargerDescription: {
        type: String,
        required: [true, "Please add description"],
    },
})

module.exports = mongoose.model("Charger", chargerSchema)