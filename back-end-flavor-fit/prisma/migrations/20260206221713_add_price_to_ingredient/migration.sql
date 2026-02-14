/*
  Warnings:

  - Added the required column `price` to the `ingredients` table without a default value. This is not possible if the table is not empty.
  - Made the column `content` on table `ingredients` required. This step will fail if there are existing NULL values in that column.
  - Made the column `icon_url` on table `ingredients` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ingredients" ADD COLUMN     "price" DECIMAL(65,30) NOT NULL,
ALTER COLUMN "content" SET NOT NULL,
ALTER COLUMN "icon_url" SET NOT NULL;
