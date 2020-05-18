const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "general",
    aliases: ["기본"],
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle(`${client.user.username} 도움말`)
            .setDescription(`\`\`\`diff\n+ 이 봇의 접두사는 "${process.env.PREFIX}" 입니다.\n+ [] 블럭은 필수로 써야하는 항목입니다.\n- <> 블럭은 선택 항목입니다.\n\`\`\``)
            .addField("📋 **도움말**", `> \`도움말\` 명령어를 통하여\n> ${client.user.username}의 도움말을 볼 수 있습니다.`, true)
            .addField("🏓 **핑**", `> \`핑\` 명령어를 통하여\n> ${client.user.username}의 레이턴시를 볼 수 있습니다.`, true)
            .addField("😀 **크레딧**", `> \`크레딧\` 명령어를 통하여\n> ${client.user.username}의 크레딧을 확인할 수 있습니다.`, true)
            .setColor("#2F3136")

        message.channel.send(embed);
    }
}