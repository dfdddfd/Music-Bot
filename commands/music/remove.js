const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "remove",
    aliases: ["r", "ㄱ", "리무브", "삭제", "노래삭제", "음악삭제", "제거", "노래제거", "음악제거"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(new MessageEmbed()
        .setDescription("해당 명령어를 사용하려면 음성채널에 접속해야 해요!")
        .setColor("#2F3136"));
        const player = client.musicMgr.queue.get(message.guild.id);
        if (!player) return message.channel.send(new MessageEmbed()
        .setDescription("재생중인 음악이 없어요!")
        .setColor("#2F3136"));

        if (!player.playing) player.playing = true;

        if (args[0] > player.songs.length || args[0] < 0 || isNaN(args[0]) || args[0].includes(".")) return message.channel.send(new MessageEmbed()
        .setDescription(`${args[0]}번 대기열을 제거할 수 없어요!`)
        .setColor("#2F3136"));

        player.songs.splice(parseInt(args[0]), 1);

        message.channel.send(new MessageEmbed()
        .setDescription(`${args[0]}번 대기열을 제거했어요!`)
        .setColor("#2F3136"));
    }
}