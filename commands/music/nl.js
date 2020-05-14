const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "nl",
    aliases: ["현재가사", "ㅟ", "nowlyrics", "now-lyrics", "nowlyric", "now-lyric", "ㅜㅐ지ㅛ걏ㄴ", "ㅜㅐ지ㅛ걏", "현재가사", "gusworktk", "지금가사", "wlrmarktk"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} "현재곡" 명령어를 사용하려면, 먼저 음성채널에 접속해주세요!`);
        const player = client.musicMgr.queue.get(message.guild.id);
        if (!player) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 현재 재생중인 음악이 없어요!`);

        const song = player.songs[0];

        if (song.info.title) {
            const result = await lyrics.get("melon", song.info.title);

            if (result.error) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} **${song.info.title}**의 가사를 불러올 수 없습니다..`);
            else {
                let embed = new MessageEmbed()
                    .setAuthor(`${result.title} - ${result.artist}`)
                    .setThumbnail(result.albumArt)
                    .setColor("#2F3136")

                if (result.result.toString().length < 1980) {
                    embed.setDescription(`${result.result.toString()}`);
                    message.reply(embed);
                } else {
                    embed.setDescription(`${result.result.toString().substr(0, 1955)}`);
                    message.reply(embed);
                    message.reply(new MessageEmbed()
                    .setDescription(`${result.result.toString().replace(result.result.toString().substr(0, 1955), "")}`)
                    .setColor("#2F3136"));
                }
            }
        }
    }
}