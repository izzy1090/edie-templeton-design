export default async function fetchPosts(){
    try {
        const request = await fetch('/api/fetch-sql-token')
        const currentToken = await request.json()
        const returnedPosts = await fetch(`https://graph.instagram.com/me/media?fields=id,timestamp,username,caption,media_type,media_url,permalink,children{media_url,thumbnail_url}&access_token=${currentToken.result.rows[0].access_token}`)
        const posts = returnedPosts.json()
        return posts;
    } catch (error) {
        console.log(error)
    }
}
