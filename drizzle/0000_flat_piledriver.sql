CREATE TABLE "carImages" (
	"id" serial PRIMARY KEY NOT NULL,
	"imageUrl" varchar NOT NULL,
	"CarListingId" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "carListing" (
	"id" serial PRIMARY KEY NOT NULL,
	"listingTitle" varchar NOT NULL,
	"location" varchar NOT NULL,
	"tagline" varchar,
	"originalPrice" varchar NOT NULL,
	"sellingPrice" varchar NOT NULL,
	"category" varchar,
	"condition" varchar NOT NULL,
	"make" varchar NOT NULL,
	"model" varchar NOT NULL,
	"year" integer NOT NULL,
	"driveType" varchar NOT NULL,
	"transmission" varchar NOT NULL,
	"fuelType" varchar NOT NULL,
	"mileage" varchar NOT NULL,
	"engineSize" varchar,
	"cylinder" varchar,
	"color" varchar NOT NULL,
	"door" varchar NOT NULL,
	"vin" varchar,
	"offerType" varchar,
	"listingDescription" varchar NOT NULL,
	"features" json
);
--> statement-breakpoint
ALTER TABLE "carImages" ADD CONSTRAINT "carImages_CarListingId_carListing_id_fk" FOREIGN KEY ("CarListingId") REFERENCES "public"."carListing"("id") ON DELETE no action ON UPDATE no action;