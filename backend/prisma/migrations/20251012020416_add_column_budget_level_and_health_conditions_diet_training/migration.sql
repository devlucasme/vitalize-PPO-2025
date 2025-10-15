/*
  Warnings:

  - You are about to drop the column `frequency` on the `diets` table. All the data in the column will be lost.
  - You are about to drop the column `frequency` on the `trainings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."diets" DROP COLUMN "frequency",
ADD COLUMN     "budgetLevel" TEXT NOT NULL DEFAULT 'Médio',
ADD COLUMN     "healthConditions" TEXT NOT NULL DEFAULT 'Nenhuma';

-- AlterTable
ALTER TABLE "public"."trainings" DROP COLUMN "frequency",
ADD COLUMN     "budgetLevel" TEXT NOT NULL DEFAULT 'Médio',
ADD COLUMN     "healthConditions" TEXT NOT NULL DEFAULT 'Nenhuma';
