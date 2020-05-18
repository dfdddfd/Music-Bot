const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "music",
    aliases: ["뮤직", "음악"],
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle(`${client.user.username} 도움말`)
            .setDescription(`\`\`\`diff\n+ 이 봇의 접두사는 "${process.env.PREFIX}" 입니다.\n+ [] 블럭은 필수로 써야하는 항목입니다.\n- <> 블럭은 선택 항목입니다.\n\`\`\``)
            .addField("▶ **재생 [제목]**", "> URL/제목으로 노래를 검색하고\n> 추천항목을 재생합니다.", true)
            .addField("▶ **사클재생 [제목]**", "> URL/제목으로 사운드클라우드에서 노래를 검색하고\n> 추천항목을 재생합니다.", true)
            .addField("❌ **연결해제**", "> 현재 재생중인 노래와 대기열을\n초기화하고 음성채널에서 나갑니다.", true)
            .addField("🔄 **반복**", "> 현재 재생중인 대기열을\n> 계속 반복합니다.", true)
            .addField("ℹ️ **현재곡**", "> 현재 재생중인 노래에 대한\n> 여러가지 정보를 보여줍니다.", true)
            .addField("⏸ **일시정지**", "> 현재 재생중인 노래를\n> 일시정지 합니다.", true)
            .addField("📋 **대기열**", "> 이 서버에 대기중인\n> 음악 대기열을 보여줍니다.", true)
            .addField("🗑 **삭제 [번호]**", "> 대기열에 대기중인 번호를 입력하면\n> 해당 번호의 음악을 삭제합니다.", true)
            .addField("⏯ **스킵**", "> 현재 재생중인 음악을\n스킵하고, 다음곡을 재생합니다.", true)
            .addField("⏯ **스킵투 [번호]**", "> 대기열에 대기중인 번호를 입력하면\n> 해당 번호의 음악으로 스킵합니다.", true)
            .addField("🕰 **시간이동 [시간]**", "> 현재 재생중인 음악을\n> [시간]으로 이동합니다.", true)
            .addField("🔊 **음량 [자연수]**", "> 이 서버에 대해 음량을 설정합니다.\n음량은 최소 1부터 최대 100까지 선택됩니다.", true)
            .setColor("#2F3136")

        message.channel.send(embed);
    }
}