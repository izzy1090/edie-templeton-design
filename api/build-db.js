import { sql } from '@vercel/postgres';
import fetchPosts from './ig-fetch-posts.js';

export const config = {
    maxDuration: 60,
}
 
export default async function handler(
  request,
  response,
) {
  try {
    // const request = await fetchPosts();
    // let next = request.paging.next;
    // const database = [...request.data];
    // while (next){
    //     const nextRequest = await fetch(next)
    //     const nextResult = await nextRequest.json()
    //     database.push(...nextResult.data)
    //     for (const post of nextResult.data){
    //         await sql`INSERT INTO ig_data 
    //             (post_id, post_timestamp, post_username, post_caption, post_media_type, post_media_url, post_permalink) 
    //             VALUES (${post.id}, ${post.timestamp}, ${post.username}, ${post.caption}, ${post.media_type}, ${post.media_url}, ${post.permalink});`
    //         if (post.media_type === 'CAROUSEL_ALBUM'){
    //             for (const child of post.children.data){
    //                 await sql `INSERT INTO ig_children
    //                     (post_child_id, post_media_url, post_id) 
    //                     VALUES (${child.id}, ${child.media_url}, ${post.id})`;
    //             }
    //         }
    //     console.log(`record id: ${post.id}, has been added!`);
    //     }
    //     next = nextResult.paging.next;
    // }
    
    // return response.status(200).json({ database });
    return response.status(500).json({error: "Sorry! This page doesn't exist."});
  } catch (error) {
    return response.status(500).json({ error });
  }
}
