const superagent = require('superagent')

module.exports = (client, token) => {
  return new Promise((resolve, reject) => {
    const guildCount = client.guilds.cache.size
    if(guildCount > 10000) throw new Error('Updating guild count more than 10000 is not supported. Please contact with DBKR administrator to manually update the value. / 10000개 이상의 서버 수 업데이트는 지원하지 않습니다. DBKR 관리자한테 연락하여 수동으로 업데이트하세요.')

    superagent.post('https://api.koreanbots.cf/bots/servers')
      .send({ servers: guildCount })
      .set('Content-Type', 'application/json')
      .set('token', token)
      .then(() => resolve())
      .catch(() => reject('Request failed. Maybe the token is invalid, or there was a problem at the network or the module itself. / 요청이 실패했습니다. 토큰이 올바르지 않거나, 네트위크 혹은 모듈 자체에 문제가 있을 수 있습니다.'))
  })
}
