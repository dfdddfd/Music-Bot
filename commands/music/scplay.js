const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "scplay",
    aliases: ["사클플레이", "사클재생", "ㄴㅊㅔㅣ묘", "scp", "ㄴㅊㅔ", "scwotod", "scvmffpdl", "scpla", "scpl"],
    run: async (client, message, args) => {
        if (!message.guild.me.hasPermission("CONNECT")) return message.channel.send(new MessageEmbed()
        .setDescription("[연결] 권한을 확인해주세요!")
        .setColor("#2F3136"));
        if (!message.guild.me.hasPermission("SPEAK")) return message.channel.send(new MessageEmbed()
        .setDescription("[말하기] 권한을 확인해주세요!")
        .setColor("#2F3136"));
        if (!message.member.voice.channel) return message.channel.send(new MessageEmbed()
        .setDescription("해당 명령어를 사용하려면 음성채널에 접속해야 해요!")
        .setColor("#2F3136"));
        if (!args.join(" ")) return message.channel.send(new MessageEmbed()
        .setDescription("음악을 재생하려면 제목 또는 URL을 입력해야 해요!")
        .setColor("#2F3136"));

        let song = await client.musicMgr.getSongs(args.join(" ")) || await client.musicMgr.getSongs(`scsearch: ${args.join(" ")}`);
        if (!song[0]) return message.channel.send(new MessageEmbed()
        .setDescription(`${args.join(" ")} 음악을 찾을 수 없어요..!`)
        .setColor("#2F3136"));

        client.musicMgr.handleVideo(message, message.member.voice.channel, song[0]);
    }
}