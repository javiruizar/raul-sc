-- AlterTable
ALTER TABLE "BudgetRequest" ADD COLUMN     "fileUrls" TEXT[] DEFAULT ARRAY[]::TEXT[];
