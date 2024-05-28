import Winner from "../models/winner.model";
import Ticket from "../models/ticket.model";
import Rafle from "../models/rafle.model";
import User from "../models/user.model";
import Salona from "../models/userSalona.model";
import sequelize from "./dbInstance";
import associations from "./associations";
import Notifications from "../models/notification.model";
 export const tableSync=async()=>{
    await Winner.sync();
    await Ticket.sync();
    await Rafle.sync();
    await User.sync();
    await Salona.sync();
    await Notifications.sync() 
    await associations()
    
}

export const dbSync= async()=>{
    await sequelize.authenticate()
}