"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
exports.userRoutes = [
    {
        method: 'GET',
        path: '/api/user',
        handler: function () {
            console.log('server handler for users hit');
            return 'Joe Test';
        }
    }
];
