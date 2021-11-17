"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.initialize = exports.getOption = void 0;
var _url = "0auth.kr";
var _init = false;
var _option = {
    brand: "",
};
var getOption = function () {
    return _option;
};
exports.getOption = getOption;
var initialize = function (option) {
    if (!_init) {
        _option.brand = option.brand;
        _init = true;
    }
    if (typeof window !== "undefined") {
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
    var option = (0, exports.getOption)();
    console.log("option : ", option);
    if (option.brand) {
        window.location.replace("//" + option.brand + "." + _url + "/?next=" + window.location.href);
    }
    else {
        console.error("[Error] initialize app");
    }
};
exports.login = login;
