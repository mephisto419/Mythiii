const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
            
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have premssions to do that!");
    if(!args[0]) return message.channel.send("Please enter a number of messages to clear! `Usage: m/clear <amount>`");
    message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`**__Cleared ${args[0]} messages.__**`).then(msg => msg.delete({ timeout: 10000 }));
  });

}

module.exports.config = {
    name: "purge",
    description: "clears message",
    usage: "m/purge",
    accessableby: "Admins",
    aliases: ['clear', 'erase']
}
