# dbkrapi-js
koreanbots에서 지원하는 API를 쉽게 사용할 수 있도록 해 줍니다.

## Deprecated!
공식 모듈의 배포 및 제작자의 시간 부족으로 인해, 이 모듈은 **더 이상 업데이트되지 않을 예정**입니다. 이 모듈을 쓰시고 계섰다면 아래의 공식 모듈로 변경하시기 바랍니다.

## 이 모듈은 공식이 아닙니다
koreanbots 측에서 공식 모듈을 배포했습니다. 이 모듈은 koreanbots 측에서 관리하지 않으며, 문제가 발생했을 경우 그쪽에서 책임지지 않습니다.
* 공식 모듈 링크: [NPM](https://npmjs.com/package/koreanbots) [Github](https://github.com/koreanbots/js-sdk)

## 사전 준비 사항
* [Node.js](https://nodejs.org) v12 이상
* [discord.js](https://github.com/discordjs/discord.js) v12 이상

## 설치
`npm`을 사용하는 경우:
```
npm install dbkr --save
```

`yarn`을 사용하는 경우:
```
yarn add dbkr
```

## 사용 예제
```js
const { Client } = require('discord.js')
const DBKR = require('dbkr')

const token = '디스코드 봇 토큰'
const DBKRToken = 'koreanbots 사이트에서 받은 토큰'

const client = new Client()
const dbkr = new DBKR(DBKRToken)

client.on('ready', () => {
  setInterval(() => {
    // discord.js v11 이하인 경우 client.guilds.cache.size를
    // client.guilds.size로 변경하세요.
    dbkr.updateGuildCount(client.guilds.cache.size)
      .catch(console.error) // 오류 처리
  }, 1000 * 60 * 60) // 1시간 간격으로 서버 수 변경
})

client.login(token)
```

## 상세 설명
### new DBKR(token)
새 DBKR 객체를 생성합니다.
* `token` - koreanbots 토큰

### Methods
### (await) updateGuildCount(count: number)
koreanbots에 등록되어 있는 봇의 **서버 수**를 변경합니다.
* `count` - 변경할 서버 수
* 반환 값: `Promise{Object}` (`Object` - API 서버에서 받은 결과)

## 주의사항
* KoreanBots 측의 제한으로 인해, 업데이트하려는 서버 수가 10000을 넘어갈 경우 오류가 발생합니다. 이럴 경우, KoreanBots 관리자한테 연락하여 수동으로 업데이트해야 합니다.
