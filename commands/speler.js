const discord = require("discord.js");
const { norm } = require("mathjs");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry, jij kan dit niet doen.");

    var noRuleUser = message.guild.member(message.mentions.users.first());
    if (!noRuleUser) return message.channel.send("Geen gebruiker gevonden.");

    var role = message.guild.roles.cache.find(r => r.name === "Speler");
    if (!role) return message.channel.send("Geen rol met dezez naam gevonden.");

    for (let index = 0; index < noRuleUser._roles.length; index++) {
        const role = noRuleUser._roles[index];

        noRuleUser.roles.remove(role);
    }

    var embed = new discord.MessageEmbed()
        .setDescription("✅ Rollen zijn gereset naar Speler.")
        .setColor("#42c2f5");
    noRuleUser.roles.add(role);

    return message.channel.send(embed)
}

module.exports.help = {
    name: "speler"
}