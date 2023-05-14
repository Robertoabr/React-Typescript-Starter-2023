"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var user_1 = require("./routes/user/user");
exports.router = __spreadArray(__spreadArray([], user_1.userRoutes, true), [
    {
        method: 'GET',
        path: '/api',
        handler: function () {
            return 'Server base route!!';
        }
    }
], false);
