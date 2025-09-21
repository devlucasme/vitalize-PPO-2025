import type { Request, Response, NextFunction } from "express";
import type { ApiError } from "../helpers/api-error";

export const errorMiddleware = (
    error: Error & Partial<ApiError>,
    req: Request,
    res: Response,
    next: NextFunction) => {

    console.log(error);

    const statusCode = error.statusCode ?? 500;
    const message = error.statusCode ? error.message : "Internal Server Error";
    return res.status(statusCode).json({ message });
}