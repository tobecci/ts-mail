import { sendmailBodyDto, sendmailResponseDto } from '../dtos/sendmail.dto'
import { mailConfig } from '../config/mail.config'
import nodemailer from "nodemailer"

export async function sendmail(body: sendmailBodyDto): Promise<sendmailResponseDto>{
    // console.log({body: body, nodemailer: nodemailer})
    let  mailTransport = nodemailer.createTransport({
        host: mailConfig.host,
        port: mailConfig.port,
        secure: true,
        auth: {
            user: mailConfig.username,
            pass: mailConfig.password
        }
    })

    let info = await mailTransport.sendMail({
        from: mailConfig.username,
        to: body.email,
        subject: body.subject,
        text: body.body,
        html: `<p>${body.body}</p>`
    });
    console.log("Message sent: %s", info.messageId);
    return {
        message: "success",
        status: "mail sent successfully"
    }
}