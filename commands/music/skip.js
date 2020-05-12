module.exports = {
    name: "skip",
    aliases: ["스킵", "tmzlq"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} "일시정지" 명령어를 사용하려면, 먼저 음성채널에 접속해주세요!`);
        const player = client.musicMgr.queue.get(message.guild.id);
        if (!player) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 현재 재생중인 음악이 없어요!`);

        if (!player.playing) player.playing = true;

        player.skip();
        message.reply(`⏩  **${player.songs[0].info.title}** - **${player.songs[0].info.author}** 음악을 스킵했어요!`);
    }
}