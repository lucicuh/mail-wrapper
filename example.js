/*

	Creates a brand new email and reads most recent email recieved!

*/

const mail = require('./mail.js');

async function main(){
	
	let username = Math.random().toString(36).slice(2);
	
	let password = Math.random().toString(36).slice(2);
	
	let email = username + "@bukhariansiddur.com"; 
	
	var result = await mail.create(email, "password"); //also added proxy agent support "await mail.create(email, "password",agent);"
	
	let messages = await mail.messages(login.token);
	
	let id = messages["hydra:member"][0].id;
	
	let message = await mail.message(id, login.token);

}

main();