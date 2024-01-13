import express from 'express';
require('dotenv').config();
import webRoute from './route/web';
import cors from 'cors';

import cookieParser from 'cookie-parser'
import handleviewEngine from './config/viewEngine'
import { createJWT, verifyToken } from './middleware/JWTAction'


const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,content-type'
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.listen(port, () => {
    console.log(`Moi các bạn vào  http://localhost:${port}`)
})










const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //axios
    optionSuccessStatus: 200,
    methods: ["GET", "POST"]
}
app.use(cors(corsOptions));

// createJWT();
//let data = verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRXJpYyIsImFkZHJlc3MiOiJIYSBOb2kiLCJpYXQiOjE3MDQ5ODQ3Nzl9.6w4gOcOsJJRi7HV-pEF4C3D35t5vAwcD7nZu-OitZ6c');
//console.log(data);

webRoute(app);

app.use((req, res, next) => {
    return res.send('404 not found')
})



