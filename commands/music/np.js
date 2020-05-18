const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "np",
    aliases: ["현재곡", "ㅞ", "nowplaying", "now-playing", "nowplay", "ㅜㅐ제ㅣ묘ㅑㅜㅎ", "현재음악", "현재노래", "guswodmadkr", "guswoshfo", "지금곡", "wlrmarhr", "지금음악", "지금노래", "wlrmadmadkr", "wlrmashfo"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(new MessageEmbed()
        .setDescription("해당 명령어를 사용하려면 음성채널에 접속해야 해요!")
        .setColor("#2F3136"));
        const player = client.musicMgr.queue.get(message.guild.id);
        if (!player) return message.channel.send(new MessageEmbed()
        .setDescription("재생중인 음악이 없어요!")
        .setColor("#2F3136"))

        const song = player.songs[0];

        message.channel.send(new MessageEmbed()
        .setDescription(`[__${song.info.title}__](${song.info.uri}) [${song.requestedBy}]`)
        .setThumbnail(`https://img.youtube.com/vi/${song.info.identifier}/maxresdefault.jpg`)
        .setFooter(`${player.songProgress(message)} [${player.duration(player.player.state.position)} / ${player.duration(song.info.length)}]`)
        .setColor("#2F3136"))
    }
}