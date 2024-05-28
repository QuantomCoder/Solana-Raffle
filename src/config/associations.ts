import User from "../models/user.model"
import Salona from "../models/userSalona.model"
import Winner from "../models/winner.model"
import Rafle from "../models/rafle.model"
import Ticket from "../models/ticket.model"
import Notifications from "../models/notification.model"

const associations=async ()=>{
    User.hasMany(Ticket,{foreignKey:"user_id",as:"user"})
    Rafle.hasMany(Ticket,{foreignKey:"raffle_id",as:"raffle"})
    User.hasMany(Rafle,{foreignKey:"creator_id",as:"raffle"})
    // Ticket.belongsTo(Rafle)
    // Ticket.belongsTo(User)
    // Rafle.belongsTo(User)
    User.hasMany(Notifications,{foreignKey:"user_id",as:"notifications"})
    Ticket.hasOne(Winner,{foreignKey:"ticket_id",as:"ticket"})

}
export default associations
