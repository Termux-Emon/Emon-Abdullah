module.exports.config = {
	name: "restart",
	version: "7.0.0",
	permission: 2,
	credits: "Emon",
	prefix: 'awto',
	description: "restart bot system",
	category: "admin",
	usages: "Restart",
	cooldowns: 5,
	dependencies: {
		"process": ""
	}
};
module.exports.run = async function({ api, event, args, Threads, Users, Currencies, models }) {
  const process = require("process");
  const { threadID, messageID } = event;
  api.sendMessage(`restarting ${global.config.BOTNAME} Meta, please be patient.`, threadID, ()=> process.exit(1));
}
