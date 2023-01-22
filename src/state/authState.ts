import {atom} from "recoil";

export const accessTokenState = atom<string>({
    key: "access-token-state",
    default: undefined
});

export const refreshTokenState = atom<string>({
    key: "refresh-token-state",
    default: undefined
});
