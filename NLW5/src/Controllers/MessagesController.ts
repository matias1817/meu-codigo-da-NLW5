import { MessagesServices } from "../services/MessagesServices"
import {Request, Response} from "express"
class MessageController {
    async create(request: Request, response: Response){
        const { admin_id, text, user_id} = request.body;
        const messagesServices = new MessagesServices();

        const message = await messagesServices.create({
            admin_id,
            text,
            user_id
        })
        return response.json(message)
    }
    
    async  showByUser(request: Request, response: Response){
        const {id} = request.params;

        const messagesService = new MessagesServices()

        const list = await messagesService.listByUser(id)

        return response.json(list)
    }
} 
export {MessageController}