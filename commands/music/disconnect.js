const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "disconnect",
    aliases: ["stop", "leave", "ㅣㄷㅁㅍㄷ", "ㄴ새ㅔ", "dc", "ㅇㅊ", "얀채ㅜㅜㄷㅊㅅ", "스탑", "tmxkq", "멈춰", "정지", "wjdwl", "나가", "skrk", "ajacnj", "꺼져", "Rjwu", "연결해제"],
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(new MessageEmbed()
        .setDescription("해당 명령어를 사용하려면 음성채널에 접속해야 해요!")
        .setColor("#2F3136"));
        const player = client.musicMgr.queue.get(message.guild.id);
        if (!player) return message.channel.send(new MessageEmbed()
        .setDescription("재생중인 음악이 없어요!")
        .setColor("#2F3136"));

        await message.react("🖐");
        player.destroy();
    }
}