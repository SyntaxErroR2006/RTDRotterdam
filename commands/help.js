const discord = require("discord.js"); 

module.exports.run = async(client, message, args) => {

    var embed = new discord.MessageEmbed()
    .setTitle("Help Systeem")
    .addFields(
        { name: "📑Algemeen", value: "`!new !dog !meme !ping \n!help \n!leden`"},
        { name: "📍Moderatie", value: "`!ban !kick !lock !unlock \n!training \n!close`" },
    )
    .setThumbnail("https://cdn.discordapp.com/attachments/758699445356462110/772441369292570624/unknown.png")
    .setFooter("RTD | Rotterdam", "https://cdn.discordapp.com/attachments/758699445356462110/772441369292570624/unknown.png");
    return message.channel.send(embed);
}

module.exports.help = {
    name: "help"
}