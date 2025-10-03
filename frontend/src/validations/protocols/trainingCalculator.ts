import z from "zod";
import { trainingCalculatorValidation } from "../validators/trainingCalculator";

export type trainingCalculatorValidationType = z.infer<typeof trainingCalculatorValidation>;