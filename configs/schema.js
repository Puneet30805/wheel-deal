import { pgTable, serial, varchar, integer, json, boolean } from "drizzle-orm/pg-core";

export const CarListing = pgTable("carListing", {
  id: serial("id").primaryKey(),
  listingTitle: varchar("listingTitle").notNull(),
  location: varchar("location").notNull(),
  tagline: varchar("tagline"),
  originalPrice: varchar("originalPrice").notNull(),
  sellingPrice: varchar("sellingPrice").notNull(),
  category: varchar("category"),
  condition: varchar("condition").notNull(),
  make: varchar("make").notNull(),
  model: varchar("model").notNull(),
  year: integer("year").notNull(),
  driveType: varchar("driveType").notNull(),
  transmission: varchar("transmission").notNull(),
  fuelType: varchar("fuelType").notNull(),
  mileage: varchar("mileage").notNull(),
  engineSize: varchar("engineSize"),
  cylinder: varchar("cylinder"),
  color: varchar("color").notNull(),
  door: varchar("door").notNull(),
  vin: varchar("vin"),
  offerType: varchar("offerType"),
  listingDescription: varchar("listingDescription").notNull(),
  features: json("features"),
  createdBy: varchar("createdBy").notNull(),
  postedOn: varchar("postedOn"),
  isActive: boolean("isActive").default(true).notNull(),
});

export const CarImages = pgTable("carImages", {
  id: serial("id").primaryKey(),
  imageUrl: varchar("imageUrl").notNull(),
  CarListingId: integer("CarListingId").notNull().references(() => CarListing.id)
});
