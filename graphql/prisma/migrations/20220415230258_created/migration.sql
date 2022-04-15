-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "communityID" INTEGER;

-- CreateTable
CREATE TABLE "Community" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Community_id_key" ON "Community"("id");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_communityID_fkey" FOREIGN KEY ("communityID") REFERENCES "Community"("id") ON DELETE SET NULL ON UPDATE CASCADE;
