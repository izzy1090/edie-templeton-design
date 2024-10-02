import { sql } from '@vercel/postgres';

// You can fetch data from SQL by sending the following HTTP request
    // http://localhost:3000/api/fetch-posts?data=1

export default async function handler(
  request,
  response,
) {
  try {
    const result =
      await sql`SELECT data FROM ig_data WHERE id = ${request.query.data};`;
      return response.status(200).json({ result })

  } catch (error) {
    return response.status(500).json({ error });
  }
}
