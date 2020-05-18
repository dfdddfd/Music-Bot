const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "hellothisisverification",
    aliases: ["개발자", "크레딧"],
    run: async (client, message, args) => {

        message.reply(`${client.emojis.cache.find(x => x.name == 'check')} 크레딧을 DM으로 전송했어요!`)

        message.author.send(new MessageEmbed()
        .setDescription(`**__Developer__**\n🤖 **│ ${client.users.cache.get("363613544685502465").tag}**\n\n**__Thanks for__**\n🤝 **| ${client.users.cache.get("604617640891121664").tag} [ditto7890#5158]**\n\n**__Open Source__**\n[**\`[ 🔗 Shortcut ]\`**](https://github.com/hgl-215/MUsic)`)
        .setColor("#2F3136"))
    }
}