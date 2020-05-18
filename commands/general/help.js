const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
    name: "help",
    aliases: ["도움", "도움말"],
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle(`${client.user.username} 도움말`)
            .addField("🎶 **음악 명령어**", "`mu.음악`으로 음악 명령어 가이드를 확인하세요.", true)
            .addField("🛈 **기본 명령어**", "`mu.기본`으로 기본 명령어 가이드를 확인하세요.", true)
            .setColor("#2F3136")

        const heart = new MessageEmbed()
            .setDescription(`[\`\`\`여기를 눌러 ${client.user.username} 하트해주기 ❤\`\`\`](https://koreanbots.dev/bots/611526972409118735)\n[\`\`\`여기를 눌러 ${client.user.username} 초대하기 📨\`\`\`](http://is.gd/MUsic)`)
            .setColor("#2F3136")

        message.channel.send(embed);
        message.author.send(heart);
    }
}