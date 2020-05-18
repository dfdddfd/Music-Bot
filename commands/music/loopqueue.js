const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "loopqueue",
    aliases: ["lq", "l", "루프", "반복", "대기열반복", "재생목록반복", "목록반복", "q", "ㅂ", "ㅣㅂ"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(new MessageEmbed()
        .setDescription("해당 명령어를 사용하려면 음성채널에 접속해야 해요!")
        .setColor("#2F3136"));
        const player = client.musicMgr.queue.get(message.guild.id);
        if (!player) return message.channel.send(new MessageEmbed()
        .setDescription("재생중인 음악이 없어요!")
        .setColor("#2F3136"));

        player.loop = !player.loop;
        
        message.channel.send(new MessageEmbed()
        .setDescription(`${player.loop ? "대기열을 반복할게요!" : "대기열 반복을 정지할게요!"}`)
        .setColor("#2F3136"));
    }
}