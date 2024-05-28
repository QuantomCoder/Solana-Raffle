"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbInstance_1 = __importDefault(require("../config/dbInstance"));
class Rafle extends sequelize_1.Model {
}
Rafle.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    creator_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    is_open: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    solana_token_id: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: 0 }
}, {
    sequelize: dbInstance_1.default,
    tableName: 'rafles',
});
exports.default = Rafle;
