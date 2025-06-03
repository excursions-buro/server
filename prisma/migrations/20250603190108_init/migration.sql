-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'GUIDE');

-- CreateEnum
CREATE TYPE "ScheduleStatus" AS ENUM ('ACTIVE', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'PAID', 'CANCELLED', 'REFUNDED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "refreshTokens" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExcursionType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ExcursionType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExcursionImage" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "excursionId" TEXT NOT NULL,

    CONSTRAINT "ExcursionImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Excursion" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,
    "basePrice" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'RUB',
    "mainImage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Excursion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TicketCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "excursionId" TEXT NOT NULL,

    CONSTRAINT "TicketCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL,
    "excursionId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "status" "ScheduleStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScheduleSlot" (
    "id" TEXT NOT NULL,
    "scheduleId" TEXT NOT NULL,
    "weekDay" INTEGER NOT NULL,
    "time" TEXT NOT NULL,
    "maxPeople" INTEGER NOT NULL,

    CONSTRAINT "ScheduleSlot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "discountId" TEXT,
    "discountAmount" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "emailSent" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "ticketCategoryId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "scheduleSlotId" TEXT,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Discount" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "isPercent" BOOLEAN NOT NULL DEFAULT true,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "validFrom" TIMESTAMP(3) NOT NULL,
    "validTo" TIMESTAMP(3) NOT NULL,
    "maxUses" INTEGER,
    "usedCount" INTEGER NOT NULL DEFAULT 0,
    "minOrderAmount" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Discount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ExcursionType_name_key" ON "ExcursionType"("name");

-- CreateIndex
CREATE INDEX "ExcursionType_name_idx" ON "ExcursionType"("name");

-- CreateIndex
CREATE INDEX "ExcursionImage_excursionId_idx" ON "ExcursionImage"("excursionId");

-- CreateIndex
CREATE INDEX "Excursion_title_idx" ON "Excursion"("title");

-- CreateIndex
CREATE INDEX "Excursion_typeId_idx" ON "Excursion"("typeId");

-- CreateIndex
CREATE INDEX "Excursion_createdAt_idx" ON "Excursion"("createdAt");

-- CreateIndex
CREATE INDEX "TicketCategory_excursionId_idx" ON "TicketCategory"("excursionId");

-- CreateIndex
CREATE INDEX "TicketCategory_name_idx" ON "TicketCategory"("name");

-- CreateIndex
CREATE INDEX "Schedule_excursionId_idx" ON "Schedule"("excursionId");

-- CreateIndex
CREATE INDEX "Schedule_startDate_idx" ON "Schedule"("startDate");

-- CreateIndex
CREATE INDEX "Schedule_endDate_idx" ON "Schedule"("endDate");

-- CreateIndex
CREATE INDEX "Schedule_status_idx" ON "Schedule"("status");

-- CreateIndex
CREATE INDEX "ScheduleSlot_scheduleId_idx" ON "ScheduleSlot"("scheduleId");

-- CreateIndex
CREATE INDEX "ScheduleSlot_weekDay_idx" ON "ScheduleSlot"("weekDay");

-- CreateIndex
CREATE INDEX "ScheduleSlot_time_idx" ON "ScheduleSlot"("time");

-- CreateIndex
CREATE INDEX "Order_userId_idx" ON "Order"("userId");

-- CreateIndex
CREATE INDEX "Order_status_idx" ON "Order"("status");

-- CreateIndex
CREATE INDEX "Order_createdAt_idx" ON "Order"("createdAt");

-- CreateIndex
CREATE INDEX "Order_totalPrice_idx" ON "Order"("totalPrice");

-- CreateIndex
CREATE INDEX "OrderItem_orderId_idx" ON "OrderItem"("orderId");

-- CreateIndex
CREATE INDEX "OrderItem_ticketCategoryId_idx" ON "OrderItem"("ticketCategoryId");

-- CreateIndex
CREATE INDEX "OrderItem_scheduleSlotId_idx" ON "OrderItem"("scheduleSlotId");

-- CreateIndex
CREATE UNIQUE INDEX "Discount_code_key" ON "Discount"("code");

-- CreateIndex
CREATE INDEX "Discount_code_idx" ON "Discount"("code");

-- CreateIndex
CREATE INDEX "Discount_validFrom_idx" ON "Discount"("validFrom");

-- CreateIndex
CREATE INDEX "Discount_validTo_idx" ON "Discount"("validTo");

-- CreateIndex
CREATE INDEX "Discount_active_idx" ON "Discount"("active");

-- AddForeignKey
ALTER TABLE "ExcursionImage" ADD CONSTRAINT "ExcursionImage_excursionId_fkey" FOREIGN KEY ("excursionId") REFERENCES "Excursion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Excursion" ADD CONSTRAINT "Excursion_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ExcursionType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TicketCategory" ADD CONSTRAINT "TicketCategory_excursionId_fkey" FOREIGN KEY ("excursionId") REFERENCES "Excursion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_excursionId_fkey" FOREIGN KEY ("excursionId") REFERENCES "Excursion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScheduleSlot" ADD CONSTRAINT "ScheduleSlot_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_discountId_fkey" FOREIGN KEY ("discountId") REFERENCES "Discount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_ticketCategoryId_fkey" FOREIGN KEY ("ticketCategoryId") REFERENCES "TicketCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_scheduleSlotId_fkey" FOREIGN KEY ("scheduleSlotId") REFERENCES "ScheduleSlot"("id") ON DELETE SET NULL ON UPDATE CASCADE;
