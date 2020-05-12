module.exports = {
    name: "remove",
    aliases: ["r", "ㄱ", "리무브", "삭제", "노래삭제", "음악삭제", "제거", "노래제거", "음악제거"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} "대기열" 명령어를 사용하려면, 먼저 음성채널에 접속해주세요!`);
        const player = client.musicMgr.queue.get(message.guild.id);
        if (!player) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 현재 재생중인 음악이 없어요!`);

        if (!player.playing) player.playing = true;

        if (args[0] > player.songs.length || args[0] < 0 || isNaN(args[0]) || args[0].includes(".")) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 삭제할 음악의 번호를 입력하신 후 다시시도 해주세요.`)

        player.songs.splice(args[0] - 1, 1);

        message.reply(`${client.emojis.cache.find(x => x.name == 'check')} ${args[0]}번 노래를 삭제했습니다.`);
    }
}