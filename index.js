const USERS = require('./data/users.json')
const express = require('express')
const app = express()
let port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Welcome to CamApi')
})

app.get('/users', (req, res) => {
  res.send(USERS)
})

app.listen(port, () => {
  console.log(`Listening port: ${port}`)
})
