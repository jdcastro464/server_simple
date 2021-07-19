const express = require('express')
const app = express()
const server = require('http').Server(app)

const body_parser = require('body-parser')
const cors = require('cors')

require('dotenv').config()

app.use(cors())
app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: false }))

app.get('/', (req, res) => {

    res.send('hello from simple server :)')

})

app.get('/hello', (req, res) => {

    res.send('Hola mundo!')

})

server.listen(process.env.PORT)