const express = require('express')
const bodyParser = require('body-parser')
const db  = require('./queries')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.get('/', (req, res) => res.json({ info: 'APP is working fine' }))
app.get('/users', db.users)
app.get('/active', db.getActiveUsers)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))