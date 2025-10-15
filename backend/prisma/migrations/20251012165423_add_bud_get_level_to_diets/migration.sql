/*
  Warnings:

  - You are about to drop the column `budgetLevel` on the `diets` table. All the data in the column will be lost.
  - You are about to drop the column `healthConditions` on the `diets` table. All the data in the column will be lost.
  - You are about to drop the column `budgetLevel` on the `trainings` table. All the data in the column will be lost.
  - You are about to drop the column `healthConditions` on the `trainings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."diets" DROP COLUMN "budgetLevel",
DROP COLUMN "healthConditions",
ADD COLUMN     "bud_get_level" TEXT NOT NULL DEFAULT 'Médio',
ADD COLUMN     "health_conditions" TEXT NOT NULL DEFAULT 'Nenhuma';

-- AlterTable
ALTER TABLE "public"."trainings" DROP COLUMN "budgetLevel",
DROP COLUMN "healthConditions",
ADD COLUMN     "bud_get_level" TEXT NOT NULL DEFAULT 'Médio',
ADD COLUMN     "health_conditions" TEXT NOT NULL DEFAULT 'Nenhuma';
