module.exports = {
    name: "disconnect",
    aliases: ["stop", "leave", "ㅣㄷㅁㅍㄷ", "ㄴ새ㅔ", "dc", "ㅇㅊ", "얀채ㅜㅜㄷㅊㅅ", "스탑", "tmxkq", "멈춰", "정지", "wjdwl", "나가", "skrk", "ajacnj", "꺼져", "Rjwu", "연결해제"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} "일시정지" 명령어를 사용하려면, 먼저 음성채널에 접속해주세요!`);
        const player = client.musicMgr.queue.get(message.guild.id);
        if (!player) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 현재 재생중인 음악이 없어요!`);

        player.destroy();
        message.reply(`${client.emojis.cache.find(x => x.name == 'check')} 대기열을 초기화하고, 음성채널에서 나왔어요!`);
    }
}