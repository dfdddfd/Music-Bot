const fs = require("fs");

module.exports = {
    name: "reload",
    aliases: ["리로드", "ㄱ디ㅐㅁㅇ", "flfhem", "재시작", "wotlwkr"],
    run: async (client, message, args) => {

        if (message.author.id !== process.env.OWNER_ID) return message.reply(`${client.emojis.cache.find(x => x.name == 'error')} This command is for developers only. It cannot be used.`)

        const m = await message.channel.send(`${client.emojis.cache.find(x => x.name == 'loadingCirclebar')}  **Send a reload signal to all shards..**`)

        fs.readdirSync("./commands/").forEach(dir => {
            const commands = fs.readdirSync(`./commands/${dir}`)

            for (let file of commands) {
                let pull = require(`../${dir}/${file}`);

                if (pull.name) {
                    delete require.cache[require.resolve(`../${dir}/${file}`)]
                    client.commands.delete(pull)
                    client.commands.set(pull.name, pull)
                } else {
                    continue;
                }
            }
        });

        m.edit(`${client.emojis.cache.find(x => x.name == 'loadingCirclebar')}  **Load \`${client.commands.size}\` commands..**`)

        let pull = require(`../../bot.js`)

        if (pull.name) {
            delete require.cache[require.resolve(`../../bot.js`)]
            client.commands.delete(pull)
            client.commands.set(pull.name, pull)
        }

        m.edit(`${client.emojis.cache.find(x => x.name == 'loadingCirclebar')}  **Load main core..**`)

        let pull4 = require(`../../structures/MusicMgr.js`)

        if (pull4.name) {
            delete require.cache[require.resolve(`../../structures/MusicMgr.js`)]
            client.commands.delete(pull)
            client.commands.set(pull.name, pull)
        }

        let pull5 = require(`../../structures/Queue.js`)

        if (pull5.name) {
            delete require.cache[require.resolve(`../../structures/Queue.js`)]
            client.commands.delete(pull)
            client.commands.set(pull.name, pull)
        }

        let pull6 = require(`../../structures/time-convert.js`)

        if (pull6.name) {
            delete require.cache[require.resolve(`../../structures/time-convert.js`)]
            client.commands.delete(pull)
            client.commands.set(pull.name, pull)
        }

        m.edit(`${client.emojis.cache.find(x => x.name == 'loadingCirclebar')}  **Load music core..**`)

        let pull2 = require(`../../package.json`)

        if (pull2.name) {
            delete require.cache[require.resolve(`../../package.json`)]
            client.commands.delete(pull2)
            client.commands.set(pull2.name, pull2)
        }

        m.edit(`${client.emojis.cache.find(x => x.name == 'loadingCirclebar')}  **Load package..**`)

        let pull3 = require(`../../other/shard.json`)

        if (pull3.name) {
            delete require.cache[require.resolve(`../../src/shard.json`)]
            client.commands.delete(pull3)
            client.commands.set(pull3.name, pull3)
        }

        m.edit(`${client.emojis.cache.find(x => x.name == 'loadingCirclebar')}  **Load main shard..**`)

        m.edit(`🛠  **Reload complete. (Commands: ${client.commands.size})**`);
    }
}