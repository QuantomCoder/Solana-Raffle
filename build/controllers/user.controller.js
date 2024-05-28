"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManeger = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const responses_1 = require("../utils/responses");
class UserManeger {
    constructor() {
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("request bOdy", req.body);
                const { user_account } = req.body;
                const existingUser = yield user_model_1.default.findOne({
                    where: {
                        user_account: user_account,
                    },
                });
                if (existingUser) {
                    return (0, responses_1.sendErrorResponse)(res, "User already exit", 409);
                }
                let newUser = user_model_1.default.build({
                    user_account: user_account,
                    is_admin: false,
                    blockchain_coin: 0
                });
                yield newUser.save();
                console.log(newUser),
                    (0, responses_1.sendSuccessResponse)(res, "User Added succesfully", newUser);
            }
            catch (err) {
                console.log("error", err);
                (0, responses_1.sendErrorResponse)(res, "Internal server error", 500);
            }
        });
    }
    readUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("request bOdy", req.params);
                const { user_id } = req.params;
                if (!user_id) {
                    return (0, responses_1.sendErrorResponse)(res, "User id not found", 400);
                }
                const userFound = yield user_model_1.default.findOne({
                    where: {
                        id: user_id,
                    },
                });
                if (!userFound) {
                    return (0, responses_1.sendErrorResponse)(res, "user not found", 404);
                }
                console.log(userFound),
                    (0, responses_1.sendSuccessResponse)(res, "User fetched succesfully", userFound);
            }
            catch (err) {
                console.log("error", err);
                (0, responses_1.sendErrorResponse)(res, "Internal server error", 500);
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("request bOdy", req.body);
                const { user_id } = req.params;
                const existingUser = yield user_model_1.default.findOne({
                    where: {
                        id: user_id,
                    },
                });
                if (!existingUser) {
                    return (0, responses_1.sendErrorResponse)(res, "User not found", 401);
                }
                let updatedUser = existingUser.set(Object.assign({}, req.body));
                yield updatedUser.save();
                console.log(updatedUser),
                    (0, responses_1.sendSuccessResponse)(res, "User updated succesfully", updatedUser);
            }
            catch (err) {
                console.log("error", err);
                (0, responses_1.sendErrorResponse)(res, "Internal server error", 500);
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("request bOdy", req.body);
                const { user_id } = req.params;
                const existingUser = yield user_model_1.default.findOne({
                    where: {
                        id: user_id,
                    },
                });
                if (!existingUser) {
                    return (0, responses_1.sendErrorResponse)(res, "User not found", 404);
                }
                const result = yield existingUser.destroy();
                console.log(result),
                    (0, responses_1.sendSuccessResponse)(res, "User deleted succesfully", result);
            }
            catch (err) {
                console.log("error", err);
                (0, responses_1.sendErrorResponse)(res, "Internal server error", 500);
            }
        });
    }
}
exports.UserManeger = UserManeger;
