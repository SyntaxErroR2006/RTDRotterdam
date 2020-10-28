const discord = require("discord.js");  
const { re } = require("mathjs");

module.exports.run = async(client, message, args) => {

    var embed = new discord.MessageEmbed()
    .setTitle("Help Systeem")
    .addFields(
        { name: "📑Algemeen", value: "`!new \n!dog \n!meme \n!ping \n!help \n!leden`" },
        { name: "📍Moderatie", value: "`!ban \n!kick \n!lock \n!unlock \n!training \n!close`" },
    )
    .setThumbnail("https://cdn.discordapp.com/attachments/758699445356462110/769845913203769364/unknown.png")
    .setFooter("RTD | Rotterdam", "https://cdn.discordapp.com/attachments/758699445356462110/769845913203769364/unknown.png");
    return message.channel.send(embed);
}

module.exports.help = {
    name: "help"
}