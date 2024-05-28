import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from "../config/dbInstance";
import { NotificationsCreationAttributes, NotificationsAttributes } from '../interfaces/interfaces';
class Notifications extends Model<NotificationsAttributes, NotificationsCreationAttributes> implements NotificationsAttributes {
public id!:number;
public user_id!: number;
public winner_table_id!: number;
public raffle_id!: number;
public is_red!:boolean;
}
Notifications.init({
    id:{type:DataTypes.INTEGER,autoIncrement: true,
        primaryKey: true},
    user_id:{type:DataTypes.INTEGER},
    raffle_id:{
        type:DataTypes.INTEGER
    },
    is_red:{type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    },
    winner_table_id:{
        type:DataTypes.INTEGER
    }


},{sequelize,tableName:"Notifications"})
export default Notifications