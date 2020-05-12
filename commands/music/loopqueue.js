module.exports = {
    name: "loopqueue",
    aliases: ["lq", "l", "루프", "반복", "대기열반복", "재생목록반복", "목록반복", "q", "ㅂ", "ㅣㅂ"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} "대기열" 명령어를 사용하려면, 먼저 음성채널에 접속해주세요!`);
        const player = client.musicMgr.queue.get(message.guild.id);
        if (!player) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 현재 재생중인 음악이 없어요!`);

        player.loop = !player.loop;
        message.reply(`${player.loop ? "🔄  이제 대기열이 반복됩니다!" : "⏹  대기열 반복을 중지할게요!"}`);
    }
}