import { sql } from '@vercel/postgres';
 
export default async function handler(
  request,
  response,
) {
  try {
    const result =
      await sql`SELECT post_timestamp from ig_data order by id desc limit 1;`;
      return response.status(200).json({ result })

  } catch (error) {
    return response.status(500).json({ error });
  }
}
