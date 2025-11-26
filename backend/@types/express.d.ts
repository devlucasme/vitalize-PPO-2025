import type { IUser } from "../src/interfaces/user.interface";

declare global {
    namespace Express {
        export interface Request {
            user: Partial<IUser>;
        }
    }
}

