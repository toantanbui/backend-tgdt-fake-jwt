
require('dotenv').config();
import nodemailer from "nodemailer";

let handleSendEmail = async (data) => {


    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",// smtp.tên miền gốc của email, vd: tantoanbui@gmail.com, tên miền gốc là gmail.com
        port: 587,
        secure: false,
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: process.env.EMAIL_APP,
            pass: process.env.EMAIL_APP_PASSWORD,
        }
    });

    // async..await is not allowed in global scope, must use a wrapper

    // send mail with defined transport object
    async function main() {
        const info = await transporter.sendMail({
            from: '"Thằng test wed 👻" <tantoanbui2@gmail.com>', // sender address
            to: data.email, // list of receivers
            subject: "Xác nhận đặt hàng ✔", // Subject line
            text: "Hello", // plain text body
            html: getBodyHTMLEmail(data), // html body
        });
    }
    main().catch(console.error);


}

let getBodyHTMLEmail = (data) => {


    let result =
        `
        <div>Xin chào bạn, bạn vừa mới gửi yêu cầu đặt tại thế giới di động fake</div>
        <div>Bạn vui lòng nhấn vào Click here bên dưới đế xác nhận đặt hàng</div>
        <div>
<a href=${data.redirectLink} target="_blank" > Click here </a>
</div>
        `


    return result
}

let handleSendEmaildk = async (data) => {


    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",// smtp.tên miền gốc của email, vd: tantoanbui@gmail.com, tên miền gốc là gmail.com
        port: 587,
        secure: false,
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: process.env.EMAIL_APP,
            pass: process.env.EMAIL_APP_PASSWORD,
        }
    });

    // async..await is not allowed in global scope, must use a wrapper

    // send mail with defined transport object
    async function main() {
        const info = await transporter.sendMail({
            from: '"Thằng test wed 👻" <tantoanbui2@gmail.com>', // sender address
            to: data.email, // list of receivers
            subject: "Xác nhận đặt hàng ✔", // Subject line
            text: "Hello", // plain text body
            html: getBodyHTMLEmaildk(data), // html body
        });
    }
    main().catch(console.error);


}

let getBodyHTMLEmaildk = (data) => {


    let result =
        `
        <div>Xin chào bạn, bạn vừa gửi yêu cầu đăng kí tài khoản ở thế giới di động fake</div>
        <div>Bạn vui lòng kích vào "Click here" bên dưới để xác nhận đăng kí</div>
       <br/>
        <div><a href=${data.redirectLink} target="_blank" > Click here </a>
</div>
        `


    return result
}








module.exports = { handleSendEmail, handleSendEmaildk }