"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbInstance_1 = __importDefault(require("../config/dbInstance"));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_account: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    is_admin: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    blockchain_coin: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: 0 }
}, {
    sequelize: dbInstance_1.default,
    tableName: 'users',
});
exports.default = User;
