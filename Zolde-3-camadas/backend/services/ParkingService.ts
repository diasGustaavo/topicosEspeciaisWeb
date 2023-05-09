import { ParkingModel } from "../models/Parking";
import { IParkingData } from "../types/IParkingData";
import { v4 as uuidv4 } from 'uuid';

class ParkingService {
    async create(data: IParkingData) {
        const parking_id = uuidv4().slice(0, 8);
        data.parking_id = parking_id;
        return await ParkingModel.create(data);
    }

    async get(parking_id: string) {
        if (parking_id) {
            return ParkingModel.find({ parking_id });
        }

        return ParkingModel.find();
    }

    async update(data: IParkingData, parking_id: string) {
        return ParkingModel.updateOne({ parking_id }, data);
    }

    async delete(parking_id: string) {
        return ParkingModel.deleteOne({ parking_id });
    }

}

export const parkingService = new ParkingService();