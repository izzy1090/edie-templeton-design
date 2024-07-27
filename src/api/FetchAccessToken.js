let access_token;
//  = 'IGQWROcHZASbkV0MlpGSHd6T1FfTWt2SlpZAN1ozOVVpZAVF6Y0xzV3ZAnZAkhiaF8zb1FVVWVBdzFwQ0pXMnBwNUJSd2d1c3NYMERmMkM2SDJPM2M4YmgwZAm42X1BZAM3JQOC1RVm9ZAdmZAGN0lGUQZDZD';

async function fetchAccessToken(){
    const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${access_token}`
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const refreshed_access_token = await response.json();
        console.log(refreshed_access_token);
    } catch(error) {
        console.log(error.message);
    }
}

export default fetchAccessToken;

// const client_secret = '4a1fd60f391dbed02dbe6f82b69c79f8';
// const client_id = '491709536776063';
// const refresh_uri = 'https://edietempletondesign.com/';

// Authorization URL for Edie's IG profile to get code for a long-lived token
// https://api.instagram.com/oauth/authorize?client_id=491709536776063&redirect_uri=https://edietempletondesign.com/&scope=user_profile,user_media&response_type=code

// then use the code generated from the above URL authorization to grant access to the user's profile
// curl -X POST \
//   https://api.instagram.com/oauth/access_token \
//   -F client_id=491709536776063 \
//   -F client_secret=4a1fd60f391dbed02dbe6f82b69c79f8 \
//   -F grant_type=authorization_code \
//   -F redirect_uri=https://edietempletondesign.com/ \
//   -F code=INSERT_CODE_FROM_RETURNED_URL

// const access_token = 'IGQWRPOEJ0a1d4TTllc3E3aFBMTkRWdjBkWXBzYVhQMThKajdxRWI0UWtXMklTSmNXWTJiMXVOTTJkM0lOWkhXWTZAodDhHZAkYtTWdNTEctejNob0xJOEJKejg5NnN4aWFicDdwaG5mQnBadwZDZD';
// Then use the below request to get the long lived access token 
// curl -i -X GET "https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=4a1fd60f391dbed02dbe6f82b69c79f8&access_token=INSERT_RETURNED_ACCESS_TOKEN

// Finally use this as a fetch GET request to get refreshed tokens for the site
// curl -i -X GET "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=IGQWROSnlWRUR0RWJvd2tVOTBrSi1vR3BCTE5qd09GZAXZAqLUQ2YWNMdWxacTBBdlowNTJfLUltNHVHWDlLS3Q3eHZAEcWx0R1d3eVlvblBFRkdFLWdXZAGFkM2xqWlNoWjM3UFhwemNLZA1VKUQZDZD"

const json = {
    "access_token":"IGQWRPOEJ0a1d4TTllc3E3aFBMTkRWdjBkWXBzYVhQMThKajdxRWI0UWtXMklTSmNXWTJiMXVOTTJkM0lOWkhXWTZAodDhHZAkYtTWdNTEctejNob0xJOEJKejg5NnN4aWFicDdwaG5mQnBadwZDZD",
    "token_type":"bearer",
    "expires_in":5176401
}
