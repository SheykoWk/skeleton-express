const bcrypt = require('bcrypt')

//? Encripta la contraseña del usuario cuando se crea o se modifica la contraseña
const hashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 10)
}


//? Comparar si la contraseña root es =  a $2b$10$QR1CpdOItQAqwKWpPDx2WeV5oDYPS34DTqGJuykaAYQfj2Dgz02my
const comparePassword = (plainPassword, hashedPassword) => {
    //* plainPassword : Contraseña que recibimos del Login
    //* hashedPassword : Contraseña que tenenemos guardada en la base de datos
    //! Esta utilidad se usa cuando hacemos un login y recibimos la contraseña del usuario 
    //! y la comparamos con la que tenemos en la DB
    return bcrypt.compareSync(plainPassword, hashedPassword)
}


//? console.log(hashPassword('root'))

//? console.log(comparePassword('root', '$2b$10$QR1CpdOItQAqwKWpPDx2WeV5oDYPS34DTqGJuykaAYQfj2Dgz02my'))

module.exports = {
    hashPassword,
    comparePassword
}