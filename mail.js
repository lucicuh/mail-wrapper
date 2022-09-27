const axios = require('axios');
let agent;

async function create(address, password, agent){
	const json = JSON.stringify({ address, password });
	let { data } = await axios.post('https://api.mail.gw/accounts', json, { 
		validateStatus: false,
		httpsAgent: agent,
		headers: {
			'Content-Type': 'application/json' 
		}
	}).catch(err => { return "no data" })
	return data;
}

async function login(address, password,agent){
	const json = JSON.stringify({ address, password });
	let { data } = await axios.post('https://api.mail.gw/token', json, { 
		validateStatus: false,
		httpsAgent: agent,
		headers: {
			'Content-Type': 'application/json' 
		}
	}).catch(err => { return "no data" })
	return data;
}

async function messages(token,agent){
	let { data } = await axios.get('https://api.mail.gw/messages', {
		validateStatus: false,
		httpsAgent: agent,
		headers: { 
			'Authorization': 'Bearer ' + token
		} 
	}).catch(err => { return "no data" })
	return data; 
}

async function message(id,token,agent){
	let { data } = await axios.get('https://api.mail.gw/messages/' + id, {
		validateStatus: false,
		httpsAgent: agent,
		headers: { 
			'Authorization': 'Bearer ' + token
		} 
	}).catch(err => { return "no data" })
	return data; 
}

async function domains(){
	let { data } = await axios.get('https://api.mail.gw/domains', {
		validateStatus: false,
		httpsAgent: agent,
	}).catch(err => { return "no data" })
	return data; 
}

module.exports = {
	login,
	messages,
	message,
	create,
	domains,
};



//module.exports.deleteMessage = (id, callback) => {
//    if (!token) return;
//    axios.delete('https://api.mail.gw/messages/' + id, { headers: { 'Authorization': 'Bearer ' + token } }).then(r => {
//        callback(r.data);
//    }).catch(err => {
//        if (err.response) {
//            callback(err.response.data);
//        } else {
//            throw Error(err);
//        }
//    })
//}
//module.exports.me = (callback) => {
//    if (!token) return;
//    axios.get('https://api.mail.gw/me', { headers: { 'Authorization': 'Bearer ' + token } }).then(r => {
//        callback(r.data);
//    }).catch(err => {
//        if (err.response) {
//            callback(err.response.data);
//        } else {
//            throw Error(err);
//        }
//    })
//}
//module.exports.domains = (callback) => {
//    axios.get('https://api.mail.gw/domains').then(r => {
//        callback(r.data);
//    }).catch(err => {
//        if (err.response) {
//            callback(err.response.data);
//        } else {
//            throw Error(err);
//        }
//    })
//}
//
//module.exports.domain = (id, callback) => {
//    axios.get('https://api.mail.gw/domains/' + id).then(r => {
//        callback(r.data);
//    }).catch(err => {
//        if (err.response) {
//            callback(err.response.data);
//        } else {
//            throw Error(err);
//        }
//    })
//}
//module.exports.logout = (callback) => {
//    if (!token) throw Error("You are not logged in");
//    token = "";
//    callback({
//        "success": true
//    });
//}