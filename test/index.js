const { Client } = require('discord.js')
const DBKR = require('../index')

const client = new Client()
const dbkr = new DBKR(process.env.dbkrToken)

client.on('ready', () => {
  const guildCount = client.guilds.cache.size
  console.log('Current guild count: ' + guildCount)

  dbkr.updateGuildCount(client.guilds.cache.size)
    .then(() => console.log('Updated'))
    .catch(console.error)
    .finally(() => process.exit(0))
})

client.login(process.env.token)
