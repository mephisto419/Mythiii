const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("BAN_MEMBERS")) {

        return message.channel.send("Something went wrong: No permission. (BAN_MEMBERS)");

    }

    let logs = message.guild.channels.cache.find(channel => channel.name === 'mythiii-logs')

    let userID = args[0];

    let reason = args.slice(1).join(" ");
   
    if (!userID) return message.channel.send("Please insert a valid user ID.");

    if (isNaN(userID)) return message.channel.send("User ID must be a number.");

    if (userID === message.author.id) return message.channel.send("You can't ban yourself.");

    if (userID === bot.user.id) return message.channel.send("You can't ban me. Why?");



    if (!reason) reason = "No reason provided";



    bot.users.fetch(userID).then(async user => {

        await message.guild.members.ban(user.id, {reason: reason});

        logs.send(`**${user.tag}** has been hack banned by **${message.author.tag} because ${reason}**`);
        return message.channel.send(`**${user.tag}** has been banned, from outside this server.`);

    }).catch(error => {

        // If the user is unavailable, return some errors. (Recommended)

        return message.channel.send(`An error occurred: **${error}**`);

    })

};
module.exports.config = {
    name: "hackban",
    description: "pre bans a user",
    usage: "m/hackban [id] [reason]",
    accessableby: "ADMINS",
    aliases: ['hb']
}