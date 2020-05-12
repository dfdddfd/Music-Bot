const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ["핑", "vld"],
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle(`${client.emojis.cache.find(x => x.name == 'loadingCirclebar')} 핑 측정 중..`)
            .setColor("#2F3136")

        const m = await message.channel.send(embed);

        const pEmbed = new MessageEmbed()
            .setTitle("🏓  퐁!")
            .setDescription(`> API Latency: **${Math.round(client.ws.ping)}ms**\n> MSG Latency: **${m.createdAt - message.createdAt}ms**`)

        if (Math.round(client.ws.ping) < 1000) {
            pEmbed.setColor("BLUE").setFooter("매우 양호")
        } else if (Math.round(client.ws.ping) < 750) {
            pEmbed.setColor("GREEN").setFooter("양호")
        } else if (Math.round(client.ws.ping) > 500) {
            pEmbed.setColor("ORANGE").setFooter("불안정")
        } else if (Math.round(client.ws.ping) > 250) {
            pEmbed.setColor("RED").setFooter("매우 불안정")
        }

        m.edit(pEmbed);
    }
}