"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbInstance_1 = __importDefault(require("../config/dbInstance"));
class Winner extends sequelize_1.Model {
}
Winner.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
    user_id: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    ticket_id: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    solana_token_id: { type: sequelize_1.DataTypes.INTEGER, allowNull: false }
}, {
    sequelize: dbInstance_1.default,
    tableName: "Winner"
});
exports.default = Winner;
