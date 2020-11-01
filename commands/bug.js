const discord = require("discord.js");

module.exports.run = async(Client, message, args) =>{

     //message.delete();


   
    var text = args || `Fout.`;

    let bug = args.join(" ").slice(4);

    var bugKanaal = message.member.guild.channels.cache.get("772556764519858216");

    if(!bugKanaal) return message.channel.send("Kan het bug channel niet vinden.")


    const embed = new discord.MessageEmbed()
        .setTitle(`${message.author.username} heeft een bug verstuurd `)
        .setColor("#15214d")
        .addField("Suggestie", bug)
        .setThumbnail(message.author.displayAvatarURL())
    


    message.channel.send("✅ uw bug is goed verzonden naar het bug kanaal");
    var bugKanaal = message.guild.channels.cache.find(ch => ch.name === "bugs");
    if (!bugKanaal) return message.guild.send("Kan het kanaal niet vinden");
 
 
}

module.exports.help = {
    name: "bug"
}