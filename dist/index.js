"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOption = exports.login = exports.initialize = void 0;
var Defaults = require("./core");
exports.initialize = Defaults.initialize;
exports.login = Defaults.login;
exports.getOption = Defaults.getOption;
exports.default = __assign({}, Defaults);
