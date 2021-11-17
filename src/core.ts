import { decode } from "jsonwebtoken";
import { initProps } from "./types";

import CONSTANTS from "./contants";

declare global {
  interface Window {
    zeroauth: {
      initialized: boolean;
      options: initProps;
    };
  }
}

const URL = "0auth.kr";
const OPTION_DEFAULT = {
  initialized: false,
  options: {
    brand: "",
  },
};
const _initialize = () => {
  window.zeroauth = OPTION_DEFAULT;
};

export const getProfile = () => {
  // Check your login status using the token.
  const token = localStorage.getItem("0auth_token");
  if (token) {
    const jsonToken = JSON.parse(token);
    const result = decode(jsonToken.access, { complete: true });
    return result;
  } else {
    console.error(CONSTANTS.ERROR_LOGIN);
    return null;
  }
};

export const getOptions = () => {
  if (typeof window !== "undefined") {
    if (window.zeroauth) {
      return window.zeroauth.options;
    } else {
      console.error(CONSTANTS.ERROR_INIT);
    }
  } else {
    console.error(CONSTANTS.ERROR_WINDOW);
  }
  return OPTION_DEFAULT.options;
};

export const initialize = (option: initProps) => {
  if (typeof window !== "undefined") {
    if (!window.zeroauth.initialized) {
      _initialize();
      window.zeroauth.initialized = true;
      window.zeroauth.options = {
        brand: option.brand,
      };
    }
    //
    const urlParams = new URLSearchParams(window.location.search);
    const access = urlParams.get("0auth_access");
    const refresh = urlParams.get("0auth_refresh");
    const next = urlParams.get("0auth_next");
    if (access && refresh) {
      localStorage.setItem("0auth_token", JSON.stringify({ access, refresh }));
      window.location.replace(next ? next : "/");
    }
  } else {
    console.error(CONSTANTS.ERROR_WINDOW);
  }
};

export const login = () => {
  const options = getOptions();
  if (options.brand) {
    window.location.href = `//${options.brand}.${URL}/?next=${window.location.href}`;
  } else {
    console.error(CONSTANTS.ERROR_INIT);
  }
};
