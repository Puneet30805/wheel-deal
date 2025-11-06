ALTER TABLE "carListing" ADD COLUMN "createdBy" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "carListing" ADD COLUMN "postedOn" varchar;--> statement-breakpoint
ALTER TABLE "carListing" ADD COLUMN "isActive" boolean DEFAULT true NOT NULL;