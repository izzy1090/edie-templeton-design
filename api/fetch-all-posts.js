import fs from 'fs/promises';
import fetchPosts from './fetch-posts.js';

export const config = {
    maxDuration: 60,
}
 
export default async function handler(
  request,
  response,
) {
  try {
    const result = await fetchPosts();
    let next = result.paging.next;
    const allPosts = [...result.data];
    // while (next){
    //     const nextRequest = await fetch(next)
    //     const nextResult = await nextRequest.json()
    //     allPosts.push(...nextResult.data)
    //     console.log(`Record ${next} has been saved.`)
    //     next = nextResult.paging.next;
    // }

    await fs.writeFile('./tmp/instagram_posts.json', JSON.stringify(allPosts))

    return response.status(200).json({ message: "Posts have been collected and stored in a temporary file." });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
