import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {
    const accessToken = request.query.accessToken;
    if (!accessToken) throw new Error('Access token was not included');
    await sql`UPDATE tokens SET access_token = 1 WHERE id = 0;`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const ig_tokens = await sql`SELECT * FROM tokens;`;
  return response.status(200).json({ ig_tokens });
}
