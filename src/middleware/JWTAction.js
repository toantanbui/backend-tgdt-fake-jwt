require("dotenv").config();
import jwt from "jsonwebtoken";

const createJWT = (payload) => {
    // let payload = { name: 'Eric', address: 'Ha Noi' };
    let key = process.env.JWT_SECRET;
    let options = { expiresIn: '1h' };
    let token = null;
    try {
        token = jwt.sign(payload, key);
    } catch (err) {
        console.log(err)
    }

    console.log('Gia trị token: ', token)
    return token;
}

// const verifyToken = (token) => {
//     let key = process.env.JWT_SECRET;
//     let data = null;
//     jwt.verify(token, 'abc', function (err, decoded) {
//         if (err) {
//             console.log(err)
//             return data;

//         }
//         console.log('decode', decoded)
//         return decoded;
//     })
// }
// const verifyToken = (token) => {
//     let key = process.env.JWT_SECRET;
//     let data = null;
//     return jwt.verify(token, key)

// }

const verifyToken = (token) => {
    let key = process.env.JWT_SECRET;
    let data = null;
    try {
        let decoded = jwt.verify(token, 'kkk');
        data = decoded;
    } catch (err) {
        console.log(err);
    }
    return data;
}

module.exports = {
    createJWT, verifyToken
}