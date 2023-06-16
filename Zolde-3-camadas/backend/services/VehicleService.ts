import { VehicleModel } from "../models/Vehicle";
import { IVehicleData } from "../types/IVehicleData";
import { v4 as uuidv4 } from 'uuid';

class VehicleService {
    async create(data: IVehicleData) {
        const vehicle_id = uuidv4().slice(0, 8);
        data.vehicle_id = vehicle_id;
        return await VehicleModel.create(data);
    }

    async get(vehicle_id: string) {
        if (vehicle_id) {
            return VehicleModel.find({ vehicle_id });
        }
        return VehicleModel.find();
    }

    async update(data: IVehicleData, vehicle_id: string) {
        return VehicleModel.updateOne({ vehicle_id }, data);
    }

    async delete(vehicle_id: string) {
        return VehicleModel.deleteOne({ vehicle_id });
    }
}

export const vehicleService = new VehicleService();