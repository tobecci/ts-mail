import { Express } from "express"
import { sendmailBodyDto, sendmailResponseDto} from '../dtos/sendmail.dto'
import { sendmail } from '../providers/mail.provider'

export function initMailController(app: Express){
    app.get('/sendmail', async function(req, res){
        const response = await sendmail(req.body).catch(function(error){
            console.log({error: error})
            res.status(500)
            .json({status:"error",message: "there was a problem sending the mail"})
            .end();
        })
        res.json(response).end();
    })
}