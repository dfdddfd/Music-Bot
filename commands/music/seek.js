const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "seek",
    aliases: ["이동", "ㄴㄷ다", "시간이동", "시간"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(new MessageEmbed()
        .setDescription("해당 명령어를 사용하려면 음성채널에 접속해야 해요!")
        .setColor("#2F3136"));

        const player = client.musicMgr.queue.get(message.guild.id);
        
        if (!player) return message.channel.send(new MessageEmbed()
        .setDescription("재생중인 음악이 없어요!")
        .setColor("#2F3136"));

        if (args[0].includes(".") || args[0].split(":").some(t => isNaN(t))) return message.channel.send(new MessageEmbed()
        .setDescription(`${args[0]}(으)로 시간을 이동할 수 없어요..!`)
        .setColor("#2F3136"));

        const seeked = player.seek(...args[0].split(":").reverse().map(t => parseInt(t)));

        message.channel.send(new MessageEmbed()
        .setDescription(`${[seeked]}(으)로 시간을 이동했어요!`)
        .setColor("#2F3136"));
    }
}