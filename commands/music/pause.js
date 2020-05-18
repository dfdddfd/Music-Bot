const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "pause",
    aliases: ["일시정지", "ㅔ면ㄷ", "dlftlwjdwl"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(new MessageEmbed()
        .setDescription("해당 명령어를 사용하려면 음성채널에 접속해야 해요!")
        .setColor("#2F3136"));
        const player = client.musicMgr.queue.get(message.guild.id);
        if (!player) return message.channel.send(new MessageEmbed()
        .setDescription("재생중인 음악이 없어요!")
        .setColor("#2F3136"));

        if (!player.playing) return message.channel.send(new MessageEmbed()
        .setDescription("이미 음악이 일시정지 되어있어요!")
        .setColor("#2F3136"));

        await message.react("⏸");
        player.pause();
    }
}