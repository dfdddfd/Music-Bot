const { MessageEmbed } = require("discord.js");
const Lyrics = require("slyrics");
const lyrics = new Lyrics();

module.exports = {
    name: "lyrics",
    aliases: ["가사검색", "가사", "lyricssearch", "lyricsearch", "searchlyrics", "slyrics"],
    run: async (client, message, args) => {
        if (!args.join(" ")) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} 가사를 검색 할 음악 제목을 입력해주세요!`)
        else if (args.join(" ")) {
            const result = await lyrics.get("melon", args.join(" "));

            if (result.error) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} **${args.join(" ")}**의 가사를 불러올 수 없습니다..\n제대로 음악을 찾지 못할 경우, 아티스트와 함께 입력해주세요!`);
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