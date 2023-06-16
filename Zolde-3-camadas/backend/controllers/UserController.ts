import { Request, Response } from "express";
import { userService } from "../services/UserService";

class UserController {
    async create(req: Request, resp: Response) {
        const { name, email, password } = req.body;
        const data = { name, email, password };
        const response = await userService.create(data);

        return resp.json(response);
    }

    async get(req: Request, resp: Response) {
        const email = req.params.email;

        const response = await userService.get(email);
        return resp.json(response);
    }

    async getAll(req: Request, resp: Response) {
        let request = req as any;
        const user = request.user;
        console.log(user);

        const response = await userService.getAll();

        return resp.json(response);
    }

    async login(req: Request, resp: Response) {
        const { email, password } = req.body;
        const data = { email, password };
        const response = await userService.login(data);

        if (response?.type === 'error') {
            return resp.json(response).status(400);
        }

        return resp.json(response);
    }
}

export const userController = new UserController();