const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "help",
    aliases: ["도움", "도움말"],
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle(`${client.user.username} 도움말`)
            .addField("🎶 **음악 명령어**", "`mu.음악`으로 음악 명령어 가이드를 확인하세요.", true)
            .addField("🛈 **기본 명령어**", "`mu.기본`으로 기본 명령어 가이드를 확인하세요.", true)
            .setColor("#2F3136")

        message.channel.send(embed);
    }
}