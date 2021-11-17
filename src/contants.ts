import { constantsProps } from "./types";

const ERROR_INIT = "[ERROR] initialized app first";
const ERROR_LOGIN = "[ERROR] check your login status";
const ERROR_WINDOW = "[ERROR] window is not defined";

const CONSTANTS: constantsProps = Object.freeze({
  ERROR_INIT,
  ERROR_LOGIN,
  ERROR_WINDOW,
});

export default CONSTANTS;
