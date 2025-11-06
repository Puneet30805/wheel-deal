/** @type {import ("drizzle-kit").Config} */


export default {
  schema: "./configs/schema.js",  
  out: "./drizzle",               
  dialect: "postgresql",       
  dbCredentials: {
  url:"postgresql://neondb_owner:npg_fu0seOb9adlR@ep-hidden-star-a8vryqzh.eastus2.azure.neon.tech/car-marketplace?sslmode=require"
  },
};
