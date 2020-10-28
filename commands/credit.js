const discord = require("discord.js");  

module.exports.run = async(client, message, args) => {

    try{

        var text = "**__Credits:__** \n\n **Game Creators**: \n SpookyFex🎃, EngeMan_AKA \n\n **Helpers** \n Spooky🎃, Sjodemieter en Kloetzhak🎃, AmirOnRTD, semihdeboy \n\n **Bot Maker:** \n SyntaxErroR"
        
        message.channel.send(text);

        

    }catch(error){
        message.reply("Er is iets foutsgelopen");
    }
    
}

module.exports.help = {
    name: "credit"
}