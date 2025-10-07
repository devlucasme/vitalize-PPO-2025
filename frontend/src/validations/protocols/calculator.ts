import z from "zod";
import { dietTrainingCalculatorValidation } from "../validators/calculator";

export type DietTrainingCalculatorValidationType = z.infer<typeof dietTrainingCalculatorValidation>;