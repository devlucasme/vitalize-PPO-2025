import { z } from "zod";
import { dietAndTrainingPlan } from "../validators/dietAndTrainingPlan.js";

export type DietAndTrainingPlanType = z.infer<typeof dietAndTrainingPlan>;