import { pool } from "./db-connection";

export const createTable = () => {
  pool.query(
    `CREATE TABLE IF NOT EXISTS tasks (ID SERIAL PRIMARY KEY,  title VARCHAR(50), description VARCHAR(200));
        DO $$
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM tasks) THEN
                INSERT INTO tasks (title, description) VALUES ('Test', 'This is a test');
            END IF;
        END $$
        `,
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log("Table created or already exists");
    }
  );
};
