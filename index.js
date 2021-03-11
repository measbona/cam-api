const USERS = require('./data/users.json')
const express = require('express')
const app = express()
let port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send({
    message: 'Welcome To CamApi',
    status: 200,
  })
})

app.get('/users', (req, res) => {
  res.send(USERS)
})

app.listen(port, () => {
  console.log(`Listening port: ${port}`)
})
