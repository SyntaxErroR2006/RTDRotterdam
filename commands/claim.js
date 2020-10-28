const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var embed = new discord.MessageEmbed()
        .setDescription(`${message.author} heeft dit ticket geclaimed!`)
        .setColor("#fc0303");
    return message.channel.send(embed);
}

module.exports.help = {
    name: "claim"
}