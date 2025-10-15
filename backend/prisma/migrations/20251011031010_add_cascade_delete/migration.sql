-- DropForeignKey
ALTER TABLE "public"."diets" DROP CONSTRAINT "diets_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."trainings" DROP CONSTRAINT "trainings_userId_fkey";

-- AddForeignKey
ALTER TABLE "public"."diets" ADD CONSTRAINT "diets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."trainings" ADD CONSTRAINT "trainings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
