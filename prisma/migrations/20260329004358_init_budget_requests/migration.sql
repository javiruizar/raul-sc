-- CreateTable
CREATE TABLE "BudgetRequest" (
    "id" TEXT NOT NULL,
    "serviceType" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT,
    "preferredDate" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDIENTE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BudgetRequest_pkey" PRIMARY KEY ("id")
);
