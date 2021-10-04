const Discord = require("discord.js")
module.exports = {
    name: "repeat",
    aliases: ["loop", "l"],
    inVoiceChannel: true,
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing playing!`)
        let mode = null
        switch (args[0]) {
            case "off":
                mode = 0
                break
            case "song":
                mode = 1
                break
            case "queue":
                mode = 2
                break
        }
        mode = client.distube.setRepeatMode(message, mode)
        mode = mode ? mode === 2 ? "Now looping the **queue**." : "Now looping the **current track**." : "Looping is now **disabled**."
        const embed = new Discord.MessageEmbed()
          .setDescription(`${mode}`)
          .setColor('#66e12d')
        message.channel.send(embed)
    }
}
