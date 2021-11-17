"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.initialize = exports.getOption = void 0;
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
var getOption = function () {
    if (typeof window !== "undefined") {
        return window.zeroauth.options
            ? window.zeroauth.options
            : OPTION_DEFAULT.options;
    }
    return OPTION_DEFAULT.options;
};
exports.getOption = getOption;
var initialize = function (option) {
    if (typeof window !== "undefined") {
        _initialize();
        if (!window.zeroauth.initialized) {
            window.zeroauth.initialized = true;
            window.zeroauth.options = {
                brand: option.brand,
            };
            console.log("window.zeroauth : ", window.zeroauth);
        }
        var urlParams = new URLSearchParams(window.location.search);
        var access = urlParams.get("0auth_access");
        var refresh = urlParams.get("0auth_refresh");
        var next = urlParams.get("0auth_next");
        if (access && refresh) {
            localStorage.setItem("0auth_token", JSON.stringify({ access: access, refresh: refresh }));
            window.location.replace(next ? next : "/");
        }
    }
};
exports.initialize = initialize;
var login = function () {
    var options = (0, exports.getOption)();
    if (options.brand) {
        window.location.replace("//" + options.brand + "." + URL + "/?next=" + window.location.href);
    }
    else {
        console.error("[Error] initialize app");
    }
};
exports.login = login;
