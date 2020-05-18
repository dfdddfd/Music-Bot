const { MessageEmbed } = require("discord.js");
const Lyrics = require("slyrics");
const lyrics = new Lyrics();

module.exports = {
    name: "nl",
    aliases: ["현재가사", "ㅟ", "nowlyrics", "now-lyrics", "nowlyric", "now-lyric", "ㅜㅐ지ㅛ걏ㄴ", "ㅜㅐ지ㅛ걏", "현재가사", "gusworktk", "지금가사", "wlrmarktk"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(new MessageEmbed()
        .setDescription("해당 명령어를 사용하려면 음성채널에 접속해야 해요!")
        .setColor("#2F3136"));
        const player = client.musicMgr.queue.get(message.guild.id);
        if (!player) return message.channel.send(new MessageEmbed()
        .setDescription("재생중인 음악이 없어요!")
        .setColor("#2F3136"));

        const song = player.songs[0];

        if (song.info.title) {
            const result = await lyrics.get("melon", song.info.title);

            if (result.error) return message.channel.send(new MessageEmbed()
            .setDescription(`${args.join} 음악의 가사를 불러올 수 없어요..\n아티스트와 제목을 함께 입력해주세요!`)
            .setColor("#2F3136"));
            else {
                let embed = new MessageEmbed()
                    .setAuthor(`${result.title} - ${result.artist}`)
                    .setThumbnail(result.albumArt)
                    .setColor("#2F3136")

                if (result.result.toString().length < 1980) {
                    embed.setDescription(`${result.result.toString()}`);
                    message.channel.send(embed);
                } else {
                    embed.setDescription(`${result.result.toString().substr(0, 1955)}`);
                    message.channel.send(embed);
                    message.channel.send(new MessageEmbed()
                    .setDescription(`${result.result.toString().replace(result.result.toString().substr(0, 1955), "")}`)
                    .setColor("#2F3136"));
                }
            }
        }
    }
}