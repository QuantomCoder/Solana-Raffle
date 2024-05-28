import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import User from '../models/user.model';
import { sendErrorResponse } from '../utils/responses';
import { where } from 'sequelize';
const secKey = process.env.SEC_KEY || "secKey"
interface Ipayload {
    user_account: { type: string },
    id: { type: number },
    iat: { type: number }
}
class auth {
    constructor() {

    }
    public async genrateToken(req: Request, res: Response, next: NextFunction) {
        const user = await User.findOne({
            where: {
                user_account: req.body.user_account
            }
        })
        if (!user) {
            return sendErrorResponse(res, "User not found", 404)
        }
        const token = jwt.sign({ user_account: user.user_account, id: user.id }, secKey)
        console.log(token)
        res.setHeader('Authorization', `Bearer ${token}`);
        next()
    }
    public async auth(req: Request, res: Response, next: NextFunction) {
        try {
            const token: any = req.headers.authorization;
            console.log("token----------", token)
            const decoded = jwt.verify(token, secKey);
            console.log(decoded)
            if (decoded && typeof decoded !== 'string') {
                const findUser = await User.findOne({ where: { user_account: decoded.user_account, id: decoded.id } })
                console.log(findUser)
                if (findUser) {
                    req.body.user_account=findUser.user_account
                    req.body.user_id=findUser.id
                    next()
                }
                sendErrorResponse(res, "User not found in our recod to authenticate",404)
            }



        }
        catch (err) {
            sendErrorResponse(res, "unexpected error while working with token",500)
        }
    }
}
export default auth