//? Dependencies
const express = require('express');

//? Files
const {port} = require('./config')

//? Initial Configs
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'OK!',
        users: `localhost:${port}/api/v1/users`
    })
})


app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})

