const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "queue",
    aliases: ["q", "벼뎓", "대기열", "wotodahrfhr", "eorlduf", "que", "queu"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(new MessageEmbed()
        .setDescription("해당 명령어를 사용하려면 음성채널에 접속해야 해요!")
        .setColor("#2F3136"));
        const player = client.musicMgr.queue.get(message.guild.id);
        if (!player) return message.channel.send(new MessageEmbed()
        .setDescription("재생중인 음악이 없어요!")
        .setColor("#2F3136"));

        let i = 0;

        message.channel.send(`\`\`\`nimrod\n    ⬐ 재생중인 트랙\n${player.songs[0].info.title} [${player.duration(player.player.state.position)} / ${player.duration(player.songs[0].info.length)}]\n────────────────────\n${player.songs[1] ? `${player.songs.map((songs) => `${i++}. ${songs.info.title} - ${player.duration(songs.info.length)}`).splice(1, 10).join("\n")}${player.songs.length > 11 ? `${player.songs.length - 11}...` : ""}` : "# 대기열 없음"}\n\`\`\``)
    }
}