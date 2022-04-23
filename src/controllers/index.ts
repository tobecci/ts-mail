import { Express } from "express"
import { initMailController } from "./mail.controller"

export function initControllers(app: Express){
    initMailController(app);
}