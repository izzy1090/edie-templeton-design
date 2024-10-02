import fetchPosts from './fetch-posts.js';
import { sql } from '@vercel/postgres';

export default async function updatePosts(){
    try {
        const request = await fetchPosts();
        for (const post of request.data){
            await sql`INSERT INTO ig_data (post_id) VALUES (${post.id})`
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
