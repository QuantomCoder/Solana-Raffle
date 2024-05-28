import { DataTypes, Model } from "sequelize";
import { WinnerAttributes, WinnerCreationAttributes } from "../interfaces/interfaces";
import sequelize from "../config/dbInstance";
class Winner extends Model<WinnerAttributes,WinnerCreationAttributes> implements WinnerAttributes{
    public id!:number;
    public user_id!: number;
    public ticket_id!: number;
    public solana_token_id!: number;
}
Winner.init({
id:{type:DataTypes.INTEGER,autoIncrement:true, primaryKey:true,allowNull:false},
user_id:{type:DataTypes.INTEGER,allowNull:false},
ticket_id:{type:DataTypes.INTEGER,allowNull:false},
solana_token_id:{type:DataTypes.INTEGER,allowNull:false}
},{
    sequelize,
    tableName:"Winner"
})
export default Winner