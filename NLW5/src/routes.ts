import {request, response, Router} from "express"
import { SettingController } from "./Controllers/SettingsController";
import { UsersController } from "./Controllers/UsersController";
import { MessageController} from "./Controllers/MessagesController"


const settingController = new SettingController()
const usersController = new UsersController()
const messageController = new MessageController()
const routes = Router();

routes.post("/settings", settingController.create)
routes.get("/settings/:username", settingController.findByUsername )
routes.put("/settings/:username", settingController.update)
routes.post("/users", usersController.create)
routes.post("/messages", messageController.create) 
routes.get("/messages/:id", messageController.showByUser)

export {routes}