import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from "../config/dbInstance";
import { UserSalonaAttributes } from '../interfaces/interfaces';
class Salona extends Model<UserSalonaAttributes> implements UserSalonaAttributes {
  public id!: number;
  public issuer!: string;
  public solana_token_id!:number;
  public is_used!: boolean;
}

Salona.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    issuer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_used: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    solana_token_id:{type:DataTypes.INTEGER,allowNull:false,defaultValue:0}
  },
  {
    sequelize,
    tableName: 'userSalona',
  }
);

export default Salona;
