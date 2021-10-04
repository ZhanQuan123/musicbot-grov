const Discord = require("discord.js")
const ytly = require('ytly'); 
module.exports = {
    name: "lyric",
    aliases: ["lyric"],
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if(!queue) return message.channel.send('There are no songs in the queue.')
        if(!queue && !client.distube.isPlaying(message)) return('There is nothing playing.')
        const song = queue.songs[0]
        const link = song.url
        const name = song.name
        const tes = await ytly.get.lyrics(link);
        console.log(tes)
        const embed = new Discord.MessageEmbed()
        	.setColor('#66e12d')
            .setTitle(`Lyric (${name})`)
            .setDescription(`\`\`\`${tes}\`\`\``)
            .setTimestamp()
        message.channel.send(embed);
    }}