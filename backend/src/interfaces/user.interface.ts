export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    resetToken?: string | null;
    resetTokenExpires?: Date | null;
    createAt: Date;
    updateAt: Date;
    lastDiet?: string | null;       
    lastTraining?: string | null;   
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

export interface IUserRepository {
    create(data: ICreateUser): Promise<IUser>;
    findByEmail(email: string): Promise<IUser | null>;
    findById(id: number): Promise<IUser | null>;
    delete(id: number): Promise<void>;
}