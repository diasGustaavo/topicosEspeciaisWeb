import { Request, Response } from "express";
import { parkingService } from "../services/ParkingService";

class ParkingController {
    async create(req: Request, resp: Response) {
        const { name, address, cep, parking_lots, parked } = req.body;
        const data = { name, address, cep, parking_lots, parked };
        const response = await parkingService.create(data);

        return resp.json(response);
    }

    async get(req: Request, resp: Response) {
        const { parking_id } = req.query;

        const response = await parkingService.get(parking_id as string);
        return resp.json(response);
    }

    async update(req: Request, resp: Response) {
        const { parking_id } = req.params;
        const { name, address, cep, parking_lots, parked } = req.body;
        const data = { name, address, cep, parking_lots, parked };
        const response = await parkingService.update(data, parking_id);

        return resp.json(response);
    }

    async delete(req: Request, resp: Response) {
        const { parking_id } = req.params;
        const response = await parkingService.delete(parking_id);

        return resp.json(response);
    }
}

export const parkingController = new ParkingController();