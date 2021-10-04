module.exports = {
    name: "queue",
    aliases: ["q"],
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing playing!`)
        
        
        const q = queue.songs.map((song, i) => `${song.name} - ${song.formattedDuration}`).join("\n")
        const a = (`\`\`\`css\n ${q} \n \n     This is the end of the queue!  \`\`\``)
        message.channel.send(a)

    }
}
