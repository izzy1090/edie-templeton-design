import fetchPosts from './fetch-posts.js';
import { sql } from '@vercel/postgres';

export default async function updatePosts(
    request,
    response
){
    try {
        const latestPosts = await fetchPosts();
        const requestLatestTimestamp = await sql`SELECT post_timestamp from ig_data order by post_timestamp::timestamp desc limit 1;`
        const latestTimestamp = requestLatestTimestamp.rows[0].post_timestamp;
        const newPosts = [];
        latestPosts.data.forEach((post)=>{
            if (post.timestamp > latestTimestamp){
                newPosts.push(post)
            }
        })
        for (const post of newPosts){
            await sql`INSERT INTO ig_data 
                (post_id, post_timestamp, post_username, post_caption, post_media_type, post_media_url, post_permalink) 
                VALUES (${post.id}, ${post.timestamp}, ${post.username}, ${post.caption}, ${post.media_type}, ${post.media_url}, ${post.permalink});`
            
            if (post.media_type === 'CAROUSEL_ALBUM'){
                for (const child of post.children.data){
                    await sql `INSERT INTO ig_children
                        (post_child_id, post_media_url, post_id) 
                        VALUES (${child.id}, ${child.media_url}, ${post.id})`;
                }
            }
            console.log(`record id: ${post.id}, has been added!`)
        };
        if (newPosts.length > 0){
            return response.status(200).json({newPosts})
        } else return response.status(200).json({message: "There are no new posts to add to the database."})
    } catch (error) {
        console.log(error)
    }
}
