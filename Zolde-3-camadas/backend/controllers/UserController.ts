import { Request, Response } from "express";
import { userService } from "../services/UserService";

class UserController{
    async create(req: Request, resp: Response) {
        const { name, email } = req.body;
        const data = { name, email };
        const response = await userService.create(data);

        return resp.json(response);
    }

    async get(req: Request, resp: Response) {
        const email = req.params.email;
        
        const response = await userService.get(email);
        return resp.json(response);
    } 
}

export const userController = new UserController();