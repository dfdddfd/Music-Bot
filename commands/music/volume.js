module.exports = {
    name: "volume",
    aliases: ["vol", "v", "불륨", "사운드", "소리", "setVol", "setVolume", "thfl", "tkdnsem", "qnffba", "음량", "dmafid", "음량설정", "dmafidtjfwjd"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} "일시정지" 명령어를 사용하려면, 먼저 음성채널에 접속해주세요!`);
        const player = client.musicMgr.queue.get(message.guild.id);
        if (!player) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 현재 재생중인 음악이 없어요!`);

        if (!args[0]) return message.reply(`🔊  현재 음량은 **${player.volume}%** 입니다!`);

        if (isNaN(args[0]) || args[0].includes(".") || parseInt(args[0]) <= 0 || parseInt(args[0]) > 100) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 음량을 설정할 수 없어요! [음량은 1 ~ 100까지의 자연수로 입력해주세요!]`);

        player.setVolume(parseInt(args[0].replace("%", "")));
        message.reply(`${client.emojis.cache.find(x => x.name == 'check')} 음량을 **${parseInt(args[0])}%** (으)로 설정했어요!`);
    }
}