const express = require('express')
const app =express()
const DB = require('./database')
DB()
const Rooms =require('./Models/rooms.model')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send('hello world')
})

app.use('/api/auth', require('./Router/auth.router'))

app.use('/user', require('./Router/user.booking'))



app.listen(8000,()=>{
    console.log('the server is runnig on http://localhost:8000')
})