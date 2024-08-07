import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  try {
    // Check if table exists first (idempotency)
    const tableExists = await sql`
      SELECT EXISTS (
        SELECT FROM pg_tables
        WHERE schemaname = 'public' AND tablename = 'Pets'
      )
    `;

    if (!tableExists.rows[0].exists) {
      await sql`
        CREATE TABLE Pets (
          id SERIAL PRIMARY KEY,
          Name VARCHAR(255) NOT NULL,
          Owner VARCHAR(255) NOT NULL
        );
      `;
      res.status(200).json({ message: 'Pets table created successfully' });
    } else {
      res.status(200).json({ message: 'Pets table already exists' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating Pets table' });
  }
}
