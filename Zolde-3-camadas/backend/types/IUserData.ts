export interface IUserData {
    user_id?: string;
    name: string;
    email: string;
    password?: string;
}

export interface ILogin {
    email: string;
    password: string;
}