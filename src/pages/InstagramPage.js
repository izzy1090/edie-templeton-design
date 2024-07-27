import fetchAccessToken from "../api/FetchAccessToken";

function InstagramPage() {
    return <button onClick={fetchAccessToken} style={{display: 'block', margin: 'auto', padding: '20px', color: 'red', backgroundColor: 'black' }}>INSTA!!</button>
}

export default InstagramPage;
