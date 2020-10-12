const punishmentLogSchema = require('../schemas/punishment-log-schema')
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) 
        message.reply("You don't have permission to use that command.");
    else {
        const target = message.mentions.users.first()
        if (!target) {
          message.reply('Please specify someone to load punishments for.')
          return
        }
    
        const { guild } = message
        const { id } = target
    
        const results = await punishmentLogSchema.find({
          guildId: guild.id,
          userId: id,
        })
    
        let reply = 'Previous punishments:\n\n'
    
        for (const result of results) {
          reply += `${result.command} was ran at ${new Date(
            result.createdAt
          ).toLocaleTimeString()}\n\n`
        }
    
        message.reply(reply);
    }}
    module.exports.config = {
        name: "punishmentlog",
        description: "Shows the punishment log of a member/user",
        usage: "m/punishmentlogs [mention]",
        accessableby: "ADMIN",
        aliases: ['punishlog']
    }