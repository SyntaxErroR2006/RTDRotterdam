const discord = require("discord.js");
const { size } = require("mathjs");
const moment = require("moment");

module.exports.run = async (client, message, args) => {

    var roles = message.guild.roles.cache.size - 1;

    var embed = new discord.MessageEmbed()
        .setColor("#0070fa")
        .setThumbnail(`${message.guild.iconURL({ size: 1024 })}`)
        .setTitle(`${message.guild.name}`)
        .addField("ID:", `${message.guild.id}`)
        .addField("Eigenaar:", `${message.guild.owner.user.tag}`, true)
        .addField("Regio:", `${message.guild.region}`, true)
        .addField("Bots:", `${message.guild.members.cache.filter(m => m.user.bot).size}`, true)
        .addField("Mensen:", `${message.guild.memberCount - message.guild.members.cache.filter(m => m.user.bot).size}`, true)
        .addField("Totaal aantal leden:", `${message.guild.memberCount}`, true)
        .addField("Online:", `${message.guild.members.cache.filter(m => m.user.presence.status == "online" || m.user.presence.status == "dnd" || m.user.presence.status == "idle").size}`, true)
        .addField("Tekstkanalen:", `${message.guild.channels.cache.filter(chan => chan.type == "text").size}`, true)
        .addField("Spraakkanalen:", `${message.guild.channels.cache.filter(chan => chan.type == "voice").size}`, true)
        .addField("Server gemaakt op:", `${moment(message.guild.createdAt).format("LL")}`)
        .addField("Server gejoined:", `${moment(message.member.joinedAt).format("LL")}`)
        .addField(`Rollen [${roles}]`, `${message.guild.roles.cache.map(r => r).join(" ")}`);
    
    return message.channel.send(embed);
}

module.exports.help = {
    name: "serverinfo"
}