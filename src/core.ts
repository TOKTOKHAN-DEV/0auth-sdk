import { initProps } from "./types";

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

export const getOption = () => {
  if (typeof window !== "undefined") {
    if (window.zeroauth) {
      return window.zeroauth.options;
    } else {
      console.error("[Error] initialized app");
    }
  }
  return OPTION_DEFAULT.options;
};

export const initialize = (option: initProps) => {
  if (typeof window !== "undefined") {
    _initialize();
    if (!window.zeroauth.initialized) {
      window.zeroauth.initialized = true;
      window.zeroauth.options = {
        brand: option.brand,
      };
    }

    const urlParams = new URLSearchParams(window.location.search);
    const access = urlParams.get("0auth_access");
    const refresh = urlParams.get("0auth_refresh");
    const next = urlParams.get("0auth_next");
    if (access && refresh) {
      localStorage.setItem("0auth_token", JSON.stringify({ access, refresh }));
      window.location.replace(next ? next : "/");
    }
  }
};

export const login = () => {
  const options = getOption();
  if (options.brand) {
    window.location.replace(
      `//${options.brand}.${URL}/?next=${window.location.href}`
    );
  } else {
    console.error("[Error] initialized app");
  }
};
