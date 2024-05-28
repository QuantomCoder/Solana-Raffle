import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from "../config/dbInstance";
import { UserAttributes, UserCreationAttributes } from '../interfaces/interfaces';
class User extends Model<UserAttributes,UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public user_account!: string;
  public blockchain_coin!:number;
  public is_admin!: boolean;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_account: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    blockchain_coin:{type:DataTypes.INTEGER,allowNull:false,defaultValue:0}
  },
  {
    sequelize,
    tableName: 'users',
  }
);

export default User;
