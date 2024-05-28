"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TestController {
    test(req, res) {
        res.send("Server is running like a tiger");
    }
    test2(req, res) {
        res.send("Server is running like a Lion");
    }
}
exports.default = TestController;
