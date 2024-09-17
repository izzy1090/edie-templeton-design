import { sql } from '@vercel/postgres';
 
export default async function handler(
  request,
  response,
) {
  try {
    const returnedIGData = request.query.data;
    if (!returnedIGData) throw new Error('Instagram data was not properly requested.');
    const result =
        await sql`INSERT INTO ig_data (data) 
            VALUES (${returnedIGData}::jsonb);`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
