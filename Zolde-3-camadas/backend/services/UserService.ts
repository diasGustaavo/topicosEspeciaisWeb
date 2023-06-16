import { UserModel } from "../models/User";
import { IUserData } from "../types/IUserData";
import { v4 as uuidv4 } from 'uuid';

class UserService {
    async create(data: IUserData) {
        const user_id = uuidv4().slice(0, 8);
        data.user_id = user_id;
        return await UserModel.create(data);
    }

    async get(email: string) {
        if (email) {
            return UserModel.findOne({ email });
        }
        console.log('email vazio');
        return [];
    }
}

export const userService = new UserService();