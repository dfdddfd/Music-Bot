// Source: https://github.com/smile2468 / 웅범#4591

const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "local",
    aliases: ["로컬", "로컬재생", "로컬플레이"],
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
        .setDescription("로컬파일을 재생하려면 파일 경로를 입력해야 해요!")
        .setColor("#2F3136"));

        message.member.voice.channel.join().then(async connection => {
            const broadcast = client.voice.createBroadcast();
            broadcast.play(`${args.join(" ")}`)
            connection.play(broadcast);

            message.channel.send(new MessageEmbed()
            .setDescription(`**${args.join(" ").split("/").pop().split(".").shift()}** 을(를) 재생할게요!`)
            .setColor("#2F3136"));

            connection.on("finish", (m) => message.channel.send(new MessageEmbed().setDescription(`\`${connection.channel.name}\` 에서 **${args.join(" ").split("/").pop()}** 재생을 완료했어요!`).setColor("#2F3136")));
            connection.on("end", (m) => message.channel.send(new MessageEmbed().setDescription(`\`${connection.channel.name}\` 에서 **${args.join(" ").split("/").pop()}** 재생을 완료했어요!`).setColor("#2F3136")));
        });

        // message.member.voice.channel.join().then(async connection => {
        //     connection.play(`${args.join(" ")}`)

        //     message.channel.send(new MessageEmbed()
        //     .setDescription(`**${args.join(" ").split("/").pop().split(".").shift()}** 을(를) 재생할게요!`)
        //     .setColor("#2F3136"));

        //     connection.on("finish", (m) => message.channel.send(new MessageEmbed().setDescription(`\`${connection.channel.name}\` 에서 **${args.join(" ").split("/").pop()}** 재생을 완료했어요!`).setColor("#2F3136")));
        //     connection.on("end", (m) => message.channel.send(new MessageEmbed().setDescription(`\`${connection.channel.name}\` 에서 **${args.join(" ").split("/").pop()}** 재생을 완료했어요!`).setColor("#2F3136")));
        // });

    }
}