const port = 81
const express = require('express')
const app = express()
const consign = require('consign')
const db = require('./config/knex')

consign()
        .then('./config/express.js')
        .then('./api')
        .then('./config/routes.js')
        .into(app)

app.db = db

app.listen(port,()=>{
    console.log(`online in port :${port}`)
})
