/*
  Warnings:

  - You are about to drop the column `numbers` on the `contacts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phone]` on the table `contacts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phone` to the `contacts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "numbers",
ADD COLUMN     "phone" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "contacts_phone_key" ON "contacts"("phone");
