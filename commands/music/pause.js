module.exports = {
    name: "pause",
    aliases: ["일시정지", "ㅔ면ㄷ", "dlftlwjdwl"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} "일시정지" 명령어를 사용하려면, 먼저 음성채널에 접속해주세요!`);
        const player = client.musicMgr.queue.get(message.guild.id);
        if (!player) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 현재 재생중인 음악이 없어요!`);

        if (!player.playing) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 이미 음악이 일시정지 상태예요!`);

        player.pause();
        message.reply(`${client.emojis.cache.find(x => x.name == 'check')} 음악을 일시정지 했어요!`);
    }
}