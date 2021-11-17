import { initProps } from "./types";
declare global {
    interface Window {
        zeroauth: {
            initialized: boolean;
            options: initProps;
        };
    }
}
export declare const getOptions: () => initProps;
export declare const initialize: (option: initProps) => void;
export declare const login: () => void;
