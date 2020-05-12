module.exports = {
    name: "scplay",
    aliases: ["사클플레이", "사클재생", "ㄴㅊㅔㅣ묘", "scp", "ㄴㅊㅔ", "scwotod", "scvmffpdl", "scpla", "scpl"],
    run: async (client, message, args) => {
        if (!message.guild.me.hasPermission("CONNECT")) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 음성채널에 접속할 수 없어요! 권한을 확인해주세요! [CONNECT/연결]`);
        if (!message.guild.me.hasPermission("SPEAK")) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 음성채널에서 말을할 수 없어요! 권한을 확인해주세요! [SPEAK/말하기]`);
        if (!message.member.voice.channel) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} "재생" 명령어를 사용하려면, 먼저 음성채널에 접속해주세요!`);
        if (!args.join(" ")) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 노래를 재생하려면 이름 또는 URL을 입력해야해요!`);

        let song = await client.musicMgr.getSongs(args.join(" ")) || await client.musicMgr.getSongs(`scsearch: ${args.join(" ")}`);
        if (!song[0]) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} **\`${args.join(" ")}\`** 노래를 찾을 수 없어요..!`);

        client.musicMgr.handleVideo(message, message.member.voice.channel, song[0]);
    }
}