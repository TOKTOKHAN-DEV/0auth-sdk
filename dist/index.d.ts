export declare const initialize: (option: import("./types").initProps) => void;
export declare const login: () => void;
export declare const getOptions: () => import("./types").initProps;
export declare const getProfile: () => import("jsonwebtoken").Jwt | null;
declare const _default: {
    getProfile: () => import("jsonwebtoken").Jwt | null;
    getOptions: () => import("./types").initProps;
    initialize: (option: import("./types").initProps) => void;
    login: () => void;
};
export default _default;
