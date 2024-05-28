import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from "../config/dbInstance";
import { RafleAttributes, RafleCreationAttributes } from '../interfaces/interfaces';

class Rafle extends Model<RafleAttributes,RafleCreationAttributes> implements RafleAttributes {
  public id!: number;
  public creator_id!: number;
  public solana_token_id!:number;
  public is_open!: boolean;
}

Rafle.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_open: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    solana_token_id:{type:DataTypes.INTEGER,allowNull:false,defaultValue:0}
  },
  {
    sequelize,
    tableName: 'rafles',
  }
);

export default Rafle;
