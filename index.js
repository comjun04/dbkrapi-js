const superagent = require('superagent')

class DBKR {
  constructor(token) {
    this.token = token
    this.addr = 'https://api.koreanbots.cf'
  }

  async updateGuildCount(count) {
    if(count > 10000) throw new Error('Updating guild count more than 10000 is not supported. Please contact with Koreanbots administrator to manually update the value. / 10000개 이상의 서버 수 업데이트는 지원하지 않습니다. Koreanbots 관리자한테 연락하여 수동으로 업데이트하세요.')

    return new Promise((resolve, reject) => {
      superagent.post(this.addr + '/bots/servers')
        .send({ servers: count })
        .set('Content-Type', 'application/json')
        .set('token', this.token)
        .then((res) => { resolve(res.response.body) })
        .catch((err) => { reject(err.response.body) })
    })
  }
}

module.exports = DBKR
