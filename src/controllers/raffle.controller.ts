import Rafle from "../models/rafle.model";
import Ticket from "../models/ticket.model";
import User from "../models/user.model";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responses";
import { Request, Response } from "express";
import sequelize from "../config/dbInstance";
import Winner from "../models/winner.model";
import Notifications from "../models/notification.model";
class RafleManegar {
    // this function will be entrily changed when blockchain part will integrated. Testing purpose of Ticket
    public async createARaffle(req: Request, res: Response) {
        try {

            const { solana_token_id, is_open, user_id } = req.body
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

            const rafle = Rafle.build({
                creator_id: Number(user_id),
                solana_token_id: solana_token_id,
                is_open: is_open
            })
            const rafleData = await rafle.save()
            sendSuccessResponse(res, "rafle created,", rafleData)
        }
        catch (err) {
            console.log("error", err)
            sendErrorResponse(res, "Internal server error", 500)
        }
    }
    public async raffleWinner(req: Request, res: Response) {
        try {
            // here the user_id is that user whon created the raffle 
            const { raffle_id, user_id } = req.body
            if (!user_id) {
                return sendErrorResponse(res, "User id not found", 400)
            }
            if (!raffle_id) {
                return sendErrorResponse(res, "raffle id not found", 400)
            }
            const raffle = await Rafle.findOne({
                where: {
                    id: raffle_id,
                    creator_id: user_id,
                    is_open: true
                }
            })
            if (!raffle) {
                return sendErrorResponse(res, "raffle not found", 400)
            }
            const winner = await Ticket.findOne({
                where: {
                    raffle_id: raffle_id,
                    isPaymentDone: true
                },
                order: sequelize.literal('random()') // PostgreSQL-specific function to get a random row
            });
            if (!winner) {
                return sendErrorResponse(res, "error in announcing the winner", 400)
            }
            raffle.is_open = false;
            await raffle.save();
            const winnerdata = Winner.build({
                user_id: winner.user_id,
                ticket_id: winner.id,
                solana_token_id: raffle.solana_token_id
            })
            const winnerDataSaved = await winnerdata.save();
            const newNotification = Notifications.build({
                user_id: winnerDataSaved.user_id,
                raffle_id:raffle_id,
                winner_table_id:winnerDataSaved.id,
                is_red:false
            })
            newNotification.save().then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})
            // Solana transfer is missing and will be done by block chain devolper
            sendSuccessResponse(res, "Congragulations! you are the winner", winnerDataSaved)
        }
        catch (err) {
            console.log("error", err)
            return sendErrorResponse(res, "internal server error", 500)
        }
    }
}
export default RafleManegar