"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const _1 = __importDefault(require("."));
const user_controller_1 = require("../controllers/user.controller");
class UserRoutes extends _1.default {
    constructor() {
        super();
        this.intializeRoute();
    }
    intializeRoute() {
        const userController = new user_controller_1.UserManeger();
        this.router.post("/", userController.createUser);
        this.router.get("/:user_id", userController.readUser);
        this.router.put("/:user_id", userController.updateUser);
        this.router.delete("/:user_id", userController.deleteUser);
    }
}
exports.UserRoutes = UserRoutes;
