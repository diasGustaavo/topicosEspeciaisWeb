import mongoose, { Document } from "mongoose";

export interface UserDoc extends Document {
    name: string;
    email: string;
    password: string;
}

const UserSchema = new mongoose.Schema<UserDoc>({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    }
})

export const UserModel = mongoose.model<UserDoc>("User", UserSchema);