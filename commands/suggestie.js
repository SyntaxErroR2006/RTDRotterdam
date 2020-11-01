const discord = require("discord.js");

module.exports.run = async (Client, message, args) => {

    //message.delete();



    var text = args || `Fout.`;

    let suggestie = args.join(" ").slice(10);

    var suggestieKanaal = message.member.guild.channels.cache.get("758349088588300293");

    if (!suggestieKanaal) return message.channel.send("Kan de suggestie channel niet vinden.")


    const embed = new discord.MessageEmbed()
        .setDescription(`${message.author.username}`)
        .setColor("#15214d")
        .addField("Suggestie", suggestie)



    message.channel.send("✅ uw Suggestie is goed verzonden naar het Suggestie kanaal");
    var suggestieKanaal = message.guild.channels.cache.find(ch => ch.name === "suggesties");
    if (!suggestieKanaal) return message.guild.send("Kan het kanaal niet vinden");

    suggestieKanaal.send(embed).then(embedMessage => {
        embedMessage.react('✅');
        embedMessage.react('😐');
        embedMessage.react('❌');

    });

}

module.exports.help = {
    name: "suggestie"
}