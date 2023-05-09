import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
    vehicle_id: {
        type: String,
        require: true,
    },
    control_number: {
        type: Number,
        require: true,
    },
    license_plate: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    additional_services: {
        type: String,
    },
});

export const VehicleModel = mongoose.model("Vehicle", vehicleSchema);