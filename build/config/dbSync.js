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
exports.dbSync = exports.tableSync = void 0;
const winner_model_1 = __importDefault(require("../models/winner.model"));
const ticket_model_1 = __importDefault(require("../models/ticket.model"));
const rafle_model_1 = __importDefault(require("../models/rafle.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const userSalona_model_1 = __importDefault(require("../models/userSalona.model"));
const dbInstance_1 = __importDefault(require("./dbInstance"));
const tableSync = () => __awaiter(void 0, void 0, void 0, function* () {
    yield winner_model_1.default.sync();
    yield ticket_model_1.default.sync();
    yield rafle_model_1.default.sync();
    yield user_model_1.default.sync();
    yield userSalona_model_1.default.sync();
});
exports.tableSync = tableSync;
const dbSync = () => __awaiter(void 0, void 0, void 0, function* () {
    yield dbInstance_1.default.authenticate();
});
exports.dbSync = dbSync;
