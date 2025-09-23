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

export interface ILoginUser {
    email: string;
    password: string;
}

export interface IUpdateUser {
    name?: string;
    email?: string;
    password?: string;
}

export interface IUserRepository {
    create(data: ICreateUser): Promise<IUser>;
    findByEmail(email: string): Promise<IUser | null>;
    findById(id: number): Promise<IUser | null>;
    update(id: number, data: IUpdateUser): Promise<IUser>;
    delete(id: number): Promise<void>;
}