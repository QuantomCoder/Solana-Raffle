"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnotherRouter = void 0;
const _1 = __importDefault(require("."));
const test_controller_1 = __importDefault(require("../controllers/test.controller"));
class AnotherRouter extends _1.default {
    constructor() {
        super();
        this.testController = new test_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.get("/test", this.testController.test);
    }
}
exports.AnotherRouter = AnotherRouter;
