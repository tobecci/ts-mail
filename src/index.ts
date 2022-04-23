import { Express } from "express"
import express from "express"
import bodyParser from "body-parser";
import { initControllers } from "./controllers"

const app: Express = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

initControllers(app);
app.listen(port, function(){
    console.log(`app served on http://localhost:${port}`)
})