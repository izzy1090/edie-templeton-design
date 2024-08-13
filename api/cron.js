import exchangeToken from "../src/internal-api/exchange-token";

export default async function cron(){
   exchangeToken(); 
}
