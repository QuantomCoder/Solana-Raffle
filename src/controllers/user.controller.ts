import { Response, Request } from "express";
import User from "../models/user.model";
import { sendErrorResponse, sendSuccessResponse } from "../utils/responses";
export class UserManeger {
    constructor() {

    }
    public async createUser(req: Request, res: Response) {
        try {
            console.log("request bOdy",req.body)
            const { user_account } = req.body;
            const existingUser = await User.findOne({
                where: {
                    user_account: user_account,
                },
            });
            if (existingUser) {
                return sendErrorResponse(res, "User already exit", 409)
            }
            let newUser = User.build({
                user_account: user_account,
                is_admin: false,
                blockchain_coin: 0
            })
            await newUser.save();
            console.log(newUser),
             sendSuccessResponse(res,"User Added succesfully",newUser)
        }
        catch (err) {
            console.log("error",err)
            sendErrorResponse(res,"Internal server error",500)
        }

    }
    public async readUser(req: Request, res: Response) {
        try {
            console.log("request bOdy",req.params)
            const { user_account } = req.body;
            if (!user_account) {
                return sendErrorResponse(res, "User account not found", 400)
            }
            const userFound = await User.findOne({
                where: {
                    user_account: user_account,
                },
            });
            if (!userFound){
                return sendErrorResponse(res,"user not found",404)
            }
            console.log(userFound),
             sendSuccessResponse(res,"User fetched succesfully",userFound)
        }
        catch (err) {
            console.log("error",err)
            sendErrorResponse(res,"Internal server error",500)
        }

    }
    public async updateUser(req: Request, res: Response) {
        try {
            console.log("request bOdy",req.body)
            const { user_id } = req.params;
            const existingUser = await User.findOne({
                where: {
                    id: user_id,
                },
            });
            if (!existingUser) {
                return sendErrorResponse(res, "User not found", 401)
            }
            let updatedUser = existingUser.set({
                
               ...req.body
            })
            await updatedUser.save();
            console.log(updatedUser),
             sendSuccessResponse(res,"User updated succesfully",updatedUser)
        }
        catch (err) {
            console.log("error",err)
            sendErrorResponse(res,"Internal server error",500)
        }

    }
    public async deleteUser(req: Request, res: Response) {
        try {
            console.log("request bOdy",req.body)
            const { user_id } = req.params;
            const existingUser = await User.findOne({
                where: {
                    id: user_id,
                },
            });
            if (!existingUser) {
                return sendErrorResponse(res, "User not found", 404)
            }
            
            const result=await existingUser.destroy();
            console.log(result),
             sendSuccessResponse(res,"User deleted succesfully",result)
        }
        catch (err) {
            console.log("error",err)
            sendErrorResponse(res,"Internal server error",500)
        }

    }
    public async addfile(req:Request,res:Response) {
        try{
            sendSuccessResponse(res,"image work completed",req.file)
        }
        catch(err){
            console.log(err)
        }
    }
}