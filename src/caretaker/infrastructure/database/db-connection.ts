import { Pool } from "pg";

const config = {
  host: "database-1.c9meh61fegg7.us-east-1.rds.amazonaws.com",
  port: 5432,
  user: "postgres",
  database: "postgres",
  password: "N0Tweak$_123!",
};

export const pool = new Pool(config);
