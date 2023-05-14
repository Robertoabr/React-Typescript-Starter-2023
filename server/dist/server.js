"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
var hapi_1 = __importDefault(require("@hapi/hapi"));
var router_1 = require("./router");
exports.server = hapi_1.default.server({
    port: 8000,
    host: 'localhost'
});
router_1.router.forEach(function (path) { return exports.server.route(path); });
