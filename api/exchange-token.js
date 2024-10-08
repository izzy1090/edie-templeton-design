import refreshToken from "./refresh-token.js";

export default async function exchangeToken(){
    try {
        fetch(`https://edietempletondesign.com/api/fetch-sql-token`)
        .then(response=>response.json())
        .then(currentToken=>refreshToken(currentToken.result.rows[0].access_token))
        .then(newAccessToken=>fetch(`https://edietempletondesign.com/api/update-sql-token?accessToken=${newAccessToken.access_token}`));
    }
    catch (error){
        console.log(error.message);
    }
}
