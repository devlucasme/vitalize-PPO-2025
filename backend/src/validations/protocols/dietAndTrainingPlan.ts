import { z } from "zod";
import { dietAndTrainingPlan } from "../validators/dietAndTrainingPlan";

export type DietAndTrainingPlanType = z.infer<typeof dietAndTrainingPlan>;