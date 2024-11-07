import { sql } from '@vercel/postgres';
 
export default async function handler(
  request,
  response,
) {
  try {
    const postBatch = request.query.offset;
    const requestParent = await sql`SELECT * from ig_data order by post_timestamp::timestamp desc limit 25 OFFSET ${postBatch};`;
    const result = [...requestParent.rows];
    for (const post of requestParent.rows){
        if (post.post_media_type === "CAROUSEL_ALBUM"){
            const requestChildren = await sql`SELECT * FROM ig_children WHERE post_id = ${post.post_id}`;
            post.children = {data: requestChildren.rows};
        }
    }
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
