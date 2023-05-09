import mongoose from "mongoose";

const parkingSchema = new mongoose.Schema({
    parking_id: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    cep: {
        type: String,
        require: true,
    },
    parking_lots: {
        type: Number,
        require: true,
    },
    parked: {
        type: Number,
        require: true,
    }
});

export const ParkingModel = mongoose.model("Parking", parkingSchema);