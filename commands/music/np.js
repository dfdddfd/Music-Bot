const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "np",
    aliases: ["현재곡", "ㅞ", "nowplaying", "now-playing", "nowplay", "ㅜㅐ제ㅣ묘ㅑㅜㅎ", "현재음악", "현재노래", "guswodmadkr", "guswoshfo", "지금곡", "wlrmarhr", "지금음악", "지금노래", "wlrmadmadkr", "wlrmashfo", "현재노래", "guswoshfo"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} "현재곡" 명령어를 사용하려면, 먼저 음성채널에 접속해주세요!`);
        const player = client.musicMgr.queue.get(message.guild.id);
        if (!player) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 현재 재생중인 음악이 없어요!`);

        const song = player.songs[0];

        message.channel.send(new MessageEmbed()
        .setThumbnail(`https://img.youtube.com/vi/${song.info.identifier}/maxresdefault.jpg`)
        .setTitle(song.info.title)
        .setURL(song.info.uri)
        .setDescription(`${player.playing ? "▶ 재생 중" : "⏸ 일시정지 됨"} | 채널: **${song.info.author}** - **${player.percent(message)}%** 완료 됨..`)
        .addField("PROGRESS", `\`${player.duration(player.player.state.position)} ${player.songProgress(message)} ${player.duration(song.info.length)}\``, true)
        .setColor("#2F3136"))
    }
}