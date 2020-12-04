const { MessageEmbed } = require('discord.js');


const snekfetch = require('snekfetch');
module.exports.run = async ( { sign }, message, args) => {
    
    try {
    const sign = args.join(" ");
         
			const { body } = await snekfetch.get(`http://theastrologer-api.herokuapp.com/api/horoscope/${sign}/today`);
			const embed = new MessageEmbed()
				.setColor(0x9797FF)
				.setTitle(`Horoscope for ${body.sunsign}...`)
				.setURL(`https://new.theastrologer.com/${body.sunsign}/`)
				.setFooter('© Kelli Fox, The Astrologer')
				.setTimestamp()
				.setDescription(body.horoscope)
				.addField('❯ Mood', body.meta.mood, true)
				.addField('❯ Intensity', body.meta.intensity, true)
				.addField('❯ Date', body.date, true);
			return message.channel.send(embed)
 } catch (err) {
            return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
        }
    }
    module.exports.config = {
        name: "horoscope",
        description: "Displays daily horoscope",
        usage: "m/horoscope [Sign]",
        accessableby: "Member",
        aliases: []
    }
    
