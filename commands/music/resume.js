module.exports = {
    name: "resume",
    aliases: ["다시재생", "ㄱㄷ녀ㅡㄷ", "ektlwotod"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} "일시정지" 명령어를 사용하려면, 먼저 음성채널에 접속해주세요!`);
        const player = client.musicMgr.queue.get(message.guild.id);
        if (!player) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 현재 재생중인 음악이 없어요!`);

        if (player.playing) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 현재 음악이 재생중인 상태예요!`);

        player.resume();
        message.reply(`${client.emojis.cache.find(x => x.name == 'check')} 음악을 다시재생 할게요!`);
    }
}