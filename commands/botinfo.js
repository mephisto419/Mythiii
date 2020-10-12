const Discord = require("discord.js")
const { version } = require('../package.json');
const { utc } = require('moment');
const os = require('os');
const ms = require('ms');


module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) 
        message.reply("You don't have permission to use that command.");
    else {
        const core = os.cpus()[0];
		const embed = new Discord.MessageEmbed()
			.setThumbnail(bot.user.displayAvatarURL())
			.setColor(message.guild.me.displayHexColor || 'BLUE')
			.addField('General', [
				`**❯ Client:** ${bot.user.tag} (${bot.user.id})`,
				`**❯ Commands:** ${bot.commands.size}`,
				`**❯ Servers:** ${bot.guilds.cache.size.toLocaleString()} `,
				`**❯ Users:** ${bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
				`**❯ Channels:** ${bot.channels.cache.size.toLocaleString()}`,
				`**❯ Creation Date:** ${utc(bot.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
				`**❯ Node.js:** ${process.version}`,
				`**❯ Version:** v${version}`,
				`**❯ Discord.js:** v12.3.1`,
				`**❯ Developer:** MEPHISTO#2606`,
				'\u200b'
			])
			.addField('System', [
				`**❯ Platform:** ${process.platform}`,
				`**❯ Uptime:** ${ms(os.uptime() * 1000, { long: true })}`,
				`**❯ CPU:**`,
				`\u3000 Cores: ${os.cpus().length}`,
				`\u3000 Model: ${core.model}`,
				`\u3000 Speed: ${core.speed}MHz`,
				
			])
			.setTimestamp();

		message.channel.send(embed);
}}
module.exports.config = {
    name: "botinfo",
    description: "Shows the info of bot",
    usage: "m/uptime",
    accessableby: "ADMIN",
    aliases: ['ut','uptime']
}