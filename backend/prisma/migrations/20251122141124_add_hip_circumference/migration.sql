-- AlterTable
ALTER TABLE "public"."diets" ADD COLUMN     "hip_circumference" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "public"."trainings" ADD COLUMN     "hip_circumference" DOUBLE PRECISION NOT NULL DEFAULT 0;
