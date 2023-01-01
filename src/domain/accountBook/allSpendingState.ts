import {atom} from "recoil";
import {Spending} from "./spending";

export const allSpendingState = atom<Spending[]>({
    key: "all-spending",
    default: []
})

export const daySpendingState = atom<Spending[]>({
    key: "day-spending",
    default: []
})

