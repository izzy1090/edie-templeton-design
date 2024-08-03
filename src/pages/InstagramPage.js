// import handler from "../../api/create-pets-table";
import fetchAccessToken from "../api/FetchAccessToken";

async function invokeHandler() {
    try {
      const response = await fetch('http://edietempletondesign.com/api/createTable', {
        method: 'GET' // or 'POST', depending on your handler function
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }


function InstagramPage() {
    return <button onClick={invokeHandler} style={{display: 'block', margin: 'auto', padding: '20px', color: 'red', backgroundColor: 'black' }}>INSTA!!</button>
}

export default InstagramPage;
