ALTER TYPE "Role" ADD VALUE 'INSURED';
ALTER TABLE "users" ADD COLUMN "national_id" TEXT;
CREATE UNIQUE INDEX "users_national_id_key" ON "users"("national_id");
