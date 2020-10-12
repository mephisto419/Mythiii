const warnSchema = require('../schemas/warn-schema')
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) 
        message.reply("You don't have permission to use that command.");
    else {
        const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify a user to load the warnings for.')
      return
    }

    const guildId = message.guild.id
    const userId = target.id

    const results = await warnSchema.findOne({
      guildId,
      userId,
    })

    let reply = `Previous warnings for <@${userId}>:\n\n`

    for (const warning of results.warnings) {
      const { author, timestamp, reason } = warning

      reply += `By ${author} on ${new Date(
        timestamp
      ).toLocaleDateString()} for "${reason}"\n\n`
    }

    message.reply(reply)
  }
}
module.exports.config = {
    name: "warnings",
    description: "Shows the warning of a member/user",
    usage: "m/warnings [mention]",
    accessableby: "ADMIN",
    aliases: []
}


