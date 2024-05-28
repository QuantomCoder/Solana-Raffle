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
const express_1 = __importDefault(require("express"));
const dbSync_1 = require("./config/dbSync");
const main_routes_1 = __importDefault(require("./routes/main.routes"));
class app {
    constructor() {
        this.App = (0, express_1.default)();
        this.config();
        this.dbConactions();
        this.routesInitializer();
    }
    dbConactions() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, dbSync_1.dbSync)();
            console.log("DataBase syncronised");
            yield (0, dbSync_1.tableSync)();
            console.log("table Syncronized");
        });
    }
    routesInitializer() {
        const allRoutes = new main_routes_1.default();
        this.App.use(allRoutes.router);
    }
    config() {
        this.App.use(express_1.default.json({ limit: "25mb" }));
    }
}
exports.default = new app().App;
