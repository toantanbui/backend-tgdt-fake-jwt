
import db from '../models/index'

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Users.create({
                email: data.email,
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address
            })

            resolve();



        } catch (e) {
            reject(e)
        }
    })
}

module.exports = { createNewUser }