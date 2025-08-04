import { getBaseEmail } from "../services/email";

async function main() {
  console.log (await getBaseEmail("carlos"));
  console.log("Finalizado"); 
  console.log("..."); 
}
 
main();
