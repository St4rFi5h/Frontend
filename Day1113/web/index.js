// express 프레임워크 임포트
const express = require('express')
const app = express()
const PORT = 8888   // 포트 번호

// 미들웨어 추가
app.use(express.static('./static'))

// 더미 데이터

app.get('/data', (req, res) => {
    const data = {
        id: '12345',
        name: '백종웅',
        myData: [92, 5, 7],
        timestamp: new Date(),
    }
    // data 객체를 json으로 서빙해줌
    // JSON: Javascript Object Notation
    res.json(data)
})



// 애플리케이션 시작!
app.listen(PORT, () => {
    console.log('애플리케이션이 시작됨.')
})