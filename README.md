# dbkrapi-js
DBKR에서 지원하는 API를 쉽게 사용할 수 있도록 해 줍니다.

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
const dbkr = require('dbkr')

const token = '디스코드 봇 토큰'
const DBKRToken = 'DBKR 사이트에서 받은 토큰'

const client = new Client()
client.on('ready', () => {
  setInterval(dbkr(client, DBKRToken), 1000 * 60 * 60) // 1시간 간격으로 서버 수 변경
})

client.login(token)
```

## 상세
### dbkr(client, token)
DBKR에 등록되어 있는 봇의 **서버 수**를 변경합니다.
* `client` - discord.js 클라이언트 (Client)
* `token` - DBKR 토큰

## 주의사항
* DBKR 측의 제한사항으로 인해, 10000개 이상의 서버 수를 등록하려 할 경우 `Error`를 발생시킵니다. 이럴 경우, DBKR 관리자한테 연락하여 수동으로 업데이트해야 합니다.
