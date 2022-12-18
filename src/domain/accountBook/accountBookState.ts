import {atom} from "recoil";
import {AccountBook} from "./accountBook";

export const accountBooksState = atom<AccountBook[]>({
    key: "account-books",
    default: []
})

export const selectedAccountBookState = atom<AccountBook | null>({
    key: "selected-account-book",
    default: null
})