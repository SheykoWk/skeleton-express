const Users = require('../models/users.models')

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
 

