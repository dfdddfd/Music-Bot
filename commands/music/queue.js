const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "queue",
    aliases: ["q", "벼뎓", "대기열", "wotodahrfhr", "eorlduf", "que", "queu"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} "대기열" 명령어를 사용하려면, 먼저 음성채널에 접속해주세요!`);
        const player = client.musicMgr.queue.get(message.guild.id);
        if (!player) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 현재 재생중인 음악이 없어요!`);

        let i = 0;

        message.reply(new MessageEmbed()
        .setTitle(`현재 재생 중: ${player.songs[0].info.title}`)
        .setURL(player.songs[0].info.uri)
        .setThumbnail(`https://img.youtube.com/vi/${player.songs[0].info.identifier}/maxresdefault.jpg`)
        .setColor("#2F3136")
        .setDescription(`\`\`\`md\n${player.songs[1] ? `${player.songs.map((songs) => `${i++}. ${songs.info.title} - ${player.duration(songs.info.length)}`).splice(1, 10).join("\n")}${player.songs.length > 11 ? `${player.songs.length - 11} More..` : ""}` : "# 대기열 없음"}\n\`\`\``));
    }
}