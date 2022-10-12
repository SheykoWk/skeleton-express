//? Dependencies
const uuid = require('uuid')

const Users = require('../models/users.models')
const { hashPassword } = require('../utils/crypto')



const getAllUsers = async () => {
    const data = await Users.findAll()
    return data
}

const getUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id: id
        }
    })
    return data
}


const createUser = async (data) => {
    const newUser = await Users.create({
        id: uuid.v4(),
        password: hashPassword(data.password)
    })
    return newUser
}
