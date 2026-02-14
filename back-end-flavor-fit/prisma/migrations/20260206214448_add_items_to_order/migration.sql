/*
  Warnings:

  - You are about to drop the column `author_id` on the `likes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[recipe_id,user_id]` on the table `likes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `likes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_id` to the `order_items` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "likes" DROP CONSTRAINT "likes_author_id_fkey";

-- DropIndex
DROP INDEX "likes_recipe_id_author_id_key";

-- AlterTable
ALTER TABLE "likes" DROP COLUMN "author_id",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "order_items" ADD COLUMN     "order_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "likes_recipe_id_user_id_key" ON "likes"("recipe_id", "user_id");

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
