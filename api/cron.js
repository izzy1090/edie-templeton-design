import exchangeToken from "../src/internal-api/exchange-token.js";
import refreshToken from "../src/internal-api/refresh-token.js";

export default async function cron(){
   exchangeToken(); 
}
