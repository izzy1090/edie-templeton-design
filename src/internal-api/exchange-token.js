import refreshToken from "./refresh-token.js";

function exchangeToken(){
    try {
        fetch("/api/fetch-sql-token")
        .then(response=>response.json())
        .then(currentToken => refreshToken(currentToken.result.rows[0].access_token))
        .then(newAccessToken=>fetch(`/api/update-sql-token?accessToken=${newAccessToken.access_token}`));
    }
    catch (error){
        console.log(error.message);
    }
}

export default exchangeToken;
