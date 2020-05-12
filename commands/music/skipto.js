module.exports = {
    name: "skipto",
    aliases: ["스킵투", "나ㅑㅔ새", "tmzlqxn"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} "일시정지" 명령어를 사용하려면, 먼저 음성채널에 접속해주세요!`);
        const player = client.musicMgr.queue.get(message.guild.id);
        if (!player) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 현재 재생중인 음악이 없어요!`);

        if (!player.playing) player.playing = true;

        if (!args[0]) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 스킵할 번호를 입력해주세요!`);
        if (args[0] > player.songs.length || args[0] < 0 || isNaN(args[0]) || args[0].includes(".")) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 음악을 ${args[0]}번으로 이동할 수 없습니다. [현재 대기열에는 ${player.songs.length}개의 노래가 대기 중입니다.]`);

        player.songs.splice(0, parseInt(args[0] - 1));
        player.skip();

        message.reply(`${client.emojis.cache.find(x => x.name == 'check')} 음악 ${args[0]}번으로 스킵했어요!`);
    }
}