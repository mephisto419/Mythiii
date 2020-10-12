

const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) 
        message.reply("You don't have permission to use that command.");
    else {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
const av = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(member.user.username)
.setDescription("Avatar!")
.setImage(member.user.displayAvatarURL({dynamic: true}))
.setTimestamp()

message.channel.send(av);
}}
module.exports.config = {
    name: "Avatar",
    description: "Shows the avatar of a member/user",
    usage: "m/avatar",
    accessableby: "ADMIN",
    aliases: ['av']
}