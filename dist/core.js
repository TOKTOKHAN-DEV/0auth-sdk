"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.initialize = exports.getOptions = exports.getProfile = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var contants_1 = require("./contants");
var URL = "0auth.kr";
var OPTION_DEFAULT = {
    initialized: false,
    options: {
        brand: "",
    },
};
var _initialize = function () {
    window.zeroauth = OPTION_DEFAULT;
};
var getProfile = function () {
    // Check your login status using the token.
    var token = localStorage.getItem("0auth_token");
    if (token) {
        var jsonToken = JSON.parse(token);
        var result = (0, jsonwebtoken_1.decode)(jsonToken.access, { complete: true });
        return result;
    }
    else {
        console.error(contants_1.default.ERROR_LOGIN);
        return null;
    }
};
exports.getProfile = getProfile;
var getOptions = function () {
    if (typeof window !== "undefined") {
        if (window.zeroauth) {
            return window.zeroauth.options;
        }
        else {
            console.error(contants_1.default.ERROR_INIT);
        }
    }
    else {
        console.error(contants_1.default.ERROR_WINDOW);
    }
    return OPTION_DEFAULT.options;
};
exports.getOptions = getOptions;
var initialize = function (option) {
    if (typeof window !== "undefined") {
        if (!window.zeroauth.initialized) {
            _initialize();
            window.zeroauth.initialized = true;
            window.zeroauth.options = {
                brand: option.brand,
            };
        }
        //
        var urlParams = new URLSearchParams(window.location.search);
        var access = urlParams.get("0auth_access");
        var refresh = urlParams.get("0auth_refresh");
        var next = urlParams.get("0auth_next");
        if (access && refresh) {
            localStorage.setItem("0auth_token", JSON.stringify({ access: access, refresh: refresh }));
            window.location.replace(next ? next : "/");
        }
    }
    else {
        console.error(contants_1.default.ERROR_WINDOW);
    }
};
exports.initialize = initialize;
var login = function () {
    var options = (0, exports.getOptions)();
    if (options.brand) {
        window.location.href = "//" + options.brand + "." + URL + "/?next=" + window.location.href;
    }
    else {
        console.error(contants_1.default.ERROR_INIT);
    }
};
exports.login = login;
