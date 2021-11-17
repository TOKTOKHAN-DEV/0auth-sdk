import { initProps } from "./types";

const _url = "0auth.kr";

let _init = false;
const _option: initProps = {
  brand: "",
};

export const getOption = () => {
  return _option;
};

export const initialize = (option: initProps) => {
  if (!_init) {
    _option.brand = option.brand;
    _init = true;
  }
  if (typeof window !== "undefined") {
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
  if (_option.brand) {
    window.location.replace(
      `//${_option.brand}.${_url}/?next=${window.location.href}`
    );
  } else {
    console.error("[Error] initialize app");
  }
};
