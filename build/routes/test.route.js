"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const test_controller_1 = __importDefault(require("../controllers/test.controller"));
class TestRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.testController = new test_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.get("/", this.testController.test);
    }
}
exports.default = TestRouter;
