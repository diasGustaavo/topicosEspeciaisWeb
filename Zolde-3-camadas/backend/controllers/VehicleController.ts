import { Request, Response } from "express";
import { vehicleService } from "../services/VehicleService";

class VehicleController {
    async create(req: Request, resp: Response) {
        const { additional_services, category, control_number, license_plate } = req.body;
        const data = { additional_services, category, control_number, license_plate };

        const response = await vehicleService.create(data);
        return resp.json(response);
    }

    async get(req: Request, resp: Response) {
        const vehicle_id = req.params.vehicle_id;

      const response = await vehicleService.get(vehicle_id as string);
        return resp.json(response);
    }

    async update(req: Request, resp: Response) {
        const { vehicle_id } = req.params;
        const { control_number, additional_services, category, license_plate } = req.body;
        const data = { additional_services, category, license_plate, control_number };

        const response = await vehicleService.update(data, vehicle_id);
        return resp.json(response);
    }

    async delete(req: Request, resp: Response) {
        const { vehicle_id } = req.params;

        const response = await vehicleService.delete(vehicle_id);
        return resp.json(response);
    }
}

export const vehicleController = new VehicleController();