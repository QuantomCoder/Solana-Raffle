"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendErrorResponse = exports.sendSuccessResponse = void 0;
const sendSuccessResponse = (res, message, data, total_records) => {
    const response = {
        status: true,
        message,
        data,
        total_records,
    };
    res.status(200).json(response);
};
exports.sendSuccessResponse = sendSuccessResponse;
const sendErrorResponse = (res, message, status = 500, data, error) => {
    const response = Object.assign(Object.assign({ status: false, message }, data), { error });
    res.status(status).json(response);
};
exports.sendErrorResponse = sendErrorResponse;
