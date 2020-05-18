const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "skipto",
    aliases: ["스킵투", "나ㅑㅔ새", "tmzlqxn"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(new MessageEmbed()
        .setDescription("해당 명령어를 사용하려면 음성채널에 접속해야 해요!")
        .setColor("#2F3136"));
        const player = client.musicMgr.queue.get(message.guild.id);
        if (!player) return message.channel.send(new MessageEmbed()
        .setDescription("재생중인 음악이 없어요!")
        .setColor("#2F3136"));

        if (!player.playing) player.playing = true;

        if (!args[0]) return message.channel.send(new MessageEmbed()
        .setDescription("👀 어.. 어디로 스킵해야 할지 모르겠어요! 대기열 번호와 함께 입력해주세요!")
        .setColor("#2F3136"));
        if (args[0] > player.songs.length || args[0] < 0 || isNaN(args[0]) || args[0].includes(".")) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 음악을 ${args[0]}번으로 이동할 수 없습니다. [현재 대기열에는 ${player.songs.length}개의 노래가 대기 중입니다.]`);

        player.songs.splice(0, parseInt(args[0] - 1));
        player.skip();

        message.channel.send(new MessageEmbed()
        .setDescription(`${args[0]}번으로 음악을 스킵했어요!`)
        .setColor("#2F3136"));
    }
}