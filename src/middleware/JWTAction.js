require("dotenv").config();
import jwt from "jsonwebtoken";

const nonSecurePaths = ['/api/login', '/crud'];

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
    let decoded = null;
    try {
        decoded = jwt.verify(token, key);

    } catch (err) {
        console.log(err);
    }
    return decoded;
}

const extractToken = (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
}

const checkUserJWT = (req, res, next) => {

    if (nonSecurePaths.includes(req.path)) {
        return next();
    }

    let cookies = req.cookies;
    let tokenFromHeader = extractToken(req);
    console.log('gt cần tin header ', tokenFromHeader);
    if ((cookies && cookies.jwt) || tokenFromHeader) {
        let token = cookies && cookies.jwt ? cookies.jwt : tokenFromHeader;

        let decoded = verifyToken(token);
        if (decoded) {
            req.user = decoded;
            next();
        } else {
            return res.status(401).json({
                EC: -1,
                DT: '',
                EM: 'Not authenticated the user'
            })
        }

    } else {
        return res.status(401).json({
            EC: -1,
            DT: '',
            EM: 'Not authenticated the user'
        })
    }

}

module.exports = {
    createJWT, verifyToken, checkUserJWT
}