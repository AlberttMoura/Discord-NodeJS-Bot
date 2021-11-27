require('dotenv').config()

const { Client } = require('discord.js')
const bot = new Client({intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"]})
const PREFIX = "ze"

bot.on('ready', () => {
    console.log('Online')
})

bot.on('messageCreate', (message) => {
    if(message.author.bot === true) return
    if(message.content.startsWith(PREFIX)) {
        const [CMD, ...args] = message.content.split(/\s+/)
    }
})

bot.login(process.env.DISCORDJS_BOT_TOKEN)