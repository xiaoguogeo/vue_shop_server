const express = require('express')
const compression = require('compression')

const app = express()

app.use(compression())
app.use(express.static('./dist'))
app.listen(925, () => {
    console.log('服务已启动！')
})