export default async function fetchPosts(){
    fetch('https://edietempletondesign.com/api/fetch-sql-token')
    .then(response=>response.json())
    .then((currentToken) => {
        console.log(currentToken.result.rows[0].access_token)
        return fetch(`https://graph.instagram.com/me/media?fields=id,username,caption,media_url,permalink&access_token=${currentToken.result.rows[0].access_token}`)
    })
    .then(response => response.json())
    .then(data=>console.log(data))
}
