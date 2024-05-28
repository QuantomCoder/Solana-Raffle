import { Model,DataTypes } from "sequelize";
import { TicketAttributes, TicketCreationAttributes } from "../interfaces/interfaces";
import sequelize from "../config/dbInstance";
class Ticket extends Model<TicketAttributes,TicketCreationAttributes> implements TicketAttributes{
    public id!: number;
    public user_id!: number;
    public raffle_id!: number;
    public price!: number;
    public isPaymentDone!: boolean;
}
Ticket.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id:{
        type:DataTypes.INTEGER
      },
      raffle_id:{
        type:DataTypes.INTEGER
      },
      price:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      isPaymentDone:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
      }
},{
    sequelize,
    tableName:"Tickets"
})
export default Ticket