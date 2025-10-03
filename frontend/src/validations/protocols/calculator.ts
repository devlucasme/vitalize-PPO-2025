import z from "zod";
import { dietTrainingCalculatorValidation } from "../validators/calculator";

export type dietTrainingCalculatorValidationType = z.infer<typeof dietTrainingCalculatorValidation>;