//? Dependencies
const express = require('express');

//? Files
const {port} = require('./config');
//* Routes
const userRouter = require('./users/users.router')

//? Initial Configs
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'OK!',
        users: `localhost:${port}/api/v1/users`
    })
})

app.use('/api/v1/users', userRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})

