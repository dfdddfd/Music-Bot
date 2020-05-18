const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "volume",
    aliases: ["vol", "v", "불륨", "사운드", "소리", "setVol", "setVolume", "thfl", "tkdnsem", "qnffba", "음량", "dmafid", "음량설정", "dmafidtjfwjd"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(new MessageEmbed()
        .setDescription("해당 명령어를 사용하려면 음성채널에 접속해야 해요!")
        .setColor("#2F3136"));
        const player = client.musicMgr.queue.get(message.guild.id);
        if (!player) return message.channel.send(new MessageEmbed()
        .setDescription("재생중인 음악이 없어요!")
        .setColor("#2F3136"));

        if (!args[0]) return message.channel.send(new MessageEmbed()
        .setDescription(`지금 음량은 ${player.volume}% 예요!`)
        .setColor("#2F3136"));

        if (isNaN(args[0]) || args[0].includes(".") || parseInt(args[0]) <= 0 || parseInt(args[0]) > 100) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 음량을 설정할 수 없어요! [음량은 1 ~ 100까지의 자연수로 입력해주세요!]`);

        player.setVolume(parseInt(args[0].replace("%", "")));
        message.channel.send(new MessageEmbed()
        .setDescription(`음량을 ${parseInt(args[0])}%로 조정했어요!`)
        .setColor("#2F3136"));
    }
}