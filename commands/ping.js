const Discord = require("discord.js")

module.exports = {
    name: "ping",
    aliases: ["p", "ping"],
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setTitle("Ping")


            .setDescription(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)


            
            .setTimestamp()
        message.channel.send(embed)
    }
}
