const discord = require("discord.js");

module.exports.run = async(Client, message, args) =>{

     //message.delete();


   
    var text = args || `Fout.`;

    let suggestie = args.join(" ").slice(8);

    var suggestieKanaal = message.member.guild.channels.cache.get("769303214188396584");

    if(!suggestieKanaal) return message.channel.send("Kan de suggestie channel niet vinden.")


    const embed = new discord.MessageEmbed()
        .setTitle(`${message.author.username} heeft een suggestie verstuurd `)
        .setColor("#15214d")
        .addField("Suggestie", suggestie)
        .setThumbnail(message.author.displayAvatarURL())
    


    message.channel.send("✅ uw Suggestie is goed verzonden naar het Suggestie kanaal");
    var suggestieKanaal = message.guild.channels.cache.find(ch => ch.name === "suggesties");
    if (!suggestieKanaal) return message.guild.send("Kan het kanaal niet vinden");
 
    suggestieKanaal.send(embed).then(embedMessage => {
        embedMessage.react('✅');
        embedMessage.react('❌');
    });
 
}

module.exports.help = {
    name: "suggestie"
}