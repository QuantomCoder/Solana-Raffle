import User from "../models/user.model";
import Ticket from "../models/ticket.model";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responses";
import Rafle from "../models/rafle.model";
import { Request, Response } from "express";
class TicketManegar {
    public async ticketCreator(req: Request, res: Response) {
        try {
            // console.log("request bOdy", req.params)
            const { user_id, raffle_id, price } = req.body
            const existing_ticket=await Ticket.findOne({where:{
                user_id:user_id,
                raffle_id:raffle_id
            }})
            if (existing_ticket) {
                return sendErrorResponse(res, "Ticket already bought", 400)
            }
            if (!user_id) {
                return sendErrorResponse(res, "User id not found", 400)
            }
            const userFound = await User.findOne({
                where: {
                    id: user_id,
                },
            });
            if (!userFound) {
                return sendErrorResponse(res, "user not found", 404)
            }
            const raffleFound = await Rafle.findOne({
                where: {
                    id: raffle_id,
                    is_open: true
                },
            });
            console.log(raffleFound)
            if (!raffleFound) {
                return sendErrorResponse(res, "rafle not found", 404)
            }
            // must have to handle the payment and also have to define if a raffle have limited tickets or unlimited
            const newticket = Ticket.build({
                user_id: Number(user_id),
                raffle_id: raffle_id,
                price: price,
                isPaymentDone:true
            })
            const ticketData = await newticket.save()
            sendSuccessResponse(res, "ticket created,", ticketData)
        }
        catch (err) {
            console.log("error", err)
            sendErrorResponse(res, "Internal server error", 500)
        }
    }
}
export default TicketManegar