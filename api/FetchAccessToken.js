let access_token;

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
        return refreshed_access_token;
    } catch(error) {
        console.log(error.message);
    }
}

export default fetchAccessToken;
