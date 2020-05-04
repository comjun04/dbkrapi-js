const superagent = require('superagent')

module.exports = (client, token) => {
  const guildCount = client.guilds.cache.size
  if(guildCount > 10000) throw new Error('Updating guild count more than 10000 is not supported. Please contact with DBKR administrator to manually update the value. / 10000개 이상의 서버 수 업데이트는 지원하지 않습니다. DBKR 관리자한테 연락하여 수동으로 업데이트하세요.')

  superagent.post('https://api.koreanbots.cf/bots/servers')
    .send({ servers: guildCount })
    .set('Content-Type', 'application/json')
    .set('token', token)
    .end(() => {})
}
