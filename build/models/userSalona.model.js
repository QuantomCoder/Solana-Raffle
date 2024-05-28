"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbInstance_1 = __importDefault(require("../config/dbInstance"));
class Salona extends sequelize_1.Model {
}
Salona.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    issuer: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    is_used: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    solana_token_id: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: 0 }
}, {
    sequelize: dbInstance_1.default,
    tableName: 'userSalona',
});
exports.default = Salona;
