"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const route2_1 = require("./route2");
const user_Route_1 = require("./user.Route");
class MainRouter extends _1.default {
    constructor() {
        super();
        // Routes
        this.anotherROuter2 = new route2_1.AnotherRouter2();
        this.intializeRoutes();
    }
    // public getRouter() {
    //     return this.router;
    // }
    intializeRoutes() {
        this.router.use("/user", new user_Route_1.UserRoutes().router);
        this.router.use("/v2", this.anotherROuter2.router);
    }
}
exports.default = MainRouter;
