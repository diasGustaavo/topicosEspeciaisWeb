import { UserDoc, UserModel } from "../models/User";
import { ILogin, IUserData } from "../types/IUserData";
import { hash, compare } from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

class UserService {
    async create(data: IUserData) {
        const user_id = uuidv4().slice(0, 8);
        const passwordHash = await hash(data.password || "", 8);

        data.user_id = user_id;
        data.password = passwordHash;

        return await UserModel.create(data);
    }

    async login(data: ILogin) {
        const { email, password } = data;

        const user = await this.get(email) as UserDoc;

        if (!user || (user && !await compare(password, user.password))) {
            return {
                type: 'error',
                message: 'Invalid credentials',
            }
        }

        const SECRET = process.env.SECRET || 'm21d8d21n1b237421bws9ds78dsa277436hk';
        const token = jwt.sign({ id: user._id }, SECRET);

        return { user, token, type: 'success', message: 'Successful login!' };
    }

    async get(email: string) {
        if (email) {
            return await UserModel.findOne({ email });
        }

        return {
            message: "Email not found",
        };
    }

    async getAll() {
        const users = await UserModel.find();

        return users || [];
    }
}

export const userService = new UserService();