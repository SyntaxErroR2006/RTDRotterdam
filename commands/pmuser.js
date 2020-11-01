const discord = require("discord.js");  
const { re } = require("mathjs");

module.exports.run = async(client, message, args) => {
    
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Je hebt geen permissie voor dit commando!");

    if(!args[0]) return message.channel.send("Geen gebruiker opgegeven.");
    
    var member = message.guild.member(message.mentions.users.first() || client.users.cache.get(args[0]));
    if(!member) return message.channel.send("Gebruiker niet gevonden.");

    var text = args.join(" ").slice(args[0].length + 1);
    if(!text) return message.channel.send("Geen bericht opgegeven.");

    message.member.send(text).then(() =>{
        message.channel.send("Bericht is verzonden!");
    }).catch(() => {
        message.channel.send(":x: De persoon heeft zijn DM berichten uit staan.")
    });



}

module.exports.help = {
    name: "pm"
}