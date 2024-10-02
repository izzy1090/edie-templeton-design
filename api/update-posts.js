import fetchPosts from './fetch-posts.js';
import { sql } from '@vercel/postgres';

export default async function updatePosts(){
    try {
        const request = await fetchPosts();
        const latestTimestamp = await fetch('https://edietempletondesign.com/api/fetch-latest-post-timestamp');
        console.log(latestTimestamp)
        // const latestPostTimestamp = request.data[0].timestamp
        // check if there is a timestamp in your request results
            // if not don't make a comparison to instagram's api timestamp
            // if there is a timestamp
        for (const post of request.data){
            
            
            await sql`INSERT INTO ig_data 
                (post_id, post_timestamp, post_username, post_caption, post_media_type, post_media_url, post_permalink) 
                VALUES (${post.id}, ${post.timestamp}, ${post.username}, ${post.caption}, ${post.media_type}, ${post.media_url}, ${post.permalink});`
            
            if (post.media_type === 'CAROUSEL_ALBUM'){
                for (const child of request.data.children){
                    await sql `INSERT INTO ig_children
                        (post_child_id, post_media_url, post_id) 
                        VALUES (${child.id}, ${child.media_url}, ${post.id})`;
                }
            }
            
        };

    } catch (error) {
        console.log(error)
    }
}

// Fetch posts from instagram's api once a week (this will be CRON)
// Firt we return the first set of posts 
    // we also want to iterate over the paginated posts until there are no more posts to return
    // this would involve making api calls for each 'next' key value that has a URL to make an HTTP request with
// Finally we want to store all the posts after they've been returned in vercel's postgreSQL

// could make checks against the timestamp of the last time i made a pull to grab only the latest posts


// NOTE: create a script on a separate endpoint to build a clean database with the paginated results
    // run that script once to build the databse
    // comment out the code and replace the return statement with a status 400 to prevent people from hurting the databse  
