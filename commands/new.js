const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "769861046415654943"

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var channel = message.guild.cache.channels(userName.toLowerCase() + "-" + "ticket", { type: "text" });

    var ticketBestaat = false;

    message.guild.channels.cache.forEach(channel => {

        if (channel.name == userName.toLowerCase() + "-" + "ticket") {
            ticketBestaat = true;

            message.reply("Je hebt al een ticket aangemaakt!");

            return;

        }

    });

    if (ticketBestaat) return;

    var embed = new discord.MessageEmbed()
        .setDescription(`✅ Je ticket wordt aangemaakt -> ${channel}`);

    message.channel.send(embed);

    message.guild.channels.create(userName.toLowerCase() + "-" + "ticket", { type: "text" }).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === 'Support team'), {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });

                    var embedParent = new discord.MessageEmbed()
                        .setTitle(`Hallo! ${message.author.username}`)
                        .setDescription(`We willen graag direct je klachten/vragen horen, zodat een staff lid direct kan reageren en helpen! \n **Onderwerp** \n ${args.join(" ").slice(4)}`);

                    settedParent.send(embedParent);




                }
            ).catch(err => {
                message.channel.send("Er is iets foutsgelopen");
            });
        }
    ).catch(err => {
        message.channel.send("Er is iets foutsgelopen");
    });


}

module.exports.help = {
    name: "new"
}