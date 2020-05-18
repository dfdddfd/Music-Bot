const { MessageEmbed } = require("discord.js");
const Lyrics = require("slyrics");
const lyrics = new Lyrics();

module.exports = {
    name: "lyrics",
    aliases: ["가사검색", "가사", "lyricssearch", "lyricsearch", "searchlyrics", "slyrics"],
    run: async (client, message, args) => {
        if (!args.join(" ")) return message.channel.send(new MessageEmbed()
        .setDescription("검색 할 음악의 제목을 입력해 주세요!")
        .setColor("#2F3136"));
        else if (args.join(" ")) {
            const result = await lyrics.get("melon", args.join(" "));

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