import { sql } from '@vercel/postgres';
 
export default async function handler(
  request,
  response,
) {
  try {
    const result =
        await sql`CREATE TABLE ig_data (id SERIAL PRIMARY KEY, post_id varchar(255), post_timestamp varchar(255), post_username varchar(255), post_caption varchar(255), post_media_type varchar(255), post_media_url varchar(2083), post_permalink varchar(255));
        );`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
