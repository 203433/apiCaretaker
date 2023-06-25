import { pool } from "./db-connection";

export const createTable = () => {
  pool.query(
    `CREATE TABLE IF NOT EXISTS caretaker (ID SERIAL PRIMARY KEY,  name VARCHAR(50), description VARCHAR(200), ubication VARCHAR(50));
        DO $$
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM caretaker) THEN
                INSERT INTO caretaker (name, description, ubication) VALUES ('Test', 'This is a test', 'Ubication test');
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
