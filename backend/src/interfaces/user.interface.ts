export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    createAt: Date;
    updateAt: Date;
}

export interface ICreateUser {
    name: string;
    email: string;
    password: string;
}

export interface IUserRepository {
    create(data: ICreateUser): Promise<IUser>;
}