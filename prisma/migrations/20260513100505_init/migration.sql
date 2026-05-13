-- CreateEnum
CREATE TYPE "LeadStatus" AS ENUM ('PENDING', 'CONTACTED', 'INTERESTED', 'MEETING', 'PROPOSAL_SENT', 'CLIENT', 'REJECTED');

-- CreateEnum
CREATE TYPE "ContactMethod" AS ENUM ('EMAIL', 'PHONE', 'INSTAGRAM', 'WHATSAPP', 'IN_PERSON');

-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('NEW_WEBSITE', 'REDESIGN', 'SEO', 'MAINTENANCE', 'ECOMMERCE');

-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "businessName" TEXT NOT NULL,
    "locality" TEXT NOT NULL,
    "contactName" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "website" TEXT,
    "instagram" TEXT,
    "notes" TEXT,
    "estimatedBudget" DOUBLE PRECISION,
    "nextFollowUp" TIMESTAMP(3),
    "status" "LeadStatus" NOT NULL DEFAULT 'PENDING',
    "contactMethod" "ContactMethod" NOT NULL,
    "serviceType" "ServiceType" NOT NULL,
    "lastContactAt" TIMESTAMP(3),

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);
